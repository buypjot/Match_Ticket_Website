import React, { useEffect, useState } from 'react';
import client from '../api/client';
import { updatePageMeta } from '../utils/meta';

export default function PublicSupport({ slug, navTo }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => { 
    client.get(`/public/${slug}/support`)
      .then(r => {
        setData(r.data);
        if (r.data?.customer) {
          updatePageMeta(r.data.customer, r.data.grounds || []);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: '#fff' }}>Loading support & FAQs...</div>;

  const customer = data?.customer || {};
  const theme = customer?.theme_color || '#ff007f';

  const faqs = [
    { q: 'How far in advance can I book a slot?', a: 'You can book a slot up to 30 days in advance. We strongly recommend booking early, especially for weekends and holidays.' },
    { q: 'What is your cancellation and refund policy?', a: 'Cancellations made at least 24 hours prior to the booked time are eligible for a full refund. Cancellations within 24 hours are non-refundable.' },
    { q: 'Do I need to bring my own equipment?', a: 'Ground bookings do not include sports equipment unless stated. We offer affordable equipment rentals — check our Services page for details.' },
    { q: 'How do I receive a receipt or booking confirmation?', a: 'Upon successful payment, you will be redirected to a confirmation page. A detailed receipt will also be displayed.' },
    { q: 'Can I book multiple slots at once?', a: 'Yes! You can select multiple consecutive or non-consecutive hour slots in a single booking.' },
    { q: 'Is my payment information secure?', a: 'Absolutely. All payments are processed through Razorpay, a PCI-DSS compliant payment gateway. We never store your card details.' }
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
            🎧 Help Center
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 900, color: '#fff', marginTop: '15px' }}>
            Support &amp; <span style={{ color: '#fff' }}>FAQ</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: '540px', margin: '14px auto 0', lineHeight: 1.75 }}>
            Answers to your most common questions, and multiple ways to reach us directly.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 5% 72px' }}>
        {/* Support Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          {[
            { icon: '📖', title: 'Booking Guide', desc: 'Learn how to find, select, and reserve your favorite ground in a few easy steps.' },
            { icon: '💳', title: 'Payments & Refunds', desc: 'Understand our payment methods, transaction security, and complete refund process.' },
            { icon: '🛡️', title: 'Rules & Safety', desc: 'Guidelines ensuring a safe, fun, and fair environment for all players and visitors.' }
          ].map((card, i) => (
            <div key={i} style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', textAlign: 'center', padding: '32px 22px' }}>
              <div style={{ width: '64px', height: '64px', background: `${theme}20`, borderRadius: '16px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: theme }}>
                {card.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{card.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
              Frequently Asked <span style={{ color: theme }}>Questions</span>
            </h2>
          </div>

          <div>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{
                background: '#111827', border: `1px solid ${activeFaq === idx ? theme : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '12px', marginBottom: '12px', overflow: 'hidden', transition: 'all 0.2s ease'
              }}>
                <div 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{ padding: '18px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: activeFaq === idx ? theme : '#fff' }}>{faq.q}</span>
                  <span style={{ color: activeFaq === idx ? theme : '#94a3b8', fontSize: '0.9rem', fontWeight: 800 }}>
                    {activeFaq === idx ? '▲' : '▼'}
                  </span>
                </div>
                {activeFaq === idx && (
                  <div style={{ padding: '0 22px 20px', color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '15px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
