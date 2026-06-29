import React from 'react';

/**
 * PolicyShell — wrapper for all legal pages.
 * Also exports helpers: PolH, PolP, PolDiv, PolEff, PolUl, PolBox
 *
 * Usage:
 *   import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../components/PolicyShell';
 */
/* ══════════ POLICY SHELL ══════════ */
function PolicyShell({ badge, title, children, navigate }) {
  return (
    <div className="pg">
      <div className="pghero">
        <div className="pghero-grid"/><div className="pghero-glow"/>
        <div className="pghero-inner" style={{maxWidth:820}}>
          <div className="badge a1"><div className="bdot"/>{badge}</div>
          <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(44px,7vw,86px)",lineHeight:.9,letterSpacing:2,marginBottom:14}}>{title}</h1>
        </div>
      </div>
      <div className="pol-sec">{children}</div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"0 clamp(16px,5vw,64px) 48px",display:"flex",gap:12,flexWrap:"wrap"}}>
        <button className="bo sm" onClick={()=>navigate("privacy")}>Privacy Policy</button>
        <button className="bo sm" onClick={()=>navigate("terms")}>Terms and Conditions</button>
        <button className="bo sm" onClick={()=>navigate("refund")}>Refund Policy</button>
        <button className="bo sm" onClick={()=>navigate("cookies")}>Cookie Policy</button>
      </div>
    </div>
  );
}

function PolH({ t }) { return <h2 className="pol-h">{t}</h2>; }
function PolP({ t }) { return <p className="pol-p">{t}</p>; }
function PolDiv() { return <div className="pol-div"/>; }
function PolEff({ d }) {
  return <div className="pol-eff">📅 Effective Date: {d}</div>;
}
function PolUl({ items }) {
  return (
    <ul className="pol-ul">
      {items.map((it,i) => (
        <li key={i}><span className="pol-arrow">→</span><span>{it}</span></li>
      ))}
    </ul>
  );
}
function PolBox({ children, warn }) {
  return <div className={`pol-box${warn?" warn":""}`}>{children}</div>;
}

export default PolicyShell;
export { PolH, PolP, PolDiv, PolEff, PolUl, PolBox };
