import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { updatePageMeta } from '../utils/meta';

export default function PublicContact({ slug, navTo }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { 
    client.get(`/public/${slug}/contact`)
      .then(r => {
        setData(r.data);
        if (r.data?.customer) {
          updatePageMeta(r.data.customer, r.data.grounds || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: '#fff' }}>Loading contact info...</div>;

  const customer = data?.customer || {};
  const theme = customer?.theme_color || '#ff007f';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

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
            ✉ Get In Touch
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', marginTop: '15px' }}>
            We'd Love to <span style={{ color: '#fff' }}>Hear From You</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '540px', margin: '14px auto 0', lineHeight: 1.75 }}>
            Have a question, suggestion, or want to make a group booking? Send us a message and we'll get back to you shortly.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', padding: '56px 5% 72px', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Left: Info Panel */}
        <div style={{
          background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
          padding: '32px', height: 'fit-content'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: theme, marginBottom: '24px', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            Contact Information
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${theme}20`, color: theme, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
              ✉
            </div>
            <div>
              <h4 style={{ margin: '0 0 3px', fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>Email Us</h4>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.88rem' }}>{customer.email || `support@${slug}.in`}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${theme}20`, color: theme, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
              📞
            </div>
            <div>
              <h4 style={{ margin: '0 0 3px', fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>Call Us</h4>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.88rem' }}>{customer.phone || customer.mobile_number || '+91 91235 64005'}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: `${theme}20`, color: theme, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
              📍
            </div>
            <div>
              <h4 style={{ margin: '0 0 3px', fontSize: '0.95rem', fontWeight: 800, color: '#fff' }}>Location</h4>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.88rem' }}>{customer.site_name || 'MatchTicket'} Arena, {customer.city || 'Tenkasi'}</p>
            </div>
          </div>
        </div>

        {/* Right: Form Panel */}
        <div style={{
          background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px',
          padding: '36px', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: theme }}></div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: theme, marginBottom: '24px' }}>
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Your Name</label>
              <input type="text" required placeholder="John Doe" style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }} />
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Email Address</label>
              <input type="email" required placeholder="john@example.com" style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }} />
            </div>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px' }} />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#94a3b8', marginBottom: '4px' }}>Message</label>
              <textarea required placeholder="Write your message here..." style={{ width: '100%', padding: '12px', background: '#1f2937', color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', minHeight: '110px' }}></textarea>
            </div>
            
            <button type="submit" style={{
              width: '100%', padding: '13px', background: submitted ? '#16a34a' : theme, color: '#fff',
              border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer'
            }}>
              {submitted ? '✓ Message Sent!' : '➔ Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
