import { useEffect } from 'react';

/**
 * useSEO — per-page meta, OG, Twitter, JSON-LD, canonical.
 * Add new page entries to SEO_DATA below.
 * Called in App.jsx: useSEO(page)
 */

const SEO_DATA = {
  "home": {
    title: "Match Ticket - Turf Booking & Ground Management Software",
    description: "Manage your turf bookings, slots, payments, and customers with Match Ticket. The complete ground and turf management software for sports venue owners.",
    keywords: "turf booking software, ground management software, turf management software, sports venue management, sports booking software, online turf booking, turf owner software, ground booking software",
    ogImage: "https://matchticket.in/og-home.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Match Ticket",
      "url": "https://matchticket.in",
      "description": "India's complete turf booking and management platform",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://matchticket.in/find-turf?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Buyp Technologies Private Limited",
        "url": "https://matchticket.in",
        "logo": "https://matchticket.in/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 91235 64005",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Tamil"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tenkasi",
          "addressLocality": "Tenkasi",
          "addressRegion": "Tamil Nadu",
          "postalCode": "627811",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61590527524560",
          "https://www.instagram.com/matchticket_/",
          "https://www.linkedin.com/company/matchticket",
          "https://www.youtube.com/@MatchTicket"
        ]
      }
    }
  },
  "find-turf": {
    title: "Find Turf Near You - Match Ticket",
    description: "Find Turf Near You with Match Ticket. Discover and book cricket turfs, football turfs and sports grounds online. Check available slots and reserve your favorite turf instantly.",
    keywords: "find turf near you, cricket turf near me, football turf near me, sports turf booking, online turf booking, turf booking, cricket ground booking, football ground booking",
    ogImage: "https://matchticket.in/og-find.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Sports Turfs in Tamil Nadu",
      "description": "Find and book verified sports turfs across Tamil Nadu",
      "url": "https://matchticket.in/find-turf",
      "numberOfItems": 500,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Football Turfs", "url": "https://matchticket.in/find-turf?sport=football" },
        { "@type": "ListItem", "position": 2, "name": "Cricket Turfs", "url": "https://matchticket.in/find-turf?sport=cricket" },
        { "@type": "ListItem", "position": 3, "name": "Badminton Courts", "url": "https://matchticket.in/find-turf?sport=badminton" }
      ]
    }
  },
  "about": {
    title: "About - Match Ticket",
    description: "About Match Ticket. We help turf owners automate bookings, manage customers, track payments and simplify daily operations with our smart turf management platform.",
    keywords: "about match ticket, turf booking software, turf management platform, ground management software, sports booking platform, turf owner software",
    ogImage: "https://matchticket.in/og-about.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Match Ticket by Buyp Technologies Private Limited",
      "url": "https://matchticket.in",
      "foundingDate": "2024",
      "foundingLocation": "Tenkasi, Tamil Nadu, India",
      "description": "India's complete turf booking and management platform",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
      "areaServed": { "@type": "Country", "name": "India" }
    }
  },
  "blog": {
    title: "Blog - Match Ticket",
    description: "Explore the Match Ticket Blog for turf business ideas, booking management tips, sports industry updates, and expert guides to grow your turf business.",
    keywords: "match ticket blog, turf business blog, turf booking tips, sports business blog, turf management tips, ground management guide",
    ogImage: "https://matchticket.in/og-blog.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Match Ticket Blog",
      "url": "https://matchticket.in/blog",
      "description": "Tips, guides and stories for turf owners and players",
      "publisher": { "@type": "Organization", "name": "Match Ticket" }
    }
  },
  "contact": {
    title: "Contact - Match Ticket",
    description: "Contact Match Ticket for product demos, customer support, and sales enquiries. Get expert help for your turf booking and ground management platform.",
    keywords: "contact match ticket, turf booking software support, ground management software, sports booking software, match ticket contact, turf software demo",
    ogImage: "https://matchticket.in/og-contact.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Match Ticket",
      "url": "https://matchticket.in/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Match Ticket",
        "telephone": "+91 91235 64005",
        "email": "contact@matchticket.in"
      }
    }
  },
  "list-turf": {
    title: "List Your Turf - Match Ticket",
    description: "List Your Turf on Match Ticket and attract more players. Manage bookings, slots, payments, schedules, and customers with our powerful turf booking platform.",
    keywords: "list your turf, turf owner registration, turf booking platform, turf listing, turf management software, turf booking software, sports venue software, add your turf",
    ogImage: "https://matchticket.in/og-owners.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Match Ticket for Turf Owners",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": [
        { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "INR" },
        { "@type": "Offer", "name": "Pro Monthly", "price": "1299", "priceCurrency": "INR", "billingIncrement": "P1M" },
        { "@type": "Offer", "name": "Pro 6-Month", "price": "7499", "priceCurrency": "INR", "billingIncrement": "P6M" },
        { "@type": "Offer", "name": "Pro Annual", "price": "11999", "priceCurrency": "INR", "billingIncrement": "P1Y" },
        { "@type": "Offer", "name": "Elite Monthly", "price": "2999", "priceCurrency": "INR", "billingIncrement": "P1M" },
        { "@type": "Offer", "name": "Elite Annual", "price": "27999", "priceCurrency": "INR", "billingIncrement": "P1Y" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500" }
    }
  },
  "privacy": {
    title: "Privacy Policy — Match Ticket",
    description: "Match Ticket Privacy Policy — how we collect, use, and protect your personal data. GDPR-compliant. Effective 21 April 2026.",
    keywords: "match ticket privacy policy, turf app privacy, sports booking data policy",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Privacy Policy", "url": "https://matchticket.in/privacy" }
  },
  "terms": {
    title: "Terms and Conditions — Match Ticket",
    description: "Match Ticket Terms and Conditions — rules for using our turf booking and management platform. Effective 21 April 2026.",
    keywords: "match ticket terms conditions, turf booking terms, sports platform terms of service",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Terms and Conditions", "url": "https://matchticket.in/terms" }
  },
  "refund": {
    title: "Refund Policy — Match Ticket",
    description: "Match Ticket Refund Policy — our no-refund policy for confirmed bookings, payment failure exceptions, and the Match Ticket payment collection and transfer service for turf owners.",
    keywords: "match ticket refund policy, turf booking refund, sports booking cancellation policy",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Refund Policy", "url": "https://matchticket.in/refund" }
  },
  "cookies": {
    title: "Cookie Policy — Match Ticket",
    description: "Match Ticket Cookie Policy — how we use cookies and tracking technologies on our website and apps.",
    keywords: "match ticket cookie policy, sports app cookies, turf booking tracking",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Cookie Policy", "url": "https://matchticket.in/cookies" }
  },
  "disclaimer": {
    title: "Disclaimer & Liability — Match Ticket",
    description: "Match Ticket Disclaimer — liability limitations, intermediary status, turf owner responsibility, injury disclaimer, and no-warranty notice. Buyp Technologies Private Limited.",
    keywords: "match ticket disclaimer, turf booking liability, sports platform disclaimer, turf injury liability India",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Disclaimer", "url": "https://matchticket.in/disclaimer" }
  },
  "grievance": {
    title: "Grievance Redressal Policy — Match Ticket | IT Rules 2021 Compliant",
    description: "Match Ticket Grievance Redressal Policy. File a complaint with our Grievance Officer. IT Rules 2021 compliant — acknowledgement within 24 hours, resolution within 15 working days. Effective 21 April 2026.",
    keywords: "match ticket grievance, turf booking complaint, sports app grievance officer, IT rules 2021 complaint, consumer grievance India",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: {
      "@context": "https://schema.org", "@type": "WebPage", "name": "Grievance Redressal Policy", "url": "https://matchticket.in/grievance",
      "mainEntity": { "@type": "Organization", "name": "Match Ticket", "contactPoint": { "@type": "ContactPoint", "telephone": "+91 91235 64005", "email": "contact@matchticket.in", "contactType": "complaints", "availableLanguage": ["English", "Tamil"] } }
    }
  },
  "faq": {
    title: "FAQ - Match Ticket | Turf Booking Software Questions",
    description: "Find answers to frequently asked questions about Match Ticket. Learn how our turf booking software helps manage bookings, slots, payments and customers efficiently.",
    keywords: "match ticket faq, turf booking software faq, turf management questions, ground booking software help, match ticket support, turf owner questions",
    ogImage: "https://matchticket.in/og-default.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Match Ticket FAQ",
      "url": "https://matchticket.in/faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is Turf Booking Software?", "acceptedAnswer": { "@type": "Answer", "text": "Turf Booking Software is a digital solution that helps turf owners manage bookings, customer details, payments and available slots from a single dashboard. Match Ticket automates the entire booking process, reduces manual work and helps owners manage their turf business efficiently." } },
        { "@type": "Question", "name": "How can I manage turf bookings online?", "acceptedAnswer": { "@type": "Answer", "text": "Match Ticket allows turf owners to manage online bookings, view available slots, accept reservations, track customer details and monitor all bookings from one platform." } },
        { "@type": "Question", "name": "How do I avoid double bookings for my turf?", "acceptedAnswer": { "@type": "Answer", "text": "Match Ticket updates slot availability in real time. Once a booking is confirmed, the selected time slot becomes unavailable, preventing double bookings and scheduling conflicts." } },
        { "@type": "Question", "name": "Can customers book turf slots online?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Customers can search available turfs, choose a convenient time slot and complete their booking online through Match Ticket. The booking is instantly reflected in the owner's dashboard." } },
        { "@type": "Question", "name": "Can I manage multiple turfs with one account?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Match Ticket allows owners to manage multiple turf locations from a single account, making it easy to monitor bookings, payments and schedules across all branches." } },
        { "@type": "Question", "name": "Can I manage turf bookings from my mobile?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Match Ticket is accessible from mobile devices, allowing turf owners to monitor bookings, customers and payments anytime and from anywhere." } },
        { "@type": "Question", "name": "How can I increase turf bookings?", "acceptedAnswer": { "@type": "Answer", "text": "By offering online booking, easy slot availability, quick payments and a better customer experience through Match Ticket, turf owners can attract more customers and increase bookings." } },
        { "@type": "Question", "name": "How do I get started with Match Ticket?", "acceptedAnswer": { "@type": "Answer", "text": "Getting started is simple. Register your turf, configure available slots, set pricing and begin accepting online bookings through Match Ticket." } }
      ]
    }
  },
};

export function useSEO(page) {
  useEffect(() => {
    const data = SEO_DATA[page] || SEO_DATA["home"];
    const BASE = "https://matchticket.in";
    const canonical = page === "home" ? BASE : `${BASE}/${page}`;

    // ── Title ──
    document.title = data.title;

    // ── Helper to set/create meta ──
    const setMeta = (sel, attr, val) => {
      let el = document.querySelector(sel);
      if (!el) { el = document.createElement("meta"); document.head.appendChild(el); }
      el.setAttribute(attr, val);
    };
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement("link"); el.rel = rel; document.head.appendChild(el); }
      el.href = href;
    };

    // ── Standard meta ──
    setMeta('meta[name="description"]', "name", "description");
    setMeta('meta[name="description"]', "content", data.description);
    setMeta('meta[name="keywords"]', "name", "keywords");
    setMeta('meta[name="keywords"]', "content", data.keywords);
    setMeta('meta[name="robots"]', "name", "robots");
    setMeta('meta[name="robots"]', "content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta('meta[name="author"]', "name", "author");
    setMeta('meta[name="author"]', "content", "Match Ticket, Buyp Technologies Private Limited");
    setMeta('meta[name="theme-color"]', "name", "theme-color");
    setMeta('meta[name="theme-color"]', "content", "#CAFF00");
    setMeta('meta[name="application-name"]', "name", "application-name");
    setMeta('meta[name="application-name"]', "content", "Match Ticket");
    setMeta('meta[name="geo.region"]', "name", "geo.region");
    setMeta('meta[name="geo.region"]', "content", "IN-TN");
    setMeta('meta[name="geo.placename"]', "name", "geo.placename");
    setMeta('meta[name="geo.placename"]', "content", "Tamil Nadu, India");
    setMeta('meta[name="language"]', "name", "language");
    setMeta('meta[name="language"]', "content", "English");
    setMeta('meta[name="revisit-after"]', "name", "revisit-after");
    setMeta('meta[name="revisit-after"]', "content", "7 days");

    // ── Open Graph ──
    setMeta('meta[property="og:type"]', "property", "og:type");
    setMeta('meta[property="og:type"]', "content", page === "blog" ? "blog" : "website");
    setMeta('meta[property="og:title"]', "property", "og:title");
    setMeta('meta[property="og:title"]', "content", data.title);
    setMeta('meta[property="og:description"]', "property", "og:description");
    setMeta('meta[property="og:description"]', "content", data.description);
    setMeta('meta[property="og:url"]', "property", "og:url");
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "property", "og:image");
    setMeta('meta[property="og:image"]', "content", data.ogImage);
    setMeta('meta[property="og:image:width"]', "property", "og:image:width");
    setMeta('meta[property="og:image:width"]', "content", "1200");
    setMeta('meta[property="og:image:height"]', "property", "og:image:height");
    setMeta('meta[property="og:image:height"]', "content", "630");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name");
    setMeta('meta[property="og:site_name"]', "content", "Match Ticket");
    setMeta('meta[property="og:locale"]', "property", "og:locale");
    setMeta('meta[property="og:locale"]', "content", "en_IN");

    // ── Twitter Card ──
    setMeta('meta[name="twitter:card"]', "name", "twitter:card");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:site"]', "name", "twitter:site");
    setMeta('meta[name="twitter:site"]', "content", "@matchticket");
    setMeta('meta[name="twitter:creator"]', "name", "twitter:creator");
    setMeta('meta[name="twitter:creator"]', "content", "@matchticket");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title");
    setMeta('meta[name="twitter:title"]', "content", data.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description");
    setMeta('meta[name="twitter:description"]', "content", data.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image");
    setMeta('meta[name="twitter:image"]', "content", data.ogImage);

    // ── Canonical ──
    setLink("canonical", canonical);

    // ── Alternate hreflang ──
    setLink("alternate", canonical);

    // ── Preconnect for performance ──
    ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://checkout.razorpay.com"].forEach(h => {
      if (!document.querySelector(`link[rel="preconnect"][href="${h}"]`)) {
        const l = document.createElement("link"); l.rel = "preconnect"; l.href = h;
        if (h.includes("gstatic")) l.crossOrigin = "anonymous";
        document.head.appendChild(l);
      }
    });

    // ── JSON-LD Structured Data ──
    const SCRIPT_ID = "mt-schema";
    let ldScript = document.getElementById(SCRIPT_ID);
    if (!ldScript) { ldScript = document.createElement("script"); ldScript.id = SCRIPT_ID; ldScript.type = "application/ld+json"; document.head.appendChild(ldScript); }
    ldScript.textContent = JSON.stringify(data.schema);

    // ── Breadcrumb schema ──
    const BREAD_ID = "mt-breadcrumb";
    let breadScript = document.getElementById(BREAD_ID);
    if (!breadScript) { breadScript = document.createElement("script"); breadScript.id = BREAD_ID; breadScript.type = "application/ld+json"; document.head.appendChild(breadScript); }
    const breadItems = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://matchticket.in" }];
    if (page !== "home") {
      const pageNames = { "find-turf": "Find a Turf", "about": "About Us", "blog": "Blog", "contact": "Contact", "list-turf": "List Your Turf", "privacy": "Privacy Policy", "terms": "Terms and Conditions", "refund": "Refund Policy", "cookies": "Cookie Policy" };
      breadItems.push({ "@type": "ListItem", "position": 2, "name": pageNames[page] || page, "item": canonical });
    }
    breadScript.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": breadItems });

    // ── Local Business schema (on home and find-turf only) ──
    if (page === "home" || page === "find-turf") {
      const LOCAL_ID = "mt-localbiz";
      let lbScript = document.getElementById(LOCAL_ID);
      if (!lbScript) { lbScript = document.createElement("script"); lbScript.id = LOCAL_ID; lbScript.type = "application/ld+json"; document.head.appendChild(lbScript); }
      lbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        "name": "Match Ticket Turf Marketplace",
        "description": "Find and book sports turfs across Tamil Nadu — Football, Cricket, Badminton, Tennis and more",
        "url": "https://matchticket.in",
        "telephone": "+91 91235 64005",
        "email": "contact@matchticket.in",
        "address": { "@type": "PostalAddress", "addressLocality": "Tenkasi", "addressRegion": "Tamil Nadu", "postalCode": "627811", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": "11.1085", "longitude": "77.3411" },
        "areaServed": [
          { "@type": "City", "name": "Chennai" }, { "@type": "City", "name": "Coimbatore" },
          { "@type": "City", "name": "Tenkasi" }, { "@type": "City", "name": "Madurai" },
          { "@type": "City", "name": "Salem" }, { "@type": "City", "name": "Trichy" },
          { "@type": "City", "name": "Erode" }, { "@type": "City", "name": "Vellore" },
          { "@type": "City", "name": "Tirunelveli" }, { "@type": "City", "name": "Hosur" },
          { "@type": "City", "name": "Dindigul" }, { "@type": "City", "name": "Ooty" }
        ],
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "06:00", "closes": "23:00" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "500", "bestRating": "5" },
        "priceRange": "₹400 - ₹1200 per hour",
        "knowsAbout": ["Football", "Cricket", "Badminton", "Tennis", "Volleyball", "Basketball", "Table Tennis", "Snooker", "Hockey", "Swimming", "Pickleball", "Box Cricket"],
        "keywords": "Football, Cricket, Badminton, Tennis, Volleyball, Basketball, Table Tennis, Snooker, Hockey, Swimming, Pickleball, Box Cricket"
      });
    }

    // ── html lang attribute ──
    document.documentElement.lang = "en-IN";

    // ── viewport meta ──
    setMeta('meta[name="viewport"]', "name", "viewport");
    setMeta('meta[name="viewport"]', "content", "width=device-width, initial-scale=1.0, maximum-scale=5.0");

  }, [page]);
}
