import React from 'react';
import { getMediaUrl } from '../utils/media';

/** Turf listing card — implemented matching CustomerCard logo pattern */
export default function TurfCard({ t, onBook }) {
  const companyName = t.company_name || t.company || (t.public_url_slug ? t.public_url_slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Match Ticket Partner');
  let companyLogo = null
  if (t.turf_logo != "") {
    companyLogo = `https://app.matchticket.in/${t.turf_logo}`;
  }



  return (
    <div className="tc" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Top Image Container: Displays Company Logo matching CustomerCard pattern */}
      <div className="tc-img" style={{ background: t.bg || "var(--bg3)", height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }} role="img" aria-label={`${companyName} logo`}>
        {companyLogo ? (
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = 'inline';
              }
            }}
          />
        ) : null}
        <span
          style={{ fontSize: 50, display: companyLogo ? 'none' : 'inline' }}
          aria-hidden="true"
        >
          {t.e || "🏢"}
        </span>

        <div className="tc-bs">
          {t.verified && <span className="tb v">☑ Verified</span>}
        </div>
        <div className="tc-rat">⭐ {t.r}</div>
      </div>

      <div className="tc-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Primary Header: Company Name */}
        <h3 className="tc-name" style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', marginBottom: 4, lineHeight: 1.2 }}>
          {companyName}
        </h3>

        {/* Secondary Headline: Turf Name */}
        <div className="tc-turf-secondary" style={{
          fontSize: '13px',
          fontWeight: '600',
          color: 'var(--lime)',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span>🏟️</span> <span>{t.n}</span>
        </div>

        <div className="tc-loc" style={{ marginBottom: 10 }}>📍 {t.loc}</div>
        <div className="tc-tags">{t.s.map(sp => <span key={sp} className="tt">{sp}</span>)}</div>
        <div className="tc-am">{t.amenities.map((a, i) => <span key={i}>{a}</span>)}</div>
        <div className="tc-foot" style={{ marginTop: 'auto' }}>
          <div className="tc-pr">From <strong>{t.p}/hr</strong></div>
          <button className="tc-bk" onClick={onBook}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
