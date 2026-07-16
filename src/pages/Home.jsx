/** Home — hero, sport grid, featured turfs, features, testimonials, dual CTA */
import React from 'react';
import { useCount } from '../hooks';
import { SPORTS, useTurfs, useStats, useLatestCustomers, T_OWNER, T_PLAYER } from '../data';
import TurfCard  from '../components/TurfCard';
import CustomerCard from '../components/CustomerCard';
import TestiCard from '../components/TestiCard';

function Home({ navigate }) {
  const { turfs: TURFS, loading: turfsLoading } = useTurfs();
  const { stats } = useStats();
  const { customers, loading: customersLoading } = useLatestCustomers();
  
  const c1=useCount(stats.turfs,2000,300),c2=useCount(stats.bookings,2200,400),c3=useCount(98,1600,500),c4=useCount(stats.cities,1400,600);
  
  const dynamicSports = SPORTS.map(s => {
    const count = TURFS.filter(t => t.s.some(sport => sport.toLowerCase().includes(s.n.toLowerCase()))).length;
    return { ...s, c: count > 0 ? `${count} Turfs` : "Coming Soon" };
  });
  return (
    <main id="main-content" className="pg" role="main" aria-label="Match Ticket Home">
      <div style={{minHeight:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"clamp(20px,3vw,30px) clamp(16px,5vw,60px) 80px",position:"relative",overflow:"hidden", marginTop: "15px"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(202,255,0,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(202,255,0,.022) 1px,transparent 1px)",backgroundSize:"60px 60px",pointerEvents:"none"}}/>
        <div style={{position:"absolute",top:-60,left:"50%",transform:"translateX(-50%)",width:800,height:480,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(202,255,0,.09) 0%,transparent 68%)",pointerEvents:"none",animation:"glowP 5s ease-in-out infinite"}}/>
        <div className="badge a1"><div className="bdot"/>India's Turf Management and Booking Platform</div>
        <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(44px,11vw,138px)",lineHeight:.88,letterSpacing:3,marginBottom:22}}>
          BOOK A TURF.<br/><span className="hg">OWN YOUR</span><br/><span className="hl">GAME.</span>
        </h1>
        <p className="a3" style={{fontSize:"clamp(15px,2.5vw,18px)",color:"var(--muted)",maxWidth:560,lineHeight:1.7,marginBottom:36}}>
          For turf owners — custom website, automated bookings, WhatsApp and QR entry. For players — find, book, and play your favourite sport in under 60 seconds.
        </p>
        <div className="a4" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",marginBottom:60}}>
          <button className="bl" style={{padding:"17px 44px",fontSize:16,borderRadius:12}} onClick={()=>navigate("list-turf")}>🏟️ List Your Turf</button>
          <button className="bg" style={{padding:"17px 44px",fontSize:16,borderRadius:12}} onClick={()=>navigate("find-turf")}>⚽ Find a Turf Near Me</button>
        </div>
        <div className="ai" style={{display:"flex",alignItems:"stretch",flexWrap:"wrap",justifyContent:"center"}}>
          {[{n:`${c1}+`,l:"Turfs Listed"},{n:`${c2.toLocaleString()}+`,l:"Bookings Done"},{n:`${c3}%`,l:"Satisfaction"},{n:`${c4}+`,l:"Cities"}].map((s,i)=>(
            <div key={i} style={{textAlign:"center",borderRight:i<3?"1px solid var(--border)":"none",padding:"0 clamp(16px,3vw,38px)"}}>
              <div style={{fontFamily:"var(--D)",fontSize:50,letterSpacing:2,color:"var(--lime)",lineHeight:1}}>{s.n}</div>
              <div style={{fontSize:11,color:"var(--muted)",marginTop:5,letterSpacing:".1em",textTransform:"uppercase"}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mwrap">
        <div style={{display:"flex",overflow:"hidden"}}>
          <div className="mtrack">{[...Array(2)].map((_,i)=>(
            <div key={i} style={{display:"flex",flexShrink:0}}>
              {dynamicSports.filter(s => s.c !== "Coming Soon").map((s,j)=><div key={j} className="mitem"><span style={{fontSize:18}}>{s.e}</span><strong>{s.n}</strong><span>{s.c}</span></div>)}
            </div>
          ))}</div>
        </div>
      </div>
      <div className="sec">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:14,marginBottom:44}}>
          <div><div className="tag">Choose Your Sport</div><h2 className="h2">FIND YOUR <span className="hl">GAME.</span></h2></div>
          <button className="bo sm" onClick={()=>navigate("find-turf")}>View All Sports →</button>
        </div>
        <div className="g6">
          {dynamicSports.slice(0,6).map((s,i)=>(
            <div key={i} className="sc" style={{background:s.bg}} onClick={()=>navigate("find-turf")}>
              {s.isNew&&<div className="snew">NEW</div>}
              <span className="semo">{s.e}</span><div className="snm">{s.n}</div><div className="scnt">{s.c}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:14,marginBottom:44}}>
            <div><div className="tag">Our Partners</div><h2 className="h2">MOST POPULAR <span className="hg">SPORTS PARTNERS.</span></h2></div>
            <button className="bo sm" onClick={()=>navigate("list-turf")}>Join as Partner →</button>
          </div>
          <div className="g3">{customersLoading ? <div style={{color:"white"}}>Loading...</div> : customers.map((c,i)=><CustomerCard key={i} c={c} />)}</div>
        </div>
      </div>
      <div className="sec">
        <div style={{textAlign:"center",marginBottom:52}}>
          <div className="tag" style={{display:"flex",justifyContent:"center"}}>Why Match Ticket</div>
          <h2 className="h2" style={{textAlign:"center"}}>THE COMPLETE <span className="hl">SPORTS PLATFORM.</span></h2>
        </div>
        <div className="g4">
          {[
            {ico:"✅",n:"01",t:"Verified Turfs",d:"Every turf reviewed for quality before getting our Verified badge."},
            {ico:"⚡",n:"02",t:"Book in 60 Seconds",d:"Search, pick a slot, pay, and get your QR — all under a minute."},
            {ico:"📱",n:"03",t:"QR Code Entry",d:"Unique QR per booking. Scan at the gate — no calls, no paper."},
            {ico:"💬",n:"04",t:"WhatsApp Automation",d:"Confirmations, reminders, and alerts sent automatically."},
            {ico:"🌐",n:"05",t:"Owner Websites",d:"Branded custom website with your own domain. Fully white-labeled."},
            {ico:"💳",n:"06",t:"Direct Payments",d:"Razorpay integration — money straight to the owner account."},
            {ico:"🏆",n:"07",t:"4.9 Star Rated",d:"Top rated by owners and players across all platforms."},
            {ico:"📞",n:"08",t:"24/7 Support",d:"WhatsApp support and dedicated account manager always on."},
          ].map((w,i)=>(
            <div key={i} className="fc" style={{position:"relative"}}>
              <div className="fc-num">{w.n}</div>
              <div className="fc-ico">{w.ico}</div>
              <div className="fc-title">{w.t}</div>
              <div className="fc-desc">{w.d}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"var(--bg2)"}}>
        <div className="sec">
          <div style={{textAlign:"center",marginBottom:44}}>
            <div className="tag" style={{display:"flex",justifyContent:"center"}}>Testimonials</div>
            <h2 className="h2" style={{textAlign:"center"}}>REAL RESULTS. <span className="hl">REAL PEOPLE.</span></h2>
          </div>
          <div className="g3">
            {[...T_OWNER.slice(0,2),...T_PLAYER.slice(0,1)].map((t,i)=><TestiCard key={i} t={t} isOwner={i<2}/>)}
          </div>
        </div>
      </div>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"clamp(52px,8vw,90px) clamp(16px,5vw,64px)",display:"grid",gridTemplateColumns:"min(48%,560px) 1px min(48%,560px)",alignItems:"stretch",justifyContent:"center"}}>
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingRight:"clamp(0px,4vw,60px)"}}>
          <div style={{fontSize:54,marginBottom:16}}>🏟️</div>
          <h3 className="h3">OWN A TURF?</h3>
          <p style={{fontSize:15,color:"var(--muted)",lineHeight:1.65,marginBottom:28,maxWidth:300}}>Get your own website, automated bookings, and a marketplace listing. Start free today.</p>
          <button className="bl" onClick={()=>navigate("list-turf")}>List Your Turf Free →</button>
        </div>
        <div style={{background:"var(--border)"}}/>
        <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingLeft:"clamp(0px,5vw,72px)"}}>
          <div style={{fontSize:54,marginBottom:16}}>⚽</div>
          <h3 className="h3">READY TO PLAY?</h3>
          <p style={{fontSize:15,color:"var(--muted)",lineHeight:1.65,marginBottom:28,maxWidth:300}}>Search verified turfs near you. Book instantly. Show up and play.</p>
          <button className="bg" onClick={()=>navigate("find-turf")}>Find a Turf →</button>
        </div>
      </div>
    </main>
  );
}

export default Home;
