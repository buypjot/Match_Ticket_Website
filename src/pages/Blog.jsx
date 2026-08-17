/** Blog — 10 posts with images, date, content, single post reader */
import React, { useState, useEffect, useRef } from 'react';

import { POSTS } from '../data/blogPosts';

const CATEGORY_COLORS = {
  Software:   { bg: "rgba(202,255,0,.12)",  color: "var(--lime)" },
  Guide:      { bg: "rgba(96,165,250,.12)", color: "#60a5fa" },
  Business:   { bg: "rgba(251,146,60,.12)", color: "#fb923c" },
  Technology: { bg: "rgba(167,139,250,.12)",color: "#a78bfa" },
  Growth:     { bg: "rgba(52,211,153,.12)", color: "#34d399" },
  Marketing:  { bg: "rgba(251,113,133,.12)",color: "#fb7185" },
};

/* ── Post content renderer ── */
function PostBody({ content, navigate }) {
  return (
    <div style={{lineHeight:1.8}}>
      {content.map((block, i) => {
        if (block.type === "p")
          return <p key={i} style={{fontSize:16,color:"var(--muted)",marginBottom:20,lineHeight:1.8}}>{block.text}</p>;
        if (block.type === "h2")
          return <h2 key={i} style={{fontFamily:"var(--D)",fontSize:"clamp(22px,3vw,30px)",letterSpacing:1,marginTop:36,marginBottom:12}}>{block.text}</h2>;
        if (block.type === "ul")
          return (
            <ul key={i} style={{listStyle:"none",padding:0,margin:"0 0 20px"}}>
              {block.items.map((it,j)=>(
                <li key={j} style={{display:"flex",gap:10,alignItems:"flex-start",padding:"8px 0",borderBottom:"1px solid var(--border)",fontSize:15,color:"var(--muted)"}}>
                  <span style={{color:"var(--lime)",fontWeight:700,marginTop:1}}>→</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          );
        if (block.type === "cta")
          return (
            <div key={i} style={{margin:"40px 0 0",background:"var(--bg2)",border:"1px solid var(--lime3)",borderRadius:14,padding:"28px 32px",textAlign:"center"}}>
              <div style={{fontSize:13,color:"var(--muted)",marginBottom:12,textTransform:"uppercase",letterSpacing:".1em"}}>Ready to get started?</div>
              <button className="bl" style={{padding:"14px 36px",fontSize:15,borderRadius:10}} onClick={()=>navigate(block.page)}>
                {block.text} →
              </button>
            </div>
          );
        return null;
      })}
    </div>
  );
}

/* ── Single Post View ── */
function PostView({ post, onBack, navigate }) {
  const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guide;
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef(null);

  /* Scroll to top when post opens */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  /* Show sticky back button once user scrolls past the hero image */
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setShowSticky(window.scrollY > heroRef.current.offsetHeight + 66);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="main-content" role="main" style={{background:"var(--bg)",minHeight:"100vh",paddingTop:"86px"}}>
      {/* Container for square hero image (1080x1080) showing all details */}
      <div style={{maxWidth:760,margin:"0 auto",padding:"0 16px"}}>
        {/* Back button above image */}
        <button
          onClick={onBack}
          style={{background:"var(--bg2)",border:"1px solid var(--border)",color:"var(--text)",borderRadius:10,padding:"10px 20px",cursor:"pointer",fontSize:14,fontFamily:"var(--B)",fontWeight:600,display:"flex",alignItems:"center",gap:8,marginBottom:20,transition:"all .2s"}}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(202,255,0,.1)"}
          onMouseLeave={e=>e.currentTarget.style.background="var(--bg2)"}
        >
          ← Back to Blog
        </button>

        {/* Square Image container showing full details of 1080x1080 */}
        <div ref={heroRef} style={{width:"100%",borderRadius:16,overflow:"hidden",border:"1px solid var(--border)",background:"var(--bg2)",marginBottom:32}}>
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            decoding="async"
            style={{width:"100%",height:"auto",display:"block"}}
          />
        </div>
      </div>

      {/* Sticky floating Back to Blog button — shows when scrolled past image */}
      <div style={{
        position:"fixed",top:80,left:20,zIndex:290,
        transform: showSticky ? "translateY(0)" : "translateY(-20px)",
        opacity: showSticky ? 1 : 0,
        pointerEvents: showSticky ? "auto" : "none",
        transition:"all .3s ease"
      }}>
        <button
          onClick={onBack}
          style={{background:"rgba(6,6,16,.9)",border:"1px solid rgba(202,255,0,.35)",color:"var(--lime)",borderRadius:10,padding:"10px 18px",cursor:"pointer",fontSize:13,fontFamily:"var(--B)",fontWeight:700,backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 20px rgba(0,0,0,.4)",transition:"all .2s"}}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(202,255,0,.15)"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(6,6,16,.9)"}
        >
          ← Back to Blog
        </button>
      </div>

      {/* Content */}
      <div style={{maxWidth:760,margin:"0 auto",padding:"0 16px 56px"}}>
        {/* Meta */}
        <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:16}}>
          <span style={{background:cat.bg,color:cat.color,borderRadius:100,padding:"3px 12px",fontSize:12,fontWeight:700}}>{post.category}</span>
          <span style={{fontSize:13,color:"var(--muted)"}}>📅 {post.date}</span>
          <span style={{fontSize:13,color:"var(--muted)"}}>🕐 {post.time}</span>
          <span style={{fontSize:13,color:"var(--muted)"}}>⏱️ {post.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{fontFamily:"var(--D)",fontSize:"clamp(28px,5vw,48px)",lineHeight:1.05,letterSpacing:2,marginBottom:24}}>{post.title.toUpperCase()}</h1>

        {/* Divider */}
        <div style={{height:2,background:"linear-gradient(90deg,var(--lime),transparent)",marginBottom:32,borderRadius:2}}/>

        {/* Body */}
        <PostBody content={post.content} navigate={navigate}/>

        {/* Bottom back button */}
        <div style={{marginTop:56,paddingTop:32,borderTop:"1px solid var(--border)"}}>
          <button
            onClick={onBack}
            style={{background:"var(--bg2)",border:"1px solid var(--lime3)",color:"var(--lime)",borderRadius:10,padding:"12px 24px",cursor:"pointer",fontSize:14,fontFamily:"var(--B)",fontWeight:700,display:"flex",alignItems:"center",gap:8,transition:"all .2s"}}
            onMouseEnter={e=>e.currentTarget.style.background="var(--lime2)"}
            onMouseLeave={e=>e.currentTarget.style.background="var(--bg2)"}
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    </main>
  );
}

/* ── Blog Card ── */
function BlogCard({ post, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guide;
  const postUrl = `/blog/${post.slug}`;
  return (
    <article
      style={{
        background:"var(--card)",
        border:"1px solid var(--border)",
        borderRadius:16,
        overflow:"hidden",
        cursor:"pointer",
        transition:"transform .2s,box-shadow .2s,border-color .2s",
        display:"flex",
        flexDirection:"column"
      }}
      onMouseEnter={e=>{
        setHovered(true);
        e.currentTarget.style.transform="translateY(-4px)";
        e.currentTarget.style.boxShadow="0 20px 48px rgba(0,0,0,.4)";
        e.currentTarget.style.borderColor="rgba(202,255,0,.25)";
      }}
      onMouseLeave={e=>{
        setHovered(false);
        e.currentTarget.style.transform="translateY(0)";
        e.currentTarget.style.boxShadow="none";
        e.currentTarget.style.borderColor="var(--border)";
      }}
    >
      <a
        href={postUrl}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", flex: 1 }}
      >
        {/* Image — square 1:1 ratio with no clashing text overlay */}
        <div style={{width:"100%",paddingBottom:"100%",overflow:"hidden",flexShrink:0,position:"relative",background:"var(--bg2)"}}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            decoding="async"
            style={{
              position:"absolute",
              inset:0,
              width:"100%",
              height:"100%",
              objectFit:"cover",
              objectPosition:"top center",
              transition:"transform .4s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)"
            }}
          />
        </div>

        {/* Content below the square image */}
        <div style={{padding:"20px 22px 24px",display:"flex",flexDirection:"column",flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,flexWrap:"wrap"}}>
            <span style={{background:cat.bg,color:cat.color,borderRadius:100,padding:"2px 10px",fontSize:11,fontWeight:700}}>{post.category}</span>
            <span style={{fontSize:11,color:"var(--muted)"}}>📅 {post.date} · {post.time}</span>
            <span style={{fontSize:11,color:"var(--muted)",marginLeft:"auto"}}>⏱️ {post.readTime}</span>
          </div>

          <h2 style={{fontFamily:"var(--D)",fontSize:"clamp(18px,2vw,24px)",letterSpacing:1,lineHeight:1.1,marginBottom:10,flex:1}}>{post.title.toUpperCase()}</h2>

          <p style={{fontSize:13,color:"var(--muted)",lineHeight:1.6,marginBottom:16}}>{post.excerpt}</p>

          <div
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
            style={{
              display:"flex",
              alignItems:"center",
              gap:6,
              color: linkHovered ? "var(--text)" : "var(--lime)",
              fontSize:13,
              fontWeight:700,
              transition:"color .2s ease",
              alignSelf:"flex-start"
            }}
          >
            Read Article <span style={{
              fontSize:16,
              transform: linkHovered ? "translateX(6px)" : "translateX(0)",
              transition: "transform .2s ease",
              display: "inline-block"
            }}>→</span>
          </div>
        </div>
      </a>
    </article>
  );
}

/* ── Page Button Component for Pagination ── */
function PageButton({ active, disabled, onClick, children }) {
  const [hovered, setHovered] = useState(false);

  const style = {
    background: active
      ? "var(--lime)"
      : disabled
      ? "rgba(255, 255, 255, 0.02)"
      : hovered
      ? "rgba(202, 255, 0, 0.08)"
      : "var(--bg2)",
    border: active
      ? "1px solid var(--lime)"
      : disabled
      ? "1px solid rgba(255, 255, 255, 0.05)"
      : hovered
      ? "1px solid var(--lime)"
      : "1px solid var(--border)",
    color: active
      ? "#060610"
      : disabled
      ? "var(--muted)"
      : hovered
      ? "var(--lime)"
      : "var(--text)",
    borderRadius: 10,
    width: typeof children === "number" ? 40 : "auto",
    height: 40,
    padding: typeof children === "number" ? 0 : "0 20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "var(--B)",
    boxShadow: active ? "0 4px 20px rgba(202, 255, 0, 0.25)" : "none",
    transform: hovered && !disabled && !active ? "translateY(-2px)" : active ? "translateY(-1px)" : "translateY(0)",
    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? "none" : "auto"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {children}
    </button>
  );
}

/* ── Main Blog Page ── */
function Blog({ page, navigate }) {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const categories = ["All", ...Array.from(new Set(POSTS.map(p => p.category)))];

  // Match active post from page prop or current pathname
  let activePost = null;
  const currentPath = page || window.location.pathname.replace(/^\/|\/$/g, "");
  if (currentPath && currentPath.startsWith("blog/")) {
    const slug = currentPath.replace(/^blog\//, "").split("?")[0].split("#")[0];
    activePost = POSTS.find((p) => p.slug === slug);
  }

  if (activePost) {
    return <PostView post={activePost} onBack={() => navigate("blog")} navigate={navigate} />;
  }

  const filtered = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filtered.slice(startIndex, endIndex);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    const filterSection = document.querySelector(".sec");
    if (filterSection) {
      filterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main id="main-content" className="pg" role="main" aria-label="Match Ticket Blog">

      {/* ── Hero ── */}
      <div className="pghero">
        <div className="pghero-grid"/><div className="pghero-glow"/>
        <div className="pghero-inner">
          <div className="badge a1"><div className="bdot"/>Insights &amp; Stories</div>
          <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(46px,7vw,88px)",lineHeight:.9,letterSpacing:2,marginBottom:14}}>
            MATCH TICKET<br/><span className="hl">BLOG.</span>
          </h1>
          <p className="a3" style={{fontSize:16,color:"var(--muted)",maxWidth:480,lineHeight:1.65}}>
            Turf business ideas, booking management tips, sports industry updates and expert guides to grow your turf business.
          </p>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="sec" style={{paddingBottom:0}}>
        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:36}}>
          {categories.map(cat=>(
            <button
              key={cat}
              onClick={()=>setFilter(cat)}
              style={{
                padding:"7px 18px",fontSize:13,fontWeight:700,borderRadius:100,cursor:"pointer",
                fontFamily:"var(--B)",transition:"all .2s",
                background: filter===cat ? "var(--lime)" : "var(--bg2)",
                color:       filter===cat ? "#000"        : "var(--muted)",
                border:      filter===cat ? "1px solid var(--lime)" : "1px solid var(--border)",
              }}
            >{cat}</button>
          ))}
          <span style={{marginLeft:"auto",fontSize:13,color:"var(--muted)",alignSelf:"center"}}>{filtered.length} article{filtered.length!==1?"s":""}</span>
        </div>

        {/* ── Post Grid ── */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:24,marginBottom:40}}>
          {currentPosts.map(post=>(
            <BlogCard key={post.id} post={post} onClick={()=>navigate(`blog/${post.slug}`)}/>
          ))}
        </div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:8,marginBottom:64,flexWrap:"wrap"}}>
            <PageButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </PageButton>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <PageButton
                key={pageNum}
                active={currentPage === pageNum}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </PageButton>
            ))}

            <PageButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </PageButton>
          </div>
        )}
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{background:"var(--bg2)",borderTop:"1px solid var(--border)"}}>
        <div style={{maxWidth:1280,margin:"0 auto",padding:"clamp(40px,6vw,72px) clamp(16px,5vw,64px)",textAlign:"center"}}>
          <div className="tag" style={{display:"flex",justifyContent:"center",marginBottom:16}}>For Turf Owners</div>
          <h2 className="h2" style={{textAlign:"center",marginBottom:16}}>READY TO <span className="hl">GROW YOUR TURF?</span></h2>
          <p style={{fontSize:16,color:"var(--muted)",maxWidth:480,margin:"0 auto 32px",lineHeight:1.7}}>
            Join 500+ turf owners already using Match Ticket to manage bookings, payments and customers.
          </p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="bl" style={{padding:"14px 36px",fontSize:15,borderRadius:10}} onClick={()=>navigate("list-turf")}>🏟️ List Your Turf Free</button>
            <button className="bg" style={{padding:"14px 36px",fontSize:15,borderRadius:10}} onClick={()=>navigate("contact")}>📞 Talk to Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
