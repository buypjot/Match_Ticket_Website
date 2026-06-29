import React from 'react';

/** Testimonial card for owners or players */
export default function TestiCard({ t, isOwner }) {
  return (
    <div className="tcard">
      <div className={`ttype ${isOwner ? "tt-o" : "tt-p"}`}>{isOwner ? "🏟️ Turf Owner" : "⚽ Player"}</div>
      <div className="tstars">{t.stars}</div>
      <div className="tquote">{t.q}</div>
      <div className="tauth">
        <div className="tav" style={{ background: t.ac, color: t.tc }}>{t.av}</div>
        <div><div className="tnm">{t.n}</div><div className="trl">{t.role}</div></div>
      </div>
    </div>
  );
}
