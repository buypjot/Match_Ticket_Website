import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../api/config';

function fmtHour(h) {
  if (h === 0) return '12 AM';
  if (h < 12) return `${h} AM`;
  if (h === 12) return '12 PM';
  return `${h - 12} PM`;
}

export default function PublicTenantSite({ slug, navigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // home, sports, services, contact, support
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);

    fetch(`${API_BASE_URL}/public/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Site not found');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        const title = data?.customer?.brand_name || data?.customer?.organization_name || data?.customer?.site_name || slug;
        document.title = `${title} | Book Turf Online`;
      })
      .catch((err) => {
        console.error('Error fetching tenant site:', err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0f19',
        color: '#fff'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '45px',
            height: '45px',
            border: '3px solid rgba(255,255,255,0.1)',
            borderTopColor: '#37d6a6',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        background: '#0b0f19',
        color: '#fff'
      }}>
        <div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: '#37d6a6', fontWeight: 800 }}>404</h1>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Playground Page Not Found</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '450px' }}>
            The sports website for "<strong>{slug}</strong>" does not exist or has been removed.
          </p>
          <button
            onClick={() => navigate('home')}
            style={{
              background: '#37d6a6',
              color: '#0b0f19',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '10px',
              fontWeight: '800',
              fontSize: '0.95rem',
              cursor: 'pointer'
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
  const bookingUrl = `https://app.manmakers.in/${slug}/booking`;

  const getFullMediaUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `https://app.manmakers.in/${url.replace(/^\/+/, '')}`;
  };

  return (
    <div style={{ background: '#0a1423', color: '#ffffff', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {/* ── Public Site Header ── */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(10, 20, 35, 0.95)' : 'rgba(10, 20, 35, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease'
      }}>
        {/* Brand Logo & Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: '#37d6a6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0
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

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="public-desktop-nav">
          <button onClick={() => setActiveTab('home')} style={navTabStyle(activeTab === 'home')}>Home</button>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>Book Now</a>
          <button onClick={() => setActiveTab('sports')} style={navTabStyle(activeTab === 'sports')}>Sports</button>
          <button onClick={() => setActiveTab('services')} style={navTabStyle(activeTab === 'services')}>Services</button>
          <button onClick={() => setActiveTab('contact')} style={navTabStyle(activeTab === 'contact')}>Contact</button>
          <button onClick={() => setActiveTab('support')} style={navTabStyle(activeTab === 'support')}>Support</button>
        </nav>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#37d6a6',
              color: '#0b0f19',
              padding: '10px 22px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(55, 214, 162, 0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            Book Now
          </a>
        </div>
      </header>

      <div style={{ paddingTop: '75px' }}>
        {activeTab === 'home' && (
          <>
            {/* ── HERO SECTION ── */}
            <section style={{
              position: 'relative',
              minHeight: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '90px 5% 70px',
              overflow: 'hidden',
              background: '#0a1423'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.35,
                transform: 'scale(1.05)'
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
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
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#37d6a6',
                      color: '#0b0f19',
                      padding: '14px 32px',
                      borderRadius: '10px',
                      fontWeight: 800,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 20px rgba(55, 214, 162, 0.4)'
                    }}
                  >
                    📅 Book Now
                  </a>
                  <a
                    href="#grounds"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      color: '#ffffff',
                      border: '1.5px solid rgba(255,255,255,0.25)',
                      padding: '14px 28px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '1rem',
                      textDecoration: 'none',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    🖼️ View Grounds
                  </a>
                </div>
              </div>
            </section>

            {/* ── FEATURED GROUNDS ── */}
            <section id="grounds" style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 5%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    padding: '5px 14px',
                    background: 'rgba(55, 214, 162, 0.12)',
                    color: '#37d6a6',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '10px'
                  }}>
                    TOP VENUES
                  </span>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Featured Grounds
                  </h2>
                </div>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#37d6a6', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
                  View All →
                </a>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '26px'
              }}>
                {grounds.map((g) => {
                  const isClosed = g.is_closed;
                  const isMaint = g.is_under_maintenance;
                  const isUnavailable = isClosed || isMaint;

                  return (
                    <div key={g.id} style={{
                      background: '#121d30',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                      transition: 'transform 0.3s ease'
                    }}>
                      {/* Image Container */}
                      <div style={{ position: 'relative', height: '170px', background: '#1a273e', overflow: 'hidden' }}>
                        {g.playground_image_url ? (
                          <img
                            src={getFullMediaUrl(g.playground_image_url)}
                            alt={g.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isUnavailable ? 'brightness(0.5)' : 'none' }}
                          />
                        ) : (
                          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.4 }}>
                            🏟️
                          </div>
                        )}

                        {/* Premium Badge */}
                        {!isUnavailable && (
                          <span style={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            background: '#37d6a6',
                            color: '#0b0f19',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            padding: '4px 10px',
                            borderRadius: '50px',
                            textTransform: 'uppercase'
                          }}>
                            ★ PREMIUM
                          </span>
                        )}

                        {/* Status Overlay */}
                        {isClosed && (
                          <div style={{
                            position: 'absolute', inset: 0, background: 'rgba(10,15,25,0.75)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                          }}>
                            <span style={{ background: '#ef4444', color: '#fff', padding: '6px 14px', borderRadius: '50px', fontWeight: 800, fontSize: '0.8rem' }}>
                              🔴 Closed Now
                            </span>
                          </div>
                        )}

                        {/* Pricing / Timing */}
                        {!isUnavailable && g.is_all_time_available === false && (
                          <span style={{
                            position: 'absolute', bottom: 10, left: 10,
                            background: 'rgba(0,0,0,0.75)', color: '#fff',
                            fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '50px'
                          }}>
                            🕐 {fmtHour(g.opening_hour)} – {fmtHour(g.closing_hour)}
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                          {g.name}
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, flex: 1, marginBottom: '20px' }}>
                          {g.description || 'Professional ground available for hourly slot booking.'}
                        </p>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          borderTop: '1px solid rgba(255,255,255,0.08)',
                          paddingTop: '16px'
                        }}>
                          <div>
                            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#37d6a6' }}>
                              ₹{g.rate_per_hour}
                            </span>
                            <small style={{ color: '#94a3b8', fontSize: '0.75rem', marginLeft: '4px' }}>/ hr</small>
                          </div>

                          <a
                            href={`${bookingUrl}?ground=${g.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              background: isUnavailable ? 'rgba(255,255,255,0.08)' : '#37d6a6',
                              color: isUnavailable ? '#94a3b8' : '#0b0f19',
                              padding: '8px 18px',
                              borderRadius: '8px',
                              fontWeight: 800,
                              fontSize: '0.88rem',
                              textDecoration: 'none',
                              pointerEvents: isUnavailable ? 'none' : 'auto'
                            }}
                          >
                            {isUnavailable ? 'Unavailable' : 'Book →'}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section style={{ background: '#0e1a2e', padding: '70px 5%', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <span style={{
                  padding: '5px 14px', background: 'rgba(55, 214, 162, 0.12)', color: '#37d6a6',
                  borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase'
                }}>
                  SIMPLE PROCESS
                </span>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '10px', marginBottom: '12px' }}>
                  How it Works
                </h2>
                <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 48px' }}>
                  Book your favorite pitch in three simple steps. We handle the logistics so you can focus on the game.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                  {[
                    { step: '01', title: 'Find Venue', desc: 'Select your preferred sport ground and check available time slots.' },
                    { step: '02', title: 'Select & Book', desc: 'Pick your slot, fill contact details, and confirm instantly online.' },
                    { step: '03', title: 'Show Up & Play', desc: 'Arrive at the turf, show your booking confirmation, and start playing!' },
                  ].map((s, idx) => (
                    <div key={idx} style={{
                      background: '#121d30', padding: '32px 24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'left'
                    }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#37d6a6', marginBottom: '16px' }}>{s.step}</div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '10px' }}>{s.title}</h3>
                      <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── SPORTS TAB ── */}
        {activeTab === 'sports' && (
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Supported Sports & Facilities</h1>
            <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Explore top-tier turf pitches designed for maximum performance.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {['Football Turf', 'Cricket Turf', 'Badminton Court', 'Tennis Court'].map((sport, i) => (
                <div key={i} style={{ background: '#121d30', padding: '24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#37d6a6', marginBottom: '10px' }}>{sport}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>High-durability artificial turf with floodlights and spectator seating.</p>
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#37d6a6', fontWeight: 700, textDecoration: 'none' }}>Book Slot →</a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── SERVICES TAB ── */}
        {activeTab === 'services' && (
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>Our Amenities & Services</h1>
            <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Enjoy premium infrastructure for players and spectators.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {['Floodlights', 'Changing Rooms', 'Drinking Water', 'Parking', 'Equipment Rental', 'First Aid Box'].map((amenity, i) => (
                <div key={i} style={{ background: '#121d30', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>✨</span>
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{amenity}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── CONTACT & SUPPORT TABS ── */}
        {(activeTab === 'contact' || activeTab === 'support') && (
          <section style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 5%' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
              {activeTab === 'contact' ? 'Contact Venue' : 'Help & Support'}
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
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#37d6a6',
                    color: '#0b0f19',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    textDecoration: 'none'
                  }}
                >
                  Book Slot Online
                </a>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ── Public Footer ── */}
      <footer style={{
        background: '#070d17',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '45px 5% 30px',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>{siteName}</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Powered by MatchTicket Platform</p>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#37d6a6', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
              Book Turf
            </a>
            <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.9rem' }}>
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

const navLinkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: 600,
  transition: 'color 0.2s'
};

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
