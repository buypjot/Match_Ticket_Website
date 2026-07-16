import React from 'react';

/** Premium Customer/Partner Card */
export default function CustomerCard({ c }) {
  return (
    <div className="tc" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--card)', cursor: 'pointer', transition: 'all 0.3s ease' }} onClick={() => window.open(c.url, '_blank')}>
      <div className="tc-img" style={{ background: c.bg, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }} role="img" aria-label={`${c.n} logo`}>
        {c.logo ? (
          <img src={c.logo} alt={`${c.n} logo`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ fontSize: 40 }} aria-hidden="true">🏢</span>
        )}
        {c.verified && (
          <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(202, 255, 0, 0.9)', color: '#000', padding: '4px 10px', borderRadius: 20, fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
            ☑ Verified
          </div>
        )}
      </div>
      <div className="tc-body" style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 className="tc-name" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text)' }}>{c.n}</h3>
        <div className="tc-loc" style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>📍 {c.loc}</div>
        
        <div style={{ marginBottom: 20, flex: 1 }}>
          <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 8, fontWeight: 600 }}>Available Sports</div>
          <div className="tc-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {c.s.map(sp => (
              <span key={sp} className="tt" style={{ background: 'var(--bg3)', padding: '4px 10px', borderRadius: 6, fontSize: 13, color: 'var(--lime)', border: '1px solid var(--lime3)' }}>
                {sp}
              </span>
            ))}
          </div>
        </div>
        
        <button className="tc-bk" style={{ width: '100%', background: 'var(--lime)', color: '#000', border: 'none', padding: '12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', marginTop: 'auto' }}>
          Visit Now →
        </button>
      </div>
    </div>
  );
}
