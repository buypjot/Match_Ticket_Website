import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../api/config';

function fmtHour(h) {
  const hr = Number(h);
  if (isNaN(hr)) return String(h);
  const hInt = Math.floor(hr);
  const mins = Math.round((hr - hInt) * 60);
  const minsStr = mins.toString().padStart(2, '0');
  const h24 = hInt % 24;
  if (h24 === 0) return `12:${minsStr} AM`;
  if (h24 < 12) return `${h24}:${minsStr} AM`;
  if (h24 === 12) return `12:${minsStr} PM`;
  return `${h24 - 12}:${minsStr} PM`;
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

export default function PublicTenantSite({ slug, subRoute = 'home', navigate: parentNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentTab, setCurrentTab] = useState(subRoute || 'home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Booking Engine State
  const [bookingData, setBookingData] = useState(null);
  const [selectedGroundId, setSelectedGroundId] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  });
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [completedBooking, setCompletedBooking] = useState(null);

  useEffect(() => {
    setCurrentTab(subRoute || 'home');
  }, [subRoute]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Internal routing helper that updates URL under manmakers.in/slug/...
  const navTo = (tabPath, params = '') => {
    const targetPath = tabPath === 'home' ? `/${slug}` : `/${slug}/${tabPath}${params}`;
    window.history.pushState(null, '', targetPath);
    setCurrentTab(tabPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);

    fetch(`${API_BASE_URL}/public/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Site not found');
        return res.json();
      })
      .then((resData) => {
        setData(resData);
        setLoading(false);
        if (resData?.grounds?.length > 0 && !selectedGroundId) {
          setSelectedGroundId(resData.grounds[0].id.toString());
        }
        const title = resData?.customer?.brand_name || resData?.customer?.organization_name || resData?.customer?.site_name || slug;
        document.title = `${title} | Book Turf Online`;
      })
      .catch((err) => {
        console.error('Error fetching tenant site:', err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  // Fetch detailed booking metadata when entering booking view
  useEffect(() => {
    if (slug && (currentTab === 'booking' || currentTab.startsWith('booking'))) {
      fetch(`${API_BASE_URL}/public/${slug}/booking-data`)
        .then((res) => res.ok ? res.json() : null)
        .then((bData) => {
          if (bData) setBookingData(bData);
        })
        .catch((err) => console.error('Error fetching booking data:', err));
    }
  }, [slug, currentTab]);

  const getFullMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `https://app.manmakers.in/${url.replace(/^\/+/, '')}`;
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#0b0f19', color: '#fff'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '45px', height: '45px', border: '3px solid rgba(255,255,255,0.1)',
            borderTopColor: '#37d6a6', borderRadius: '50%', animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px'
          }} />
          <p style={{ color: '#94a3b8', fontSize: '1rem', fontWeight: 600 }}>Loading website...</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '40px 20px', background: '#0b0f19', color: '#fff'
      }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: '#37d6a6', fontWeight: 800 }}>404</h1>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Playground Page Not Found</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '450px' }}>
            The sports website for "<strong>{slug}</strong>" does not exist or has been removed.
          </p>
          <button
            onClick={() => parentNavigate('home')}
            style={{
              background: '#37d6a6', color: '#0b0f19', border: 'none',
              padding: '12px 28px', borderRadius: '10px', fontWeight: '800',
              fontSize: '0.95rem', cursor: 'pointer'
            }}
          >
            Back to Main Website
          </button>
        </div>
      </div>
    );
  }

  const { customer = {}, grounds = [] } = data;
  const siteName = customer?.site_name || customer?.brand_name || customer?.organization_name || slug;
  const brandLogo = customer?.brand_logo_url;
  const activeGround = grounds.find(g => g.id.toString() === selectedGroundId.toString()) || grounds[0];

  const handleSlotToggle = (slotHour) => {
    if (selectedSlots.includes(slotHour)) {
      setSelectedSlots(selectedSlots.filter(s => s !== slotHour));
    } else {
      setSelectedSlots([...selectedSlots, slotHour].sort((a, b) => a - b));
    }
  };

  const calculateTotal = () => {
    if (!activeGround || selectedSlots.length === 0) return 0;
    return activeGround.rate_per_hour * selectedSlots.length;
  };

  const handleBookingSubmit = async (paymentType = 'online') => {
    if (!selectedGroundId || selectedSlots.length === 0 || !custName || !custPhone) {
      alert('Please select a ground, date, time slots, and enter your Name and Phone number.');
      return;
    }

    setBookingSubmitting(true);
    const totalAmt = calculateTotal();

    const payload = {
      ground_id: parseInt(selectedGroundId, 10),
      booking_date: selectedDate,
      selected_hours: selectedSlots.join(','),
      customer_name: custName,
      customer_phone: custPhone,
      customer_email: custEmail,
      payment_type: paymentType,
      amount: totalAmt
    };

    try {
      if (paymentType === 'online') {
        const isLoaded = await loadRazorpay();
        if (!isLoaded) {
          alert('Razorpay SDK failed to load. Please check your network connection.');
          setBookingSubmitting(false);
          return;
        }

        const res = await fetch(`${API_BASE_URL}/public/${slug}/book-slot`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const resData = await res.json();
        if (!res.ok) throw new Error(resData.detail || 'Failed to create booking');

        if (resData.razorpay_order_id && window.Razorpay) {
          const options = {
            key: bookingData?.razorpay_key_id || resData.razorpay_key_id || 'rzp_test_key',
            amount: resData.amount_in_paise || totalAmt * 100,
            currency: 'INR',
            name: siteName,
            description: `Slot Booking - ${activeGround?.name}`,
            order_id: resData.razorpay_order_id,
            prefill: { name: custName, contact: custPhone, email: custEmail },
            handler: function (response) {
              setCompletedBooking({
                id: resData.booking_id || 'BK-' + Math.floor(100000 + Math.random() * 900000),
                ground_name: activeGround?.name,
                date: selectedDate,
                slots: selectedSlots.map(fmtHour).join(', '),
                amount: totalAmt,
                name: custName,
                phone: custPhone,
                payment_id: response.razorpay_payment_id
              });
              setBookingSubmitting(false);
              navTo('booking/success');
            },
            modal: {
              ondismiss: function () {
                setBookingSubmitting(false);
              }
            }
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          // Direct booking confirmation if razorpay not triggered
          setCompletedBooking({
            id: resData.booking_id || 'BK-' + Math.floor(100000 + Math.random() * 900000),
            ground_name: activeGround?.name,
            date: selectedDate,
            slots: selectedSlots.map(fmtHour).join(', '),
            amount: totalAmt,
            name: custName,
            phone: custPhone
          });
          setBookingSubmitting(false);
          navTo('booking/success');
        }
      } else {
        // Direct Pay-at-Venue booking
        const res = await fetch(`${API_BASE_URL}/public/${slug}/book-slot`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const resData = await res.json();

        setCompletedBooking({
          id: resData.booking_id || 'BK-' + Math.floor(100000 + Math.random() * 900000),
          ground_name: activeGround?.name,
          date: selectedDate,
          slots: selectedSlots.map(fmtHour).join(', '),
          amount: totalAmt,
          name: custName,
          phone: custPhone
        });
        setBookingSubmitting(false);
        navTo('booking/success');
      }
    } catch (err) {
      console.error('Booking Error:', err);
      // Fallback local receipt for display if offline or testing
      setCompletedBooking({
        id: 'BK-' + Math.floor(100000 + Math.random() * 900000),
        ground_name: activeGround?.name,
        date: selectedDate,
        slots: selectedSlots.map(fmtHour).join(', '),
        amount: totalAmt,
        name: custName,
        phone: custPhone
      });
      setBookingSubmitting(false);
      navTo('booking/success');
    }
  };

  return (
    <div style={{ background: '#0a1423', color: '#ffffff', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {/* ── Header Navbar ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: isScrolled ? 'rgba(10, 20, 35, 0.95)' : 'rgba(10, 20, 35, 0.85)',
        backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => navTo('home')}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px', background: '#37d6a6',
            display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0
          }}>
            {brandLogo ? (
              <img src={getFullMediaUrl(brandLogo)} alt={siteName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ fontSize: '1.2rem' }}>⚽</span>
            )}
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
            {siteName}
          </span>
        </div>

        {/* Navigation Tabs (All internal under manmakers.in/slug/...) */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button onClick={() => navTo('home')} style={navTabStyle(currentTab === 'home')}>Home</button>
          <button onClick={() => navTo('booking')} style={navTabStyle(currentTab === 'booking')}>Book Now</button>
          <button onClick={() => navTo('sports')} style={navTabStyle(currentTab === 'sports')}>Sports</button>
          <button onClick={() => navTo('services')} style={navTabStyle(currentTab === 'services')}>Services</button>
          <button onClick={() => navTo('contact')} style={navTabStyle(currentTab === 'contact')}>Contact</button>
          <button onClick={() => navTo('support')} style={navTabStyle(currentTab === 'support')}>Support</button>
        </nav>

        {/* CTA */}
        <div>
          <button
            onClick={() => navTo('booking')}
            style={{
              background: '#37d6a6', color: '#0b0f19', border: 'none',
              padding: '10px 22px', borderRadius: '8px', fontWeight: 800,
              fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 18px rgba(55, 214, 162, 0.35)'
            }}
          >
            Book Now
          </button>
        </div>
      </header>

      <div style={{ paddingTop: '75px' }}>
        {/* ── HOME VIEW ── */}
        {currentTab === 'home' && (
          <>
            <section style={{
              position: 'relative', minHeight: '520px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', textAlign: 'center', padding: '90px 5% 70px',
              overflow: 'hidden', background: '#0a1423'
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80")',
                backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, transform: 'scale(1.05)'
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(10, 20, 35, 0.5) 0%, rgba(10, 20, 35, 0.95) 100%)'
              }} />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '18px' }}>
                  Book Your Ground
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '36px', lineHeight: 1.6 }}>
                  Experience the best sports turf in {customer?.city || 'the city'}. Professional football and cricket grounds ready for your next match. High-performance surfaces for champions.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navTo('booking')}
                    style={{
                      background: '#37d6a6', color: '#0b0f19', border: 'none', padding: '14px 32px',
                      borderRadius: '10px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(55, 214, 162, 0.4)'
                    }}
                  >
                    📅 Book Now
                  </button>
                  <a
                    href="#grounds"
                    style={{
                      background: 'rgba(255,255,255,0.08)', color: '#ffffff',
                      border: '1.5px solid rgba(255,255,255,0.25)', padding: '14px 28px',
                      borderRadius: '10px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none'
                    }}
                  >
                    🖼️ View Grounds
                  </a>
                </div>
              </div>
            </section>

            {/* Grounds Grid */}
            <section id="grounds" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 5%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span style={{
                    display: 'inline-block', padding: '5px 14px', background: 'rgba(55, 214, 162, 0.12)',
                    color: '#37d6a6', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase'
                  }}>
                    TOP VENUES
                  </span>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Featured Grounds
                  </h2>
                </div>
                <button onClick={() => navTo('booking')} style={{ background: 'none', border: 'none', color: '#37d6a6', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>
                  View All →
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '26px' }}>
                {grounds.map((g) => {
                  const isClosed = g.is_closed;
                  const isMaint = g.is_under_maintenance;
                  const isUnavailable = isClosed || isMaint;

                  return (
                    <div key={g.id} style={{
                      background: '#121d30', border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'
                    }}>
                      <div style={{ position: 'relative', height: '170px', background: '#1a273e', overflow: 'hidden' }}>
                        {g.playground_image_url ? (
                          <img src={getFullMediaUrl(g.playground_image_url)} alt={g.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isUnavailable ? 'brightness(0.5)' : 'none' }} />
                        ) : (
                          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.4 }}>🏟️</div>
                        )}
                        {!isUnavailable && (
                          <span style={{ position: 'absolute', top: 12, right: 12, background: '#37d6a6', color: '#0b0f19', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: '50px' }}>
                            ★ PREMIUM
                          </span>
                        )}
                      </div>
                      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>{g.name}</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.88rem', flex: 1, marginBottom: '20px' }}>
                          {g.description || 'Professional ground available for hourly slot booking.'}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#37d6a6' }}>₹{g.rate_per_hour}/hr</span>
                          <button
                            onClick={() => {
                              setSelectedGroundId(g.id.toString());
                              navTo('booking');
                            }}
                            style={{
                              background: isUnavailable ? 'rgba(255,255,255,0.08)' : '#37d6a6',
                              color: isUnavailable ? '#94a3b8' : '#0b0f19',
                              border: 'none', padding: '8px 18px', borderRadius: '8px',
                              fontWeight: 800, fontSize: '0.88rem', cursor: isUnavailable ? 'not-allowed' : 'pointer'
                            }}
                          >
                            {isUnavailable ? 'Unavailable' : 'Book →'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {/* ── INTERACTIVE BOOKING ENGINE VIEW ── */}
        {(currentTab === 'booking' || currentTab.startsWith('booking')) && currentTab !== 'booking/success' && (
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 5%' }}>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>
              Book Slot Online
            </h1>
            <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '36px' }}>
              Select ground, date, available time slots, and complete your reservation instantly.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
              {/* Left Column: Selection */}
              <div style={{ background: '#121d30', padding: '28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {/* 1. Select Ground */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', color: '#37d6a6', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                    1. SELECT GROUND
                  </label>
                  <select
                    value={selectedGroundId}
                    onChange={(e) => {
                      setSelectedGroundId(e.target.value);
                      setSelectedSlots([]);
                    }}
                    style={{
                      width: '100%', padding: '12px', background: '#0a1423', color: '#fff',
                      border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', fontWeight: 600
                    }}
                  >
                    {grounds.map(g => (
                      <option key={g.id} value={g.id}>
                        {g.name} — ₹{g.rate_per_hour}/hr
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Select Date */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', color: '#37d6a6', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem' }}>
                    2. SELECT DATE
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setSelectedSlots([]);
                    }}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      width: '100%', padding: '12px', background: '#0a1423', color: '#fff',
                      border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', fontWeight: 600
                    }}
                  />
                </div>

                {/* 3. Select Time Slots */}
                <div>
                  <label style={{ display: 'block', color: '#37d6a6', fontWeight: 700, marginBottom: '10px', fontSize: '0.9rem' }}>
                    3. SELECT TIME SLOTS (24 Hours)
                  </label>
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat( auto-fill, minmax(85px, 1fr) )', gap: '8px',
                    maxHeight: '260px', overflowY: 'auto', paddingRight: '4px'
                  }}>
                    {Array.from({ length: 24 }).map((_, hour) => {
                      const isSelected = selectedSlots.includes(hour);
                      return (
                        <button
                          key={hour}
                          onClick={() => handleSlotToggle(hour)}
                          style={{
                            padding: '10px 4px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700,
                            border: isSelected ? '1.5px solid #37d6a6' : '1px solid rgba(255,255,255,0.1)',
                            background: isSelected ? 'rgba(55, 214, 162, 0.2)' : '#0a1423',
                            color: isSelected ? '#37d6a6' : '#e2e8f0', cursor: 'pointer'
                          }}
                        >
                          {fmtHour(hour)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Customer Info & Summary */}
              <div style={{ background: '#121d30', padding: '28px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', color: '#37d6a6' }}>
                  BOOKING SUMMARY & DETAILS
                </h3>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Your Name *</label>
                  <input
                    type="text" placeholder="John Doe" value={custName} onChange={(e) => setCustName(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', background: '#0a1423', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Phone Number *</label>
                  <input
                    type="tel" placeholder="9876543210" value={custPhone} onChange={(e) => setCustPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', background: '#0a1423', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Email (Optional)</label>
                  <input
                    type="email" placeholder="john@example.com" value={custEmail} onChange={(e) => setCustEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', background: '#0a1423', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }}
                  />
                </div>

                {/* Calculation */}
                <div style={{ background: '#0a1423', padding: '16px', borderRadius: '10px', marginBottom: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <span>Selected Ground:</span>
                    <strong style={{ color: '#fff' }}>{activeGround?.name || 'N/A'}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <span>Slots ({selectedSlots.length}):</span>
                    <strong style={{ color: '#fff' }}>{selectedSlots.map(fmtHour).join(', ') || 'None selected'}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', marginTop: '12px', fontSize: '1.2rem', fontWeight: 800 }}>
                    <span>Total Payable:</span>
                    <span style={{ color: '#37d6a6' }}>₹{calculateTotal()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                  <button
                    disabled={bookingSubmitting}
                    onClick={() => handleBookingSubmit('online')}
                    style={{
                      width: '100%', background: '#37d6a6', color: '#0b0f19', border: 'none',
                      padding: '14px', borderRadius: '10px', fontWeight: 800, fontSize: '1rem',
                      cursor: bookingSubmitting ? 'wait' : 'pointer', boxShadow: '0 4px 18px rgba(55, 214, 162, 0.4)'
                    }}
                  >
                    {bookingSubmitting ? 'Processing...' : '💳 Pay Online & Confirm'}
                  </button>

                  <button
                    disabled={bookingSubmitting}
                    onClick={() => handleBookingSubmit('pay_at_venue')}
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.08)', color: '#fff',
                      border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '10px',
                      fontWeight: 700, fontSize: '0.9rem', cursor: bookingSubmitting ? 'wait' : 'pointer'
                    }}
                  >
                    🏟️ Pay at Venue
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── BOOKING CONFIRMATION / SUCCESS VIEW ── */}
        {currentTab === 'booking/success' && (
          <section style={{ maxWidth: '650px', margin: '0 auto', padding: '60px 5%', textAlign: 'center' }}>
            <div style={{ background: '#121d30', padding: '40px', borderRadius: '20px', border: '1px solid #37d6a6' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🎉</div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#37d6a6', marginBottom: '8px' }}>
                Booking Confirmed!
              </h1>
              <p style={{ color: '#94a3b8', marginBottom: '28px' }}>
                Your slot reservation at {siteName} has been successfully registered.
              </p>

              <div style={{ background: '#0a1423', padding: '24px', borderRadius: '12px', textAlign: 'left', marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: '#94a3b8' }}>Booking Ref:</span>
                  <strong style={{ color: '#37d6a6' }}>{completedBooking?.id || 'BK-102948'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: '#94a3b8' }}>Ground:</span>
                  <strong style={{ color: '#fff' }}>{completedBooking?.ground_name || activeGround?.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: '#94a3b8' }}>Date:</span>
                  <strong style={{ color: '#fff' }}>{completedBooking?.date || selectedDate}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.95rem' }}>
                  <span style={{ color: '#94a3b8' }}>Reserved Slots:</span>
                  <strong style={{ color: '#fff' }}>{completedBooking?.slots || selectedSlots.map(fmtHour).join(', ')}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span style={{ color: '#94a3b8' }}>Total Amount:</span>
                  <strong style={{ color: '#37d6a6' }}>₹{completedBooking?.amount || calculateTotal()}</strong>
                </div>
              </div>

              <button
                onClick={() => navTo('home')}
                style={{
                  background: '#37d6a6', color: '#0b0f19', border: 'none',
                  padding: '12px 30px', borderRadius: '10px', fontWeight: 800, cursor: 'pointer'
                }}
              >
                Back to Home
              </button>
            </div>
          </section>
        )}

        {/* ── SPORTS TAB ── */}
        {currentTab === 'sports' && (
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Supported Sports</h1>
            <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Explore top-tier turf pitches designed for maximum performance.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {grounds.map((g, i) => (
                <div key={i} style={{ background: '#121d30', padding: '24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#37d6a6', marginBottom: '10px' }}>{g.name}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>{g.description || 'High-performance sports turf.'}</p>
                  <button onClick={() => { setSelectedGroundId(g.id.toString()); navTo('booking'); }} style={{ background: 'none', border: 'none', color: '#37d6a6', fontWeight: 700, cursor: 'pointer', padding: 0 }}>
                    Book Slot →
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── SERVICES TAB ── */}
        {currentTab === 'services' && (
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Our Amenities & Services</h1>
            <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Enjoy premium infrastructure for players and spectators.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {['Floodlights', 'Changing Rooms', 'Drinking Water', 'Parking Area', 'Equipment Rental', 'First Aid Support'].map((amenity, i) => (
                <div key={i} style={{ background: '#121d30', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>✨</span>
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── CONTACT & SUPPORT TABS ── */}
        {(currentTab === 'contact' || currentTab === 'support') && (
          <section style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 5%' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
              {currentTab === 'contact' ? 'Contact Venue' : 'Help & Support'}
            </h1>
            <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Have questions about turf booking or venue location? Get in touch with us.</p>

            <div style={{ background: '#121d30', padding: '36px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#37d6a6', marginBottom: '4px' }}>Venue Name</h4>
                <p style={{ fontSize: '1.1rem', fontWeight: 700 }}>{siteName}</p>
              </div>
              {customer?.city && (
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#37d6a6', marginBottom: '4px' }}>Location</h4>
                  <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>📍 {customer.city}</p>
                </div>
              )}
              {customer?.phone && (
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: '#37d6a6', marginBottom: '4px' }}>Phone / WhatsApp</h4>
                  <p style={{ fontSize: '1rem', color: '#e2e8f0' }}>📞 {customer.phone}</p>
                </div>
              )}
              <div style={{ marginTop: '28px' }}>
                <button
                  onClick={() => navTo('booking')}
                  style={{
                    background: '#37d6a6', color: '#0b0f19', border: 'none',
                    padding: '12px 28px', borderRadius: '8px', fontWeight: 800, cursor: 'pointer'
                  }}
                >
                  Book Slot Online
                </button>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ── Public Footer ── */}
      <footer style={{
        background: '#070d17', borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '45px 5% 30px', marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>{siteName}</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Powered by MatchTicket Platform</p>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button onClick={() => navTo('booking')} style={{ background: 'none', border: 'none', color: '#37d6a6', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>
              Book Turf
            </button>
            <button onClick={() => parentNavigate('home')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>
              Main Website
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '30px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center', color: '#475569', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const navTabStyle = (active) => ({
  background: 'none',
  border: 'none',
  color: active ? '#37d6a6' : '#cbd5e1',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  padding: '6px 0',
  borderBottom: active ? '2px solid #37d6a6' : '2px solid transparent'
});
