/** Cookie Policy — 4 cookie types, opt-out instructions */
import React from 'react';
import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../../components/PolicyShell';

function Cookies({ navigate }) {
  return (
    <PolicyShell badge="Legal" title="COOKIE POLICY." navigate={navigate}>
      <PolEff d="21 April 2026"/>
      <PolP t="This Cookie Policy explains how Match Ticket uses cookies and similar tracking technologies when you visit our website or use our mobile applications. By using our platform, you consent to the use of cookies as described in this policy."/>
      <PolDiv/>
      <PolH t="1. What Are Cookies?"/>
      <PolP t="Cookies are small text files placed on your device when you visit a website or use an app. They are widely used to make websites and apps work more efficiently and to provide information to website owners. Cookies do not contain personal data directly — they contain a unique identifier used to recognise your device."/>
      <PolH t="2. Types of Cookies We Use"/>
      {[
        {ico:"🔒",name:"Strictly Necessary Cookies",color:"var(--lime3)",textColor:"var(--lime)",desc:"These cookies are essential for the platform to function. They enable core features such as account login, booking sessions, and security. You cannot opt out of these as the platform cannot work without them.",examples:["Session authentication tokens","Security and anti-fraud identifiers","Booking session state cookies"]},
        {ico:"⚙️",name:"Functional Cookies",color:"rgba(100,150,255,.22)",textColor:"#8aadff",desc:"These cookies remember your preferences and settings to provide a personalised experience. They are not essential but significantly improve how the platform works for you.",examples:["Remembered language or region preferences","Saved search filters (city, sport)","UI preferences"]},
        {ico:"📊",name:"Analytics and Performance Cookies",color:"rgba(255,165,0,.18)",textColor:"#ffb347",desc:"These cookies help us understand how visitors interact with our platform — which pages are visited most and how to improve the experience. All analytics data is aggregated and anonymised.",examples:["Google Analytics or similar tools","Page visit counts and session duration","Feature usage tracking"]},
        {ico:"📣",name:"Marketing and Targeting Cookies",color:"rgba(255,65,108,.15)",textColor:"var(--pink)",desc:"These cookies may be used to show relevant advertisements based on your interests. You can opt out of marketing cookies at any time.",examples:["Retargeting ad pixels","Campaign attribution tracking","Promotional content personalisation"]},
      ].map((ct,i)=>(
        <div key={i} style={{background:"var(--card)",border:`1px solid ${ct.color}`,borderRadius:14,padding:"22px 24px",marginBottom:16}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
            <span style={{fontSize:22}}>{ct.ico}</span>
            <div style={{fontSize:15,fontWeight:800,color:ct.textColor}}>{ct.name}</div>
          </div>
          <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.7,marginBottom:12}}>{ct.desc}</p>
          <div style={{fontSize:12,fontWeight:700,color:"var(--muted2)",letterSpacing:".08em",textTransform:"uppercase",marginBottom:8}}>Examples</div>
          <PolUl items={ct.examples}/>
        </div>
      ))}
      <PolH t="3. Third-Party Cookies"/>
      <PolUl items={[
        "Razorpay — payment processing and fraud prevention",
        "Google Analytics — anonymised usage analytics",
        "Firebase or Cloud Messaging — push notifications",
        "Meta Pixel or Google Ads — marketing attribution where applicable",
        "Cloudflare — security and performance optimisation",
      ]}/>
      <PolH t="4. How Long Do Cookies Last?"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:18}}>
        {[
          ["Session Cookies","Deleted when you close the browser or app"],
          ["Persistent Cookies","Remain on your device for a set period (days to months)"],
          ["Authentication Tokens","Typically 30 days, or until you log out"],
          ["Analytics Cookies","Usually 12 to 24 months, then expired"],
        ].map(([k,v],i)=>(
          <div key={i} style={{background:"var(--bg3)",borderRadius:9,padding:"12px 14px",border:"1px solid var(--border)"}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--text)",marginBottom:4}}>{k}</div>
            <div style={{fontSize:13,color:"var(--muted)"}}>{v}</div>
          </div>
        ))}
      </div>
      <PolH t="5. Managing and Controlling Cookies"/>
      <PolUl items={[
        "Browser Settings — Most browsers allow you to view, delete, or block cookies. Note: blocking all cookies may affect platform functionality.",
        "In-App Preferences — Where applicable, manage notification and tracking preferences within the Match Ticket app settings.",
        "Opt-Out of Analytics — You can opt out of Google Analytics tracking at tools.google.com.",
        "Opt-Out of Marketing — Opt out through your device ad settings or tools like youradchoices.com.",
      ]}/>
      <PolBox>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:8}}>Your Cookie Preferences</div>
        <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.7,marginBottom:8}}>By continuing to use Match Ticket, you consent to our use of strictly necessary and functional cookies. You may opt out of analytics and marketing cookies at any time.</p>
        <div style={{fontSize:13,color:"var(--muted2)"}}>To withdraw consent, email us at contact@matchticket.in</div>
      </PolBox>
      <PolH t="6. Do Not Track"/>
      <PolP t="Some browsers offer a Do Not Track setting that signals websites not to track you. Our platform currently does not respond to Do Not Track signals, but we respect your right to opt out through the methods described above."/>
      <PolH t="7. Cookies on Mobile Applications"/>
      <PolP t="While traditional cookies are browser-based, our mobile apps may use similar technologies such as device identifiers, SDKs, and local storage to provide equivalent functionality. These follow the same principles described in this policy."/>
      <PolH t="8. Updates to This Policy"/>
      <PolP t="We may update this Cookie Policy from time to time. Any updates will be posted on this page with a revised effective date."/>
      <PolH t="9. Contact Us"/>
      <PolBox>
        <div style={{fontSize:15,fontWeight:700,color:"var(--text)",marginBottom:8}}>Match Ticket — Cookie Policy Queries</div>
        <div style={{fontSize:14,color:"var(--muted)",marginBottom:4}}>Email: contact@matchticket.in</div>
        <div style={{fontSize:14,color:"var(--muted)"}}>Buyp Technologiesnologies Private Limited, 158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811, India</div>
      </PolBox>
    </PolicyShell>
  );
}

export default Cookies;
