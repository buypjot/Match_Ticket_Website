import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { getMediaUrl } from '../utils/media';

function fmtH(h) { 
  const hr = h % 24;
  if(hr===0) return '12:00 AM';
  if(hr<12) return `${hr}:00 AM`;
  if(hr===12) return '12:00 PM';
  return `${hr-12}:00 PM`; 
}

const getOfferBadgeStyles = (offerTitle) => {
  if (!offerTitle) return null;
  const title = offerTitle.toLowerCase();
  if (title.includes('morning')) {
    return {
      label: 'Morning',
      bg: 'rgba(245, 158, 11, 0.12)',
      color: '#f59e0b',
      border: '1px solid rgba(245, 158, 11, 0.3)'
    };
  }
  if (title.includes('evening')) {
    return {
      label: 'Evening',
      bg: 'rgba(139, 92, 246, 0.12)',
      color: '#8b5cf6',
      border: '1px solid rgba(139, 92, 246, 0.3)'
    };
  }
  if (title.includes('weekend')) {
    return {
      label: 'Weekend',
      bg: 'rgba(16, 185, 129, 0.12)',
      color: '#10b981',
      border: '1px solid rgba(16, 185, 129, 0.3)'
    };
  }
  if (title.includes('weekday')) {
    return {
      label: 'Weekday',
      bg: 'rgba(59, 130, 246, 0.12)',
      color: '#3b82f6',
      border: '1px solid rgba(59, 130, 246, 0.3)'
    };
  }
  return {
    label: 'Offer',
    bg: 'rgba(16, 185, 129, 0.12)',
    color: '#10b981',
    border: '1px solid rgba(16, 185, 129, 0.3)'
  };
};

export default function PublicBookingSuccess({ slug, refCode, navTo }) {
  const [booking, setBooking] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      client.get(`/public/${slug}`),
      refCode ? client.get(`/bookings/reference/${refCode}`) : Promise.resolve({ data: null }),
    ]).then(([c, b]) => {
      setCustomer(c.data?.customer);
      if (b.data) {
        const bk = b.data;
        const hours = (bk.selected_hours || '').split(',').filter(Boolean).map(Number).sort((a,b)=>a-b);
        bk.slot_labels = hours.map(h => `${fmtH(h)} – ${fmtH(h+1)}`);
        setBooking(bk);
      }
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug, refCode]);

  if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '80px' }}>Loading booking receipt...</div>;

  const HEADER_GREEN = '#0d6e4a';
  const CARD_BG = '#1e1e1e';
  const SUCCESS_GREEN = '#00b894';
  const VENUES_LIGHT_GREEN = '#f0f9f7';
  const BOX_BG = '#2a2a2a';
  const TEXT_MUTED = '#a0a0a0';

  const isManual = booking?.is_manual;
  const pct = Number(booking?.advance_payment_percentage ?? 100);
  const advancePaid = (Number(booking?.total_amount || 0) * (pct / 100));
  const remainingPaid = (Number(booking?.total_amount || 0) * ((100 - pct) / 100));

  return (
    <div style={{ 
      background: '#0a0f1a', 
      minHeight: '100vh', 
      fontFamily: "'Inter', sans-serif",
      color: '#ffffff',
      position: 'relative',
      padding: '40px 20px 80px'
    }}>
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>
        {/* Animated Success Icon Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '88px', height: '88px',
            background: 'rgba(0,184,148,0.12)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 0 0 16px rgba(0,184,148,0.06)',
            border: '2px solid rgba(0,184,148,0.4)'
          }}>
            <span style={{ color: SUCCESS_GREEN, fontSize: '3rem', fontWeight: 900 }}>✓</span>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.5px' }}>
            Payment Confirmed!
          </h2>
          <p style={{ color: '#94a3b8', fontWeight: 500, fontSize: '1rem' }}>
            Your booking at <strong style={{ color: SUCCESS_GREEN }}>{customer?.site_name}</strong> is ready.
          </p>
        </div>

        <div className="confirmation-card" style={{
          background: CARD_BG, borderRadius: '24px', overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)'
        }}>
          {/* 1. Header with Logo */}
          <div className="receipt-header" style={{ background: HEADER_GREEN, padding: '40px 24px', textAlign: 'center', color: '#fff' }}>
            <div style={{
              width: '64px', height: '64px', background: '#fff',
              borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)', padding: '4px'
            }}>
              {customer?.brand_logo_url ? (
                <img src={getMediaUrl(customer.brand_logo_url)} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              ) : (
                <span style={{ color: HEADER_GREEN, fontSize: '1.8rem', fontWeight: 900 }}>{customer?.site_name?.charAt(0) || 'M'}</span>
              )}
            </div>
            <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.5px' }}>Booking Receipt</h1>
            <p style={{ margin: '6px 0 0', fontSize: '0.8rem', opacity: 0.8, fontWeight: 500 }}>Reference: #{booking?.booking_reference || refCode || 'REF-109283'}</p>
          </div>

          {/* 2. Main Content Area */}
          <div className="receipt-body" style={{ padding: '32px 28px' }}>
            {/* Grid 1: Surface & Date */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.8px' }}>Playing Surface</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{booking?.ground_name || 'Ground Pitch'}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.8px' }}>Date</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{booking?.booking_date ? new Date(booking.booking_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}</span>
              </div>
            </div>

            {/* Grid 2: Customer & Amount */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.8px' }}>Customer</span>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{booking?.customer_name || 'Customer'}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.8px' }}>
                  {isManual ? 'Amount Paid' : `Online Paid (${pct}% Advance)`}
                </span>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: SUCCESS_GREEN }}>
                  ₹{isManual ? Number(booking?.total_amount || 0).toFixed(2) : advancePaid.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Time Slot Box */}
            <div style={{ marginBottom: '28px' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.8px' }}>
                ⏰ Booked Time Slot
              </span>
              <div style={{ background: BOX_BG, padding: '16px 20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 700, lineHeight: 1.5 }}>
                  {booking?.slot_labels?.map((label, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: idx === booking.slot_labels.length - 1 ? 0 : '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: SUCCESS_GREEN }}></div>
                      {label}
                    </div>
                  )) || <div>Slot Reserved</div>}
                </div>
              </div>
            </div>

            {/* Action Required Alert Box for offline remaining amount */}
            {!isManual && booking && pct < 100 && (
              <div style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.3)',
                borderRadius: '14px',
                padding: '16px 20px',
                marginBottom: '28px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 800, fontSize: '0.9rem', marginBottom: '6px' }}>
                  ⚠️ Action Required: Venue Payment
                </div>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                  Please pay the remaining <strong>{100 - pct}% (₹{remainingPaid.toFixed(2)})</strong> offline directly at the ground venue.<br />
                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block', marginTop: '6px' }}>
                    * The paid online advance of ₹{advancePaid.toFixed(2)} is non-refundable.
                  </span>
                </p>
              </div>
            )}

            {/* Pricing Summary Box */}
            {booking && (
              <div style={{ marginBottom: '28px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.8px' }}>
                  📄 Pricing Summary
                </span>
                <div className="pricing-summary-box" style={{ 
                  background: BOX_BG, 
                  padding: '20px', 
                  borderRadius: '14px', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span style={{ color: TEXT_MUTED }}>Base Subtotal ({booking.slots_count || 1} slot)</span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>
                      ₹{Number(booking.original_amount !== null && booking.original_amount !== undefined ? booking.original_amount : booking.total_amount).toFixed(2)}
                    </span>
                  </div>

                  {Number(booking.discount_amount) > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
                      <span style={{ color: '#22c55e', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        🏷️ Discount
                      </span>
                      <span style={{ color: '#22c55e', fontWeight: 700 }}>-₹{Number(booking.discount_amount).toFixed(2)}</span>
                    </div>
                  )}

                  <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '4px 0' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 800 }}>
                    <span style={{ color: '#fff' }}>Total Amount</span>
                    <span style={{ color: '#fff' }}>₹{Number(booking.total_amount).toFixed(2)}</span>
                  </div>

                  {!isManual && (
                    <>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: SUCCESS_GREEN, fontWeight: 700 }}>
                        <span>Online Advance Paid ({pct}%)</span>
                        <span>₹{advancePaid.toFixed(2)}</span>
                      </div>
                      {pct < 100 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#f59e0b', fontWeight: 700 }}>
                          <span>Payable at Venue ({100 - pct}%)</span>
                          <span>₹{remainingPaid.toFixed(2)}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Payment Details Box */}
            <div style={{ marginBottom: '28px' }}>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.8px' }}>
                💳 Payment Details
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: BOX_BG, padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', color: TEXT_MUTED, marginBottom: '4px', fontWeight: 600 }}>Method</span>
                  <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>{isManual ? 'Manual / Cash' : 'Online Payment'}</span>
                </div>
                <div style={{ background: BOX_BG, padding: '14px 18px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ display: 'block', fontSize: '0.65rem', color: TEXT_MUTED, marginBottom: '4px', fontWeight: 600 }}>Status</span>
                  <span style={{ color: SUCCESS_GREEN, fontSize: '0.9rem', fontWeight: 700 }}>
                    ✓ {isManual ? 'Confirmed' : 'Paid'}
                  </span>
                </div>
              </div>
            </div>

            {/* Venue Location Box */}
            <div>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: TEXT_MUTED, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.8px' }}>
                📍 Venue Location
              </span>
              <div style={{ background: VENUES_LIGHT_GREEN, padding: '16px 20px', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#1e293b', fontSize: '0.9rem', fontWeight: 800 }}>{booking?.ground_name || customer?.site_name} Ground</div>
                  {customer?.area_url && (
                    <a href={customer.area_url} target="_blank" rel="noreferrer" style={{ color: HEADER_GREEN, fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none', borderBottom: `1.5px solid ${HEADER_GREEN}` }}>Get Directions →</a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Footer */}
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ margin: 0, color: '#fff', fontSize: '0.85rem', fontWeight: 700 }}>{customer?.site_name} | {customer?.organization_name}</p>
            <p style={{ margin: '6px 0 0', color: TEXT_MUTED, fontSize: '0.75rem', fontWeight: 500 }}>Thank you for booking with us!</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button onClick={() => navTo('booking')} style={{
            background: SUCCESS_GREEN, color: '#fff', border: 'none',
            padding: '18px', borderRadius: '16px', fontWeight: 800, cursor: 'pointer',
            fontSize: '1rem', boxShadow: '0 10px 30px rgba(0,184,148,0.4)'
          }}>
            📅 Book Another Slot
          </button>
          <button onClick={() => window.print()} style={{
            background: 'rgba(255,255,255,0.08)', color: '#fff',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '16px', borderRadius: '16px', fontWeight: 700, cursor: 'pointer',
            fontSize: '0.95rem'
          }}>
            📥 Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
