import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { getMediaUrl } from '../utils/media';

export default function PublicSports({ slug, navTo }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    client.get(`/public/${slug}/sports`)
      .then(r => { setData(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: '#fff' }}>Loading sports & grounds...</div>;
  if (!data) return <div style={{ textAlign: 'center', padding: 80, color: '#fff' }}><h2>Error loading grounds</h2></div>;

  const { customer = {}, grounds = [] } = data;
  const theme = customer?.theme_color || '#ff007f';

  return (
    <div style={{ background: '#0a0f1a', color: '#fff', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {/* PAGE HERO */}
      <div style={{
        background: `linear-gradient(135deg, #0f1c2d 0%, ${theme} 100%)`,
        textAlign: 'center', padding: '72px 5% 60px', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=70')",
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: '#fff', background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800 }}>
            ⚽ Our Facilities
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', marginTop: '15px' }}>
            Explore Our <span style={{ color: '#fff' }}>Playgrounds</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '540px', margin: '14px auto 0', lineHeight: 1.75 }}>
            State-of-the-art facilities maintained to the highest standards. Find your perfect ground and book instantly.
          </p>
        </div>
      </div>

      <div style={{ padding: '56px 5% 72px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '26px' }}>
          {grounds.length > 0 ? grounds.map((g) => {
            const isUnavailable = g.is_closed || g.is_under_maintenance;
            return (
              <div key={g.id} style={{
                background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
                overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative'
              }}>
                <div style={{ height: '180px', overflow: 'hidden', background: '#1f2937', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px', 
                    background: isUnavailable ? '#ef4444' : theme, 
                    color: '#fff', padding: '4px 10px', borderRadius: '50px', fontWeight: 800, fontSize: '0.68rem', zIndex: 5,
                    display: 'flex', alignItems: 'center', gap: '5px'
                  }}>
                    {g.is_under_maintenance ? 'MAINTENANCE' : g.is_closed ? 'CLOSED' : 'AVAILABLE'}
                  </div>
                  {g.playground_image_url ? (
                    <img 
                      src={getMediaUrl(g.playground_image_url)} 
                      alt={g.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isUnavailable ? 0.6 : 1 }} 
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.3 }}>🏟️</div>
                  )}
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: theme, marginBottom: '8px' }}>
                    {g.name}
                  </h3>
                  <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px', fontSize: '0.85rem', flex: 1 }}>
                    {g.description || 'A premium playing surface designed for maximum performance and enjoyment.'}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', marginTop: 'auto' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                      ₹{g.rate_per_hour} <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 400 }}>/ hr</span>
                    </div>
                    <button
                      onClick={() => navTo('booking')}
                      disabled={isUnavailable}
                      style={{
                        background: isUnavailable ? 'rgba(255,255,255,0.08)' : theme, color: '#fff',
                        border: 'none', padding: '10px 22px', borderRadius: '50px',
                        fontWeight: 800, fontSize: '0.85rem', cursor: isUnavailable ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {isUnavailable ? 'Unavailable' : 'Book Now'}
                    </button>
                  </div>
                </div>
              </div>
            );
          }) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 20px', background: '#111827', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '16px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚽</div>
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>No Playgrounds Available Yet</h3>
              <p style={{ color: '#94a3b8' }}>Please check back soon for our facility updates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
