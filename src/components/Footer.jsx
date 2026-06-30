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
            <p className="ftline">India's complete turf booking and management platform. Powering sports businesses and connecting players.</p>
            <div className="ftsocs">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                  url: "https://www.facebook.com/profile.php?id=61590527524560",
                  label: "Facebook"
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                  url: "https://www.instagram.com/matchticket_/",
                  label: "Instagram"
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                  url: "https://www.linkedin.com/company/matchticket",
                  label: "LinkedIn"
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                    </svg>
                  ),
                  url: "https://www.youtube.com/@MatchTicket",
                  label: "YouTube"
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  ),
                  url: "https://wa.me/918940261212",
                  label: "WhatsApp"
                }
              ].map((s, i) => (
                <a key={i} className="fsoc" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{marginTop:14,display:"inline-flex",alignItems:"center",gap:6,background:"var(--lime2)",border:"1px solid var(--lime3)",borderRadius:8,padding:"5px 14px",fontSize:12,fontWeight:700,color:"var(--lime)"}}>🇮🇳 Made in India</div>
          </div>
          <div>
            <div className="ftcoltitle">For Owners</div>
            <ul className="ftlinks">
              {[["list-turf","List Your Turf"],["list-turf","Website Builder"],["list-turf","Pricing"],["list-turf","Dashboard"]].map(([p,l])=>(
                <li key={l}><button onClick={()=>navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftcoltitle">For Players</div>
            <ul className="ftlinks">
              {[["find-turf","Find a Turf"],["find-turf","Browse by Sport"],["find-turf","Browse by City"],["contact","My Bookings"]].map(([p,l])=>(
                <li key={l}><button onClick={()=>navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftcoltitle">Company</div>
            <ul className="ftlinks">
              {[["about","About Us"],["blog","Blog"],["contact","Contact"],["contact","Help Center"]].map(([p,l])=>(
                <li key={l}><button onClick={()=>navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ftcoltitle">Legal</div>
            <ul className="ftlinks">
              {[["privacy","Privacy Policy"],["terms","Terms & Conditions"],["refund","Refund Policy"],["cookies","Cookie Policy"],["grievance","Grievance Policy"],["disclaimer","Disclaimer"]].map(([p,l])=>(
                <li key={l}><button onClick={()=>navigate(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{background:"rgba(202,255,0,.05)",border:"1px solid var(--lime3)",borderRadius:10,padding:"12px 20px",marginBottom:16,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--lime)"}}>⚖️ Grievance Officer</div>
          <div style={{fontSize:12,color:"var(--muted)"}}>As per IT Rules 2021 · <button onClick={()=>navigate("grievance")} style={{background:"none",border:"none",cursor:"pointer",color:"var(--lime)",fontSize:12,fontWeight:700,fontFamily:"var(--B)",padding:0}}>contact@matchticket.in</button> · +91 89402 61212</div>
          <div style={{fontSize:11,color:"var(--muted2)"}}>Responds within 24 hrs · Resolves within 15 working days</div>
        </div>
        <div className="ftbot">
          <div className="ftcopy">© 2025 Buyp Technologies Private Limited. All rights reserved.</div>
          <div style={{fontSize:12,color:"var(--muted)"}} itemScope itemType="https://schema.org/Organization">
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
