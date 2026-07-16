# Match Ticket 🏟️

**India's Turf Booking and Management Platform**
By **Buyp Technologies Private Limited** · Tenkasi, Tamil Nadu

---

## Quick Start

```bash
npm install
npm start        # http://localhost:3000
npm run build    # Production build → /build
```

---

## Project Structure

```
match-ticket/
│
├── public/
│   ├── index.html                  ← HTML shell, base SEO meta
│   ├── manifest.json               ← PWA config
│   ├── robots.txt                  ← Crawl rules
│   ├── sitemap.xml                 ← 22-URL sitemap
│   ├── matchticket-logo-dark.svg   ← Full logo (dark backgrounds)
│   ├── matchticket-logo-white.svg  ← Full logo (white backgrounds)
│   └── matchticket-icon.svg        ← App icon only
│
└── src/
    ├── index.js           ← React entry point
    ├── App.jsx            ← Routing + CSS injection
    │
    ├── styles/
    │   └── global.js      ← ALL CSS — edit :root to rebrand
    │
    ├── data/              ← Edit here to update site content
    │   ├── sports.js      ← 12 sports (emoji, name, turf count)
    │   ├── cities.js      ← 12 Tamil Nadu cities
    │   ├── turfs.js       ← 6 featured turf listings
    │   ├── themes.js      ← 4 website theme gradients
    │   ├── testimonials.js← Owner + player reviews
    │   └── index.js       ← Barrel export
    │
    ├── hooks/
    │   ├── useCount.js    ← Animated number counter
    │   ├── useLive.js     ← Live "bookings today" counter
    │   ├── useSEO.js      ← Per-page meta, OG, JSON-LD, canonical
    │   └── index.js       ← Barrel export
    │
    ├── components/
    │   ├── Logo.jsx       ← SVG logo (variant + theme + height props)
    │   ├── Navbar.jsx     ← Nav with hamburger menu (uses Logo)
    │   ├── Footer.jsx     ← Footer with legal links (uses Logo)
    │   ├── TurfCard.jsx   ← Turf listing card
    │   ├── TestiCard.jsx  ← Testimonial card
    │   ├── FaqItem.jsx    ← Accordion FAQ row
    │   ├── CookieBanner.jsx← Cookie consent banner
    │   ├── PolicyShell.jsx ← Wrapper for legal pages + PolH/PolP helpers
    │   └── index.js       ← Barrel export
    │
    └── pages/
        ├── Home.jsx
        ├── FindTurf.jsx       ← 3-step: sport → city → search
        ├── About.jsx
        ├── Blog.jsx
        ├── Contact.jsx
        ├── ListYourTurf.jsx   ← Pricing: Starter/Pro/Elite
        ├── index.js           ← Barrel export
        └── legal/
            ├── Privacy.jsx    ← GDPR + DPDP Act 2023 + CERT-In 2022
            ├── Terms.jsx      ← IT Act + Force Majeure + Arbitration
            ├── Refund.jsx     ← No-refund + Option B settlement
            ├── Cookies.jsx
            ├── Grievance.jsx  ← IT Rules 2021 — Officer: Anusiya
            └── Disclaimer.jsx ← Injury liability + intermediary
```

---

## Common Modifications

### Change brand colour
`src/styles/global.js` → `:root` → change `--lime: #CAFF00`

### Add a new turf
`src/data/turfs.js` → add to `TURFS` array

### Add a new city
`src/data/cities.js` → add to `CITIES` array

### Update pricing
`src/pages/ListYourTurf.jsx` → search for `name:"Starter"` — the pricing array is there

### Update Grievance Officer
`src/pages/legal/Grievance.jsx` → update name, role, email, phone

### Add a new page
1. Create `src/pages/YourPage.jsx`
2. Export from `src/pages/index.js`
3. Import + add route in `src/App.jsx`
4. Add SEO entry in `src/hooks/useSEO.js` → `SEO_DATA`
5. Add footer link in `src/components/Footer.jsx`

### Use the Logo component
```jsx
import Logo from '../components/Logo';

<Logo />                                    // full, dark, 40px — navbar default
<Logo variant="icon" height={34}/>          // icon only — mobile nav
<Logo variant="stacked" height={80}/>       // vertical — app icon, splash
<Logo variant="full" theme="light" height={44}/>  // on white background
<Logo variant="full" theme="lime"  height={44}/>  // on lime background
```

---

## Pricing (current)

| Plan    | Monthly     | 6-Month           | Annual             |
|---------|-------------|-------------------|--------------------|
| Starter | Free        | —                 | —                  |
| Pro     | ₹1,299/mo   | ₹7,499 (save 17%) | ₹11,999 (save 23%) |
| Elite   | ₹2,999/mo   | ₹15,999 (save 11%)| ₹27,999 (save 22%) |

Free trial: 30 days, Pro/Elite, no credit card required.

---

## Company Details

| Field             | Value                                          |
|-------------------|------------------------------------------------|
| Company           | Buyp Technologies Private Limited             |
| CIN               | U72900TN2021PTC141881                         |
| GST               | 33AAJCB6933B1ZZ                               |
| PAN               | AAJCB6933B                                    |
| Address           | 158 P, Railway Road, Tenkasi, TN – 627 811   |
| Customer Care     | +91 91235 64005                               |
| Grievance Officer | Anusiya (Manager) — contact@matchticket.in  |

---

## Deploy

```bash
npm run build
# Upload /build to Vercel, Netlify, or cPanel public_html
```
