import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.join(__dirname, '..', 'build');

const ROUTE_DATA = {
  "home": {
    title: "Match Ticket - Turf Booking & Ground Management Software",
    description: "Manage your turf bookings, slots, payments, and customers with Match Ticket. India's complete ground and turf management software for sports venue owners.",
    heading: "Match Ticket — Turf Booking & Ground Management Software",
    content: `
      <p>Manage your turf bookings, time slots, online payments, customer registers, and sports ground schedules effortlessly. Match Ticket is India's leading sports venue management software built for turf owners, football grounds, box cricket complex operators, and badminton court owners across Tamil Nadu (Chennai, Coimbatore, Tenkasi, Madurai, Salem, Trichy, Tiruppur) and India.</p>
      
      <h2>Book a Turf. Own Your Game.</h2>
      <p>For turf owners — custom website, automated bookings, WhatsApp notifications, and QR entry. For players — find, book, and play your favourite sport in under 60 seconds.</p>

      <h2>The Complete Sports Platform Features</h2>
      <ul>
        <li><strong>Verified Turfs</strong>: Every turf reviewed for quality before getting our Verified badge.</li>
        <li><strong>Book in 60 Seconds</strong>: Search, pick a slot, pay, and get your QR — all under a minute.</li>
        <li><strong>QR Code Entry</strong>: Unique QR per booking. Scan at the gate — no calls, no paper.</li>
        <li><strong>WhatsApp Automation</strong>: Confirmations, reminders, and alerts sent automatically to players and owners.</li>
        <li><strong>Owner Custom Websites</strong>: Branded custom website with your own domain. Fully white-labeled.</li>
        <li><strong>Direct Payments</strong>: Integrated payment gateways (UPI, Cards, Net Banking) — money straight to the owner's bank account.</li>
        <li><strong>4.9 Star Rated</strong>: Top-rated by turf venue operators and sports players across all platforms.</li>
        <li><strong>24/7 Dedicated Support</strong>: WhatsApp support and dedicated account manager always available.</li>
      </ul>

      <h2>For Players & Teams</h2>
      <p>Finding a quality sports ground shouldn't require dozens of phone calls or manual checking. Match Ticket gives players instant real-time visibility into turf slot availability across top cities including Chennai, Coimbatore, Tenkasi, Madurai, Salem, Trichy, and Tiruppur.</p>
      <ul>
        <li><strong>Instant Slot Lock</strong>: Reserve time slots in under 60 seconds with live slot locking upon booking.</li>
        <li><strong>Multiple Sports Supported</strong>: Book Football fields, Box Cricket arenas, Badminton courts, Tennis, and Pickleball venues.</li>
        <li><strong>Secure Digital Payments</strong>: Pay seamlessly using UPI, Debit/Credit Cards, or Net Banking with instant WhatsApp receipts.</li>
      </ul>

      <h2>For Turf & Complex Owners</h2>
      <p>Eliminate manual paper registers, WhatsApp message confusion, and costly double bookings. Match Ticket provides ground venue owners with cloud-based turf booking software, custom white-labeled websites, and automated revenue tracking.</p>
      <ul>
        <li><strong>Zero Double Bookings</strong>: Automated real-time slot synchronization locks slots upon payment confirmation.</li>
        <li><strong>Custom Hourly Pricing Rules</strong>: Set dynamic pricing for peak hours, night floodlights, weekdays, and weekend tournaments.</li>
        <li><strong>Multi-Venue Management</strong>: Monitor multiple sports grounds and locations from a single owner dashboard.</li>
      </ul>

      <h2>Top Cities Covered in Tamil Nadu</h2>
      <ul>
        <li><strong>Chennai</strong>: Football turfs, box cricket, badminton courts in Velachery, Anna Nagar, T. Nagar, Adyar, OMR.</li>
        <li><strong>Coimbatore</strong>: Multi-sport grounds, artificial turf arenas in Peelamedu, RS Puram, Saravanampatti.</li>
        <li><strong>Tenkasi & Tirunelveli</strong>: Football and cricket grounds with instant online slot booking and digital receipts.</li>
        <li><strong>Madurai, Salem, Trichy & Tiruppur</strong>: Verified sports venues with real-time slot pricing and player reviews.</li>
      </ul>

      <h2>Flexible Pricing Plans for Turf Owners</h2>
      <ul>
        <li><strong>Starter Plan (₹0)</strong>: Free digitization of slot schedules and online venue listing.</li>
        <li><strong>Pro Plan (₹1,299/mo or ₹11,999/yr)</strong>: Automated slot management, instant online payments, WhatsApp booking notifications, customer analytics, and custom domain integration.</li>
        <li><strong>Elite Plan (₹2,999/mo or ₹27,999/yr)</strong>: Multi-branch management, dedicated account manager, custom API integrations, and white-label options.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Match Ticket",
      "url": "https://matchticket.in",
      "description": "India's complete turf booking and ground management platform"
    }
  },
  "find-turf": {
    title: "Find Turf Near You - Book Cricket & Football Turfs Online | Match Ticket",
    description: "Find and book cricket turfs, football turfs, badminton courts, and sports grounds near you across Tamil Nadu (Chennai, Coimbatore, Tenkasi, Madurai, Salem, Trichy). Check live slot availability and reserve instantly.",
    heading: "Find & Book Verified Sports Turfs Near You",
    content: `
      <p>Discover and book sports turfs across Tamil Nadu. Search by sport including Football, Box Cricket, Badminton, Tennis, Volleyball, and Pickleball.</p>
      <h2>Top Cities Covered</h2>
      <ul>
        <li><strong>Chennai</strong>: Football turfs, box cricket, badminton courts in Velachery, Anna Nagar, T. Nagar, Adyar, OMR.</li>
        <li><strong>Coimbatore</strong>: Multi-sport grounds, artificial turf arenas in Peelamedu, RS Puram, Saravanampatti.</li>
        <li><strong>Tenkasi</strong>: Football and cricket grounds with instant online slot booking.</li>
        <li><strong>Madurai, Salem, Trichy, Tiruppur, Erode, Tirunelveli</strong>: Verified sports venues with real-time slot pricing.</li>
      </ul>
      <h2>Why Book Via Match Ticket?</h2>
      <ul>
        <li>Instant Slot Lock: Prevents double booking during payment.</li>
        <li>Direct UPI & Card Payments with instant digital booking confirmation.</li>
        <li>Verified Facilities: Clean changing rooms, floodlights, parking, and spectator seating.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Sports Turfs in Tamil Nadu",
      "description": "Find and book verified sports turfs across Tamil Nadu",
      "url": "https://matchticket.in/find-turf",
      "numberOfItems": 19
    }
  },
  "list-turf": {
    title: "List Your Turf - Match Ticket Ground Management Software for Owners",
    description: "List your turf on Match Ticket. Automate slot bookings, manage customer payments, prevent double bookings, and grow your turf business with India's #1 ground management software.",
    heading: "Grow Your Turf Business with Match Ticket Ground Management Software",
    content: `
      <p>Match Ticket helps turf owners, complex managers, and sports facility operators automate slot scheduling, accept online payments, track customer history, and manage multi-location venues effortlessly.</p>
      <h2>Pricing Plans for Turf Owners</h2>
      <ul>
        <li><strong>Starter Plan (₹0)</strong>: Free digitization of slot schedules and online venue listing.</li>
        <li><strong>Pro Plan (₹1,299/mo or ₹11,999/yr)</strong>: Automated slot management, instant online UPI/card payments, WhatsApp booking notifications, customer analytics, and custom domain integration.</li>
        <li><strong>Elite Plan (₹2,999/mo or ₹27,999/yr)</strong>: Multi-branch management, dedicated account manager, custom API integrations, and white-label options.</li>
      </ul>
      <h2>Key Owner Features</h2>
      <ul>
        <li>Real-Time Slot Synchronization across mobile and web.</li>
        <li>Maintenance Slot Blocking to prevent customer booking during maintenance.</li>
        <li>Dynamic Peak/Off-Peak Hourly Pricing Rules.</li>
        <li>Automated WhatsApp booking receipts and slot reminders for players.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Match Ticket for Turf Owners",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": [
        { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "INR" },
        { "@type": "Offer", "name": "Pro Monthly", "price": "1299", "priceCurrency": "INR" },
        { "@type": "Offer", "name": "Pro Annual", "price": "11999", "priceCurrency": "INR" },
        { "@type": "Offer", "name": "Elite Annual", "price": "27999", "priceCurrency": "INR" }
      ]
    }
  },
  "about": {
    title: "About Us - Match Ticket by Buyp Technologies Private Limited",
    description: "Learn about Match Ticket, India's leading sports venue booking and management platform operated by Buyp Technologies Private Limited in Tenkasi, Tamil Nadu.",
    heading: "About Match Ticket — Digitizing India's Sports Grounds",
    content: `
      <p>Match Ticket is developed and operated by <strong>Buyp Technologies Private Limited</strong> (CIN: U72900TN2021PTC141881). Founded with a mission to empower sports ground owners, Match Ticket replaces manual paper registers with smart, automated, cloud-based software.</p>
      <h2>Our Mission</h2>
      <p>To digitize sports facilities across India, making sports ground booking as seamless as booking a movie ticket, while providing turf owners with powerful business tools to grow revenue.</p>
      <h2>Corporate Entity Details</h2>
      <ul>
        <li><strong>Company Name</strong>: Buyp Technologies Private Limited</li>
        <li><strong>Brand Name</strong>: Match Ticket</li>
        <li><strong>CIN</strong>: U72900TN2021PTC141881</li>
        <li><strong>GSTIN</strong>: 33AAJCB6933B1ZZ</li>
        <li><strong>Address</strong>: 158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811, India</li>
        <li><strong>Contact Phone</strong>: +91 91235 64005</li>
        <li><strong>Contact Email</strong>: contact@matchticket.in</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Match Ticket by Buyp Technologies Private Limited",
      "url": "https://matchticket.in",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "158 P, Railway Road",
        "addressLocality": "Tenkasi",
        "addressRegion": "Tamil Nadu",
        "postalCode": "627811",
        "addressCountry": "IN"
      }
    }
  },
  "faq": {
    title: "FAQ - Match Ticket Turf Booking Software Questions & Answers",
    description: "Find answers to 20+ frequently asked questions about Match Ticket turf booking software, slot management, online payments, multi-venue control, and double-booking prevention.",
    heading: "Frequently Asked Questions — Match Ticket Turf Software",
    content: `
      <article>
        <h3>1. What is Turf Booking Software?</h3>
        <p>Turf Booking Software is a digital solution that helps turf owners manage bookings, customer details, payments and available slots from a single dashboard. Match Ticket automates the entire booking process, reduces manual work and helps owners manage their turf business efficiently.</p>
      </article>
      <article>
        <h3>2. How can I manage turf bookings online?</h3>
        <p>Match Ticket allows turf owners to manage online bookings, view available slots, accept reservations, track customer details and monitor all bookings from one platform. This saves time and eliminates manual booking registers.</p>
      </article>
      <article>
        <h3>3. How do I avoid double bookings for my turf?</h3>
        <p>Match Ticket updates slot availability in real time. Once a booking is confirmed, the selected time slot becomes unavailable immediately, preventing double bookings and scheduling conflicts.</p>
      </article>
      <article>
        <h3>4. Can customers book turf slots online?</h3>
        <p>Yes. Customers can search available turfs, choose a convenient time slot and complete their booking online through Match Ticket. The booking is instantly reflected in the owner's dashboard.</p>
      </article>
      <article>
        <h3>5. Can I manage multiple turfs with one account?</h3>
        <p>Yes. Match Ticket allows owners to manage multiple turf locations from a single account, making it easy to monitor bookings, payments and schedules across all branches.</p>
      </article>
      <article>
        <h3>6. Can I manage turf bookings from my mobile?</h3>
        <p>Yes. Match Ticket is accessible from mobile devices, allowing turf owners to monitor bookings, customers and payments anytime and from anywhere.</p>
      </article>
      <article>
        <h3>7. What sports grounds are supported?</h3>
        <p>Match Ticket supports Football Turfs, Box Cricket Turfs, Badminton Courts, Tennis Courts, Pickleball Arenas, Basketball Courts, and Multi-Sport Venues.</p>
      </article>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Turf Booking Software?",
          "acceptedAnswer": { "@type": "Answer", "text": "Turf Booking Software is a digital solution that helps turf owners manage bookings, customer details, payments and available slots from a single dashboard." }
        },
        {
          "@type": "Question",
          "name": "How do I avoid double bookings for my turf?",
          "acceptedAnswer": { "@type": "Answer", "text": "Match Ticket updates slot availability in real time. Once a booking is confirmed, the selected time slot becomes unavailable immediately." }
        }
      ]
    }
  },
  "blog": {
    title: "Blog & Turf Business Guides - Match Ticket",
    description: "Read expert guides on how to open a turf business in India, turf booking management tips, football turf marketing strategies, and ground maintenance ideas.",
    heading: "Match Ticket Blog — Turf Management & Sports Business Guides",
    content: `
      <article>
        <h3><a href="/blog/box-cricket-turf-setup-cost-india">Box Cricket Turf Setup Cost in India</a></h3>
        <p>Complete financial and technical blueprint for setting up a Box Cricket turf in India — land dimensions, artificial grass pricing, netting setup, LED lighting, and booking software automation.</p>
      </article>
      <article>
        <h3><a href="/blog/badminton-court-booking-software">Badminton Court Booking Software</a></h3>
        <p>Automate indoor badminton court slot bookings, monthly academy memberships, court lighting control, and digital receipts using dedicated badminton management software.</p>
      </article>
      <article>
        <h3><a href="/blog/turf-lighting-floodlight-cost-guide">Sports Turf Floodlight Installation Cost Guide</a></h3>
        <p>Night matches account for 60% of total turf revenue. Learn how to choose energy-efficient LED floodlights, calculate installation costs, and reduce monthly electricity bills.</p>
      </article>
      <article>
        <h3><a href="/blog/turf-booking-software-india-complete-guide">Turf Booking Software in India: Complete Guide</a></h3>
        <p>Every Turf Booking Question. One Complete Guide. Straight answers for turf owners comparing options — pricing, features, double booking prevention, and everything turf owners need to know.</p>
      </article>
      <article>
        <h3><a href="/blog/welcome-vps-turf-krishnagiri-match-ticket">Welcome VPS Turf (Krishnagiri) to the Match Ticket Family</a></h3>
        <p>VPS Turf in Krishnagiri, Tamil Nadu joins Match Ticket! Discover how sports ground owners digitize slot bookings, UPI payments, and customer management.</p>
      </article>
      <article>
        <h3><a href="/blog/turf-booking-software-chennai-bengaluru">Turf Booking Software for Chennai & Bengaluru: Why Smart Turf Owners Are Switching to Match Ticket</a></h3>
        <p>Looking for the best turf booking software? Manage bookings, payments, reports, tournaments, and multiple grounds with Match Ticket.</p>
      </article>
      <article>
        <h3><a href="/blog/managing-turf-bookings-whatsapp-upgrade">Still Managing Your Turf Bookings on WhatsApp? It's Time to Upgrade</a></h3>
        <p>Why relying on WhatsApp and phone calls for turf bookings leads to double bookings, lost payments, and frustrated players.</p>
      </article>
      <article>
        <h3><a href="/blog/best-turf-booking-software-india">Best Turf Booking Software in India</a></h3>
        <p>Discover what makes a great turf booking software and why Match Ticket is the top choice for sports venue owners across India.</p>
      </article>
      <article>
        <h3><a href="/blog/how-to-manage-turf-bookings-online">How to Manage Turf Bookings Online</a></h3>
        <p>A step-by-step guide for turf owners on managing all bookings, slots, and payments online using a smart booking platform.</p>
      </article>
      <article>
        <h3><a href="/blog/cricket-turf-business-guide">Cricket Turf Business Guide</a></h3>
        <p>Everything you need to know to run a successful cricket turf business — from setup to filling every slot every day.</p>
      </article>
      <article>
        <h3><a href="/blog/football-turf-management-software">Football Turf Management Software</a></h3>
        <p>How dedicated turf management software helps football ground owners automate operations and grow their business.</p>
      </article>
      <article>
        <h3><a href="/blog/online-booking-system-sports-grounds">Online Booking System for Sports Grounds</a></h3>
        <p>Why every sports ground needs an online booking system and how to choose the right one for your facility.</p>
      </article>
      <article>
        <h3><a href="/blog/how-to-increase-turf-bookings">How to Increase Turf Bookings</a></h3>
        <p>Proven strategies to attract more players, fill empty slots and grow your turf booking revenue consistently.</p>
      </article>
      <article>
        <h3><a href="/blog/turf-booking-app-benefits">Turf Booking App Benefits</a></h3>
        <p>Discover the key benefits of using a turf booking app for both ground owners and players looking to book sports facilities online.</p>
      </article>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Match Ticket Blog",
      "description": "Tips, guides and stories for turf owners and players"
    }
  },
  "blog/turf-booking-software-guide-2026": {
    title: "Turf Booking Software Guide 2026 | Match Ticket",
    description: "Learn how modern turf booking software automates slot reservations, collects online UPI payments, and eliminates double bookings for ground owners.",
    heading: "Turf Booking Software Guide: How Automated Systems Simplify Venue Operations",
    content: `<p>Learn how modern turf booking software automates slot reservations, collects online UPI payments, and eliminates double bookings for ground owners.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Turf Booking Software Guide 2026", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/turf-management-software-operating-system": {
    title: "Turf Management Software Operating System | Match Ticket",
    description: "Comprehensive guide to turf management software — staff rosters, revenue tracking, customer history, and multi-venue management.",
    heading: "Turf Management Software: The Complete Operating System for Sports Ground Owners",
    content: `<p>Turf management software acts as the central brain of your sports business. Streamline staff shifts, track revenue, and monitor multi-ground operations from one screen.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Turf Management Software Operating System", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/ground-booking-software-box-cricket-football": {
    title: "Ground Booking Software for Box Cricket & Football | Match Ticket",
    description: "Discover how ground booking software handles box cricket pitches, 5-a-side football grounds, and multi-court sports complexes with ease.",
    heading: "Ground Booking Software for Box Cricket & Football Arenas: Feature Breakdown",
    content: `<p>Tailored ground booking software designed for box cricket nets and football pitches — split payments, dynamic floodlight rates, and tournament schedules.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Ground Booking Software for Box Cricket & Football", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/sports-facility-management-software-academies": {
    title: "Sports Facility Management Software | Match Ticket",
    description: "Streamline multi-sport complex operations, student memberships, court allocations, and coaching schedules with facility management software.",
    heading: "Sports Facility Management Software: Managing Multi-Sport Complexes & Academies",
    content: `<p>How commercial sports complexes and sports academies manage court rosters, monthly coaching subscriptions, and public pay-and-play slots simultaneously.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Sports Facility Management Software", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/online-turf-booking-benefits-players-owners": {
    title: "Online Turf Booking Benefits for Players & Owners | Match Ticket",
    description: "Why online turf booking platforms increase customer satisfaction, fill off-peak morning hours, and boost total venue revenue.",
    heading: "Online Turf Booking: Why Players & Turf Owners Prefer Digital Reservations",
    content: `<p>Online turf booking gives players the freedom to search, pick slots, and pay in under 60 seconds, while giving ground owners 24/7 automated reservations.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Online Turf Booking Benefits for Players & Owners", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/best-turf-booking-software-india-evaluation": {
    title: "Best Turf Booking Software in India 2026 | Match Ticket",
    description: "Comparing the best turf booking software in India. Evaluate pricing, live slot sync, WhatsApp integration, UPI payouts, and support for venue owners.",
    heading: "Best Turf Booking Software in India: Complete Evaluation Matrix for 2026",
    content: `<p>Discover what makes a turf booking software truly top-rated in India — transparent pricing, reliable real-time slot sync, zero double bookings, and 24/7 local support.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Best Turf Booking Software in India 2026", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/box-cricket-turf-setup-cost-india": {
    title: "Box Cricket Turf Setup Cost in India | Match Ticket",
    description: "Planning to start a box cricket turf in India? Learn complete setup costs, land size requirements (60x40 ft), artificial grass pitch selection, net enclosures, LED lights, and ROI calculation.",
    heading: "Box Cricket Turf Setup Cost in India",
    content: `<p>Box Cricket has exploded in popularity across India. Learn complete land size requirements, artificial turf grass pricing, HDPE netting, LED lights, and booking software automation.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Box Cricket Turf Setup Cost in India", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/badminton-court-booking-software": {
    title: "Badminton Court Booking Software & Academy System | Match Ticket",
    description: "Discover how indoor badminton courts and academies automate hourly slot reservations, coaching memberships, court access control, and UPI payments with Match Ticket.",
    heading: "Badminton Court Booking Software",
    content: `<p>Automate indoor badminton court slot bookings, monthly academy memberships, court lighting control, and digital receipts using dedicated badminton management software.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Badminton Court Booking Software", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/turf-lighting-floodlight-cost-guide": {
    title: "Sports Turf Floodlight Cost & LED Lighting Guide | Match Ticket",
    description: "Guide to choosing LED floodlights for football turfs and box cricket arenas in India. Compare wattage, lux levels, installation costs, and electricity savings.",
    heading: "Sports Turf Floodlight Installation Cost Guide",
    content: `<p>Night matches account for 60% of total turf revenue. Learn how to choose energy-efficient LED floodlights, calculate installation costs, and reduce monthly electricity bills.</p>`,
    schema: { "@context": "https://schema.org", "@type": "BlogPosting", "headline": "Sports Turf Floodlight Installation Cost Guide", "datePublished": "2026-07-28", "author": { "@type": "Organization", "name": "Match Ticket" } }
  },
  "blog/turf-booking-software-india-complete-guide": {
    title: "Turf Booking Software in India: Complete Guide for Ground Owners | Match Ticket",
    description: "Every turf booking question answered in one guide — pricing, essential features, double booking prevention, GST billing, multi-ground management, and why turf owners switch to Match Ticket.",
    heading: "Turf Booking Software in India: Pricing, Features, Double Booking Prevention & Everything Turf Owners Need to Know",
    content: `
      <p>Every evening, football turfs, box cricket arenas, badminton courts, and sports complexes across India welcome hundreds of players. Weekend matches, corporate tournaments, academy training sessions, and local leagues keep grounds busy throughout the week.</p>
      <p>More bookings are great for business—but they also bring operational challenges.</p>
      <p>If you've searched for 'best turf booking software in India', 'how to avoid double bookings', or 'how much does turf management software cost', this guide answers everything in one place.</p>
      <h2>What Is Turf Booking Software?</h2>
      <p>Turf booking software is a cloud-based platform that helps sports ground owners manage bookings, payments, customers, schedules, reports, and business operations from a single dashboard.</p>
      <h2>How Does Turf Booking Software Prevent Double Bookings?</h2>
      <p>The software automatically locks the selected slot as soon as a booking is confirmed. That means no overlapping reservations, no accidental scheduling mistakes, and no disappointed customers.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Turf Booking Software in India: Pricing, Features, Double Booking Prevention & Everything Turf Owners Need to Know",
      "datePublished": "2026-07-28",
      "author": { "@type": "Organization", "name": "Match Ticket" }
    }
  },
  "blog/welcome-vps-turf-krishnagiri-match-ticket": {
    title: "VPS Turf Krishnagiri Joins Match Ticket | Turf Booking Software",
    description: "VPS Turf in Krishnagiri, Tamil Nadu joins Match Ticket! Discover how sports ground owners digitize slot bookings, UPI payments, and customer management.",
    heading: "Welcome VPS Turf (Krishnagiri) to the Match Ticket Family",
    content: `
      <p>We are thrilled to officially welcome VPS Turf (located in Krishnagiri, Tamil Nadu) to the growing Match Ticket family! As sports culture expands across tier-1 and tier-2 cities in Tamil Nadu, ground owners are realizing the power of digitizing their sports venues.</p>
      <p>By onboarding onto Match Ticket, VPS Turf players in Krishnagiri can now check live slot availability 24/7, reserve grounds instantly on mobile, and complete secure UPI and online card payments seamlessly.</p>
      <h2>What Digitization Means for Turf Owners</h2>
      <ul>
        <li>Smart Booking System: Allows players to reserve grounds anytime, anywhere without calling.</li>
        <li>Instant Online Payments: Get paid directly and securely via UPI, Net Banking, and Debit/Credit cards.</li>
        <li>Real-Time Slot Synchronization: Automatic slot locking to eliminate double bookings.</li>
        <li>Business Growth & Analytics: Track peak booking hours, customer histories, and revenue trends.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Welcome VPS Turf (Krishnagiri) to the Match Ticket Family",
      "datePublished": "2026-07-23",
      "author": { "@type": "Organization", "name": "Match Ticket" }
    }
  },
  "blog/how-to-increase-turf-bookings-2026": {
    title: "How to Increase Turf Bookings in 2026 | Match Ticket",
    description: "Proven strategies to get more turf bookings, improve slot occupancy, set smart pricing, market your ground online, and grow turf revenue in 2026.",
    heading: "How to Increase Turf Bookings in 2026? Proven Strategies to Improve Occupancy & Revenue",
    content: `
      <p>Proven strategies to get more bookings, improve slot occupancy & grow revenue in 2026 — smart pricing, live availability, digital marketing, and repeat customer retention.</p>
      <h2>5 Pillars of High-Growth Turf Business</h2>
      <ul>
        <li>Smart Pricing: Set dynamic pricing for off-peak hours and weekend peak slots.</li>
        <li>Live Availability 24/7: Show real-time availability so players can book anytime.</li>
        <li>Digital Marketing: Reach local players on Instagram, Google Business, and WhatsApp.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "How to Increase Turf Bookings in 2026?",
      "datePublished": "2026-07-25",
      "author": { "@type": "Organization", "name": "Match Ticket" }
    }
  },
  "blog/turf-booking-software-chennai-bengaluru": {
    title: "Best Turf Booking Software for Chennai & Bengaluru | Match Ticket",
    description: "Looking for the best turf booking software? Manage bookings, payments, reports, tournaments, and multiple grounds with Match Ticket.",
    heading: "Turf Booking Software for Chennai & Bengaluru",
    content: `
      <p>Every evening, football turfs and box cricket grounds across Chennai and Bengaluru are packed with players. Friends book weekend matches, companies organize corporate games, and sports academies schedule regular practice sessions.</p>
      <p>More bookings mean more business—but they also mean more work. Match Ticket helps turf owners in Chennai & Bengaluru automate real-time slot locking, digital receipts, and revenue tracking.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Turf Booking Software for Chennai & Bengaluru",
      "datePublished": "2026-07-23",
      "author": { "@type": "Organization", "name": "Match Ticket" }
    }
  },
  "turf-booking-software": {
    title: "Turf Booking Software — Automated Slot Reservations & Payments | Match Ticket",
    description: "Automate your turf booking schedule, accept instant online UPI payments, eliminate double bookings, and manage customer registers with Match Ticket turf booking software.",
    heading: "Turf Booking Software for Sports Venues",
    content: `
      <p>Manage your sports turf bookings, time slots, customer registers, and online payments effortlessly with India's #1 turf booking software.</p>
      <h2>Why Every Turf Owner Needs Modern Booking Software</h2>
      <p>Managing a sports ground using manual notebooks, phone calls, or WhatsApp messages leads to missed enquiries, double bookings during peak evening hours, and lost revenue. Match Ticket provides a cloud-based turf booking software that updates availability in real time, locks booked slots instantly, and sends automated WhatsApp booking confirmations to players.</p>
      <h2>Core Features</h2>
      <ul>
        <li><strong>Instant Slot Locking</strong>: Automatically prevents double bookings when a customer confirms payment.</li>
        <li><strong>Automated UPI & Card Payments</strong>: Accept Instant UPI, Razorpay, Debit/Credit Cards, and Net Banking directly into your owner account.</li>
        <li><strong>WhatsApp Booking Receipts</strong>: Players automatically receive booking confirmations and QR entry codes on WhatsApp.</li>
        <li><strong>Custom Dynamic Pricing</strong>: Set peak, off-peak, weekend, and night floodlight pricing rules easily.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Match Ticket Turf Booking Software",
      "applicationCategory": "BusinessApplication"
    }
  },
  "turf-management-software": {
    title: "Turf Management Software — All-in-One Operating System | Match Ticket",
    description: "Streamline daily turf operations, staff schedules, slot pricing, customer analytics, and multi-venue management with Match Ticket turf management software.",
    heading: "Turf Management Software & Venue Operating System",
    content: `
      <p>Gain total operational control over your sports grounds, multi-branch complexes, revenue reports, and customer relationships with Match Ticket.</p>
      <h2>Complete Operating System for Complex Managers</h2>
      <p>Turf Management Software handles full venue operations — tracking repeat customer frequency, staff shift schedules, multi-court facilities, and automated financial reporting.</p>
      <h2>Key Capabilities</h2>
      <ul>
        <li><strong>Multi-Venue Control</strong>: Manage multiple turf locations and branches from one master account.</li>
        <li><strong>Customer Analytics</strong>: Track repeat customer trends, lifetime booking value, and monthly revenue performance.</li>
        <li><strong>Staff Access Control</strong>: Grant custom dashboard permissions to ground managers and reception staff.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Match Ticket Turf Management Software",
      "applicationCategory": "BusinessApplication"
    }
  },
  "ground-booking-software": {
    title: "Ground Booking Software — Box Cricket & Football | Match Ticket",
    description: "Ground booking software for box cricket, football pitches, badminton courts, and multi-sport grounds. Automate slot reservations and payments online.",
    heading: "Ground Booking Software for All Sports Venues",
    content: `
      <p>Whether you operate a Box Cricket arena, Football pitch, Badminton hall, or Pickleball court — digitize your ground reservations today.</p>
      <h2>Tailored for Sports Venues</h2>
      <p>Match Ticket allows venue operators to configure custom slot lengths (30 mins, 60 mins, 90 mins, 2 hours), setup multi-court availability, and offer split payment options for team play.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Match Ticket Ground Booking Software",
      "applicationCategory": "BusinessApplication"
    }
  },
  "sports-facility-management-software": {
    title: "Sports Facility Management Software — Commercial Venues | Match Ticket",
    description: "Enterprise-grade sports facility management software for commercial sports complexes, academies, and multi-sport indoor arenas.",
    heading: "Sports Facility Management Software",
    content: `
      <p>Power your commercial sports complex, coaching academy, and indoor arenas with automated scheduling and member management.</p>
      <h2>Enterprise Solutions</h2>
      <p>Coordinate multiple courts, coaching memberships, tournament schedules, and public bookings from a unified cloud platform.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Match Ticket Sports Facility Management Software",
      "applicationCategory": "BusinessApplication"
    }
  },
  "online-turf-booking": {
    title: "Online Turf Booking — Find & Book Verified Sports Turfs | Match Ticket",
    description: "Book football turfs, box cricket arenas, and badminton courts online in under 60 seconds across Chennai, Coimbatore, Tenkasi, Madurai, Salem, and Trichy.",
    heading: "Online Turf Booking in Under 60 Seconds",
    content: `
      <p>Find verified sports turfs near you, check real-time slot availability, pay securely online, and get instant QR gate access.</p>
      <h2>How It Works</h2>
      <ul>
        <li><strong>Search</strong>: Find verified football turfs, cricket grounds, or badminton courts near your location.</li>
        <li><strong>Select Slot</strong>: View real-time available time slots and choose your preferred match time.</li>
        <li><strong>Pay & Play</strong>: Complete instant UPI/card payment, receive your WhatsApp confirmation with QR code, show up and play!</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Online Turf Booking",
      "url": "https://matchticket.in/online-turf-booking"
    }
  },
  "best-turf-booking-software-india": {
    title: "Best Turf Booking Software in India — Rated #1 | Match Ticket",
    description: "Discover why Match Ticket is rated India's #1 turf booking and ground management software by sports venue owners across South India and Tamil Nadu.",
    heading: "India's #1 Rated Turf Booking Software",
    content: `
      <p>Trusted by sports ground owners and turf entrepreneurs across Chennai, Bengaluru, Coimbatore, Tenkasi, Madurai, Salem, and India.</p>
      <h2>What Makes Match Ticket #1</h2>
      <ul>
        <li><strong>Zero Setup Friction</strong>: Register and launch your online turf booking page in under 2 minutes.</li>
        <li><strong>Starter Plan (₹0)</strong>: Digitize your venue at zero initial software cost.</li>
        <li><strong>Proven ROI</strong>: Increase weekday off-peak slot utilization by up to 40%.</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Best Turf Booking Software in India",
      "applicationCategory": "BusinessApplication"
    }
  },
  "contact": {
    title: "Contact Us - Match Ticket Sales & Customer Support",
    description: "Get in touch with Match Ticket for software demos, turf owner onboarding, or support enquiries. Call +91 91235 64005 or email contact@matchticket.in.",
    heading: "Contact Match Ticket — Sales & Support Team",
    content: `
      <p>We are available to assist turf owners, players, and sports complex operators across India.</p>
      <ul>
        <li><strong>Phone Support / WhatsApp</strong>: +91 91235 64005</li>
        <li><strong>Email Support</strong>: contact@matchticket.in</li>
        <li><strong>Office Address</strong>: Buyp Technologies Private Limited, 158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811, India</li>
        <li><strong>Support Hours</strong>: Monday to Sunday: 6:00 AM – 11:00 PM IST</li>
      </ul>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Match Ticket",
      "mainEntity": {
        "@type": "Organization",
        "name": "Match Ticket",
        "telephone": "+91 91235 64005",
        "email": "contact@matchticket.in"
      }
    }
  },
  "privacy": {
    title: "Privacy Policy - Match Ticket | Buyp Technologies Private Limited",
    description: "Match Ticket Privacy Policy. Read how we collect, store, and protect your personal data in compliance with GDPR and Digital Personal Data Protection Act (DPDP Act 2023).",
    heading: "Match Ticket Privacy Policy",
    content: `
      <p>Effective Date: 21 April 2026. Operated by <strong>Buyp Technologies Private Limited</strong>.</p>
      <p>This Privacy Policy explains how Match Ticket collects, uses, and safeguards personal data when you use our website, mobile applications, and booking management software.</p>
      <h2>Data We Collect</h2>
      <ul>
        <li>Personal Identifiers: Name, phone number, email address, and booking history.</li>
        <li>Payment Information: Transaction IDs and payment status via secure Razorpay gateways (no raw card or UPI numbers stored).</li>
        <li>Technical Data: IP addresses, browser types, and device identifiers.</li>
      </ul>
    `,
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Privacy Policy", "url": "https://matchticket.in/privacy" }
  },
  "terms": {
    title: "Terms and Conditions - Match Ticket",
    description: "Match Ticket Terms and Conditions — guidelines and legal rules for using our turf booking platform and venue management software.",
    heading: "Match Ticket Terms and Conditions",
    content: `
      <p>Effective Date: 21 April 2026. By accessing Match Ticket, you agree to these Terms and Conditions governed by Indian law.</p>
      <h2>Platform Use & User Responsibilities</h2>
      <p>Match Ticket acts as an online software platform connecting players with sports venue owners. Users agree to provide accurate information and respect venue rules.</p>
    `,
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Terms and Conditions", "url": "https://matchticket.in/terms" }
  },
  "refund": {
    title: "Refund & Cancellation Policy - Match Ticket",
    description: "Match Ticket Refund and Cancellation Policy. Guidelines for confirmed slot bookings, payment failure refunds, and venue owner payout terms.",
    heading: "Match Ticket Refund & Cancellation Policy",
    content: `
      <p>Guidelines regarding slot cancellations, payment failures, and turf owner refund rules.</p>
      <h2>Payment Failure Refunds</h2>
      <p>If an online transaction fails but funds are debited, the amount will be automatically refunded by your payment gateway provider within 5-7 working days.</p>
    `,
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Refund Policy", "url": "https://matchticket.in/refund" }
  },
  "cookies": {
    title: "Cookie Policy - Match Ticket",
    description: "Match Ticket Cookie Policy — detailed breakdown of essential, analytical, and functional cookies used on our website and portal.",
    heading: "Match Ticket Cookie Policy",
    content: `
      <p>Information on how Match Ticket utilizes cookies and local browser storage to provide secure login sessions and optimal booking experiences.</p>
    `,
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Cookie Policy", "url": "https://matchticket.in/cookies" }
  },
  "grievance": {
    title: "Grievance Redressal Policy - Match Ticket | IT Rules 2021 Compliant",
    description: "Match Ticket Grievance Officer details under IT Rules 2021. Contact Grievance Officer Anusiya at contact@matchticket.in.",
    heading: "Grievance Redressal Policy (IT Rules 2021 Compliant)",
    content: `
      <p>In accordance with Information Technology Act 2000 and Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021.</p>
      <h2>Grievance Officer Contact Details</h2>
      <ul>
        <li><strong>Grievance Officer</strong>: Anusiya (Manager)</li>
        <li><strong>Company</strong>: Buyp Technologies Private Limited</li>
        <li><strong>Email</strong>: contact@matchticket.in</li>
        <li><strong>Address</strong>: 158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811, India</li>
        <li><strong>Acknowledgement Timeline</strong>: Within 24 hours</li>
        <li><strong>Resolution Timeline</strong>: Within 15 working days</li>
      </ul>
    `,
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Grievance Redressal Policy", "url": "https://matchticket.in/grievance" }
  },
  "disclaimer": {
    title: "Disclaimer & Liability Notice - Match Ticket",
    description: "Match Ticket Legal Disclaimer and Intermediary Status Notice. Buyp Technologies Private Limited.",
    heading: "Match Ticket Legal Disclaimer & Intermediary Status",
    content: `
      <p>Match Ticket is an intermediary technology platform operated by Buyp Technologies Private Limited. We do not own, maintain, or control physical sports grounds.</p>
    `,
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Disclaimer", "url": "https://matchticket.in/disclaimer" }
  }
};

if (!fs.existsSync(buildDir)) {
  console.log('Build directory does not exist yet. Run `npm run build` first.');
  process.exit(1);
}

const baseIndexPath = path.join(buildDir, 'index.html');
if (!fs.existsSync(baseIndexPath)) {
  console.error('index.html not found in build directory.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseIndexPath, 'utf8');

Object.keys(ROUTE_DATA).forEach(route => {
  const isHome = route === 'home';
  const targetFilePath = isHome ? path.join(buildDir, 'index.html') : path.join(buildDir, route, 'index.html');
  
  if (!isHome) {
    const routeDir = path.join(buildDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
  }
  
  const data = ROUTE_DATA[route];
  let routeHtml = baseHtml;
  const routeCanonical = isHome ? 'https://matchticket.in/' : `https://matchticket.in/${route}`;

  // Update Title, Description, Open Graph & Twitter Card tags in static HTML
  const routeOgImage = data.image ? `https://matchticket.in${data.image}` : 'https://matchticket.in/matchticket_logo.png';

  routeHtml = routeHtml.replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="${data.description}"/>`);
  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?"\/>/, `<link rel="canonical" href="${routeCanonical}"/>`);
  routeHtml = routeHtml.replace(/<meta property="og:url" content=".*?"\/>/, `<meta property="og:url" content="${routeCanonical}"/>`);
  routeHtml = routeHtml.replace(/<meta property="og:title" content=".*?"\/>/, `<meta property="og:title" content="${data.title}"/>`);
  routeHtml = routeHtml.replace(/<meta property="og:description" content=".*?"\/>/, `<meta property="og:description" content="${data.description}"/>`);
  routeHtml = routeHtml.replace(/<meta property="og:image" content=".*?"\/>/, `<meta property="og:image" content="${routeOgImage}"/>`);
  routeHtml = routeHtml.replace(/<meta name="twitter:title" content=".*?"\/>/, `<meta name="twitter:title" content="${data.title}"/>`);
  routeHtml = routeHtml.replace(/<meta name="twitter:description" content=".*?"\/>/, `<meta name="twitter:description" content="${data.description}"/>`);
  routeHtml = routeHtml.replace(/<meta name="twitter:image" content=".*?"\/>/, `<meta name="twitter:image" content="${routeOgImage}"/>`);

  // Replace pre-rendered main section content inside #root
  const routeContentHTML = `
    <header role="banner">
      <nav aria-label="Main Navigation">
        <a href="/">Match Ticket</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/find-turf">Find Turf</a></li>
          <li><a href="/list-turf">List Your Turf</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main id="main-content" role="main">
      <h1>${data.heading}</h1>
      ${data.content}
    </main>
    <footer role="contentinfo">
      <p>&copy; 2026 Match Ticket by Buyp Technologies Private Limited. All rights reserved.</p>
      <nav aria-label="Footer Navigation">
        <a href="/privacy">Privacy Policy</a> |
        <a href="/terms">Terms & Conditions</a> |
        <a href="/refund">Refund Policy</a> |
        <a href="/cookies">Cookie Policy</a> |
        <a href="/grievance">Grievance Redressal</a> |
        <a href="/disclaimer">Disclaimer</a>
      </nav>
    </footer>
  `;

  routeHtml = routeHtml.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${routeContentHTML}</div>`);
  
  // Inject route-specific Schema
  if (data.schema) {
    const routeSchemaTag = `<script type="application/ld+json">${JSON.stringify(data.schema)}</script>`;
    routeHtml = routeHtml.replace('</head>', `${routeSchemaTag}</head>`);
  }

  // Inject BreadcrumbList JSON-LD for non-home routes
  if (!isHome) {
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://matchticket.in/"
      }
    ];

    if (route.startsWith('blog/')) {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://matchticket.in/blog"
      });
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": data.heading || data.title,
        "item": routeCanonical
      });
    } else {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": data.heading || data.title,
        "item": routeCanonical
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    const breadcrumbTag = `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`;
    routeHtml = routeHtml.replace('</head>', `${breadcrumbTag}</head>`);
  }

  fs.writeFileSync(targetFilePath, routeHtml, 'utf8');
  console.log(`✅ Pre-rendered static route HTML created: ${isHome ? 'build/index.html' : `build/${route}/index.html`}`);
});

['sitemap.xml', 'robots.txt', 'llms.txt', 'llms-full.txt'].forEach(file => {
  const src = path.join(process.cwd(), 'public', file);
  const dest = path.join(buildDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ ${file} copied to build/${file}`);
  }
});

console.log('🎉 All static routes pre-rendered successfully for ultra-fast AI engine discovery!');
