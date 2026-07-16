import React from 'react';
import Logo from './Logo';

/**
 * Footer — site-wide
 * Sections: Brand+social, For Owners, For Players, Company, Legal
 * Includes: Grievance Officer strip (IT Rules 2021), Schema.org microdata
 *
 * Legal links — add new pages here and in pages/index.js + App.jsx
 */
function Footer({ navigate }) {
  return (
    <footer className="ftwrap" role="contentinfo" aria-label="Site Footer"><div className="ft">
      <div className="fttop">
        <div>
          <div className="ftlogo" style={{ display: 'block', marginBottom: 14 }}>
            <Logo variant="full" theme="dark" height={32} />
          </div>

          <div>
            <div className="ftcoltitle">For Owners</div>
            <ul className="ftlinks">
              {[["list-turf", "List Your Turf"], ["list-turf", "Website Builder"], ["list-turf", "Pricing"], ["list-turf", "Dashboard"]].map(([p, l]) => (
                <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftcoltitle">For Players</div>
            <ul className="ftlinks">
              {[["find-turf", "Find a Turf"], ["find-turf", "Browse by Sport"], ["find-turf", "Browse by City"], ["contact", "My Bookings"]].map(([p, l]) => (
                <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftcoltitle">Company</div>
            <ul className="ftlinks">
              {[["about", "About Us"], ["blog", "Blog"], ["contact", "Contact"], ["faq", "FAQ"], ["contact", "Help Center"]].map(([p, l]) => (
                <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftcoltitle">Legal</div>
            <ul className="ftlinks">
              {[["privacy", "Privacy Policy"], ["terms", "Terms & Conditions"], ["refund", "Refund Policy"], ["cookies", "Cookie Policy"], ["grievance", "Grievance Policy"], ["disclaimer", "Disclaimer"]].map(([p, l]) => (
                <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
              ))}
            </ul>

          </div>
          <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6, background: "var(--lime2)", border: "1px solid var(--lime3)", borderRadius: 8, padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "var(--lime)" }}>🇮🇳 Made in India</div>
        </div>
        <div>
          <div className="ftcoltitle">For Owners</div>
          <ul className="ftlinks">
            {[["list-turf", "List Your Turf"], ["list-turf", "Website Builder"], ["list-turf", "Pricing"], ["list-turf", "Dashboard"]].map(([p, l]) => (
              <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="ftcoltitle">For Players</div>
          <ul className="ftlinks">
            {[["find-turf", "Find a Turf"], ["find-turf", "Browse by Sport"], ["find-turf", "Browse by City"], ["contact", "My Bookings"]].map(([p, l]) => (
              <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="ftcoltitle">Company</div>
          <ul className="ftlinks">
            {[["about", "About Us"], ["blog", "Blog"], ["contact", "Contact"], ["contact", "Help Center"]].map(([p, l]) => (
              <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="ftcoltitle">Legal</div>
          <ul className="ftlinks">
            {[["privacy", "Privacy Policy"], ["terms", "Terms & Conditions"], ["refund", "Refund Policy"], ["cookies", "Cookie Policy"], ["grievance", "Grievance Policy"], ["disclaimer", "Disclaimer"]].map(([p, l]) => (
              <li key={l}><button onClick={() => navigate(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ background: "rgba(202,255,0,.05)", border: "1px solid var(--lime3)", borderRadius: 10, padding: "12px 20px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lime)" }}>⚖️ Grievance Officer</div>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>As per IT Rules 2021 · <button onClick={() => navigate("grievance")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--lime)", fontSize: 12, fontWeight: 700, fontFamily: "var(--B)", padding: 0 }}>contact@matchticket.in</button> · +91 91235 64005</div>
        <div style={{ fontSize: 11, color: "var(--muted2)" }}>Responds within 24 hrs · Resolves within 15 working days</div>
      </div>
      <div className="ftbot">
        <div className="ftcopy">© 2025 Buyp Technologies Private Limited. All rights reserved.</div>
        <div style={{ fontSize: 12, color: "var(--muted)" }} itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Buyp Technologies Private Limited</span>
          {" · "}
          <span itemScope itemType="https://schema.org/PostalAddress" itemProp="address">
            <span itemProp="addressLocality">Tenkasi</span>, <span itemProp="addressRegion">Tamil Nadu</span>
          </span>
          {" · CIN: U72900TN2021PTC141881"}
        </div>
      </div>
    </div></footer>
  );
}

export default Footer;
