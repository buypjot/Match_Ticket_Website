import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { getMediaUrl } from '../utils/media';
import BookingCalendar from '../components/BookingCalendar';

function fmtH(h) {
  const hourVal = Number(h);
  if (isNaN(hourVal)) return String(h);
  const hInt = Math.floor(hourVal);
  const mins = Math.round((hourVal - hInt) * 60);
  const hr = hInt % 24;
  const minsStr = mins.toString().padStart(2, '0');
  if (hr === 0) return `12:${minsStr} AM`;
  if (hr < 12) return `${hr}:${minsStr} AM`;
  if (hr === 12) return `12:${minsStr} PM`;
  return `${hr - 12}:${minsStr} PM`;
}

function PublicCountdown({ expiresAtIso, onExpire }) {
  const [secondsLeft, setSecondsLeft] = useState(600);

  useEffect(() => {
    if (!expiresAtIso) return;
    const calc = () => {
      const diff = new Date(expiresAtIso) - new Date();
      return Math.max(0, Math.floor(diff / 1000));
    };
    setSecondsLeft(calc());

    const interval = setInterval(() => {
      const sec = calc();
      setSecondsLeft(sec);
      if (sec <= 0) {
        clearInterval(interval);
        if (onExpire) onExpire();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAtIso, onExpire]);

  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  return <span>{m.toString().padStart(2, '0')}:{s.toString().padStart(2, '0')}</span>;
}

const loadRazorpay = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const isPastSlot = (slotHour, selectedDate) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  if (selectedDate < todayStr) return true;
  if (selectedDate === todayStr) {
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const slotMins = Number(slotHour) * 60;
    const nowMins = currentHour * 60 + currentMinutes;
    if (slotMins <= nowMins) return true;
  }
  return false;
};

export default function PublicBooking({ slug, navTo }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1); // 1: Ground, 2: Date, 3: Time, 4: Review, 5: Payment
  const [groundId, setGroundId] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [selectedHours, setSelectedHours] = useState([]);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [bookedHours, setBookedHours] = useState([]);
  const [reservedHours, setReservedHours] = useState([]);

  const [form, setForm] = useState({ customer_name: '', customer_phone: '', customer_email: '' });
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!slug) return;
    client.get(`/public/${slug}/booking-data`)
      .then(r => {
        setData(r.data);
        setLoading(false);
        if (r.data?.grounds?.length > 0 && !groundId) {
          setGroundId(r.data.grounds[0].id.toString());
        }
      })
      .catch(() => setLoading(false));
  }, [slug]);

  useEffect(() => {
    let timer;
    if (groundId && date) {
      const fetchAvailability = () => {
        client.get(`/bookings/slot-availability?ground_id=${groundId}&date=${date}`)
          .then(r => {
            setBookedHours(r.data.booked_hours || []);
            setReservedHours(r.data.reserved_hours || []);
          })
          .catch(e => console.error("Error availability:", e));
      };
      fetchAvailability();
      timer = setInterval(fetchAvailability, 5000);
    }
    return () => { if (timer) clearInterval(timer); };
  }, [groundId, date]);

  const toggleHour = (h) => {
    setSelectedHours(prev => {
      if (prev.includes(h)) return prev.filter(x => x !== h);
      return [...prev, h].sort((a, b) => a - b);
    });
  };

  const handleDetailsSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!form.customer_phone || form.customer_phone.replace(/\D/g, '').length !== 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!form.customer_name) {
      alert('Please enter your full name.');
      return;
    }

    setProcessing(true);
    try {
      const res = await client.post('/bookings/book-slots', {
        ground_id: Number(groundId),
        customer_name: form.customer_name,
        customer_phone: form.customer_phone,
        customer_email: form.customer_email,
        booking_date: date,
        selected_hours: selectedHours,
      });
      setPaymentInfo(res.data);
      setStep(5);
    } catch (err) {
      const errMsg = err.response?.data?.detail || 'Booking order creation failed.';
      alert(errMsg);
    } finally {
      setProcessing(false);
    }
  };

  const openRazorpay = async (info) => {
    const ok = await loadRazorpay();
    if (!ok) {
      alert('Razorpay SDK failed to load. Check your internet connection.');
      setProcessing(false);
      return;
    }

    const options = {
      key: info.razorpay_key_id,
      amount: info.amount_paise,
      currency: 'INR',
      name: 'Match-Ticket',
      description: `Booking - ${info.ground_name}`,
      order_id: info.razorpay_order_id,
      handler: async (response) => {
        confirmBooking(info.booking_details, info.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
      },
      prefill: { name: form.customer_name, contact: form.customer_phone, email: form.customer_email },
      theme: { color: customer?.theme_color || '#ff007f' },
      modal: {
        ondismiss: () => {
          setProcessing(false);
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const confirmBooking = async (bookingDetails, orderId, paymentId, signature) => {
    setProcessing(true);
    try {
      const res = await client.post('/bookings/verify-payment', {
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature,
        booking_details: bookingDetails,
      });
      if (res.data.success) {
        navTo(`booking/success?ref=${res.data.booking_reference}`);
      }
    } catch (err) {
      alert(err.response?.data?.detail || 'Payment confirmation failed.');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '60px' }}>Loading booking wizard...</div>;
  if (!data) return <div style={{ color: '#fff', textAlign: 'center', padding: '60px' }}>Venue not found.</div>;

  const { customer, grounds } = data;
  const siteName = customer?.brand_name || customer?.organization_name || customer?.site_name || customer?.company_name || customer?.full_name || 'Arena';
  const ground = grounds?.find(g => g.id.toString() === groundId.toString()) || grounds[0];
  const theme = customer?.theme_color || '#ff007f';

  const rate = ground ? Number(ground.rate_per_hour || 0) : 0;
  const groundTotal = rate * selectedHours.length;
  const razorpayFee = groundTotal > 0 ? 2.60 : 0;
  const platformFee = groundTotal > 0 ? 10.00 : 0;
  const totalCost = groundTotal + razorpayFee + platformFee;
  const advancePaymentPct = customer?.advance_payment_percentage ? Number(customer.advance_payment_percentage) : 50;
  const advanceAmount = groundTotal > 0 ? (groundTotal * (advancePaymentPct / 100)) + razorpayFee + platformFee : 0;
  const remainingAmount = Math.max(0, totalCost - advanceAmount);

  return (
    <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '40px 5%', color: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{
          padding: '4px 14px', background: `${theme}20`, color: theme,
          borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px'
        }}>
          BOOKING WIZARD
        </span>
        <h1 style={{ fontSize: '2.6rem', fontWeight: 900, marginTop: '8px', marginBottom: '4px' }}>
          Secure Your <span style={{ color: theme }}>Slot</span>
        </h1>
      </div>

      {/* 5-Step Stepper */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px',
        maxWidth: '550px', margin: '0 auto 40px', position: 'relative'
      }}>
        {[
          { step: 1, label: 'GROUND' },
          { step: 2, label: 'DATE' },
          { step: 3, label: 'TIME' },
          { step: 4, label: 'REVIEW' },
          { step: 5, label: 'PAYMENT' }
        ].map(s => (
          <div
            key={s.step}
            onClick={() => {
              if (s.step < step || (s.step === 2 && groundId) || (s.step === 3 && date) || (s.step === 4 && selectedHours.length > 0)) {
                setStep(s.step);
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', zIndex: 2 }}
          >
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: step >= s.step ? theme : '#1f2937',
              color: step >= s.step ? '#fff' : '#64748b',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: '0.85rem', transition: 'all 0.3s ease'
            }}>
              {step > s.step ? '✓' : s.step}
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, marginTop: '6px', color: step === s.step ? theme : '#64748b' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Grid Container */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px', alignItems: 'start' }}>
        {/* Left Wizard Step Panel */}
        <div style={{ background: '#111827', padding: '30px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
          {/* STEP 1: Select Playing Surface */}
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '18px' }}>
                1. Select Playing Surface
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {grounds.map(g => {
                  const isSel = groundId.toString() === g.id.toString();
                  return (
                    <div
                      key={g.id}
                      onClick={() => setGroundId(g.id.toString())}
                      style={{
                        padding: '16px', borderRadius: '12px', cursor: 'pointer',
                        border: isSel ? `2px solid ${theme}` : '1px solid rgba(255,255,255,0.1)',
                        background: isSel ? `${theme}15` : '#1f2937',
                        display: 'flex', gap: '16px', alignItems: 'center'
                      }}
                    >
                      {g.playground_image_url && (
                        <img src={getMediaUrl(g.playground_image_url)} alt={g.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                      )}
                      <div>
                        <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 4px 0' }}>{g.name}</h4>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: theme }}>₹{g.rate_per_hour}/hr</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
                          Weekday Morning: ₹{g.weekday_morning_rate || g.rate_per_hour}/hr<br />
                          Weekday Evening: ₹{g.weekday_evening_rate || g.rate_per_hour}/hr
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => setStep(2)}
                style={{
                  width: '100%', marginTop: '24px', background: theme, color: '#fff',
                  border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer'
                }}
              >
                Continue to Date →
              </button>
            </div>
          )}

          {/* STEP 2: Choose Date */}
          {step === 2 && (
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '18px' }}>
                2. Choose Date
              </h3>
              <BookingCalendar
                availableDates={ground?.available_dates}
                closedDates={ground?.closed_dates}
                selectedDate={date}
                onSelect={(d) => setDate(d)}
                theme={theme}
              />
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>Back</button>
                <button onClick={() => setStep(3)} style={{ flex: 2, background: theme, color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 800, cursor: 'pointer' }}>Continue to Slots →</button>
              </div>
            </div>
          )}

          {/* STEP 3: Select Time Slots */}
          {step === 3 && (
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '4px' }}>
                3. Select Time Slots
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', marginBottom: '18px' }}>
                Click on one or more available time slots to select your booking.
              </p>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(130px, 1fr) )', gap: '10px',
                maxHeight: '320px', overflowY: 'auto', paddingRight: '4px'
              }}>
                {Array.from({ length: 24 }).map((_, hour) => {
                  const isBooked = bookedHours.includes(hour) || reservedHours.includes(hour);
                  const isPast = isPastSlot(hour, date);
                  const isUnavailable = isBooked || isPast;
                  const isSel = selectedHours.includes(hour);

                  return (
                    <div
                      key={hour}
                      onClick={() => !isUnavailable && toggleHour(hour)}
                      style={{
                        padding: '12px 10px', borderRadius: '10px', textAlign: 'center',
                        border: isSel ? `2px solid ${theme}` : '1px solid rgba(255,255,255,0.1)',
                        background: isSel ? `${theme}30` : (isUnavailable ? '#161e2e' : '#1f2937'),
                        color: isSel ? theme : (isUnavailable ? '#475569' : '#fff'),
                        cursor: isUnavailable ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>
                        {fmtH(hour)} - {fmtH(hour + 1)}
                      </div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, marginTop: '4px', textTransform: 'uppercase' }}>
                        {isBooked ? 'BOOKED' : (isPast ? 'PAST' : (isSel ? 'SELECTED' : 'AVAILABLE'))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button onClick={() => setStep(2)} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>Back</button>
                <button disabled={selectedHours.length === 0} onClick={() => setStep(4)} style={{ flex: 2, background: selectedHours.length > 0 ? theme : '#374151', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 800, cursor: selectedHours.length > 0 ? 'pointer' : 'not-allowed' }}>Continue to Review →</button>
              </div>
            </div>
          )}

          {/* STEP 4: Personal Information & 50% Advance Notice (Matching Image 1 & 2) */}
          {step === 4 && (
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '18px' }}>
                4. Personal Information
              </h3>

              {/* 50% Advance Online Payment Notice Banner */}
              <div style={{
                background: 'rgba(55, 214, 162, 0.08)',
                border: '1px solid rgba(55, 214, 162, 0.25)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '20px'
              }}>
                <div style={{ color: '#37d6a6', fontWeight: 800, fontSize: '0.9rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  ⚡ {advancePaymentPct}% Advance Online Payment Flow
                </div>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: '0 0 6px 0' }}>
                  To confirm your booking, pay a <strong>{advancePaymentPct}% advance online (₹{advanceAmount.toFixed(2)})</strong> now via Razorpay.
                </p>
                <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  The remaining {100 - advancePaymentPct}% (₹{remainingAmount.toFixed(2)}) must be paid offline directly at the ground/location.
                </p>
                <div style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '8px', fontWeight: 700 }}>
                  ⚠️ Note: The advance payment is strictly non-refundable.
                </div>
              </div>

              <form onSubmit={handleDetailsSubmit}>
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Full Name *</label>
                  <input
                    type="text" placeholder="Enter your name" value={form.customer_name}
                    onChange={e => setForm({ ...form, customer_name: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Phone Number *</label>
                  <input
                    type="tel" placeholder="10-digit mobile number" value={form.customer_phone}
                    onChange={e => setForm({ ...form, customer_phone: e.target.value })}
                    required
                    style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Email Address (Optional)</label>
                  <input
                    type="email" placeholder="email@example.com" value={form.customer_email}
                    onChange={e => setForm({ ...form, customer_email: e.target.value })}
                    style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={() => setStep(3)} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>Back</button>
                  <button type="submit" disabled={processing} style={{ flex: 2, background: theme, color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 800, cursor: processing ? 'wait' : 'pointer' }}>
                    {processing ? 'Processing...' : '➔ Proceed to Payment'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 5: Complete Payment Gateway & Timer (Matching Image 3 & 4) */}
          {step === 5 && paymentInfo && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💳</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: theme, marginBottom: '8px' }}>
                Razorpay Payment Gateway
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px' }}>
                Your booking order has been created. Please complete the online payment of <strong>₹{paymentInfo.amount_online}</strong> to confirm your slot booking.
              </p>

              <div style={{ background: '#1f2937', padding: '16px', borderRadius: '12px', textAlign: 'left', marginBottom: '20px', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{ color: '#94a3b8' }}>Ground:</span><strong>{paymentInfo.ground_name}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{ color: '#94a3b8' }}>Date:</span><strong>{paymentInfo.date}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}><span style={{ color: '#94a3b8' }}>Slots:</span><strong>{paymentInfo.selected_hours?.map(fmtH).join(', ')}</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#94a3b8' }}>Customer:</span><strong>{form.customer_name} ({form.customer_phone})</strong></div>
              </div>

              {/* 10-Minute Timer Badge */}
              <div style={{
                background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px', padding: '10px', color: '#ef4444', fontWeight: 800,
                marginBottom: '20px', fontSize: '0.9rem'
              }}>
                ⏰ Time remaining to pay: <PublicCountdown expiresAtIso={paymentInfo.expires_at} onExpire={() => { setStep(3); alert('Order expired.'); }} />
              </div>

              <button
                disabled={processing}
                onClick={() => openRazorpay(paymentInfo)}
                style={{
                  width: '100%', background: theme, color: '#fff', border: 'none',
                  padding: '14px', borderRadius: '10px', fontWeight: 800, fontSize: '1rem',
                  cursor: processing ? 'wait' : 'pointer', boxShadow: `0 4px 20px ${theme}40`, marginBottom: '12px'
                }}
              >
                {processing ? 'Processing...' : `💳 PAY ₹${paymentInfo.amount_online} NOW`}
              </button>

              <button
                type="button" onClick={() => setStep(4)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.85rem' }}
              >
                Back
              </button>
            </div>
          )}
        </div>

        {/* Right-Hand Booking Summary Panel (Matching Image 1, 2, 3, 4) */}
        <div style={{ background: '#111827', padding: '28px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: theme, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📊 Booking Summary
          </h3>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>ARENA</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>{siteName}</div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>SELECTED SURFACE</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: theme, marginTop: '2px' }}>⚽ {ground?.name}</div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>DATE</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff', marginTop: '2px' }}>📅 {date}</div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>TIME SLOTS ({selectedHours.length})</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: theme, marginTop: '4px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {selectedHours.length > 0 ? selectedHours.map(h => (
                <span key={h} style={{ background: `${theme}20`, padding: '3px 8px', borderRadius: '4px', border: `1px solid ${theme}40` }}>{fmtH(h)}</span>
              )) : <span style={{ color: '#64748b', fontWeight: 400 }}>None selected</span>}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', paddingTop: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <span>Rate per Hour</span>
              <strong style={{ color: '#fff' }}>₹{rate.toLocaleString('en-IN')}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <span>Total Duration</span>
              <strong style={{ color: '#fff' }}>{selectedHours.length} hr(s)</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <span>Ground Amount</span>
              <strong style={{ color: '#fff' }}>₹{groundTotal.toLocaleString('en-IN')}</strong>
            </div>
            {selectedHours.length > 0 && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                  <span>Razorpay Fee</span>
                  <strong style={{ color: '#fff' }}>+₹{razorpayFee.toFixed(2)}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                  <span>MatchTicket Platform Fee</span>
                  <strong style={{ color: '#fff' }}>+₹{platformFee.toFixed(2)}</strong>
                </div>
              </>
            )}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 800 }}>
              <span>Total Booking Cost</span>
              <span style={{ color: theme }}>₹{totalCost.toFixed(2)}</span>
            </div>
          </div>

          {selectedHours.length > 0 && (
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '14px', borderRadius: '10px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, color: theme, marginBottom: '4px' }}>
                <span>Pay Online ({advancePaymentPct}% Advance)</span>
                <span>₹{advanceAmount.toFixed(2)}</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '10px' }}>
                (₹{((groundTotal * advancePaymentPct) / 100).toFixed(0)} Advance + ₹{razorpayFee.toFixed(2)} Razorpay Fee + ₹{platformFee.toFixed(2)} Platform Fee)
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#cbd5e1' }}>
                <span>Pay Offline (Remaining Amount)</span>
                <span>₹{remainingAmount.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
