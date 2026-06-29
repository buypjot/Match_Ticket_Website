import React from 'react';

/** Accordion FAQ row */
export default function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="faq">
      <div className="faq-q" onClick={onToggle}>
        <div className="faq-qt">{q}</div>
        <div className={`faq-ico${open ? " open" : ""}`}>+</div>
      </div>
      <div className={`faq-ans${open ? " open" : ""}`}>{a}</div>
    </div>
  );
}

/* ── NAVBAR ── */
