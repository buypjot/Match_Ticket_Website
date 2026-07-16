/** Blog — 10 posts with images, date, content, single post reader */
import React, { useState, useEffect, useRef } from 'react';

const POSTS = [
  {
    id: 1,
    slug: "best-turf-booking-software-india",
    title: "Best Turf Booking Software in India",
    category: "Software",
    date: "July 10, 2025",
    time: "10:00 AM",
    readTime: "5 min read",
    image: "/blog-turf-booking-software.png",
    excerpt: "Discover what makes a great turf booking software and why Match Ticket is the top choice for sports venue owners across India.",
    content: [
      { type: "p", text: "Managing a turf business in India has become increasingly competitive. With players demanding instant online bookings and turf owners needing reliable tools to manage their operations, choosing the right turf booking software is more important than ever." },
      { type: "h2", text: "What is Turf Booking Software?" },
      { type: "p", text: "Turf booking software is a digital platform that helps sports venue owners manage bookings, track payments, schedule slots and communicate with customers — all from one dashboard. It replaces manual registers, phone calls and spreadsheets with a fully automated system." },
      { type: "h2", text: "Key Features to Look For" },
      { type: "ul", items: ["Real-time slot availability and booking", "Automated payment collection", "Customer management and booking history", "Mobile-friendly dashboard", "WhatsApp and SMS notifications", "Multi-ground management support"] },
      { type: "h2", text: "Why Match Ticket is the Best Choice" },
      { type: "p", text: "Match Ticket combines all the essential tools turf owners need into one easy-to-use platform. From your own branded website to automated bookings, QR code entry, payment tracking and customer management — Match Ticket handles everything so you can focus on running your business." },
      { type: "h2", text: "Getting Started" },
      { type: "p", text: "Getting started with Match Ticket is simple. Register your turf, configure your slots and pricing, and you are ready to accept online bookings. No technical experience required. Setup takes under 2 minutes." },
      { type: "cta", text: "List Your Turf Free Today", page: "list-turf" },
    ]
  },
  {
    id: 2,
    slug: "how-to-manage-turf-bookings-online",
    title: "How to Manage Turf Bookings Online",
    category: "Guide",
    date: "July 9, 2025",
    time: "9:00 AM",
    readTime: "6 min read",
    image: "/blog-manage-bookings-online.png",
    excerpt: "A step-by-step guide for turf owners on managing all bookings, slots, and payments online using a smart booking platform.",
    content: [
      { type: "p", text: "Managing turf bookings manually is time-consuming and error-prone. Phone calls get missed, slots get double-booked and payments go untracked. Moving your turf operations online solves all of these problems instantly." },
      { type: "h2", text: "Step 1 — Set Up Your Online Booking System" },
      { type: "p", text: "The first step is to register your turf on a dedicated booking platform like Match Ticket. Add your turf name, location, available sports, pricing and slot timings. Your turf will be visible to players searching in your area." },
      { type: "h2", text: "Step 2 — Configure Your Slot Schedule" },
      { type: "p", text: "Set your daily opening and closing hours, define slot durations (30 min, 60 min, 90 min) and mark any blocked or unavailable times. This schedule automatically updates in real time for players booking online." },
      { type: "h2", text: "Step 3 — Accept Online Payments" },
      { type: "p", text: "Link your payment account to collect advance payments or full booking fees online. Every payment is recorded automatically, so you always know exactly what has been paid and what is pending." },
      { type: "h2", text: "Step 4 — Monitor Bookings From Your Dashboard" },
      { type: "p", text: "Your Match Ticket dashboard gives you a live view of all bookings — today, this week, this month. See who has booked, which slot, when and how much they paid. All in one place, accessible from your mobile." },
      { type: "ul", items: ["View daily schedule at a glance", "Track revenue and pending payments", "Manage customer details and history", "Block slots for maintenance or events", "Export booking reports"] },
      { type: "cta", text: "Start Managing Bookings Online", page: "list-turf" },
    ]
  },
  {
    id: 3,
    slug: "cricket-turf-business-guide",
    title: "Cricket Turf Business Guide",
    category: "Business",
    date: "July 8, 2025",
    time: "11:00 AM",
    readTime: "7 min read",
    image: "/blog-cricket-turf-business.png",
    excerpt: "Everything you need to know to run a successful cricket turf business — from setup to filling every slot every day.",
    content: [
      { type: "p", text: "Cricket is one of the most popular sports in India, and the demand for quality cricket turfs continues to grow. A well-managed cricket turf can be a highly profitable business if you have the right systems in place." },
      { type: "h2", text: "Setting Up Your Cricket Turf" },
      { type: "p", text: "Start with the right pitch type — whether box cricket, net practice or full ground. Invest in quality turf surface, good lighting for evening sessions and basic amenities like changing rooms and parking. These factors directly influence customer satisfaction and repeat bookings." },
      { type: "h2", text: "Pricing Your Cricket Turf" },
      { type: "p", text: "Research local competitors and price your slots competitively. Offer peak and off-peak pricing to maximize occupancy. Common pricing models include per-hour slots, package deals and monthly memberships for regular teams." },
      { type: "h2", text: "Managing Bookings Efficiently" },
      { type: "p", text: "Use a cricket turf booking software to manage all reservations in one place. Avoid double bookings, track payments and maintain customer records automatically. Match Ticket is designed specifically for this purpose." },
      { type: "h2", text: "Growing Your Cricket Turf Business" },
      { type: "ul", items: ["List your turf on booking platforms for visibility", "Offer corporate packages for team events", "Partner with local cricket academies", "Promote on social media with match highlights", "Collect and display player reviews online"] },
      { type: "cta", text: "List Your Cricket Turf", page: "list-turf" },
    ]
  },
  {
    id: 4,
    slug: "football-turf-management-software",
    title: "Football Turf Management Software",
    category: "Software",
    date: "July 7, 2025",
    time: "10:30 AM",
    readTime: "5 min read",
    image: "/blog-football-turf-management.png",
    excerpt: "How dedicated turf management software helps football ground owners automate operations and grow their business.",
    content: [
      { type: "p", text: "Football turf businesses require precise slot management, especially during peak evening hours when multiple teams want to book simultaneously. Without the right software, managing this manually leads to errors and lost revenue." },
      { type: "h2", text: "Challenges Football Turf Owners Face" },
      { type: "ul", items: ["Double bookings during peak hours", "Manual payment collection errors", "Difficulty tracking which customers have paid", "No way to block maintenance slots easily", "No visibility into daily and monthly revenue"] },
      { type: "h2", text: "How Football Turf Management Software Helps" },
      { type: "p", text: "A dedicated football turf management software like Match Ticket eliminates all of these problems. The system automatically locks slots once booked, tracks all payments and gives you a complete view of your turf schedule and revenue from one screen." },
      { type: "h2", text: "Key Features for Football Turfs" },
      { type: "ul", items: ["Real-time slot lock to prevent double bookings", "Support for multiple pitches or grounds", "Online payment with automatic confirmation", "Customer booking history and profiles", "Revenue reports and analytics"] },
      { type: "h2", text: "Why Match Ticket Works Best for Football Grounds" },
      { type: "p", text: "Match Ticket is built for sports facility owners. Whether you have one football pitch or multiple grounds, the platform scales with your business. You get your own booking page, automated notifications and full payment management — all in one place." },
      { type: "cta", text: "List Your Football Turf", page: "list-turf" },
    ]
  },
  {
    id: 5,
    slug: "online-booking-system-sports-grounds",
    title: "Online Booking System for Sports Grounds",
    category: "Technology",
    date: "July 6, 2025",
    time: "9:30 AM",
    readTime: "6 min read",
    image: "/blog-online-booking-system.png",
    excerpt: "Why every sports ground needs an online booking system and how to choose the right one for your facility.",
    content: [
      { type: "p", text: "The days of managing sports ground bookings through phone calls and paper registers are over. An online booking system gives both ground owners and players a faster, more convenient experience." },
      { type: "h2", text: "What is an Online Booking System?" },
      { type: "p", text: "An online booking system is a web or app-based platform where players can view available slots, choose a time, pay and confirm their booking instantly — without calling the owner. For owners, all bookings appear in a central dashboard in real time." },
      { type: "h2", text: "Benefits for Ground Owners" },
      { type: "ul", items: ["24/7 booking availability without manual work", "Automatic payment collection and tracking", "No risk of double bookings or scheduling errors", "Complete customer records maintained automatically", "Increased visibility to players searching online"] },
      { type: "h2", text: "Benefits for Players" },
      { type: "ul", items: ["Book a slot in under 60 seconds", "See real-time availability before booking", "Secure online payment options", "Instant confirmation via WhatsApp or SMS", "No need to call and wait for confirmation"] },
      { type: "h2", text: "Choosing the Right System" },
      { type: "p", text: "Look for a system that is easy to set up, mobile-friendly, supports online payments and gives you a clear dashboard view. Match Ticket ticks all these boxes and is specifically built for sports ground management in India." },
      { type: "cta", text: "Set Up Your Online Booking System", page: "list-turf" },
    ]
  },
  {
    id: 6,
    slug: "how-to-increase-turf-bookings",
    title: "How to Increase Turf Bookings",
    category: "Growth",
    date: "July 5, 2025",
    time: "10:00 AM",
    readTime: "6 min read",
    image: "/blog-increase-turf-bookings.png",
    excerpt: "Proven strategies to attract more players, fill empty slots and grow your turf booking revenue consistently.",
    content: [
      { type: "p", text: "Every turf owner wants more bookings and better revenue. But increasing bookings requires a combination of the right tools, the right marketing and a great customer experience. Here are the most effective strategies." },
      { type: "h2", text: "1. Enable Online Booking" },
      { type: "p", text: "The single biggest change you can make is accepting online bookings. Players are far more likely to book a turf that lets them reserve a slot instantly online than one that requires a phone call. Set up Match Ticket and get bookings even while you sleep." },
      { type: "h2", text: "2. List on Turf Discovery Platforms" },
      { type: "p", text: "Getting your turf listed on a platform like Match Ticket gives you instant visibility to players searching for turfs in your city. This brings in new customers who have never heard of your turf." },
      { type: "h2", text: "3. Offer Off-Peak Discounts" },
      { type: "p", text: "Many turfs have empty slots during morning and afternoon hours. Offer discounted rates during these times to attract schools, corporates and casual players who have flexible schedules." },
      { type: "h2", text: "4. Collect and Display Reviews" },
      { type: "p", text: "Positive reviews build trust and encourage new players to book. Ask satisfied customers to leave reviews on Google and your booking page. Respond to feedback professionally to show you value your customers." },
      { type: "h2", text: "5. Use WhatsApp Marketing" },
      { type: "p", text: "Build a WhatsApp broadcast list of past customers. Send reminders when popular slots open up, promote weekend offers and share booking links directly. WhatsApp marketing is free and highly effective for local businesses." },
      { type: "ul", items: ["Run weekend tournaments to fill multiple slots at once", "Partner with schools and colleges for weekly bookings", "Offer loyalty discounts to repeat customers", "Promote booking links on Instagram and Facebook"] },
      { type: "cta", text: "Start Getting More Bookings", page: "list-turf" },
    ]
  },
  {
    id: 7,
    slug: "turf-marketing-ideas",
    title: "Turf Marketing Ideas",
    category: "Marketing",
    date: "July 4, 2025",
    time: "11:30 AM",
    readTime: "5 min read",
    image: "/blog-turf-marketing-ideas.png",
    excerpt: "Creative and effective marketing ideas to promote your turf business locally and attract more players consistently.",
    content: [
      { type: "p", text: "Marketing your turf does not require a big budget. With the right strategies, you can reach hundreds of local players and keep your slots filled throughout the week." },
      { type: "h2", text: "Social Media Marketing" },
      { type: "p", text: "Instagram and Facebook are powerful tools for turf marketing. Post match highlights, action shots of players, tournament announcements and behind-the-scenes content. Use local hashtags to reach players in your city." },
      { type: "h2", text: "Google Business Profile" },
      { type: "p", text: "Claim and optimize your Google Business Profile. Add your turf photos, operating hours, location and booking link. Players searching for turfs near them will find your listing in Google Maps and Search." },
      { type: "h2", text: "WhatsApp Broadcast Marketing" },
      { type: "p", text: "Create a WhatsApp broadcast list with past customers. Send slot availability updates, weekend offers and tournament announcements. This is one of the most cost-effective marketing channels for local sports businesses." },
      { type: "h2", text: "Referral Programs" },
      { type: "p", text: "Reward existing customers for referring friends. A simple refer-and-earn discount encourages word-of-mouth marketing, which is still the most powerful form of promotion for local businesses." },
      { type: "ul", items: ["Run free-entry tournaments to generate buzz", "Partner with local sports coaches for promotions", "Sponsor local football or cricket leagues", "Place banners near schools, colleges and residential areas", "Offer first-time player discounts"] },
      { type: "cta", text: "Get Your Turf Online Today", page: "list-turf" },
    ]
  },
  {
    id: 8,
    slug: "turf-owner-business-tips",
    title: "Turf Owner Business Tips",
    category: "Business",
    date: "July 3, 2025",
    time: "10:00 AM",
    readTime: "6 min read",
    image: "/blog-turf-owner-tips.png",
    excerpt: "Essential business tips every turf owner should follow to run a profitable, well-organised and growing sports venue.",
    content: [
      { type: "p", text: "Running a turf business involves more than just opening the gates and letting players in. The most successful turf owners treat it as a proper business — with systems, processes and continuous improvement." },
      { type: "h2", text: "1. Track Every Booking and Payment" },
      { type: "p", text: "Never let a booking happen without recording it. Whether online or walk-in, every booking must be logged with the customer name, slot time and payment status. Use a booking management platform to do this automatically." },
      { type: "h2", text: "2. Keep Your Turf in Top Condition" },
      { type: "p", text: "The quality of your turf surface directly affects customer satisfaction and reviews. Schedule regular maintenance, replace worn-out nets and keep amenities clean. A well-maintained turf earns better reviews and higher repeat bookings." },
      { type: "h2", text: "3. Build a Regular Customer Base" },
      { type: "p", text: "Regular customers are the foundation of a stable turf business. Offer weekly booking packages, loyalty discounts and priority slot access to customers who book consistently. Retain them with excellent service." },
      { type: "h2", text: "4. Manage Your Finances Separately" },
      { type: "p", text: "Keep your turf business finances separate from personal funds. Use a dedicated bank account for all turf-related transactions. This makes tax compliance easier and gives you a clear picture of your actual business profitability." },
      { type: "h2", text: "5. Use Technology to Save Time" },
      { type: "p", text: "The most successful turf owners use booking management software to automate repetitive tasks. With Match Ticket, booking confirmations, payment collection and customer records are handled automatically — saving you hours every week." },
      { type: "ul", items: ["Hire reliable staff for ground management", "Set clear rules for cancellations and refunds", "Collect customer feedback after every booking", "Review your revenue weekly to identify growth opportunities"] },
      { type: "cta", text: "Grow Your Turf Business with Match Ticket", page: "list-turf" },
    ]
  },
  {
    id: 9,
    slug: "sports-facility-management-guide",
    title: "Sports Facility Management Guide",
    category: "Guide",
    date: "July 2, 2025",
    time: "9:00 AM",
    readTime: "7 min read",
    image: "/blog-sports-facility-management.png",
    excerpt: "A complete guide to managing a sports facility efficiently — covering bookings, staff, maintenance and customer experience.",
    content: [
      { type: "p", text: "Managing a sports facility involves coordinating multiple moving parts — ground availability, staff schedules, customer bookings, payments and ongoing maintenance. A structured approach makes this manageable and profitable." },
      { type: "h2", text: "Booking Management" },
      { type: "p", text: "Implement a real-time booking system to prevent conflicts and give customers visibility into available slots. A good booking system eliminates double bookings, automates confirmations and keeps all records organised without any manual effort." },
      { type: "h2", text: "Slot and Schedule Management" },
      { type: "p", text: "Define clear slot durations and opening hours. Use your management platform to block maintenance windows, set peak and off-peak pricing and handle multiple grounds or courts from a single dashboard." },
      { type: "h2", text: "Payment and Financial Management" },
      { type: "p", text: "Collect payments at the time of booking to reduce no-shows and cancellations. Track all incoming revenue, pending payments and refunds through your platform. Generate monthly revenue reports for accurate business tracking." },
      { type: "h2", text: "Staff and Operations" },
      { type: "p", text: "Assign responsibilities clearly to your ground staff. Make sure every team member knows the daily booking schedule and has access to important customer and slot information. Use your platform to share schedules digitally." },
      { type: "h2", text: "Customer Experience" },
      { type: "ul", items: ["Send automatic booking confirmations via WhatsApp", "Provide clear instructions for first-time visitors", "Collect post-booking feedback from customers", "Respond to complaints promptly and professionally", "Maintain high cleanliness and facility standards"] },
      { type: "cta", text: "Manage Your Sports Facility with Match Ticket", page: "list-turf" },
    ]
  },
  {
    id: 10,
    slug: "turf-booking-app-benefits",
    title: "Turf Booking App Benefits",
    category: "Technology",
    date: "July 1, 2025",
    time: "10:00 AM",
    readTime: "5 min read",
    image: "/blog-turf-booking-app-benefits.png",
    excerpt: "Discover the key benefits of using a turf booking app for both ground owners and players looking to book sports facilities online.",
    content: [
      { type: "p", text: "A turf booking app transforms the way sports venues operate. It removes friction from the booking process for players and eliminates manual work for owners. Here are the most important benefits." },
      { type: "h2", text: "Benefits for Turf Owners" },
      { type: "ul", items: ["Accept bookings 24 hours a day without manual work", "Eliminate double bookings with real-time slot locking", "Collect advance payments securely online", "Track all bookings and revenue from one dashboard", "Reduce dependency on phone calls and walk-ins", "Reach new customers through the app marketplace"] },
      { type: "h2", text: "Benefits for Players" },
      { type: "ul", items: ["Find available turfs near your location instantly", "Check real-time slot availability before booking", "Book and pay in under 60 seconds", "Receive instant confirmation on WhatsApp", "No need to call and wait for a callback", "Cancel or modify bookings as per policy"] },
      { type: "h2", text: "How Match Ticket Delivers These Benefits" },
      { type: "p", text: "Match Ticket is built specifically for the Indian sports venue market. Turf owners get a dedicated booking platform, their own branded website and a complete management dashboard. Players get a simple, fast booking experience on mobile." },
      { type: "h2", text: "The Bottom Line" },
      { type: "p", text: "Using a turf booking app is no longer optional — it is essential for any serious sports venue owner. It saves time, increases bookings and provides a better experience for everyone. Match Ticket makes this transition simple and affordable." },
      { type: "cta", text: "Try Match Ticket Free", page: "list-turf" },
    ]
  },
];

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
        <div ref={heroRef} style={{width:"100%",aspectRatio:"1/1",borderRadius:16,overflow:"hidden",border:"1px solid var(--border)",background:"#000",marginBottom:32}}>
          <img
            src={post.image}
            alt={post.title}
            style={{width:"100%",height:"100%",objectFit:"contain",display:"block"}}
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
  const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guide;
  return (
    <article
      onClick={onClick}
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
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 20px 48px rgba(0,0,0,.4)";e.currentTarget.style.borderColor="rgba(202,255,0,.25)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="var(--border)";}}
    >
      {/* Image — square 1:1 ratio with no clashing text overlay */}
      <div style={{width:"100%",paddingBottom:"100%",overflow:"hidden",flexShrink:0,position:"relative",background:"#000"}}>
        <img
          src={post.image}
          alt={post.title}
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",transition:"transform .4s ease"}}
          onMouseEnter={e=>e.target.style.transform="scale(1.03)"}
          onMouseLeave={e=>e.target.style.transform="scale(1)"}
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

        <div style={{display:"flex",alignItems:"center",gap:6,color:"var(--lime)",fontSize:13,fontWeight:700}}>
          Read Article <span style={{fontSize:16}}>→</span>
        </div>
      </div>
    </article>
  );
}

/* ── Main Blog Page ── */
function Blog({ navigate }) {
  const [activePost, setActivePost] = useState(null);
  const [filter, setFilter]         = useState("All");

  const categories = ["All", ...Array.from(new Set(POSTS.map(p => p.category)))];
  const filtered   = filter === "All" ? POSTS : POSTS.filter(p => p.category === filter);

  if (activePost) {
    return <PostView post={activePost} onBack={()=>setActivePost(null)} navigate={navigate}/>;
  }

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
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(380px,1fr))",gap:24,marginBottom:64}}>
          {filtered.map(post=>(
            <BlogCard key={post.id} post={post} onClick={()=>setActivePost(post)}/>
          ))}
        </div>
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
