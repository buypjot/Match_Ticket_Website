import React from 'react';

/** Turf listing card — image, badges, sports tags, amenities, price, book button */
export default function TurfCard({ t, onBook }) {

  return (
    <div className="tc">
      <div className="tc-img" style={{ background: t.bg }} role="img" aria-label={`${t.n} turf in ${t.loc}`}>
        <span style={{ fontSize: 50 }} aria-hidden="true">{t.e}</span>
        <div className="tc-bs">
          <span className="tb g">✅ {t.slots} slots</span>
          {t.verified && <span className="tb v">☑ Verified</span>}
        </div>
        <div className="tc-rat">⭐ {t.r}</div>
      </div>
      <div className="tc-body">
        <div className="tc-name">{t.n}</div>
        <div className="tc-loc">📍 {t.loc}</div>
        <div className="tc-tags">{t.s.map(sp => <span key={sp} className="tt">{sp}</span>)}</div>
        <div className="tc-am">{t.amenities.map((a, i) => <span key={i}>{a}</span>)}</div>
        <div className="tc-foot">
          <div className="tc-pr">From <strong>{t.p}/hr</strong></div>
          <button className="tc-bk" onClick={onBook}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
