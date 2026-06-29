/** About — brand story, timeline, mission, values, team */
import React from 'react';
import { useCount } from '../hooks';


function About({ navigate }) {
  const c1=useCount(500,2000,200),c2=useCount(12000,2200,300),c3=useCount(98,1600,400),c4=useCount(12,1400,500);
  return (
    <main className="pg" role="main" aria-label="About Match Ticket">
      <div className="pghero">
        <div className="pghero-grid"/><div className="pghero-glow"/>
        <div className="pghero-inner" style={{maxWidth:800,width:"100%"}}>
          <div className="badge a1"><div className="bdot"/>Our Story</div>
          <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(46px,7vw,88px)",lineHeight:.9,letterSpacing:2,marginBottom:18}}>BUILT FOR THE<br/><span className="hl">LOVE OF SPORT.</span></h1>
          <p className="a3" style={{fontSize:17,color:"var(--muted)",lineHeight:1.7,marginBottom:30,maxWidth:580}}>Match Ticket started with one observation — turf owners were managing bookings through WhatsApp chaos, while players had no reliable way to find quality sports facilities nearby. We built the solution.</p>
          <div className="a4" style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <button className="bl" onClick={()=>navigate("list-turf")}>List Your Turf</button>
            <button className="bo" onClick={()=>navigate("find-turf")}>Find a Turf</button>
          </div>
        </div>
      </div>
      <div className="sec sm">
        <div className="g4">
          {[{n:`${c1}+`,l:"Turfs Listed",d:"Across Tamil Nadu"},{n:`${c2.toLocaleString()}+`,l:"Bookings Managed",d:"And growing daily"},{n:`${c3}%`,l:"Owner Satisfaction",d:"Based on surveys"},{n:`${c4}+`,l:"Cities Covered",d:"Expanding monthly"}].map((s,i)=>(
            <div key={i} className="statbox"><div className="statnum">{s.n}</div><div className="statlbl">{s.l}</div><div style={{fontSize:12,color:"var(--muted2)",marginTop:4}}>{s.d}</div></div>
          ))}
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div className="split">
            <div>
              <div className="tag">The Story</div>
              <h2 className="h2">HOW MATCH<br/><span className="hl">TICKET BEGAN.</span></h2>
              <p style={{fontSize:16,color:"var(--muted)",lineHeight:1.75,marginBottom:18}}>In 2024, the team at <strong style={{color:"var(--text)"}}>Buyp Technologiesnologies Private Limited</strong> in Tenkasi, Tamil Nadu noticed something frustrating — turf owners were drowning in WhatsApp messages and players had no easy way to discover or book local turfs.</p>
              <p style={{fontSize:16,color:"var(--muted)",lineHeight:1.75,marginBottom:18}}>Existing tools were too expensive, too complex, or not built for Indian sports culture. There was no platform covering the full picture — owner onboarding, player discovery, payment, and booking confirmation.</p>
              <p style={{fontSize:16,color:"var(--muted)",lineHeight:1.75}}>So we built Match Ticket — a two-sided platform giving turf owners a complete digital business and players the easiest way to find and book a turf in their city.</p>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:0}}>
              {[
                {yr:"2024",t:"The Idea",d:"Buyp Technologies identifies the gap — no good turf management tool for Indian owners."},
                {yr:"2024",t:"First Version",d:"Match Ticket launches in Tenkasi with 5 turf owners. Booking automation goes live."},
                {yr:"2025",t:"Tamil Nadu Rollout",d:"Expanded to Chennai and Coimbatore. 100+ turfs onboarded. Custom website launched."},
                {yr:"2025",t:"500+ Turfs",d:"12 cities covered. WhatsApp, QR entry, marketplace all live. 12,000+ bookings."},
                {yr:"2026",t:"Growing Faster",d:"Pan-India expansion begins. Mobile app in development. Tournaments launching soon."},
              ].map((t,i)=>(
                <div key={i} style={{display:"flex",gap:20,padding:"22px 0",borderBottom:i<4?"1px solid var(--border)":"none"}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:"var(--lime)",color:"#000",fontFamily:"var(--D)",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:4}}>{i+1}</div>
                  <div>
                    <div style={{fontFamily:"var(--D)",fontSize:28,color:"var(--lime)",letterSpacing:2,marginBottom:4}}>{t.yr}</div>
                    <div style={{fontSize:16,fontWeight:800,marginBottom:5}}>{t.t}</div>
                    <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65}}>{t.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div style={{maxWidth:740,margin:"0 auto",textAlign:"center"}}>
          <div className="tag" style={{display:"flex",justifyContent:"center"}}>Our Mission</div>
          <h2 className="h2" style={{textAlign:"center"}}>EVERY PLAYER DESERVES<br/><span className="hg">A GREAT TURF.</span></h2>
          <p style={{fontSize:17,color:"var(--muted)",lineHeight:1.75,marginBottom:36}}>No phone calls, no booking confusion, no chaos. Just search, book, and play. For owners — no spreadsheets, no WhatsApp chaos. Just a clean digital business that runs itself.</p>
          <div style={{background:"var(--card)",border:"1px solid var(--lime3)",borderRadius:20,padding:30,textAlign:"left"}}>
            <div style={{fontFamily:"var(--D)",fontSize:26,letterSpacing:1,color:"var(--lime)",marginBottom:14}}>OUR PROMISE</div>
            {["For every player — a verified turf, a seamless booking, a QR code that just works.",
              "For every turf owner — a website that looks premium, a booking system that runs 24/7, and revenue that grows.",
              "For Indian sports — a platform that genuinely understands local culture and builds for it."].map((p,i)=>(
              <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:i<2?14:0}}>
                <span style={{color:"var(--lime)",fontSize:17,flexShrink:0}}>✓</span>
                <span style={{fontSize:15,color:"var(--muted)",lineHeight:1.6}}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div style={{textAlign:"center",marginBottom:48}}>
            <div className="tag" style={{display:"flex",justifyContent:"center"}}>What We Stand For</div>
            <h2 className="h2" style={{textAlign:"center"}}>OUR <span className="hl">VALUES.</span></h2>
          </div>
          <div className="g3">
            {[
              {ico:"🏆",t:"Quality First",d:"Every feature and listing held to the highest standard. Fewer things done well rather than many done poorly."},
              {ico:"🤝",t:"Owner Success",d:"Turf owners are our partners, not customers. When their business grows, Match Ticket grows."},
              {ico:"⚡",t:"Speed and Simplicity",d:"Booking a turf should be as simple as ordering food. We remove every unnecessary step."},
              {ico:"🌱",t:"Built for India",d:"Not a copy of a Western product. We understand Indian sports culture, local pricing, and WhatsApp-first communication."},
              {ico:"🔒",t:"Trust and Transparency",d:"Verified turfs. Honest pricing. Clear refund policy. We build trust at every step."},
              {ico:"📈",t:"Constant Improvement",d:"We ship fast and improve constantly based on owner and player feedback."},
            ].map((v,i)=>(
              <div key={i} style={{background:"var(--card)",border:"1px solid var(--border)",borderRadius:18,padding:28,transition:"all .3s"}}>
                <span style={{fontSize:34,marginBottom:13,display:"block"}}>{v.ico}</span>
                <div style={{fontSize:16,fontWeight:800,marginBottom:8}}>{v.t}</div>
                <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.65}}>{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sec">
        <div style={{maxWidth:720,margin:"0 auto",textAlign:"center"}}>
          <div className="tag" style={{display:"flex",justifyContent:"center"}}>The Team</div>
          <h2 className="h2" style={{textAlign:"center"}}>BUILT BY <span className="hl">BUYP TECH.</span></h2>
          <p style={{fontSize:16,color:"var(--muted)",lineHeight:1.75,marginBottom:28}}>Match Ticket is a product of <strong style={{color:"var(--text)"}}>Buyp Technologiesnologies Private Limited</strong>, a private limited company based in Tenkasi, Tamil Nadu. We are a team of developers, designers, and sports enthusiasts who believe technology should make everyday life simpler — starting with booking a turf.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="bl" onClick={()=>navigate("contact")}>Contact the Team</button>
            <button className="bo" onClick={()=>navigate("list-turf")}>Partner With Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
