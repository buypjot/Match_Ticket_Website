/**
 * Match Ticket — Global Styles
 * Change --lime in :root to rebrand the entire site.
 * Breakpoints: 1024px tablet · 640px mobile · 380px small phone
 */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --lime:#CAFF00;--lime2:rgba(202,255,0,.10);--lime3:rgba(202,255,0,.22);
  --pink:#FF416C;--grad:linear-gradient(135deg,#FF416C,#FF8C42);
  --bg:#060610;--bg2:#0A0A18;--bg3:#0E0E22;
  --card:#111122;--card2:#16162E;
  --border:rgba(255,255,255,.07);--borderH:rgba(255,255,255,.15);
  --text:#F2F2FF;--muted:rgba(242,242,255,.45);--muted2:rgba(242,242,255,.22);
  --D:'Bebas Neue',sans-serif;--B:'Plus Jakarta Sans',sans-serif;
}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:var(--B);overflow-x:hidden;}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--lime3);border-radius:4px}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes marqL{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
@keyframes glowP{0%,100%{opacity:.5}50%{opacity:1}}
@keyframes ripple{0%{transform:scale(.8);opacity:1}100%{transform:scale(2.4);opacity:0}}
@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
.a1{animation:fadeUp .75s .05s ease both}.a2{animation:fadeUp .75s .18s ease both}
.a3{animation:fadeUp .75s .30s ease both}.a4{animation:fadeUp .75s .44s ease both}
.a5{animation:fadeUp .75s .56s ease both}.ai{animation:fadeIn .8s .6s ease both}
.float{animation:floatY 5s ease-in-out infinite}.slide{animation:slideUp .35s ease both}
/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:300;display:flex;align-items:center;justify-content:space-between;padding:0 56px;height:66px;background:rgba(6,6,16,.93);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);}
.nav.sc{box-shadow:0 4px 40px rgba(0,0,0,.6);}
.nbrand{display:flex;align-items:center;gap:10px;cursor:pointer;}
.nmark{width:34px;height:34px;border-radius:8px;background:var(--lime);display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:18px;color:#000;}
.nname{font-family:var(--D);font-size:22px;letter-spacing:2px;color:var(--text);}
.nname em{color:var(--lime);font-style:normal;}
.nlinks{display:flex;gap:26px;list-style:none;}
.nlink{color:var(--muted);font-size:14px;font-weight:500;cursor:pointer;transition:color .2s;background:none;border:none;font-family:var(--B);padding:0;}
.nlink:hover,.nlink.act{color:var(--text);}.nlink.act{color:var(--lime);}
.nlive{display:flex;align-items:center;gap:6px;background:var(--lime2);border:1px solid var(--lime3);border-radius:100px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--lime);}
.nlive-dot{width:6px;height:6px;border-radius:50%;background:var(--lime);animation:blink 1.5s infinite;}
.nctas{display:flex;gap:9px;align-items:center;}
/* BUTTONS */
.bl{background:var(--lime);color:#000;border:none;border-radius:11px;padding:14px 36px;font-weight:700;font-size:15px;font-family:var(--B);cursor:pointer;transition:all .25s;display:inline-flex;align-items:center;gap:8px;}
.bl:hover{background:#D8FF20;transform:translateY(-2px);box-shadow:0 10px 30px rgba(202,255,0,.3);}
.bl.sm{padding:9px 20px;font-size:13px;border-radius:9px;}
.bg{background:var(--grad);color:#fff;border:none;border-radius:11px;padding:14px 36px;font-weight:700;font-size:15px;font-family:var(--B);cursor:pointer;transition:all .25s;display:inline-flex;align-items:center;gap:8px;}
.bg:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(255,65,108,.4);}
.bg.sm{padding:9px 20px;font-size:13px;border-radius:9px;}
.bo{background:transparent;color:var(--text);border:1px solid var(--borderH);border-radius:11px;padding:14px 32px;font-weight:600;font-size:15px;font-family:var(--B);cursor:pointer;transition:all .25s;}
.bo:hover{border-color:var(--lime3);color:var(--lime);}
.bo.sm{padding:9px 18px;font-size:13px;border-radius:9px;}
.bgs{background:transparent;color:var(--text);border:1px solid var(--border);border-radius:9px;padding:9px 18px;font-weight:600;font-size:13px;font-family:var(--B);cursor:pointer;transition:all .2s;}
.bgs:hover{border-color:var(--lime3);color:var(--lime);}
/* LAYOUT */
.pg{min-height:100vh;padding-top:66px;background:var(--bg);}
.sec{padding:90px 64px;max-width:1280px;margin:0 auto;}
.sec.sm{padding:56px 64px;}
.hl{color:var(--lime);}
.hg{background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
/* PAGE HERO */
.pghero{padding:90px 64px 70px;position:relative;overflow:hidden;background:var(--bg2);}
.pghero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(202,255,0,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(202,255,0,.022) 1px,transparent 1px);background-size:56px 56px;pointer-events:none;}
.pghero-glow{position:absolute;top:-40px;left:50%;transform:translateX(-50%);width:800px;height:400px;border-radius:50%;background:radial-gradient(ellipse,rgba(202,255,0,.08) 0%,transparent 68%);pointer-events:none;animation:glowP 5s ease-in-out infinite;}
.pghero-inner{max-width:1280px;margin:0 auto;position:relative;z-index:1;}
/* TYPOGRAPHY */
.tag{font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--lime);margin-bottom:12px;}
.h2{font-family:var(--D);font-size:clamp(36px,5vw,68px);line-height:.92;letter-spacing:2px;margin-bottom:16px;}
.h3{font-family:var(--D);font-size:clamp(30px,4vw,52px);line-height:.92;letter-spacing:2px;margin-bottom:14px;}
.badge{display:inline-flex;align-items:center;gap:7px;background:var(--lime2);border:1px solid var(--lime3);border-radius:100px;padding:5px 16px;font-size:12px;font-weight:700;color:var(--lime);letter-spacing:.08em;text-transform:uppercase;margin-bottom:20px;}
.bdot{width:6px;height:6px;border-radius:50%;background:var(--lime);animation:blink 2s infinite;}
/* GRIDS */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.g6{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;}
.split{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
/* MARQUEE */
.mwrap{padding:18px 0;background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden;}
.mtrack{display:flex;animation:marqL 30s linear infinite;}
.mitem{display:flex;align-items:center;gap:10px;flex-shrink:0;padding:0 32px;border-right:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted);white-space:nowrap;}
.mitem strong{color:var(--text);}
/* SPORT CARD */
.sc{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px 14px;text-align:center;cursor:pointer;transition:all .3s;position:relative;overflow:hidden;}
.sc:hover,.sc.on{border-color:var(--lime);transform:translateY(-4px);}
.sc.on{background:var(--lime2);box-shadow:0 0 0 2px var(--lime3);}
.semo{font-size:34px;margin-bottom:9px;display:block;}
.snm{font-size:13px;font-weight:700;}
.scnt{font-size:11px;color:var(--muted);margin-top:3px;}
.snew{position:absolute;top:7px;right:7px;background:var(--grad);color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;}
/* CITY CARD */
.cc{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px 12px;text-align:center;cursor:pointer;transition:all .3s;}
.cc:hover,.cc.on{border-color:var(--lime);transform:translateY(-3px);}
.cc.on{background:var(--lime2);}
.cico{font-size:26px;margin-bottom:7px;display:block;}
.cnm{font-size:13px;font-weight:700;}
.ccnt{font-size:11px;color:var(--muted);margin-top:3px;}
.chot{display:inline-block;background:var(--grad);color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;margin-top:4px;}
/* TURF CARD */
.tc{background:var(--card);border:1px solid var(--border);border-radius:18px;overflow:hidden;transition:all .3s;cursor:pointer;}
.tc:hover{border-color:var(--lime3);transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,.5);}
.tc-img{height:148px;display:flex;align-items:center;justify-content:center;font-size:50px;position:relative;}
.tc-bs{position:absolute;top:10px;left:10px;display:flex;gap:5px;}
.tb{background:rgba(0,0,0,.7);backdrop-filter:blur(8px);border-radius:20px;padding:3px 10px;font-size:10px;font-weight:700;}
.tb.g{border:1px solid var(--lime3);color:var(--lime);}
.tb.v{border:1px solid rgba(100,220,100,.3);color:#7ddf7d;}
.tc-rat{position:absolute;top:10px;right:10px;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);border-radius:8px;padding:4px 10px;font-size:12px;font-weight:700;}
.tc-body{padding:16px 18px;}
.tc-name{font-size:15px;font-weight:800;margin-bottom:3px;}
.tc-loc{font-size:13px;color:var(--muted);margin-bottom:9px;}
.tc-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:9px;}
.tt{font-size:11px;font-weight:700;padding:3px 9px;border-radius:20px;background:var(--lime2);border:1px solid var(--lime3);color:var(--lime);}
.tc-am{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:11px;}
.tc-am span{font-size:11px;color:var(--muted);}
.tc-foot{display:flex;align-items:center;justify-content:space-between;padding-top:11px;border-top:1px solid var(--border);}
.tc-pr{font-size:13px;color:var(--muted);}
.tc-pr strong{color:var(--text);font-size:15px;font-weight:800;}
.tc-bk{background:var(--grad);color:#fff;border:none;border-radius:9px;padding:8px 17px;font-size:13px;font-weight:700;font-family:var(--B);cursor:pointer;transition:all .2s;}
.tc-bk:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(255,65,108,.4);}
/* FEATURE CARD */
.fc{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:28px;position:relative;overflow:hidden;transition:all .3s;}
.fc::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--lime),transparent);opacity:0;transition:opacity .3s;}
.fc:hover{border-color:var(--lime3);transform:translateY(-4px);}
.fc:hover::after{opacity:1;}
.fc-ico{width:46px;height:46px;border-radius:12px;background:var(--lime2);border:1px solid var(--lime3);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px;}
.fc-num{font-family:var(--D);font-size:68px;color:rgba(202,255,0,.06);position:absolute;top:8px;right:14px;letter-spacing:2px;pointer-events:none;}
.fc-title{font-size:16px;font-weight:800;margin-bottom:8px;}
.fc-desc{font-size:13px;color:var(--muted);line-height:1.65;}
/* STEP */
.step{background:var(--card);border:1px solid var(--border);border-radius:20px;padding:34px 26px;text-align:center;transition:all .3s;}
.step:hover{border-color:var(--lime3);transform:translateY(-4px);}
.sring{width:52px;height:52px;border-radius:50%;background:var(--lime);color:#000;font-family:var(--D);font-size:24px;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;box-shadow:0 0 0 10px var(--lime2);}
.sico{font-size:32px;margin-bottom:14px;display:block;}
.stitle{font-size:17px;font-weight:800;margin-bottom:10px;}
.sdesc{font-size:13px;color:var(--muted);line-height:1.7;}
/* TESTI */
.tcard{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:26px;transition:all .3s;}
.tcard:hover{border-color:var(--lime3);transform:translateY(-3px);}
.ttype{display:inline-block;font-size:10px;font-weight:700;padding:3px 10px;border-radius:20px;margin-bottom:11px;letter-spacing:.06em;text-transform:uppercase;}
.tt-o{background:var(--lime2);border:1px solid var(--lime3);color:var(--lime);}
.tt-p{background:rgba(255,65,108,.08);border:1px solid rgba(255,65,108,.2);color:var(--pink);}
.tstars{color:var(--lime);font-size:13px;margin-bottom:11px;letter-spacing:2px;}
.tquote{font-size:14px;line-height:1.75;color:var(--text);margin-bottom:15px;}
.tauth{display:flex;align-items:center;gap:11px;padding-top:15px;border-top:1px solid var(--border);}
.tav{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--D);font-size:15px;flex-shrink:0;}
.tnm{font-size:14px;font-weight:700;}.trl{font-size:12px;color:var(--muted);}
/* FAQ */
.faq{border-bottom:1px solid var(--border);}
.faq-q{display:flex;align-items:center;justify-content:space-between;padding:17px 0;cursor:pointer;gap:14px;}
.faq-qt{font-size:15px;font-weight:600;line-height:1.4;}
.faq-ico{width:28px;height:28px;border-radius:7px;background:var(--lime2);border:1px solid var(--lime3);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;color:var(--lime);transition:transform .3s;}
.faq-ico.open{transform:rotate(45deg);}
.faq-ans{font-size:14px;color:var(--muted);line-height:1.75;max-height:0;overflow:hidden;opacity:0;transition:max-height .4s ease,opacity .3s,padding .3s;}
.faq-ans.open{max-height:260px;opacity:1;padding-bottom:17px;}
/* FORM */
.fin{background:var(--card);border:1px solid var(--border);border-radius:11px;padding:13px 17px;color:var(--text);font-family:var(--B);font-size:15px;outline:none;width:100%;transition:all .2s;}
.fin::placeholder{color:var(--muted2);}
.fin:focus{border-color:var(--lime3);background:rgba(202,255,0,.02);box-shadow:0 0 0 3px rgba(202,255,0,.06);}
textarea.fin{resize:vertical;min-height:120px;}
.fsel{background:var(--card);border:1px solid var(--border);border-radius:11px;padding:13px 17px;color:var(--text);font-family:var(--B);font-size:15px;outline:none;width:100%;cursor:pointer;}
.fsel:focus{border-color:var(--lime3);}
.fsel option{background:var(--card);}
.flbl{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:7px;display:block;}
/* PLAN */
.plan{background:var(--card);border:1px solid var(--border);border-radius:22px;padding:36px;position:relative;transition:all .3s;}
.plan.hot{border-color:var(--lime);background:var(--card2);}
.plan:hover:not(.hot){border-color:var(--borderH);transform:translateY(-3px);}
.pbadge{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:var(--lime);color:#000;font-size:10px;font-weight:700;padding:4px 16px;border-radius:100px;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;}
.pnm{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:7px;}
.pprice{font-family:var(--D);font-size:56px;letter-spacing:2px;line-height:1;margin-bottom:3px;}
.pper{font-size:13px;color:var(--muted);margin-bottom:22px;}
.pdiv{height:1px;background:var(--border);margin:18px 0;}
.pfeats{list-style:none;display:flex;flex-direction:column;gap:11px;margin-bottom:26px;}
.pfeats li{font-size:14px;color:var(--muted);display:flex;align-items:flex-start;gap:10px;line-height:1.5;}
.pck{color:var(--lime);font-size:14px;margin-top:1px;flex-shrink:0;}
.px{color:var(--muted2);font-size:14px;margin-top:1px;flex-shrink:0;}
.pbtn{width:100%;padding:13px;border-radius:10px;font-size:15px;font-weight:700;font-family:var(--B);cursor:pointer;transition:all .2s;border:none;}
.pbtn.lm{background:var(--lime);color:#000;}.pbtn.lm:hover{background:#D8FF20;}
.pbtn.gh{background:transparent;border:1px solid var(--borderH);color:var(--text);}
.pbtn.gh:hover{border-color:var(--lime3);color:var(--lime);}
/* MOCK */
.mock{background:var(--card);border:1px solid var(--border);border-radius:22px;padding:20px;overflow:hidden;}
.mbar{display:flex;align-items:center;gap:8px;padding-bottom:13px;margin-bottom:15px;border-bottom:1px solid var(--border);}
.mdot{width:12px;height:12px;border-radius:50%;}
.murl{flex:1;background:var(--bg3);border-radius:7px;padding:6px 12px;font-size:12px;font-family:monospace;margin:0 10px;border:1px solid var(--lime3);color:var(--lime);}
.mhdr{height:44px;border-radius:10px;margin-bottom:11px;display:flex;align-items:center;padding:0 14px;font-size:13px;font-weight:700;gap:9px;}
.mbanner{border-radius:10px;padding:20px;margin-bottom:12px;min-height:130px;display:flex;flex-direction:column;justify-content:flex-end;}
.mslots{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:11px;}
.mslot{height:33px;border-radius:7px;background:var(--bg);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--muted);}
.mslot.on{border-color:var(--lime);color:var(--lime);background:var(--lime2);}
.mwa{padding:11px;background:rgba(202,255,0,.04);border:1px solid var(--lime3);border-radius:10px;}
/* INFO */
.ibox{background:var(--card);border:1px solid var(--border);border-radius:18px;padding:28px;}
.irow{display:flex;align-items:flex-start;gap:14px;padding:15px 0;border-bottom:1px solid var(--border);}
.irow:last-child{border-bottom:none;}
.iico{width:42px;height:42px;border-radius:11px;background:var(--lime2);border:1px solid var(--lime3);display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0;}
.ititle{font-size:14px;font-weight:700;margin-bottom:3px;}
.ival{font-size:13px;color:var(--muted);line-height:1.6;}
.ival a{color:var(--lime);text-decoration:none;}
/* STAT */
.statbox{text-align:center;padding:30px 20px;background:var(--card);border:1px solid var(--border);border-radius:18px;}
.statnum{font-family:var(--D);font-size:52px;letter-spacing:2px;color:var(--lime);line-height:1;margin-bottom:5px;}
.statlbl{font-size:11px;color:var(--muted);letter-spacing:.08em;text-transform:uppercase;}
/* THEME DOT */
.tdot{width:28px;height:28px;border-radius:7px;cursor:pointer;border:2px solid transparent;transition:all .2s;display:inline-block;}
.tdot.sel{border-color:var(--lime);transform:scale(1.15);}
/* POLICY */
.pol-sec{max-width:860px;margin:0 auto;padding:72px 64px;}
.pol-h{font-family:var(--D);font-size:28px;letter-spacing:1px;color:var(--lime);margin-bottom:10px;margin-top:40px;}
.pol-p{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:14px;}
.pol-ul{padding-left:0;list-style:none;display:flex;flex-direction:column;gap:10px;margin-bottom:18px;}
.pol-ul li{display:flex;gap:11px;align-items:flex-start;font-size:15px;color:var(--muted);line-height:1.7;}
.pol-arrow{color:var(--lime);flex-shrink:0;font-size:14px;margin-top:2px;}
.pol-div{height:1px;background:var(--border);margin:32px 0;}
.pol-box{background:var(--card);border:1px solid var(--lime3);border-radius:14px;padding:20px 24px;margin-bottom:20px;}
.pol-box.warn{border-color:rgba(255,65,108,.3);}
.pol-eff{display:inline-flex;align-items:center;gap:8px;background:var(--lime2);border:1px solid var(--lime3);border-radius:8px;padding:6px 16px;font-size:13px;font-weight:700;color:var(--lime);margin-bottom:32px;}
/* FOOTER */
.ftwrap{background:var(--bg2);border-top:1px solid var(--border);}
.ft{max-width:1280px;margin:0 auto;padding:60px 64px 34px;}
.fttop{display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:44px;margin-bottom:48px;}
.ftlogo{font-family:var(--D);font-size:24px;letter-spacing:3px;margin-bottom:11px;}
.ftlogo span{color:var(--lime);}
.ftline{font-size:13px;color:var(--muted);line-height:1.65;max-width:240px;margin-bottom:16px;}
.ftsocs{display:flex;gap:8px;}
.fsoc{width:33px;height:33px;border-radius:8px;background:var(--card2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;font-size:14px;text-decoration:none;color:var(--muted);}
.fsoc:hover{border-color:var(--lime3);color:var(--lime);}
.ftcoltitle{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:17px;}
.ftlinks{list-style:none;display:flex;flex-direction:column;gap:11px;}
.ftlinks button{font-size:13px;color:var(--muted);transition:color .2s;background:none;border:none;cursor:pointer;font-family:var(--B);padding:0;text-align:left;}
.ftlinks button:hover{color:var(--text);}
.ftbot{padding-top:22px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
.ftcopy{font-size:12px;color:var(--muted);}
.ftmade span{color:var(--lime);font-size:12px;}
/* HAMBURGER */
.ham{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:6px;}
.ham span{display:block;width:22px;height:2px;background:var(--text);border-radius:2px;transition:all .3s;}
.ham.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px);}
.ham.open span:nth-child(2){opacity:0;}
.ham.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px);}
.mob-menu{display:none;position:fixed;top:58px;left:0;right:0;background:rgba(6,6,16,.98);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);z-index:299;padding:20px 16px;flex-direction:column;gap:4px;}
.mob-menu.open{display:flex;}
.mob-link{color:var(--muted);font-size:16px;font-weight:600;cursor:pointer;background:none;border:none;font-family:var(--B);padding:12px 14px;text-align:left;border-radius:10px;width:100%;transition:all .2s;}
.mob-link:hover,.mob-link.act{color:var(--lime);background:var(--lime2);}
.mob-divider{height:1px;background:var(--border);margin:8px 0;}
.mob-btns{display:flex;gap:10px;margin-top:8px;}
@media(max-width:1024px){.ham{display:flex;}}
/* WA */
.wabtn{position:fixed;bottom:26px;right:26px;z-index:400;width:52px;height:52px;border-radius:50%;background:#25D366;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 8px 26px rgba(37,211,102,.5);transition:all .25s;}
.wabtn::before{content:'';position:absolute;inset:0;border-radius:50%;border:1px solid rgba(37,211,102,.4);animation:ripple 2s ease-out infinite;}
.wabtn:hover{transform:scale(1.1);}

/* ══════════════════════════════════════
   RESPONSIVE — TABLET (max 1024px)
══════════════════════════════════════ */
@media(max-width:1024px){
  .nav{padding:0 28px;}
  .nlinks{display:none;}
  .nctas .nlive{display:none;}
  .sec{padding:70px 36px;}
  .sec.sm{padding:44px 36px;}
  .pghero{padding:80px 36px 60px;}
  .pol-sec{padding:56px 36px;}
  .split{grid-template-columns:1fr;gap:44px;}
  .g2{grid-template-columns:1fr 1fr;gap:16px;}
  .g3{grid-template-columns:1fr 1fr;gap:16px;}
  .g4{grid-template-columns:1fr 1fr;gap:16px;}
  .g6{grid-template-columns:repeat(3,1fr);gap:12px;}
  .fttop{grid-template-columns:1fr 1fr;gap:32px;}
  .ft{padding:52px 36px 32px;}
  .mock{display:none;}
  /* Hero stats wrap */
  .hero-stats-row{flex-wrap:wrap;gap:0;}
}

/* ══════════════════════════════════════
   RESPONSIVE — MOBILE (max 640px)
══════════════════════════════════════ */
@media(max-width:640px){
  /* NAV */
  .nav{padding:0 16px;height:58px;}
  .nmark{width:30px;height:30px;font-size:15px;}
  .nname{font-size:18px;}
  .bgs{display:none;}
  .bl.sm{padding:8px 14px;font-size:12px;}
  .nctas{gap:7px;}

  /* PAGE */
  .pg{padding-top:58px;}

  /* HERO */
  .pghero{padding:64px 16px 48px;}
  .pghero-glow{width:320px;height:220px;}
  .badge{font-size:10px;padding:4px 12px;}

  /* SECTIONS */
  .sec{padding:52px 16px;}
  .sec.sm{padding:36px 16px;}
  .pol-sec{padding:40px 16px;}

  /* TYPOGRAPHY */
  .h2{font-size:clamp(28px,8vw,44px);letter-spacing:1px;}
  .h3{font-size:clamp(24px,7vw,36px);}
  .tag{font-size:10px;}

  /* GRIDS — all single column on mobile */
  .g2,.g3,.g4,.split{grid-template-columns:1fr;gap:14px;}
  .g6{grid-template-columns:repeat(2,1fr);gap:10px;}

  /* SPORT CARDS — 2 per row on mobile */
  .semo{font-size:28px;margin-bottom:7px;}
  .snm{font-size:12px;}
  .scnt{font-size:10px;}

  /* CITY CARDS — 2 per row */
  .cico{font-size:22px;margin-bottom:5px;}
  .cnm{font-size:12px;}
  .ccnt{font-size:10px;}

  /* TURF CARDS */
  .tc-img{height:130px;font-size:44px;}
  .tc-body{padding:14px 16px;}
  .tc-name{font-size:14px;}

  /* FEATURE CARDS */
  .fc{padding:22px 18px;}
  .fc-num{font-size:52px;}
  .fc-ico{width:40px;height:40px;font-size:18px;}
  .fc-title{font-size:15px;}

  /* STEPS */
  .step{padding:28px 20px;}
  .sring{width:44px;height:44px;font-size:20px;}
  .sico{font-size:26px;}
  .stitle{font-size:15px;}

  /* TESTIMONIALS */
  .tcard{padding:20px 18px;}
  .tquote{font-size:13px;}

  /* BUTTONS */
  .bl{padding:13px 28px;font-size:14px;}
  .bg{padding:13px 28px;font-size:14px;}
  .bo{padding:12px 22px;font-size:14px;}

  /* FORMS */
  .fin,.fsel{font-size:14px;padding:11px 14px;}

  /* PLANS */
  .plan{padding:28px 22px;}
  .pprice{font-size:46px;}

  /* MOCKUP — hide on mobile */
  .mock{display:none;}

  /* HOME HERO */
  .hero-cta-row{flex-direction:column;align-items:center;}
  .hero-stats-inner{flex-direction:column;}
  .hero-stat-divider{display:none;}

  /* DUAL CTA split */
  .dual-cta-grid{grid-template-columns:1fr !important;gap:40px !important;padding:60px 16px !important;}
  .dual-cta-div{display:none !important;}
  .dual-cta-block{padding:0 !important;}

  /* CONTACT FORM grid */
  .contact-form-grid{grid-template-columns:1fr !important;}

  /* STEP BAR */
  .step-bar-text{display:none;}

  /* FAQ */
  .faq-layout-grid{grid-template-columns:1fr !important;gap:32px !important;}

  /* FOOTER */
  .fttop{grid-template-columns:1fr;gap:28px;}
  .ft{padding:40px 16px 28px;}
  .ftbot{flex-direction:column;align-items:flex-start;gap:8px;}

  /* POLICY */
  .pol-h{font-size:22px;margin-top:28px;}
  .pol-p{font-size:14px;}
  .pol-ul li{font-size:14px;}
  .pol-eff{font-size:12px;padding:5px 12px;}
  .pol-box{padding:16px 18px;}

  /* WA BUTTON */
  .wabtn{width:46px;height:46px;font-size:20px;bottom:18px;right:18px;}

  /* STEP BAR on find turf */
  .find-step-bar{padding:12px 16px !important;}
}

/* ══════════════════════════════════════
   RESPONSIVE — SMALL MOBILE (max 380px)
══════════════════════════════════════ */
/* Fix inline dual-cta for mobile via parent class override */
@media(max-width:640px){
  .dual-cta-inner > div:first-child { padding-right: 0 !important; }
  .dual-cta-inner > div:last-child  { padding-left:  0 !important; }
  .dual-cta-inner { grid-template-columns: 1fr !important; }
  .dual-cta-inner > div[style*="background:var(--border)"] { display: none !important; }
  .step-bar-wrap { padding: 12px 16px !important; }
  .step-bar-wrap > div { gap: 8px !important; }
  .step-bar-step-label { font-size: 11px !important; }
  .hero-stats-wrap { flex-direction: column !important; gap: 0; }
  .hero-stats-wrap > div { border-right: none !important; border-bottom: 1px solid var(--border) !important; padding: 16px 0 !important; }
  .hero-stats-wrap > div:last-child { border-bottom: none !important; }
}
@media(max-width:380px){
  .nname{display:none;}
  .g6{grid-template-columns:repeat(2,1fr);}
  .h2{font-size:clamp(26px,9vw,38px);}
  .bl,.bg{padding:12px 22px;font-size:13px;}
  .plan{padding:24px 18px;}
  .pprice{font-size:40px;}
  .pghero{padding:56px 14px 40px;}
  .sec{padding:44px 14px;}
}
`;

export default CSS;
