import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { updatePageMeta } from '../utils/meta';

export default function PublicServices({ slug, navTo }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    client.get(`/public/${slug}/services`)
      .then(r => {
        setData(r.data);
        if (r.data?.customer) {
          updatePageMeta(r.data.customer, r.data.grounds || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: '#fff' }}>Loading services...</div>;

  const customer = data?.customer || {};
  const theme = customer?.theme_color || '#ff007f';

  const services = [
    { icon: '⚽', title: 'Quality Turf & Grounds', desc: 'Meticulously maintained FIFA-standard artificial turfs and natural grass fields.', tag: 'Premium Turf' },
    { icon: '💡', title: 'Night Matches', desc: 'Play comfortably after dark with our high-intensity anti-glare floodlights.', tag: 'Floodlights' },
    { icon: '🎽', title: 'Equipment Rentals', desc: 'Balls, bibs, gloves, and sports equipment available at affordable rental rates.', tag: 'Rentals' },
    { icon: '🅿️', title: 'Secure Parking', desc: 'Ample, secure, and well-lit parking spaces available right at the venue.', tag: 'Free Parking' },
    { icon: '☕', title: 'Refreshments Area', desc: 'Relax in our lounge area offering cold drinks, snacks, and a social space.', tag: 'Lounge' },
    { icon: '🏆', title: 'Tournament Hosting', desc: 'Full support for corporate events and private tournaments with referees.', tag: 'Events' }
  ];

  return (
    <div style={{ background: '#0a0f1a', color: '#fff', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>
      {/* HERO */}
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
            ★ What We Offer
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', marginTop: '15px' }}>
            Our Premium <span style={{ color: '#fff' }}>Services</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '540px', margin: '14px auto 0', lineHeight: 1.75 }}>
            Discover the facilities and amenities we provide to elevate your sporting experience to the next level.
          </p>
        </div>
      </div>

      <div style={{ padding: '56px 5% 72px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
              padding: '36px 26px 30px', textAlign: 'center'
            }}>
              <div style={{
                width: '72px', height: '72px', background: `${theme}20`, color: theme,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.2rem', margin: '0 auto 22px', borderRadius: '18px'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                {s.title}
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '18px' }}>
                {s.desc}
              </p>
              <span style={{
                display: 'inline-block', padding: '4px 14px', background: `${theme}15`,
                border: `1px solid ${theme}40`, borderRadius: '50px', fontSize: '0.7rem',
                fontWeight: 800, color: theme, textTransform: 'uppercase'
              }}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
