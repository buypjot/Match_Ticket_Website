/** Grievance Redressal — IT Rules 2021 Rule 3(2)(b)
 * Officer: Anusiya (Manager) — grievance@matchticket.in — +91 89402 61212 */
import React, { useState } from 'react';
import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../../components/PolicyShell';

function Grievance({ navigate }) {
  const [faqOpen, setFaqOpen] = useState(null);
  const FAQS = [
    { q: "What types of complaints can I file?",
      a: "You can file complaints about: incorrect booking charges, platform errors, data privacy concerns, content on the platform that violates our policies, issues with turf owner conduct, or any breach of our Terms & Conditions or applicable law." },
    { q: "How long will it take to resolve my complaint?",
      a: "We acknowledge all complaints within 24 hours. Most complaints are resolved within 7 working days. For complex cases involving third parties (banks, turf owners), resolution may take up to 15 working days as mandated by IT Rules 2021." },
    { q: "What if my complaint is not resolved in 15 days?",
      a: "If your complaint is not resolved within 15 working days, you may escalate to the National Consumer Disputes Redressal Commission (NCDRC) at edaakhil.nic.in, or approach the relevant Adjudicating Officer under the IT Act 2000. You may also file a complaint with your state consumer forum." },
    { q: "Can I file a complaint about another user or turf owner?",
      a: "Yes. If you believe a turf owner or player on the platform has violated our policies or the law, file a complaint with details and any evidence. We investigate all complaints and take appropriate action including account suspension." },
    { q: "How do I report a data privacy issue?",
      a: "Email grievance@matchticket.in with subject line DATA PRIVACY COMPLAINT. Include your registered email, a description of the concern, and any relevant details. We handle data complaints with priority and aim to resolve within 72 hours." },
  ];

  return (
    <PolicyShell badge="Compliance" title={<>GRIEVANCE<br/><span className="hl">REDRESSAL.</span></>} navigate={navigate}>
      <PolEff d="21 April 2026"/>
      <PolP t="Buyp Technologies Private Limited (operating Match Ticket) is committed to resolving all user and partner grievances in a fair, transparent, and timely manner. This policy is published in compliance with Rule 3(2)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021."/>
      <PolDiv/>

      <PolH t="1. Grievance Officer"/>
      <PolBox>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <div style={{fontSize:13,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--lime)",marginBottom:4}}>Designated Grievance Officer</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            {[
              ["Full Name",        "Anusiya"],
              ["Designation",      "Manager"],
              ["Email",            "grievance@matchticket.in"],
              ["Phone",            "+91 89402 61212"],
              ["Working Hours",    "Monday to Saturday, 9 AM to 7 PM IST"],
              ["Response Time",    "Acknowledgement within 24 hours"],
            ].map(([k,v],i)=>(
              <div key={i} style={{background:"var(--bg3)",borderRadius:10,padding:"12px 16px"}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--muted)",marginBottom:4}}>{k}</div>
                <div style={{fontSize:14,fontWeight:700,color:"var(--text)"}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </PolBox>
      <PolP t="The Grievance Officer is responsible for receiving and resolving complaints from users, turf owners, and any person affected by our platform's operations. The officer is authorised to take corrective action including content removal, account action, and refund processing."/>

      <PolH t="2. How to File a Complaint"/>
      <PolP t="You can file a grievance through any of the following channels:"/>
      <PolUl items={[
        "Email: grievance@matchticket.in — include your registered email, booking ID (if applicable), and a clear description of the issue",
        "WhatsApp: +91 89402 61212 — available Monday to Saturday, 9 AM to 7 PM IST",
        "Contact Form: matchticket.in/contact — select 'Grievance / Complaint' as the subject type",
        "Post: Grievance Officer, Buyp Technologies Private Limited, 158 P Railway Road, Tenkasi, Tamil Nadu — 627 811",
      ]}/>

      <PolH t="3. Information to Include"/>
      <PolP t="To help us resolve your complaint quickly, please provide:"/>
      <PolUl items={[
        "Your full name and registered email address or phone number",
        "Booking ID or transaction ID (if the complaint relates to a booking or payment)",
        "Date and time of the incident",
        "A clear description of the issue",
        "Any supporting documents, screenshots, or evidence",
        "Your preferred resolution (refund, account action, content removal, etc.)",
      ]}/>

      <PolH t="4. Resolution Timeline"/>
      <PolBox>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[
            ["Acknowledgement","Within 24 hours of receipt"],
            ["Standard complaints","Resolved within 7 working days"],
            ["Complex complaints","Resolved within 15 working days"],
            ["Data privacy complaints","Priority — within 72 hours"],
            ["Payment disputes","Resolved within 5 working days"],
            ["Legal/IP complaints","Acknowledged within 24 hrs, actioned within 36 hrs"],
          ].map(([k,v],i)=>(
            <div key={i} style={{background:"var(--bg3)",borderRadius:10,padding:"12px 16px",border:"1px solid var(--border)"}}>
              <div style={{fontSize:11,color:"var(--muted)",marginBottom:3}}>{k}</div>
              <div style={{fontSize:13,fontWeight:700,color:"var(--lime)"}}>{v}</div>
            </div>
          ))}
        </div>
      </PolBox>

      <PolH t="5. Escalation — If Not Resolved"/>
      <PolP t="If your complaint is not acknowledged within 24 hours, or not resolved within 15 working days, you may escalate through the following channels:"/>
      <PolUl items={[
        "National Consumer Disputes Redressal Commission (NCDRC): edaakhil.nic.in — file an e-complaint online",
        "Consumer Helpline: 1800-11-4000 (toll-free) or 14404",
        "Adjudicating Officer under IT Act 2000: approach the IT Secretary of Tamil Nadu",
        "Cyber Crime: cybercrime.gov.in — for complaints involving fraud, hacking, or data theft",
        "Reserve Bank of India (RBI): for payment-related grievances not resolved by us — cms.rbi.org.in",
      ]}/>

      <PolH t="6. Data Privacy Grievances (DPDP Act 2023)"/>
      <PolP t="Under the Digital Personal Data Protection Act 2023, you have the right to:"/>
      <PolUl items={[
        "Access the personal data we hold about you",
        "Correct inaccurate or outdated personal data",
        "Request erasure of your personal data (right to be forgotten)",
        "Withdraw consent for data processing at any time",
        "Nominate a person to exercise your rights on your behalf",
      ]}/>
      <PolP t="To exercise any of these rights, email grievance@matchticket.in with subject line: DPDP DATA REQUEST. We will respond within 72 hours and process the request within 15 days."/>

      <PolH t="7. Content & IP Complaints"/>
      <PolP t="If you believe any content on Match Ticket infringes your intellectual property rights, is defamatory, or is otherwise unlawful:"/>
      <PolUl items={[
        "Email grievance@matchticket.in with subject: IP/LEGAL COMPLAINT",
        "Include: your name and contact, description of the content, URL or location on the platform, your relationship to the content (owner, affected party), and the specific legal basis for your complaint",
        "We will acknowledge within 24 hours and take action within 36 hours for clearly unlawful content",
      ]}/>

      <PolH t="8. Turf Owner Grievances"/>
      <PolP t="Turf owners (Partners/Vendors) on the Match Ticket platform may file grievances about: incorrect settlement amounts, account suspension, listing removal, platform technical issues, or any breach of their agreement with Match Ticket."/>
      <PolP t="Owner grievances should be sent to owners@matchticket.in or the Grievance Officer email above. We apply the same 15-day resolution timeline for all grievances regardless of whether the complainant is a user or a partner."/>

      <PolH t="9. Periodic Review"/>
      <PolP t="Match Ticket reviews all grievance patterns monthly to identify and fix systemic issues. We publish a quarterly summary of grievance statistics in our dashboard for transparency."/>

      <PolH t="10. Contact"/>
      <PolBox>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:8}}>Grievance Officer — Match Ticket</div>
        <div style={{fontSize:13,color:"var(--muted)",marginBottom:4}}>Email: grievance@matchticket.in</div>
        <div style={{fontSize:13,color:"var(--muted)",marginBottom:4}}>Phone: +91 89402 61212</div>
        <div style={{fontSize:13,color:"var(--muted)",marginBottom:4}}>Address: 158 P, Railway Road, Tenkasi, Tamil Nadu — 627 811</div>
        <div style={{fontSize:12,color:"var(--muted2)",marginTop:8}}>Buyp Technologies Private Limited | CIN: U72900TN2021PTC141881 | GST: 33AAJCB6933B1ZZ</div>
      </PolBox>

      <div style={{marginTop:40,display:"flex",gap:12,flexWrap:"wrap"}}>
        <button className="bo sm" onClick={()=>navigate("privacy")}>Privacy Policy</button>
        <button className="bo sm" onClick={()=>navigate("terms")}>Terms and Conditions</button>
        <button className="bo sm" onClick={()=>navigate("refund")}>Refund Policy</button>
        <button className="bo sm" onClick={()=>navigate("contact")}>Contact Us</button>
      </div>
    </PolicyShell>
  );
}

export default Grievance;


/* ══════════════════════════════════
   COOKIE CONSENT BANNER
   DPDP Act 2023 + Cookie Policy
══════════════════════════════════ */
function CookieBanner({ onAccept, onEssential, onManage }) {
  return (
    <div style={{
      position:"fixed",bottom:0,left:0,right:0,zIndex:500,
      background:"var(--bg2)",borderTop:"1px solid var(--lime3)",
      padding:"18px 32px",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      flexWrap:"wrap",gap:14,
      boxShadow:"0 -4px 24px rgba(0,0,0,.5)"
    }}>
      <div style={{flex:1,minWidth:280}}>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:5}}>
          🍪 We use cookies
        </div>
        <div style={{fontSize:12,color:"var(--muted)",lineHeight:1.6}}>
          We use essential cookies to operate this platform, and optional analytics cookies to improve your experience.
          By clicking <strong style={{color:"var(--text)"}}>Accept All</strong>, you consent to all cookies as described in our{" "}
          <button onClick={onManage} style={{background:"none",border:"none",cursor:"pointer",color:"var(--lime)",fontSize:12,fontFamily:"var(--B)",padding:0,textDecoration:"underline"}}>Cookie Policy</button>.
          Under the DPDP Act 2023, you may withdraw consent at any time.
        </div>
      </div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",flexShrink:0}}>
        <button
          onClick={onEssential}
          style={{background:"transparent",border:"1px solid var(--borderH)",borderRadius:9,padding:"9px 18px",fontSize:13,fontWeight:600,color:"var(--muted)",fontFamily:"var(--B)",cursor:"pointer"}}
        >Essential Only</button>
        <button
          onClick={onManage}
          style={{background:"transparent",border:"1px solid var(--lime3)",borderRadius:9,padding:"9px 18px",fontSize:13,fontWeight:600,color:"var(--lime)",fontFamily:"var(--B)",cursor:"pointer"}}
        >Manage Preferences</button>
        <button
          onClick={onAccept}
          style={{background:"var(--lime)",border:"none",borderRadius:9,padding:"9px 20px",fontSize:13,fontWeight:700,color:"#000",fontFamily:"var(--B)",cursor:"pointer"}}
        >Accept All</button>
      </div>
    </div>
  );
}
