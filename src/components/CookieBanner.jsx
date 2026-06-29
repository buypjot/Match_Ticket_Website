import React from 'react';

/** Cookie consent banner — shown on first visit */
export default function CookieBanner({ onAccept, onEssential, onManage }) {
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
