import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../api/config';

export default function PublicTenantSite({ slug, navigate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);

    fetch(`${API_BASE_URL}/public/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Site not found');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        // Update document title dynamically
        const siteTitle = data?.customer?.brand_name || data?.customer?.organization_name || data?.customer?.name || slug;
        document.title = `${siteTitle} | MatchTicket`;
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
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg, #0b0f19)',
        color: '#fff'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(255,255,255,0.1)',
            borderTopColor: 'var(--lime, #ccff00)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <p style={{ color: 'var(--txt2, #94a3b8)' }}>Loading website...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        background: 'var(--bg, #0b0f19)',
        color: '#fff'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--lime, #ccff00)' }}>404</h1>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Website Not Found</h2>
          <p style={{ color: 'var(--txt2, #94a3b8)', marginBottom: '2rem' }}>
            The sports page for "<strong>{slug}</strong>" does not exist or has been removed.
          </p>
          <button
            onClick={() => navigate('home')}
            style={{
              background: 'var(--lime, #ccff00)',
              color: '#000',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { customer, grounds = [] } = data;
  const brandName = customer?.brand_name || customer?.organization_name || customer?.name || slug;
  const brandLogo = customer?.brand_logo_url;

  return (
    <div style={{ background: 'var(--bg, #0b0f19)', color: '#fff', minHeight: '100vh' }}>
      {/* Header Banner for Tenant */}
      <section style={{
        padding: '60px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(20,46,16,0.9), rgba(10,30,10,0.95))',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {brandLogo && (
            <img
              src={brandLogo.startsWith('http') ? brandLogo : `https://app.manmakers.in/${brandLogo.replace(/^\/+/, '')}`}
              alt={brandName}
              style={{ maxHeight: '80px', marginBottom: '20px', borderRadius: '8px' }}
            />
          )}
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>{brandName}</h1>
          <p style={{ color: 'var(--txt2, #94a3b8)', fontSize: '1.1rem' }}>
            {customer?.city ? `📍 ${customer.city}` : 'Book your slots online'}
          </p>

          <div style={{ marginTop: '24px' }}>
            <a
              href={`https://app.manmakers.in/${slug}/booking`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--lime, #ccff00)',
                color: '#000',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(204,255,0,0.3)'
              }}
            >
              ⚡ Book Turf Slots Now
            </a>
          </div>
        </div>
      </section>

      {/* Available Grounds */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
          Available Grounds & Facilities
        </h2>

        {grounds.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--txt2, #94a3b8)' }}>No active grounds listed yet.</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {grounds.map((g) => (
              <div key={g.id} style={{
                background: 'var(--bg2, #141c2e)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                {g.playground_image_url && (
                  <img
                    src={g.playground_image_url.startsWith('http') ? g.playground_image_url : `https://app.manmakers.in/${g.playground_image_url.replace(/^\/+/, '')}`}
                    alt={g.name}
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{g.name}</h3>
                  <p style={{ color: 'var(--txt2, #94a3b8)', fontSize: '0.9rem', marginBottom: '12px' }}>
                    {g.ground_type || 'Sports Ground'}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--lime, #ccff00)' }}>
                      ₹{g.rate_per_hour}/hr
                    </span>
                    <a
                      href={`https://app.manmakers.in/${slug}/booking`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(204,255,0,0.15)',
                        color: 'var(--lime, #ccff00)',
                        border: '1px solid var(--lime, #ccff00)',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textDecoration: 'none'
                      }}
                    >
                      Book Slot
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
