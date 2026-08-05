import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../api/config';
import BookingCalendar from '../components/BookingCalendar';
import PublicBooking from './PublicBooking';
import PublicBookingSuccess from './PublicBookingSuccess';
import PublicSports from './PublicSports';
import PublicServices from './PublicServices';
import PublicContact from './PublicContact';
import PublicSupport from './PublicSupport';
import { updatePageMeta } from '../utils/meta.js';

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

function updatePublicTheme(customer) {
  if (!customer?.theme_color) return;
  const hex = customer.theme_color;
  const root = document.documentElement;
  root.style.setProperty('--primary', hex);
  root.style.setProperty('--pb-primary', hex);
  root.style.setProperty('--primary-glow', `${hex}25`);
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

export default function PublicTenantSite({ slug, subRoute = 'home', navigate: parentNavigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentTab, setCurrentTab] = useState(subRoute || 'home');
  const [isScrolled, setIsScrolled] = useState(false);

  // 5-Step Booking Wizard State
  const [wizardStep, setWizardStep] = useState(1); // 1: Ground, 2: Date, 3: Time, 4: Review, 5: Payment
  const [selectedGroundId, setSelectedGroundId] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookedHours, setBookedHours] = useState([]);
  const [reservedHours, setReservedHours] = useState([]);
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custEmail, setCustEmail] = useState('');
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [completedBooking, setCompletedBooking] = useState(null);

  useEffect(() => {
    setCurrentTab(subRoute || 'home');
    if (subRoute && subRoute.startsWith('booking')) {
      const parts = subRoute.split('/');
      if (parts[1] === 'success') {
        setCurrentTab('booking/success');
      }
    }
  }, [subRoute]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        if (resData?.customer) {
          updatePublicTheme(resData.customer);
          updatePageMeta(resData.customer, resData.grounds || []);
        }
        if (resData?.grounds?.length > 0 && !selectedGroundId) {
          setSelectedGroundId(resData.grounds[0].id.toString());
        }
      })
      .catch((err) => {
        console.error('Error fetching tenant site:', err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  // Real-time Slot Availability Polling
  useEffect(() => {
    let timer;
    if (selectedGroundId && selectedDate && (currentTab === 'booking' || currentTab.startsWith('booking'))) {
      const fetchAvailability = () => {
        fetch(`${API_BASE_URL}/bookings/slot-availability?ground_id=${selectedGroundId}&date=${selectedDate}`)
          .then((res) => res.ok ? res.json() : null)
          .then((avail) => {
            if (avail) {
              setBookedHours(avail.booked_hours || []);
              setReservedHours(avail.reserved_hours || []);
            }
          })
          .catch((err) => console.error('Error fetching slot availability:', err));
      };

      fetchAvailability();
      timer = setInterval(fetchAvailability, 6000);
    }
    return () => { if (timer) clearInterval(timer); };
  }, [selectedGroundId, selectedDate, currentTab]);

  const getFullMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `https://app.matchticket.in/${url.replace(/^\/+/, '')}`;
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
            borderTopColor: 'var(--primary, #ff007f)', borderRadius: '50%', animation: 'spin 0.8s linear infinite',
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: 'var(--primary, #ff007f)', fontWeight: 800 }}>404</h1>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Playground Page Not Found</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '450px' }}>
            The sports website for "<strong>{slug}</strong>" does not exist or has been removed.
          </p>
          <button
            onClick={() => parentNavigate('home')}
            style={{
              background: 'var(--primary, #ff007f)', color: '#fff', border: 'none',
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
  const themeColor = customer?.theme_color || 'var(--primary, #ff007f)';
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
      alert('Please select ground, date, time slots, and enter your Name and Phone number.');
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
          alert('Razorpay SDK failed to load. Please check internet connectivity.');
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
            key: resData.razorpay_key_id || customer?.razorpay_key_id || 'rzp_test_key',
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
      console.error('Booking Submission Exception:', err);
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
    <div style={{ background: '#0a0e17', color: '#ffffff', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {/* ── Public Site Header ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: isScrolled ? 'rgba(10, 14, 23, 0.95)' : 'rgba(10, 14, 23, 0.85)',
        backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => navTo('home')}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '10px', background: themeColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0
          }}>
            {brandLogo ? (
              <img src={getFullMediaUrl(brandLogo)} alt={siteName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <span style={{ fontSize: '1.2rem', color: '#fff' }}>⚽</span>
            )}
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
            {siteName}
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button onClick={() => navTo('home')} style={navTabStyle(currentTab === 'home', themeColor)}>Home</button>
          <button onClick={() => navTo('booking')} style={navTabStyle(currentTab === 'booking', themeColor)}>Book Now</button>
          <button onClick={() => navTo('sports')} style={navTabStyle(currentTab === 'sports')}>Sports</button>
          <button onClick={() => navTo('services')} style={navTabStyle(currentTab === 'services')}>Services</button>
          <button onClick={() => navTo('contact')} style={navTabStyle(currentTab === 'contact')}>Contact</button>
          <button onClick={() => navTo('support')} style={navTabStyle(currentTab === 'support')}>Support</button>
        </nav>

        <div>
          <button
            onClick={() => navTo('booking')}
            style={{
              background: themeColor, color: '#ffffff', border: 'none',
              padding: '10px 22px', borderRadius: '8px', fontWeight: 800,
              fontSize: '0.9rem', cursor: 'pointer', boxShadow: `0 4px 18px ${themeColor}40`
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
              overflow: 'hidden', background: '#0a0e17'
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80")',
                backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35, transform: 'scale(1.05)'
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to bottom, rgba(10, 14, 23, 0.5) 0%, rgba(10, 14, 23, 0.95) 100%)'
              }} />

              <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '18px' }}>
                  Book Your Ground
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '36px', lineHeight: 1.6 }}>
                  Experience the best sports turf in {customer?.city || 'Tenkasi'}. Professional football and cricket grounds ready for your next match. High-performance surfaces for champions.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navTo('booking')}
                    style={{
                      background: themeColor, color: '#ffffff', border: 'none', padding: '14px 32px',
                      borderRadius: '10px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
                      boxShadow: `0 4px 20px ${themeColor}40`
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
                    display: 'inline-block', padding: '5px 14px', background: `${themeColor}20`,
                    color: themeColor, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase'
                  }}>
                    TOP VENUES
                  </span>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Featured Grounds
                  </h2>
                </div>
                <button onClick={() => navTo('booking')} style={{ background: 'none', border: 'none', color: themeColor, fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>
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
                      background: '#111827', border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%'
                    }}>
                      <div style={{ position: 'relative', height: '170px', background: '#1f2937', overflow: 'hidden' }}>
                        {g.playground_image_url ? (
                          <img src={getFullMediaUrl(g.playground_image_url)} alt={g.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isUnavailable ? 'brightness(0.5)' : 'none' }} />
                        ) : (
                          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.4 }}>🏟️</div>
                        )}
                        {!isUnavailable && (
                          <span style={{ position: 'absolute', top: 12, right: 12, background: themeColor, color: '#ffffff', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: '50px' }}>
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
                          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: themeColor }}>₹{g.rate_per_hour}/hr</span>
                          <button
                            onClick={() => {
                              setSelectedGroundId(g.id.toString());
                              navTo('booking');
                            }}
                            style={{
                              background: isUnavailable ? 'rgba(255,255,255,0.08)' : themeColor,
                              color: isUnavailable ? '#94a3b8' : '#ffffff',
                              border: 'none', padding: '8px 18px', borderRadius: '8px',
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

        {/* ── 5-STEP BOOKING WIZARD VIEW (Matching Image 1, 2, 3, 4) ── */}
        {(currentTab === 'booking' || currentTab.startsWith('booking')) && currentTab !== 'booking/success' && (
          <PublicBooking slug={slug} navTo={navTo} />
        )}

        {/* ── BOOKING SUCCESS RECEIPT VIEW (Matching Production Receipt) ── */}
        {(currentTab === 'booking/success' || currentTab.startsWith('booking/success')) && (
          <PublicBookingSuccess
            slug={slug}
            refCode={new URLSearchParams(window.location.search).get('ref')}
            navTo={navTo}
          />
        )}

        {/* ── SPORTS TAB ── */}
        {currentTab === 'sports' && <PublicSports slug={slug} navTo={navTo} />}

        {/* ── SERVICES TAB ── */}
        {currentTab === 'services' && <PublicServices slug={slug} navTo={navTo} />}

        {/* ── CONTACT TAB ── */}
        {currentTab === 'contact' && <PublicContact slug={slug} navTo={navTo} />}

        {/* ── SUPPORT TAB ── */}
        {currentTab === 'support' && <PublicSupport slug={slug} navTo={navTo} />}
      </div>

      {/* ── Public Footer ── */}
      <footer style={{
        background: '#070b12', borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '45px 5% 30px', marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>{siteName}</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Powered by MatchTicket Platform</p>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button onClick={() => navTo('booking')} style={{ background: 'none', border: 'none', color: themeColor, cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>
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

const navTabStyle = (active, themeColor) => ({
  background: 'none',
  border: 'none',
  color: active ? themeColor : '#cbd5e1',
  fontSize: '0.95rem',
  fontWeight: 600,
  cursor: 'pointer',
  padding: '6px 0',
  borderBottom: active ? `2px solid ${themeColor}` : '2px solid transparent'
});
