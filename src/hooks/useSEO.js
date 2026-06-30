import { useEffect } from 'react';

/**
 * useSEO — per-page meta, OG, Twitter, JSON-LD, canonical.
 * Add new page entries to SEO_DATA below.
 * Called in App.jsx: useSEO(page)
 */

const SEO_DATA = {
  "home": {
    title: "Match Ticket — India's Turf Booking & Management Platform",
    description: "Match Ticket helps turf owners get their own website, automate bookings, WhatsApp confirmations, and QR entry. Players can find and book turfs across 12+ cities in Tamil Nadu. Football, Cricket, Badminton, Tennis and 10+ sports.",
    keywords: "turf booking, book turf online, sports turf booking, turf management software, cricket turf, football turf, badminton court booking, turf owner website, match ticket, book turf Chennai, book turf Coimbatore, book turf Tenkasi, Tamil Nadu turf, India turf booking platform",
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
        "name": "Buyp Technologiesnologies Private Limited",
        "url": "https://matchticket.in",
        "logo": "https://matchticket.in/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 89402 61212",
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
    title: "Find & Book Turfs Near You — Match Ticket | Football, Cricket, Badminton",
    description: "Search and book verified turfs across Chennai, Coimbatore, Tenkasi, Madurai and 12+ cities in Tamil Nadu. Filter by sport, city, date and budget. Instant WhatsApp confirmation and QR code entry.",
    keywords: "find turf near me, book turf online India, turf booking Chennai, turf booking Coimbatore, turf booking Tenkasi, football turf booking, cricket turf booking, badminton court booking Tamil Nadu, sports booking app India",
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
    title: "About Match Ticket — Built by Buyp Technologiesnologies Private Limited, Tenkasi",
    description: "Match Ticket is a product of Buyp Technologiesnologies Private Limited, Tenkasi, Tamil Nadu. We connect 500+ turf owners with players across 12 cities. Our mission: every player deserves a great turf, and every owner deserves a great digital business.",
    keywords: "match ticket about, buyp tech technologies, turf booking platform India, sports tech startup Tamil Nadu, turf management company Tenkasi, sports booking startup India",
    ogImage: "https://matchticket.in/og-about.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Match Ticket by Buyp Technologiesnologies Private Limited",
      "url": "https://matchticket.in",
      "foundingDate": "2024",
      "foundingLocation": "Tenkasi, Tamil Nadu, India",
      "description": "India's complete turf booking and management platform",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 20 },
      "areaServed": { "@type": "Country", "name": "India" }
    }
  },
  "blog": {
    title: "Blog & Insights — Turf Booking Tips, Owner Guides | Match Ticket",
    description: "Tips for booking the perfect turf, success stories from turf owners, sport-specific guides, and city-wise turf recommendations across Tamil Nadu and India.",
    keywords: "turf booking tips, how to book turf India, turf owner guide, sports turf blog, football turf tips, cricket turf guide, badminton court tips, Tamil Nadu sports blog",
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
    title: "Contact Match Ticket — Turf Owner Support & Player Help",
    description: "Get in touch with Match Ticket. Turf owners — start listing your turf today. Players — get help with bookings, QR codes, or refunds. WhatsApp support available 8 AM to 10 PM, 7 days a week.",
    keywords: "match ticket contact, turf booking support, list your turf India, turf owner onboarding, book turf help, WhatsApp turf support, match ticket phone number",
    ogImage: "https://matchticket.in/og-contact.jpg",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Match Ticket",
      "url": "https://matchticket.in/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Match Ticket",
        "telephone": "+91 89402 61212",
        "email": "contact@matchticket.in"
      }
    }
  },
  "list-turf": {
    title: "List Your Turf on Match Ticket — Get a Website, Bookings & More",
    description: "List your turf on Match Ticket and get your own website at your domain, automated bookings, WhatsApp alerts, QR entry, direct Razorpay payments, and a marketplace listing across 12+ cities. Start free — no credit card needed.",
    keywords: "list turf online India, turf management software, turf booking website, turf owner app India, manage turf bookings, automated turf booking, turf website builder India, turf owner platform, sports facility management India",
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
    schema: { "@context": "https://schema.org", "@type": "WebPage", "name": "Grievance Redressal Policy", "url": "https://matchticket.in/grievance",
      "mainEntity": { "@type": "Organization", "name": "Match Ticket", "contactPoint": { "@type": "ContactPoint", "telephone": "+91 89402 61212", "email": "contact@matchticket.in", "contactType": "complaints", "availableLanguage": ["English","Tamil"] } }
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
    setMeta('meta[name="description"]',          "name",    "description");
    setMeta('meta[name="description"]',          "content", data.description);
    setMeta('meta[name="keywords"]',             "name",    "keywords");
    setMeta('meta[name="keywords"]',             "content", data.keywords);
    setMeta('meta[name="robots"]',               "name",    "robots");
    setMeta('meta[name="robots"]',               "content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta('meta[name="author"]',               "name",    "author");
    setMeta('meta[name="author"]',               "content", "Match Ticket, Buyp Technologiesnologies Private Limited");
    setMeta('meta[name="theme-color"]',          "name",    "theme-color");
    setMeta('meta[name="theme-color"]',          "content", "#CAFF00");
    setMeta('meta[name="application-name"]',     "name",    "application-name");
    setMeta('meta[name="application-name"]',     "content", "Match Ticket");
    setMeta('meta[name="geo.region"]',           "name",    "geo.region");
    setMeta('meta[name="geo.region"]',           "content", "IN-TN");
    setMeta('meta[name="geo.placename"]',        "name",    "geo.placename");
    setMeta('meta[name="geo.placename"]',        "content", "Tamil Nadu, India");
    setMeta('meta[name="language"]',             "name",    "language");
    setMeta('meta[name="language"]',             "content", "English");
    setMeta('meta[name="revisit-after"]',        "name",    "revisit-after");
    setMeta('meta[name="revisit-after"]',        "content", "7 days");

    // ── Open Graph ──
    setMeta('meta[property="og:type"]',          "property","og:type");
    setMeta('meta[property="og:type"]',          "content", page === "blog" ? "blog" : "website");
    setMeta('meta[property="og:title"]',         "property","og:title");
    setMeta('meta[property="og:title"]',         "content", data.title);
    setMeta('meta[property="og:description"]',   "property","og:description");
    setMeta('meta[property="og:description"]',   "content", data.description);
    setMeta('meta[property="og:url"]',           "property","og:url");
    setMeta('meta[property="og:url"]',           "content", canonical);
    setMeta('meta[property="og:image"]',         "property","og:image");
    setMeta('meta[property="og:image"]',         "content", data.ogImage);
    setMeta('meta[property="og:image:width"]',   "property","og:image:width");
    setMeta('meta[property="og:image:width"]',   "content", "1200");
    setMeta('meta[property="og:image:height"]',  "property","og:image:height");
    setMeta('meta[property="og:image:height"]',  "content", "630");
    setMeta('meta[property="og:site_name"]',     "property","og:site_name");
    setMeta('meta[property="og:site_name"]',     "content", "Match Ticket");
    setMeta('meta[property="og:locale"]',        "property","og:locale");
    setMeta('meta[property="og:locale"]',        "content", "en_IN");

    // ── Twitter Card ──
    setMeta('meta[name="twitter:card"]',         "name",    "twitter:card");
    setMeta('meta[name="twitter:card"]',         "content", "summary_large_image");
    setMeta('meta[name="twitter:site"]',         "name",    "twitter:site");
    setMeta('meta[name="twitter:site"]',         "content", "@matchticket");
    setMeta('meta[name="twitter:creator"]',      "name",    "twitter:creator");
    setMeta('meta[name="twitter:creator"]',      "content", "@matchticket");
    setMeta('meta[name="twitter:title"]',        "name",    "twitter:title");
    setMeta('meta[name="twitter:title"]',        "content", data.title);
    setMeta('meta[name="twitter:description"]',  "name",    "twitter:description");
    setMeta('meta[name="twitter:description"]',  "content", data.description);
    setMeta('meta[name="twitter:image"]',        "name",    "twitter:image");
    setMeta('meta[name="twitter:image"]',        "content", data.ogImage);

    // ── Canonical ──
    setLink("canonical", canonical);

    // ── Alternate hreflang ──
    setLink("alternate", canonical);

    // ── Preconnect for performance ──
    ["https://fonts.googleapis.com","https://fonts.gstatic.com","https://checkout.razorpay.com"].forEach(h=>{
      if(!document.querySelector(`link[rel="preconnect"][href="${h}"]`)){
        const l=document.createElement("link");l.rel="preconnect";l.href=h;
        if(h.includes("gstatic"))l.crossOrigin="anonymous";
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
    const breadItems = [{ "@type":"ListItem","position":1,"name":"Home","item":"https://matchticket.in" }];
    if (page !== "home") {
      const pageNames = {"find-turf":"Find a Turf","about":"About Us","blog":"Blog","contact":"Contact","list-turf":"List Your Turf","privacy":"Privacy Policy","terms":"Terms and Conditions","refund":"Refund Policy","cookies":"Cookie Policy"};
      breadItems.push({ "@type":"ListItem","position":2,"name":pageNames[page]||page,"item":canonical });
    }
    breadScript.textContent = JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":breadItems });

    // ── Local Business schema (on home and find-turf only) ──
    if (page === "home" || page === "find-turf") {
      const LOCAL_ID = "mt-localbiz";
      let lbScript = document.getElementById(LOCAL_ID);
      if (!lbScript) { lbScript = document.createElement("script"); lbScript.id = LOCAL_ID; lbScript.type = "application/ld+json"; document.head.appendChild(lbScript); }
      lbScript.textContent = JSON.stringify({
        "@context":"https://schema.org",
        "@type":"SportsActivityLocation",
        "name":"Match Ticket Turf Marketplace",
        "description":"Find and book sports turfs across Tamil Nadu — Football, Cricket, Badminton, Tennis and more",
        "url":"https://matchticket.in",
        "telephone":"+91 89402 61212",
        "email":"contact@matchticket.in",
        "address":{"@type":"PostalAddress","addressLocality":"Tenkasi","addressRegion":"Tamil Nadu","postalCode":"627811","addressCountry":"IN"},
        "geo":{"@type":"GeoCoordinates","latitude":"11.1085","longitude":"77.3411"},
        "areaServed":[
          {"@type":"City","name":"Chennai"},{"@type":"City","name":"Coimbatore"},
          {"@type":"City","name":"Tenkasi"},{"@type":"City","name":"Madurai"},
          {"@type":"City","name":"Salem"},{"@type":"City","name":"Trichy"},
          {"@type":"City","name":"Erode"},{"@type":"City","name":"Vellore"},
          {"@type":"City","name":"Tirunelveli"},{"@type":"City","name":"Hosur"},
          {"@type":"City","name":"Dindigul"},{"@type":"City","name":"Ooty"}
        ],
        "openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"06:00","closes":"23:00"},
        "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"500","bestRating":"5"},
        "priceRange":"₹400 - ₹1200 per hour",
        "sport":["Football","Cricket","Badminton","Tennis","Volleyball","Basketball","Table Tennis","Snooker","Hockey","Swimming","Pickleball","Box Cricket"]
      });
    }

    // ── html lang attribute ──
    document.documentElement.lang = "en-IN";

    // ── viewport meta ──
    setMeta('meta[name="viewport"]', "name", "viewport");
    setMeta('meta[name="viewport"]', "content", "width=device-width, initial-scale=1.0, maximum-scale=5.0");

  }, [page]);
}
