/** Blog — coming soon with email signup */
import React, { useState } from 'react';

function Blog() {
  const [email,setEmail]=useState("");
  const [done,setDone]=useState(false);
  return (
    <main className="pg" role="main" aria-label="Match Ticket Blog">
      <div className="pghero">
        <div className="pghero-grid"/><div className="pghero-glow"/>
        <div className="pghero-inner">
          <div className="badge a1"><div className="bdot"/>Insights and Stories</div>
          <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(46px,7vw,88px)",lineHeight:.9,letterSpacing:2,marginBottom:14}}>BLOG AND<br/><span className="hl">INSIGHTS.</span></h1>
          <p className="a3" style={{fontSize:16,color:"var(--muted)",maxWidth:480,lineHeight:1.65}}>Tips, guides, and stories for turf owners and players — coming soon.</p>
        </div>
      </div>
      <div className="sec">
        <div style={{textAlign:"center",marginBottom:52}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(255,65,108,.08)",border:"1px solid rgba(255,65,108,.22)",borderRadius:100,padding:"5px 17px",fontSize:12,fontWeight:700,color:"var(--pink)",marginBottom:20}}>🚀 Content Coming Soon</div>
          <h2 className="h2" style={{textAlign:"center"}}>GREAT CONTENT<br/><span className="hg">ON THE WAY.</span></h2>
          <p style={{fontSize:16,color:"var(--muted)",maxWidth:500,margin:"0 auto 36px",lineHeight:1.7}}>We are working on booking guides, owner success stories, and sports tips. Be the first to know when we publish.</p>
          {done?(
            <div style={{background:"var(--card)",border:"1px solid var(--lime3)",borderRadius:16,padding:28,maxWidth:420,margin:"0 auto",textAlign:"center"}}>
              <div style={{fontSize:38,marginBottom:10}}>🎉</div>
              <div style={{fontFamily:"var(--D)",fontSize:26,marginBottom:6}}>YOU ARE ON THE LIST!</div>
              <div style={{fontSize:14,color:"var(--muted)"}}>We will email you as soon as we publish our first article.</div>
            </div>
          ):(
            <div style={{display:"flex",gap:12,maxWidth:460,margin:"0 auto",flexWrap:"wrap"}}>
              <input className="fin" placeholder="Enter your email address" value={email} onChange={e=>setEmail(e.target.value)} style={{flex:1}}/>
              <button className="bl" style={{padding:"13px 22px",whiteSpace:"nowrap"}} onClick={()=>{if(email)setDone(true);}}>Notify Me →</button>
            </div>
          )}
        </div>
        <div className="g4">
          {[
            {ico:"📅",n:"01",t:"Booking Guides",d:"How to find the best turf, what to check before booking, peak hours, and money-saving tips."},
            {ico:"🏟️",n:"02",t:"Owner Success Stories",d:"Real results from turf owners who grew their revenue using Match Ticket."},
            {ico:"🏆",n:"03",t:"Sports Tips",d:"Sport-specific coaching tips and drills from coaches and players across Tamil Nadu."},
            {ico:"📍",n:"04",t:"City Sports Guides",d:"Best turfs in Chennai, Coimbatore, Tenkasi, and beyond — curated and ranked."},
          ].map((t,i)=>(
            <div key={i} className="fc" style={{position:"relative"}}>
              <div className="fc-num">{t.n}</div>
              <div className="fc-ico">{t.ico}</div>
              <div className="fc-title">{t.t}</div>
              <div className="fc-desc">{t.d}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Blog;
