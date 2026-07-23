import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.join(__dirname, '..', 'build');

const ROUTE_DATA = {
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
      "numberOfItems": 500
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
        <h3>Welcome VPS Turf (Krishnagiri) to the Match Ticket Family: Digitizing Sports Venues Across Tamil Nadu</h3>
        <p>VPS Turf in Krishnagiri, Tamil Nadu joins Match Ticket! Discover how sports ground owners digitize slot bookings, UPI payments, and customer management.</p>
      </article>
      <article>
        <h3>Turf Booking Software for Chennai & Bengaluru: Why Smart Turf Owners Are Switching to Match Ticket</h3>
        <p>Looking for the best turf booking software? Manage bookings, payments, reports, tournaments, and multiple grounds with Match Ticket.</p>
      </article>
      <article>
        <h3>10 Effective Ways to Increase Turf Bookings in 2026</h3>
        <p>Learn how offering online slot reservations, instant UPI payments, and automated slot reminders can boost off-peak weekday turf bookings by over 40%.</p>
      </article>
      <article>
        <h3>How to Start a Football & Cricket Turf Business in India</h3>
        <p>A step-by-step guide covering land requirements, artificial turf grass selection, floodlight setup, investment costs, ROI timelines, and booking software integration.</p>
      </article>
      <article>
        <h3>Why Manual Booking Registers Are Costing Your Turf Business Money</h3>
        <p>Discover how paper registers cause double bookings, lost customer records, and payment tracking errors, and why switching to digital ground software is essential.</p>
      </article>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Match Ticket Blog",
      "description": "Tips, guides and stories for turf owners and players"
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
  const routeDir = path.join(buildDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  const data = ROUTE_DATA[route];
  let routeHtml = baseHtml;
  const routeCanonical = `https://matchticket.in/${route}`;

  // Update Title & Meta Description in static HTML
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="${data.description}"/>`);
  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?"\/>/, `<link rel="canonical" href="${routeCanonical}"/>`);
  routeHtml = routeHtml.replace(/<meta property="og:url" content=".*?"\/>/, `<meta property="og:url" content="${routeCanonical}"/>`);
  routeHtml = routeHtml.replace(/<meta property="og:title" content=".*?"\/>/, `<meta property="og:title" content="${data.title}"/>`);

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

  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  console.log(`✅ Pre-rendered static route HTML created: build/${route}/index.html`);
});

console.log('🎉 All static routes pre-rendered successfully for ultra-fast AI engine discovery!');
