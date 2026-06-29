/** ListYourTurf — owner acquisition: before/after, features, website mockup, 3-tier pricing */
import React, { useState, useEffect } from 'react';
import { THEMES, T_OWNER } from '../data';
import TestiCard from '../components/TestiCard';
import FaqItem  from '../components/FaqItem';

function ListYourTurf({ navigate }) {
  const [faqOpen,setFaqOpen]=useState(null);
  const [theme,setTheme]=useState(0);
  const th=THEMES[theme];
  // ── FAQ Schema ──
  useEffect(() => {
    const FAQ_ID = "mt-faq-schema";
    let faqScript = document.getElementById(FAQ_ID);
    if (faqScript) faqScript.remove();
    const faqs = [
      {q:"How long does it take to list my turf?", a:"Most turf owners are live within 48 hours. Signup, add your details, pick a theme, and our team handles the domain setup and launch."},
      {q:"Do I need technical knowledge?", a:"Zero. We handle everything — domain, website setup, DNS, SSL, and going live. You just provide turf details and choose your theme."},
      {q:"How does the QR code entry work?", a:"When a player books, they get a unique QR via WhatsApp. Your staff uses the Match Ticket Owner App to scan it — booking verified in one second."},
      {q:"Can I add multiple turfs or locations?", a:"Yes. Pro plan supports up to 5 turfs. Elite supports unlimited turfs across multiple cities, each with its own settings."},
      {q:"What is the refund policy?", a:"Strictly no refunds for confirmed bookings. In case of payment failure with no booking confirmation, a refund is processed after verification within 24 hours."},
      {q:"Which cities is Match Ticket available in?", a:"We are currently live in 12+ cities across Tamil Nadu including Chennai, Coimbatore, Tenkasi, Madurai, Salem, Trichy, Erode, and Vellore."},
    ];
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };
    const s = document.createElement("script");
    s.id = FAQ_ID;
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { const el = document.getElementById(FAQ_ID); if(el) el.remove(); };
  }, []);

  const FEATURES=[
    {ico:"🌐",n:"01",t:"Custom Website and Domain",d:"We build a professional website at www.yourturf.com. No Match Ticket branding anywhere. We handle domain purchase, DNS, SSL, and deployment."},
    {ico:"🎨",n:"02",t:"Theme Library",d:"Choose from our curated collection of sports-focused themes. Each is designed to convert visitors into bookings. Looks premium from day one."},
    {ico:"📅",n:"03",t:"Real-Time Booking System",d:"Fully functional slot booking embedded in your site. Players see live availability, pick a slot, and confirm — no phone calls needed."},
    {ico:"💬",n:"04",t:"WhatsApp Automation",d:"Booking confirmation, 2-hour reminders, and cancellation alerts sent automatically to players via WhatsApp. Zero manual effort from you."},
    {ico:"📱",n:"05",t:"QR Code Entry System",d:"Every booking generates a unique QR code sent via WhatsApp. Staff use the Owner App to scan and verify in one second."},
    {ico:"💳",n:"06",t:"Direct Payment Collection",d:"Connect your Razorpay (PCI DSS Level 1 certified) — all booking payments go directly to your bank account instantly. No middleman, no settlement delays. All transactions are secured with 256-bit SSL encryption."},
    {ico:"📊",n:"07",t:"Revenue and Analytics Dashboard",d:"Busiest hours, most booked sports, week-over-week revenue, player return rate — all in one clean dashboard."},
    {ico:"📍",n:"08",t:"Multi-Location Management",d:"Running turfs in multiple cities? Add all under one account. Each location has its own pricing, sports, and availability."},
    {ico:"🏟️",n:"09",t:"Marketplace Listing",d:"Every turf gets listed on our player-facing marketplace. Players in your city search by sport — your turf shows up instantly."},
  ];
  const OWNER_FAQS=[
    {q:"Do I need technical knowledge?",a:"Zero. We handle everything — domain, website setup, DNS, SSL, and going live. You just provide turf details and choose your theme. Most owners are live with zero technical involvement."},
    {q:"Will my site say Powered by Match Ticket?",a:"No. Your website is 100% your brand. No Match Ticket logo, no powered-by text anywhere. Players see only your name and design."},
    {q:"How does the QR code entry work?",a:"When a player books, they get a unique QR via WhatsApp. Your staff uses the Match Ticket Owner App to scan it — booking verified in one second. Works offline too."},
    {q:"Can I add multiple turfs or locations?",a:"Yes. Pro plan supports up to 5 turfs. Elite supports unlimited turfs across multiple cities, each with its own settings — managed from one login."},
    {q:"What happens when a player cancels?",a:"Players can cancel 4 hours before for a full refund, within 4 hours for 50% refund. You can set stricter or more flexible rules from your dashboard. Refunds process automatically."},
    {q:"When do I receive payments?",a:"With Razorpay, payments go directly to your bank account instantly after each booking. You are not waiting for Match Ticket. Settlement reports available in your dashboard."},
  ];
  return (
    <div className="pg">
      <div className="pghero" style={{paddingBottom:90}}>
        <div className="pghero-grid"/><div className="pghero-glow"/>
        <div className="pghero-inner" style={{maxWidth:900,width:"100%"}}>
          <div className="badge a1"><div className="bdot"/>For Turf Owners</div>
          <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(44px,8vw,96px)",lineHeight:.88,letterSpacing:3,marginBottom:20}}>TURN YOUR TURF<br/>INTO A <span className="hl">FULL BUSINESS.</span></h1>
          <p className="a3" style={{fontSize:18,color:"var(--muted)",maxWidth:620,lineHeight:1.7,marginBottom:34}}>Your own premium website, automated bookings, WhatsApp alerts, QR code entry, and a marketplace listing — all from one platform. Start free in 5 minutes.</p>
          <div className="a4" style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <button className="bl" style={{padding:"17px 46px",fontSize:17,borderRadius:13}} onClick={()=>window.open("https://playground.buyptech.com/signup")}>Get Started Free →</button>
            <button className="bo" style={{padding:"17px 38px",fontSize:17,borderRadius:13}} onClick={()=>navigate("contact")}>Talk to Our Team</button>
          </div>
          <div className="a5" style={{display:"flex",gap:24,marginTop:30,flexWrap:"wrap"}}>
            {["Free to start","30-day free trial","No credit card","Live in 48 hours"].map((t,i)=>(
              <span key={i} style={{fontSize:14,color:"var(--muted)",fontWeight:600}}>✓ {t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="sec">
        <div style={{textAlign:"center",marginBottom:48}}>
          <div className="tag" style={{display:"flex",justifyContent:"center"}}>The Difference</div>
          <h2 className="h2" style={{textAlign:"center"}}>WITHOUT VS <span className="hl">WITH MATCH TICKET.</span></h2>
        </div>
        <div className="g2">
          <div style={{background:"var(--card)",border:"1px solid rgba(255,65,108,.2)",borderRadius:20,padding:34}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--pink)",marginBottom:14}}>Without Match Ticket</div>
            {["Managing bookings on WhatsApp one by one","Players calling at all hours to check availability","No way to take online payments — cash only","No website — players cannot find you online","Manual reminders sent to every player manually","Revenue limited to whoever walks through your gate"].map((p,i)=>(
              <div key={i} style={{display:"flex",gap:11,alignItems:"flex-start",marginBottom:12}}>
                <span style={{color:"rgba(255,65,108,.7)",fontSize:15,flexShrink:0}}>✕</span>
                <span style={{fontSize:14,color:"var(--muted)",lineHeight:1.5}}>{p}</span>
              </div>
            ))}
          </div>
          <div style={{background:"var(--card)",border:"1px solid var(--lime3)",borderRadius:20,padding:34}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",color:"var(--lime)",marginBottom:14}}>With Match Ticket</div>
            {["All bookings managed automatically on a clean dashboard","Players book online 24/7 from your website — no calls needed","Razorpay integrated — payments go directly to your account. Razorpay is PCI DSS Level 1 compliant — the highest level of payment security certification.","Your own premium website at www.yourturf.com","Automatic WhatsApp confirmations and reminders sent to players","Players discover you through our 12-city marketplace"].map((p,i)=>(
              <div key={i} style={{display:"flex",gap:11,alignItems:"flex-start",marginBottom:12}}>
                <span style={{color:"var(--lime)",fontSize:15,flexShrink:0}}>✓</span>
                <span style={{fontSize:14,color:"var(--muted)",lineHeight:1.5}}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div style={{textAlign:"center",marginBottom:52}}>
            <div className="tag" style={{display:"flex",justifyContent:"center"}}>Everything You Get</div>
            <h2 className="h2" style={{textAlign:"center"}}>COMPLETE BUSINESS <span className="hl">TOOLKIT.</span></h2>
          </div>
          <div className="g3">
            {FEATURES.map((f,i)=>(
              <div key={i} className="fc" style={{position:"relative"}}>
                <div className="fc-num">{f.n}</div>
                <div className="fc-ico">{f.ico}</div>
                <div className="fc-title">{f.t}</div>
                <div className="fc-desc">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="split">
          <div>
            <div className="tag">Your Website</div>
            <h2 className="h2">WHITE-LABEL.<br/>100% <span className="hl">YOUR BRAND.</span></h2>
            <p style={{fontSize:16,color:"var(--muted)",lineHeight:1.7,marginBottom:28}}>Your turf website looks completely like your own. Players will think you spent lakhs building it. Match Ticket is completely invisible.</p>
            <div style={{marginBottom:24}}>
              <div style={{fontSize:12,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"var(--muted)",marginBottom:10}}>Pick Your Theme</div>
              <div style={{display:"flex",gap:8}}>
                {THEMES.map((t,i)=><div key={i} className={`tdot${theme===i?" sel":""}`} style={{background:t.c}} onClick={()=>setTheme(i)} title={t.n}/>)}
              </div>
            </div>
            {[{ico:"🌐",t:"Custom Domain",d:"We handle purchase and setup"},{ico:"🎨",t:"Professional Design",d:"Sports themes that convert visitors to bookings"},{ico:"📅",t:"Live Booking Calendar",d:"Real-time slots embedded in your site"},{ico:"💳",t:"Razorpay Checkout",d:"Money goes straight to your account"},{ico:"💬",t:"Auto WhatsApp and QR",d:"Confirmations and QR codes sent automatically"}].map((w,i)=>(
              <div key={i} style={{display:"flex",gap:13,padding:"14px 0",borderBottom:"1px solid var(--border)"}}>
                <div style={{width:36,height:36,borderRadius:9,background:"var(--lime2)",border:"1px solid var(--lime3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{w.ico}</div>
                <div><div style={{fontSize:14,fontWeight:700,marginBottom:2}}>{w.t}</div><div style={{fontSize:13,color:"var(--muted)"}}>{w.d}</div></div>
              </div>
            ))}
          </div>
          <div className="mock float">
            <div className="mbar">
              <div className="mdot" style={{background:"#FF5F57"}}/><div className="mdot" style={{background:"#FEBC2E"}}/><div className="mdot" style={{background:"#28C840"}}/>
              <div className="murl">www.elitesportsclub.com</div>
            </div>
            <div className="mhdr" style={{background:th.c}}><span>⚽</span>Elite Sports Club<span style={{marginLeft:"auto",fontSize:11,color:"rgba(255,255,255,.4)"}}>Chennai</span></div>
            <div className="mbanner" style={{background:th.c}}>
              <div style={{fontSize:10,color:"rgba(255,255,255,.4)",marginBottom:4}}>5-a-side · 7-a-side · 11-a-side</div>
              <div style={{fontFamily:"var(--D)",fontSize:20,letterSpacing:1}}>BOOK YOUR SLOT</div>
              <div style={{fontSize:10,color:"rgba(255,255,255,.4)",marginBottom:9}}>Rs.900 per hour · Floodlit · Free Parking</div>
              <div style={{display:"inline-block",background:"var(--lime)",color:"#000",fontSize:11,fontWeight:700,padding:"6px 14px",borderRadius:7}}>Book Now →</div>
            </div>
            <div style={{fontSize:11,color:"var(--muted)",fontWeight:700,marginBottom:7}}>Today's Availability</div>
            <div className="mslots">
              {[["6AM","on"],["7AM",""],["8AM","on"],["9AM",""],["5PM","on"],["6PM",""],["7PM","on"],["8PM",""]].map(([t,s],i)=>(<div key={i} className={`mslot${s?" on":""}`}>{t}</div>))}
            </div>
            <div className="mwa">
              <div style={{fontSize:10,color:"var(--lime)",fontWeight:700,marginBottom:4}}>💬 WhatsApp and QR Sent Automatically</div>
              <div style={{fontSize:11,color:"var(--muted)"}}>Booking confirmed! 6 AM — Elite Sports Club — QR ready</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div style={{textAlign:"center",marginBottom:48}}>
            <div className="tag" style={{display:"flex",justifyContent:"center"}}>Getting Started</div>
            <h2 className="h2" style={{textAlign:"center"}}>LIVE IN <span className="hl">4 STEPS.</span></h2>
          </div>
          <div className="g4">
            {[
              {ico:"✍️",t:"Sign Up Free",d:"Create your account. Add turf name, location, sports, pricing, and slot timings. Takes under 10 minutes."},
              {ico:"🎨",t:"Choose Your Theme",d:"Browse our theme library and pick the design that suits your turf personality."},
              {ico:"🌐",t:"Get Your Domain",d:"Our team helps you purchase www.yourturf.com and connects it. Done within 24 to 48 hours."},
              {ico:"🚀",t:"Go Live and Earn",d:"Your website is live. Players find you on the marketplace, book online, and pay directly."},
            ].map((s,i)=>(
              <div key={i} className="step">
                <div className="sring">{i+1}</div>
                <span className="sico">{s.ico}</span>
                <div className="stitle">{s.t}</div>
                <div className="sdesc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sec">
        <div style={{textAlign:"center",marginBottom:44}}>
          <div className="tag" style={{display:"flex",justifyContent:"center"}}>Owner Reviews</div>
          <h2 className="h2" style={{textAlign:"center"}}>OWNERS LOVE <span className="hg">MATCH TICKET.</span></h2>
        </div>
        <div className="g3">{T_OWNER.map((t,i)=><TestiCard key={i} t={t} isOwner/>)}</div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div style={{textAlign:"center",marginBottom:48}}>
            <div className="tag" style={{display:"flex",justifyContent:"center"}}>Pricing</div>
            <h2 className="h2" style={{textAlign:"center"}}>START FREE.<br/><span className="hl">SCALE AS YOU GROW.</span></h2>
          </div>
          <div className="g3">
            {[
              {name:"Starter",price:"Free",period:"Free forever — No credit card needed",tag:null,
               f:["1 Turf Marketplace Listing","Basic Booking System","WhatsApp Confirmations","QR Code Entry","Standard Email Support","MT Subdomain (yourturf.matchticket.in)"],
               x:["Custom Domain Website","Theme Library","Razorpay Integration","Analytics Dashboard","Option B Payment Collection"]},
              {name:"Pro",price:"₹1,299",period:"per month",badge:"Most Popular",tag:"30-day free trial",
               billing:[{l:"Monthly",p:"₹1,299/mo"},{l:"6 Months",p:"₹7,499",s:"Save ₹1,295 (17% off)"},{l:"Annual",p:"₹11,999",s:"Save ₹3,589 (23% off)"}],
               f:["Up to 5 Turfs","Custom Domain Website","Full Theme Library (4 designs)","Razorpay / PhonePe Integration","QR Entry + WhatsApp Automation","Analytics Dashboard","Priority WhatsApp Support","Option B Payment Collection"],x:[]},
              {name:"Elite",price:"₹2,999",period:"per month",tag:"30-day free trial",
               billing:[{l:"Monthly",p:"₹2,999/mo"},{l:"6 Months",p:"₹15,999",s:"Save ₹1,995 (11% off)"},{l:"Annual",p:"₹27,999",s:"Save ₹7,989 (22% off)"}],
               f:["Unlimited Turfs and Locations","Full White-Label (no MT branding)","All Payment Options","Custom WhatsApp Templates","Full Analytics + Exports","Tournament Management Tools","Dedicated Account Manager","API Access"],x:[]},
            ].map((p,i)=>(
              <div key={i} className={`plan${p.badge?" hot":""}`}>
                {p.badge&&<div className="pbadge">{p.badge}</div>}
                {p.tag&&<div style={{display:"inline-flex",alignItems:"center",gap:5,background:"rgba(202,255,0,.10)",border:"1px solid rgba(202,255,0,.22)",borderRadius:100,padding:"3px 11px",fontSize:11,fontWeight:700,color:"var(--lime)",marginBottom:8}}><span style={{width:5,height:5,borderRadius:"50%",background:"var(--lime)",display:"inline-block"}}/>  {p.tag}</div>}
                <div className="pnm">{p.name}</div>
                <div className="pprice">{p.price}</div>
                <div className="pper">{p.period}</div>
                {p.billing&&(
                  <div style={{display:"flex",flexDirection:"column",gap:5,margin:"10px 0",background:"var(--bg3)",borderRadius:10,padding:"10px 12px"}}>
                    {p.billing.map((b,bi)=>(
                      <div key={bi} style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <span style={{fontSize:12,color:"var(--muted)",fontWeight:600}}>{b.l}</span>
                        <div style={{textAlign:"right"}}>
                          <span style={{fontSize:13,fontWeight:700,color:"var(--text)"}}>{b.p}</span>
                          {b.s&&<span style={{display:"block",fontSize:10,color:"var(--lime)",marginTop:1}}>{b.s}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="pdiv"/>
                <ul className="pfeats">
                  {p.f.map((f,j)=><li key={j}><span className="pck">✓</span>{f}</li>)}
                  {(p.x||[]).map((f,j)=><li key={"x"+j} style={{opacity:.35}}><span className="px">✕</span>{f}</li>)}
                </ul>
                <button className={`pbtn${i===1?" lm":" gh"}`} onClick={()=>window.open("https://playground.buyptech.com/signup")}>
                  {i===0?"Start Free Now":i===1?"Start 30-Day Free Trial":"Start 30-Day Free Trial"}
                </button>
                {i>0&&<p style={{fontSize:11,color:"var(--muted)",textAlign:"center",marginTop:8}}>No credit card required</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sec">
        <div style={{display:"grid",gridTemplateColumns:"min(1fr,100%)",gap:44,alignItems:"start"}}>
          <div>
            <div className="tag">Owner FAQ</div>
            <h2 className="h2">QUESTIONS<br/>ANSWERED.</h2>
            <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.7,marginTop:14,marginBottom:24}}>Still have questions? Our owner success team is on WhatsApp 7 days a week.</p>
            <button className="bl sm" onClick={()=>navigate("contact")}>Chat With Us</button>
          </div>
          <div>
            {OWNER_FAQS.map((f,i)=>(
              <FaqItem key={i} q={f.q} a={f.a} open={faqOpen===i} onToggle={()=>setFaqOpen(faqOpen===i?null:i)}/>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div style={{maxWidth:760,margin:"0 auto",padding:"clamp(52px,8vw,90px) clamp(16px,5vw,64px)",textAlign:"center"}}>
          <div style={{fontSize:52,marginBottom:16}}>🏟️</div>
          <h2 style={{fontFamily:"var(--D)",fontSize:"clamp(42px,6vw,76px)",lineHeight:.92,letterSpacing:2,marginBottom:16}}>READY TO GROW<br/>YOUR <span className="hl">TURF BUSINESS?</span></h2>
          <p style={{fontSize:17,color:"var(--muted)",lineHeight:1.7,marginBottom:36}}>Join hundreds of turf owners across Tamil Nadu with their own website, automated bookings, and growing revenue — powered invisibly by Match Ticket.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="bl" style={{padding:"17px 46px",fontSize:17,borderRadius:13}} onClick={()=>window.open("https://playground.buyptech.com/signup")}>Start Free Today →</button>
            <button className="bo" style={{padding:"17px 38px",fontSize:17,borderRadius:13}} onClick={()=>navigate("contact")}>Talk to Our Team</button>
          </div>
          <p style={{fontSize:13,color:"var(--muted)",marginTop:18}}>Free to start — 30-day free trial on Pro and Elite — No credit card needed</p>
          <p style={{fontSize:12,color:"var(--muted2)",marginTop:10,lineHeight:1.65}}>
            By signing up you agree to our{" "}
            <button onClick={()=>{}} style={{background:"none",border:"none",cursor:"pointer",color:"var(--lime)",fontSize:12,fontFamily:"var(--B)",padding:0,textDecoration:"underline"}}>Terms and Conditions</button>,{" "}
            <button onClick={()=>{}} style={{background:"none",border:"none",cursor:"pointer",color:"var(--lime)",fontSize:12,fontFamily:"var(--B)",padding:0,textDecoration:"underline"}}>Privacy Policy</button>, and{" "}
            <button onClick={()=>{}} style={{background:"none",border:"none",cursor:"pointer",color:"var(--lime)",fontSize:12,fontFamily:"var(--B)",padding:0,textDecoration:"underline"}}>Refund Policy</button>.
            All payments secured by Razorpay (PCI DSS Level 1 certified).
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListYourTurf;
