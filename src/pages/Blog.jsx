/** Blog — 10 posts with images, date, content, single post reader */
import React, { useState, useEffect, useRef } from 'react';

const POSTS = [
  {
    id: 1,
    slug: "turf-booking-software-guide-2026",
    title: "Turf Booking Software Guide: How Automated Systems Simplify Venue Operations",
    metaTitle: "Turf Booking Software Guide 2026 | Match Ticket",
    metaDescription: "Learn how modern turf booking software automates slot reservations, collects online UPI payments, and eliminates double bookings for ground owners.",
    category: "Software",
    date: "July 28, 2026",
    time: "5:30 PM",
    readTime: "6 min read",
    image: "/blog-turf-booking-question-guide.png",
    excerpt: "Every Turf Booking Question. One Complete Guide. Discover how online slot locking, instant receipts, and UPI payments elevate your turf business.",
    content: [
      { type: "p", text: "Managing a sports ground requires precision. When teams call or send WhatsApp messages during peak evening hours, manual reservation logging often leads to double bookings and confused players." },
      { type: "h2", text: "Why Choose Turf Booking Software?" },
      { type: "ul", items: [
        "24/7 Online Booking: Players can check live slot schedules and book anytime without phone calls.",
        "Automatic Slot Lock: Slots lock immediately upon payment confirmation to eliminate clashes.",
        "Instant WhatsApp Confirmations: Automated digital receipts with QR code access sent to players."
      ] },
      { type: "cta", text: "Explore Turf Booking Software Features", page: "turf-booking-software" }
    ]
  },
  {
    id: 2,
    slug: "turf-management-software-operating-system",
    title: "Turf Management Software: The Complete Operating System for Sports Ground Owners",
    metaTitle: "Turf Management Software Operating System | Match Ticket",
    metaDescription: "Comprehensive guide to turf management software — staff rosters, revenue tracking, customer history, and multi-venue management.",
    category: "Software",
    date: "July 28, 2026",
    time: "5:15 PM",
    readTime: "7 min read",
    image: "/blog-football-turf-management.png",
    excerpt: "Turf management software acts as the central brain of your sports business. Streamline staff shifts, track revenue, and monitor multi-ground operations from one screen.",
    content: [
      { type: "p", text: "A sports venue involves more than taking slot fees — it requires managing staff, floodlight costs, maintenance schedules, and repeat customer relationships." },
      { type: "h2", text: "Core Operating Features" },
      { type: "ul", items: [
        "Multi-Ground Dashboard: Manage multiple football, box cricket, and badminton venues.",
        "Financial Analytics: Real-time tracking of daily collections, weekly growth, and pending balances.",
        "Customer Database: Store player booking history and run automated repeat promotions."
      ] },
      { type: "cta", text: "Learn About Turf Management System", page: "turf-management-software" }
    ]
  },
  {
    id: 3,
    slug: "ground-booking-software-box-cricket-football",
    title: "Ground Booking Software for Box Cricket & Football Arenas: Feature Breakdown",
    metaTitle: "Ground Booking Software for Box Cricket & Football | Match Ticket",
    metaDescription: "Discover how ground booking software handles box cricket pitches, 5-a-side football grounds, and multi-court sports complexes with ease.",
    category: "Guide",
    date: "July 28, 2026",
    time: "5:00 PM",
    readTime: "6 min read",
    image: "/blog-cricket-turf-business.png",
    excerpt: "Tailored ground booking software designed for box cricket nets and football pitches — split payments, dynamic floodlight rates, and tournament schedules.",
    content: [
      { type: "p", text: "Box cricket arenas and football grounds have unique operational needs, from 60-minute quick matches to half-day weekend tournaments." },
      { type: "h2", text: "Key Features for Ground Owners" },
      { type: "ul", items: [
        "Dynamic Hourly Rates: Higher pricing for weekend evening slots under floodlights.",
        "Split Match Bookings: Allow team captains to share booking links for group payment.",
        "Tournament Management: Lock multiple consecutive hours for leagues and corporate cups."
      ] },
      { type: "cta", text: "View Ground Booking Software Solutions", page: "ground-booking-software" }
    ]
  },
  {
    id: 4,
    slug: "sports-facility-management-software-academies",
    title: "Sports Facility Management Software: Managing Multi-Sport Complexes & Academies",
    metaTitle: "Sports Facility Management Software | Match Ticket",
    metaDescription: "Streamline multi-sport complex operations, student memberships, court allocations, and coaching schedules with facility management software.",
    category: "Management",
    date: "July 28, 2026",
    time: "4:45 PM",
    readTime: "7 min read",
    image: "/blog-sports-facility-management.png",
    excerpt: "How commercial sports complexes and sports academies manage court rosters, monthly coaching subscriptions, and public pay-and-play slots simultaneously.",
    content: [
      { type: "p", text: "Running a facility with badminton courts, tennis courts, football turfs, and coaching academies requires coordinated scheduling to avoid court conflicts." },
      { type: "h2", text: "Facility Operations Simplified" },
      { type: "ul", items: [
        "Academy & Student Pass Management: Separate recurring academy passes from public casual bookings.",
        "Staff & Coach Shift Allocation: Assign coaches and court marshals to specific schedules.",
        "Automated Tax Invoicing: Generate GST-ready bills for corporate clients and members."
      ] },
      { type: "cta", text: "Explore Sports Facility Software", page: "sports-facility-management-software" }
    ]
  },
  {
    id: 5,
    slug: "online-turf-booking-benefits-players-owners",
    title: "Online Turf Booking: Why Players & Turf Owners Prefer Digital Reservations",
    metaTitle: "Online Turf Booking Benefits for Players & Owners | Match Ticket",
    metaDescription: "Why online turf booking platforms increase customer satisfaction, fill off-peak morning hours, and boost total venue revenue.",
    category: "Technology",
    date: "July 28, 2026",
    time: "4:30 PM",
    readTime: "5 min read",
    image: "/blog-manage-bookings-online.png",
    excerpt: "Online turf booking gives players the freedom to search, pick slots, and pay in under 60 seconds, while giving ground owners 24/7 automated reservations.",
    content: [
      { type: "p", text: "Today's sports players expect the convenience of instant online reservations. Providing live slot visibility online converts casual visitors into confirmed bookings." },
      { type: "h2", text: "The Power of Digital Slot Reservations" },
      { type: "ul", items: [
        "Instant Slot Confirmation: Bookings confirmed in under 60 seconds via UPI.",
        "24/7 Revenue Generation: Accept bookings even when your venue counter is closed.",
        "Reduced Phone Call Dependency: Free up venue staff from answering routine availability calls."
      ] },
      { type: "cta", text: "Start Accepting Online Turf Bookings", page: "online-turf-booking" }
    ]
  },
  {
    id: 6,
    slug: "best-turf-booking-software-india-evaluation",
    title: "Best Turf Booking Software in India: Complete Evaluation Matrix for 2026",
    metaTitle: "Best Turf Booking Software in India 2026 | Match Ticket",
    metaDescription: "Comparing the best turf booking software in India. Evaluate pricing, live slot sync, WhatsApp integration, UPI payouts, and support for venue owners.",
    category: "Guide",
    date: "July 28, 2026",
    time: "4:15 PM",
    readTime: "8 min read",
    image: "/blog-online-booking-system.png",
    excerpt: "Discover what makes a turf booking software truly top-rated in India — transparent pricing, reliable real-time slot sync, zero double bookings, and 24/7 local support.",
    content: [
      { type: "p", text: "Choosing the right software for your turf business is an important investment. Venue owners need a platform that is reliable, affordable, and easy for staff and players to use." },
      { type: "h2", text: "Evaluation Criteria" },
      { type: "ul", items: [
        "Zero Double Bookings: Real-time slot locking during payment checkout.",
        "Transparent Direct Payouts: Online UPI payments transferred directly to the owner's bank account.",
        "Branded Venue Page: White-labeled booking website with custom branding and domain support."
      ] },
      { type: "cta", text: "Discover India's #1 Rated Turf Software", page: "best-turf-booking-software-india" }
    ]
  },
  {
    id: 7,
    slug: "welcome-vps-turf-krishnagiri-match-ticket",
    title: "Welcome VPS Turf (Krishnagiri) to the Match Ticket Family: Digitizing Sports Venues Across Tamil Nadu",
    metaTitle: "VPS Turf Krishnagiri Joins Match Ticket | Turf Booking Software",
    metaDescription: "VPS Turf in Krishnagiri, Tamil Nadu joins Match Ticket! Discover how sports ground owners digitize slot bookings, UPI payments, and customer management.",
    category: "Growth",
    date: "July 23, 2026",
    time: "2:00 PM",
    readTime: "4 min read",
    image: "/blog-vps-turf-krishnagiri-match-ticket.png",
    excerpt: "We're excited to welcome VPS Turf in Krishnagiri, Tamil Nadu to the Match Ticket family! Learn how turf owners across India digitize operations and fill slots faster.",
    content: [
      { type: "p", text: "We are thrilled to officially welcome VPS Turf (located in Krishnagiri, Tamil Nadu) to the growing Match Ticket family! As sports culture expands across tier-1 and tier-2 cities in Tamil Nadu, ground owners are realizing the power of digitizing their sports venues." },
      { type: "p", text: "By onboarding onto Match Ticket, VPS Turf players in Krishnagiri can now check live slot availability 24/7, reserve grounds instantly on mobile, and complete secure UPI and online card payments seamlessly." },
      { type: "h2", text: "What Digitization Means for Turf Owners" },
      { type: "ul", items: [
        "Smart Booking System: Allows players to reserve grounds anytime, anywhere without calling.",
        "Instant Online Payments: Get paid directly and securely via UPI, Net Banking, and Debit/Credit cards.",
        "Real-Time Slot Synchronization: Automatic slot locking to eliminate double bookings.",
        "Business Growth & Analytics: Track peak booking hours, customer histories, and revenue trends."
      ] },
      { type: "cta", text: "Digitize Your Ground - Join Match Ticket Today", page: "list-turf" }
    ]
  },
  {
    id: 8,
    slug: "how-to-increase-turf-bookings-in-2026",
    title: "How to Increase Turf Bookings in 2026? Proven Strategies to Improve Occupancy & Revenue",
    metaTitle: "How to Increase Turf Bookings in 2026 | Match Ticket",
    metaDescription: "Proven strategies to get more turf bookings, improve slot occupancy, set smart pricing, market your ground online, and grow turf revenue in 2026.",
    category: "Growth",
    date: "July 25, 2026",
    time: "3:00 PM",
    readTime: "6 min read",
    image: "/blog-increase-turf-bookings-2026.png",
    excerpt: "Proven strategies to get more bookings, improve slot occupancy & grow revenue in 2026 — smart pricing, live availability, digital marketing, and repeat customer retention.",
    content: [
      { type: "p", text: "Every turf owner wants to fill empty morning and afternoon slots and increase total monthly revenue. In 2026, relying solely on walk-in customers or casual word-of-mouth is no longer enough to maximize ground profitability." },
      { type: "h2", text: "5 Pillars of High-Growth Turf Business" },
      { type: "ul", items: [
        "Smart Pricing: Set dynamic pricing for off-peak hours and weekend peak slots.",
        "Live Availability 24/7: Show real-time availability so players can book anytime.",
        "Digital Marketing: Reach local players on Instagram, Google Business, and WhatsApp.",
        "Repeat Customer Experience: Offer seamless online booking and instant WhatsApp confirmations.",
        "Track & Improve: Use data reports to track revenue trends and repeat booking rates."
      ] },
      { type: "cta", text: "Start Increasing Your Bookings Free", page: "list-turf" }
    ]
  },
  {
    id: 9,
    slug: "turf-booking-software-chennai-bengaluru",
    title: "Turf Booking Software for Chennai & Bengaluru: Why Smart Turf Owners Are Switching to Match Ticket",
    metaTitle: "Best Turf Booking Software for Chennai & Bengaluru | Match Ticket",
    metaDescription: "Looking for the best turf booking software in Chennai & Bengaluru? Manage bookings, payments, reports, tournaments, and multiple grounds with Match Ticket.",
    category: "Software",
    date: "July 23, 2026",
    time: "1:00 PM",
    readTime: "5 min read",
    image: "/blog-turf-booking-software-chennai-bengaluru.png",
    excerpt: "Looking for the best turf booking software for Chennai & Bengaluru? Discover how smart turf owners manage bookings, payments, reports, and tournaments effortlessly with Match Ticket.",
    content: [
      { type: "p", text: "Every evening, football turfs and box cricket grounds across Chennai and Bengaluru are packed with players. Friends book weekend matches, companies organize corporate games, and sports academies schedule regular practice sessions." },
      { type: "p", text: "More bookings mean more business—but they also mean more work. Many turf owners still manage everything through WhatsApp messages, phone calls, notebooks, or Excel sheets. At first, this may seem easy, but as bookings increase, problems start appearing:" },
      { type: "ul", items: [
        "Two teams get booked for the same slot (Double Bookings).",
        "Payments are difficult to track across multiple UPI apps.",
        "Customers keep calling continuously to check availability.",
        "Staff struggle to manage schedules during peak hours."
      ] },
      { type: "cta", text: "Switch to Match Ticket Today", page: "list-turf" }
    ]
  },
  {
    id: 10,
    slug: "managing-turf-bookings-whatsapp-upgrade",
    title: "Still Managing Your Turf Bookings on WhatsApp? It's Time to Upgrade",
    metaTitle: "Upgrade from WhatsApp Turf Bookings to Automated Software | Match Ticket",
    metaDescription: "Why relying on WhatsApp and phone calls for turf bookings leads to double bookings, lost payments, and frustrated players — and how to upgrade to Match Ticket.",
    category: "Guide",
    date: "July 22, 2026",
    time: "5:00 PM",
    readTime: "5 min read",
    image: "/blog-managing-turf-bookings-whatsapp-upgrade.png",
    excerpt: "Why relying on WhatsApp and phone calls for turf bookings leads to double bookings, lost payments, and frustrated players — and how to upgrade.",
    content: [
      { type: "p", text: "Every evening, football turfs and box cricket grounds across Chennai, Bengaluru, and tier-2 cities are packed with players. Managing everything through WhatsApp messages and phone calls leads to missed enquiries and lost revenue." },
      { type: "h2", text: "Why Digital Management Matters More Than Ever" },
      { type: "p", text: "Today's customers expect a smooth booking experience. They want to check available slots online, book instantly, pay online, receive booking confirmation immediately, and get reminders before the match." },
      { type: "cta", text: "Upgrade Your Turf to Match Ticket", page: "list-turf" }
    ]
  },
  {
    id: 11,
    slug: "turf-management-software-operating-system",
    title: "Turf Management Software: The Complete Operating System for Sports Ground Owners",
    metaTitle: "Turf Management Software Operating System | Match Ticket",
    metaDescription: "Comprehensive guide to turf management software — staff rosters, revenue tracking, customer history, and multi-venue management.",
    category: "Software",
    date: "July 28, 2026",
    time: "5:15 PM",
    readTime: "7 min read",
    image: "/blog-football-turf-management.png",
    excerpt: "Turf management software acts as the central brain of your sports business. Streamline staff shifts, track revenue, and monitor multi-ground operations from one screen.",
    content: [
      { type: "p", text: "A sports venue involves more than taking slot fees — it requires managing staff, floodlight costs, maintenance schedules, and repeat customer relationships." },
      { type: "h2", text: "Core Operating Features" },
      { type: "ul", items: [
        "Multi-Ground Dashboard: Manage multiple football, box cricket, and badminton venues.",
        "Financial Analytics: Real-time tracking of daily collections, weekly growth, and pending balances.",
        "Customer Database: Store player booking history and run automated repeat promotions."
      ] },
      { type: "cta", text: "Learn About Turf Management System", page: "turf-management-software" }
    ]
  },
  {
    id: 7,
    slug: "ground-booking-software-box-cricket-football",
    title: "Ground Booking Software for Box Cricket & Football Arenas: Feature Breakdown",
    metaTitle: "Ground Booking Software for Box Cricket & Football | Match Ticket",
    metaDescription: "Discover how ground booking software handles box cricket pitches, 5-a-side football grounds, and multi-court sports complexes with ease.",
    category: "Guide",
    date: "July 28, 2026",
    time: "5:00 PM",
    readTime: "6 min read",
    image: "/blog-cricket-turf-business.png",
    excerpt: "Tailored ground booking software designed for box cricket nets and football pitches — split payments, dynamic floodlight rates, and tournament schedules.",
    content: [
      { type: "p", text: "Box cricket arenas and football grounds have unique operational needs, from 60-minute quick matches to half-day weekend tournaments." },
      { type: "h2", text: "Key Features for Ground Owners" },
      { type: "ul", items: [
        "Dynamic Hourly Rates: Higher pricing for weekend evening slots under floodlights.",
        "Split Match Bookings: Allow team captains to share booking links for group payment.",
        "Tournament Management: Lock multiple consecutive hours for leagues and corporate cups."
      ] },
      { type: "cta", text: "View Ground Booking Software Solutions", page: "ground-booking-software" }
    ]
  },
  {
    id: 8,
    slug: "sports-facility-management-software-academies",
    title: "Sports Facility Management Software: Managing Multi-Sport Complexes & Academies",
    metaTitle: "Sports Facility Management Software | Match Ticket",
    metaDescription: "Streamline multi-sport complex operations, student memberships, court allocations, and coaching schedules with facility management software.",
    category: "Management",
    date: "July 28, 2026",
    time: "4:45 PM",
    readTime: "7 min read",
    image: "/blog-sports-facility-management.png",
    excerpt: "How commercial sports complexes and sports academies manage court rosters, monthly coaching subscriptions, and public pay-and-play slots simultaneously.",
    content: [
      { type: "p", text: "Running a facility with badminton courts, tennis courts, football turfs, and coaching academies requires coordinated scheduling to avoid court conflicts." },
      { type: "h2", text: "Facility Operations Simplified" },
      { type: "ul", items: [
        "Academy & Student Pass Management: Separate recurring academy passes from public casual bookings.",
        "Staff & Coach Shift Allocation: Assign coaches and court marshals to specific schedules.",
        "Automated Tax Invoicing: Generate GST-ready bills for corporate clients and members."
      ] },
      { type: "cta", text: "Explore Sports Facility Software", page: "sports-facility-management-software" }
    ]
  },
  {
    id: 9,
    slug: "online-turf-booking-benefits-players-owners",
    title: "Online Turf Booking: Why Players & Turf Owners Prefer Digital Reservations",
    metaTitle: "Online Turf Booking Benefits for Players & Owners | Match Ticket",
    metaDescription: "Why online turf booking platforms increase customer satisfaction, fill off-peak morning hours, and boost total venue revenue.",
    category: "Technology",
    date: "July 28, 2026",
    time: "4:30 PM",
    readTime: "5 min read",
    image: "/blog-manage-bookings-online.png",
    excerpt: "Online turf booking gives players the freedom to search, pick slots, and pay in under 60 seconds, while giving ground owners 24/7 automated reservations.",
    content: [
      { type: "p", text: "Today's sports players expect the convenience of instant online reservations. Providing live slot visibility online converts casual visitors into confirmed bookings." },
      { type: "h2", text: "The Power of Digital Slot Reservations" },
      { type: "ul", items: [
        "Instant Slot Confirmation: Bookings confirmed in under 60 seconds via UPI.",
        "24/7 Revenue Generation: Accept bookings even when your venue counter is closed.",
        "Reduced Phone Call Dependency: Free up venue staff from answering routine availability calls."
      ] },
      { type: "cta", text: "Start Accepting Online Turf Bookings", page: "online-turf-booking" }
    ]
  },
  {
    id: 10,
    slug: "best-turf-booking-software-india-evaluation",
    title: "Best Turf Booking Software in India: Complete Evaluation Matrix for 2026",
    metaTitle: "Best Turf Booking Software in India 2026 | Match Ticket",
    metaDescription: "Comparing the best turf booking software in India. Evaluate pricing, live slot sync, WhatsApp integration, UPI payouts, and support for venue owners.",
    category: "Guide",
    date: "July 28, 2026",
    time: "4:15 PM",
    readTime: "8 min read",
    image: "/blog-online-booking-system.png",
    excerpt: "Discover what makes a turf booking software truly top-rated in India — transparent pricing, reliable real-time slot sync, zero double bookings, and 24/7 local support.",
    content: [
      { type: "p", text: "Choosing the right software for your turf business is an important investment. Venue owners need a platform that is reliable, affordable, and easy for staff and players to use." },
      { type: "h2", text: "Evaluation Criteria" },
      { type: "ul", items: [
        "Zero Double Bookings: Real-time slot locking during payment checkout.",
        "Transparent Direct Payouts: Online UPI payments transferred directly to the owner's bank account.",
        "Branded Venue Page: White-labeled booking website with custom branding and domain support."
      ] },
      { type: "cta", text: "Discover India's #1 Rated Turf Software", page: "best-turf-booking-software-india" }
    ]
  },
  {
    id: 11,
    slug: "how-to-prevent-no-shows-turf-booking",
    title: "How to Prevent No-Shows in Turf Bookings: Advance Deposits & Reminders",
    metaTitle: "How to Avoid No-Shows in Turf Bookings | Match Ticket",
    metaDescription: "Tired of teams booking slots over phone and failing to show up? Learn how automated advance deposits and WhatsApp reminders eliminate no-shows for turf owners.",
    category: "Growth",
    date: "July 28, 2026",
    time: "3:30 PM",
    readTime: "5 min read",
    image: "/blog-increase-turf-bookings.png",
    excerpt: "No-shows waste prime evening slots and cost turf owners thousands in lost revenue. Discover how automated advance UPI deposits and WhatsApp alerts guarantee 100% attendance.",
    content: [
      { type: "p", text: "When a team books an 8:00 PM weekend slot over a phone call but fails to turn up, that slot is wasted forever. Implementing advance digital deposits fixes this problem instantly." },
      { type: "cta", text: "Stop No-Shows — Start Match Ticket Free", page: "list-turf" }
    ]
  },
  {
    id: 12,
    slug: "pickleball-court-business-india",
    title: "Pickleball Court Business in India: Setup Cost, Slot Pricing & Booking Software",
    metaTitle: "Pickleball Court Business & Setup Guide India | Match Ticket",
    metaDescription: "Pickleball is India's fastest-growing racket sport. Learn court setup dimensions (44x20 ft), surface flooring costs, slot hourly pricing, and booking management.",
    category: "Marketing",
    date: "July 28, 2026",
    time: "3:00 PM",
    readTime: "5 min read",
    image: "/blog-turf-booking-app-benefits.png",
    excerpt: "Pickleball requires 1/3rd the space of a tennis court. Discover how to build a lucrative pickleball venue in India and automate court reservations.",
    content: [
      { type: "p", text: "Pickleball is taking metro cities by storm. With quick learning curves and compact court dimensions (20ft x 44ft), ground owners can fit 3 pickleball courts in the space of 1 tennis court." },
      { type: "cta", text: "List Your Pickleball Venue Free", page: "list-turf" }
    ]
  },
  {
    id: 13,
    slug: "turf-marketing-ideas-india",
    title: "15 Marketing Ideas to Promote Your Sports Turf in India & Fill Off-Peak Slots",
    metaTitle: "15 Marketing Ideas to Promote Your Turf in India | Match Ticket",
    metaDescription: "Creative and cost-effective marketing ideas to promote your football turf or box cricket arena locally, generate corporate leads, and fill weekday morning slots.",
    category: "Marketing",
    date: "July 18, 2026",
    time: "11:30 AM",
    readTime: "6 min read",
    image: "/blog-turf-marketing-ideas.png",
    excerpt: "Creative and effective marketing ideas to promote your turf business locally, attract corporate tournament bookings, and fill off-peak morning hours.",
    content: [
      { type: "p", text: "Marketing your turf does not require a massive advertising budget. With targeted local strategies, you can reach hundreds of players in your city." },
      { type: "cta", text: "Promote Your Turf Online Free", page: "list-turf" }
    ]
  },
  {
    id: 14,
    slug: "how-to-start-turf-business-india",
    title: "How to Start a Football & Cricket Turf Business in India: Cost, Land & ROI Guide",
    metaTitle: "How to Start a Turf Business in India | Cost & ROI Guide",
    metaDescription: "Complete step-by-step guide to starting a artificial grass football and cricket turf business in India. Calculate land requirements, installation costs, monthly profits, and payback period.",
    category: "Business",
    date: "July 15, 2026",
    time: "10:00 AM",
    readTime: "7 min read",
    image: "/blog-turf-owner-tips.png",
    excerpt: "Essential business blueprint for starting a profitable turf venue in India — land selection, synthetic grass specifications, investment costs, and operational automation.",
    content: [
      { type: "p", text: "Opening a sports turf is one of the most attractive commercial business opportunities in urban and semi-urban India today. Demand for football pitches and box cricket arenas continues to surge." },
      { type: "h2", text: "Key Steps to Launch Your Turf Business" },
      { type: "ul", items: [
        "Select accessible land with proper vehicle parking",
        "Choose high-grade 50mm monofilament artificial grass turf",
        "Install 300W LED floodlights for lucrative evening slots",
        "Automate slot reservations and UPI payments using Match Ticket"
      ] },
      { type: "cta", text: "Start Your Turf Journey Today", page: "list-turf" }
    ]
  }
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
            loading="eager"
            decoding="async"
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
          loading="lazy"
          decoding="async"
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
