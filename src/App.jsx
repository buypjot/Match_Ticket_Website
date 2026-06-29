import React, { useState, useEffect } from 'react';
import CSS from './styles/global';
import { useSEO } from './hooks';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import CookieBanner from './components/CookieBanner';

import {
  Home, FindTurf, About, Blog, Contact, ListYourTurf,
  Privacy, Terms, Refund, Cookies, Grievance, Disclaimer,
} from './pages';

/**
 * App — root component, client-side routing.
 *
 * Pages (12):
 *   home         Home.jsx
 *   find-turf    FindTurf.jsx
 *   about        About.jsx
 *   blog         Blog.jsx
 *   contact      Contact.jsx
 *   list-turf    ListYourTurf.jsx       ← pricing, features, trial
 *   privacy      legal/Privacy.jsx      ← GDPR + DPDP Act 2023
 *   terms        legal/Terms.jsx        ← IT Act + Force Majeure + Arbitration
 *   refund       legal/Refund.jsx
 *   cookies      legal/Cookies.jsx
 *   grievance    legal/Grievance.jsx    ← IT Rules 2021 — Officer: Anusiya
 *   disclaimer   legal/Disclaimer.jsx  ← injury liability
 *
 * TO ADD A NEW PAGE:
 *   1. Create src/pages/YourPage.jsx
 *   2. Export from src/pages/index.js
 *   3. Import + add route below
 *   4. Add SEO entry in src/hooks/useSEO.js → SEO_DATA
 *   5. Add link in src/components/Footer.jsx
 *
 * COMPANY:  Buyp Technologies Private Limited
 * CIN:      U72900TN2021PTC141881
 * GST:      33AAJCB6933B1ZZ
 * PAN:      AAJCB6933B
 * ADDRESS:  158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811
 * PHONE:    +91 89402 61212
 * GRIEVANCE OFFICER: Anusiya (Manager) — grievance@matchticket.in
 */
const VALID_PAGES = [
  'home', 'find-turf', 'about', 'blog', 'contact', 'list-turf',
  'privacy', 'terms', 'refund', 'cookies', 'grievance', 'disclaimer'
];

const getPageFromPath = () => {
  const cleanPath = window.location.pathname.replace(/^\/|\/$/g, '');
  if (!cleanPath) return 'home';
  return VALID_PAGES.includes(cleanPath) ? cleanPath : 'home';
};

export default function App() {
  const [page, setPage] = useState(getPageFromPath);

  const navigate = (p) => {
    const path = p === 'home' ? '/' : `/${p}`;
    window.history.pushState(null, '', path);
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useSEO(page);

  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    return !localStorage.getItem('cookieConsent');
  });

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
  };

  const handleEssentialCookies = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setShowCookieBanner(false);
  };

  const handleManageCookies = () => {
    navigate('cookies');
  };

  return (
    <div>
      {/* Global CSS — edit src/styles/global.js to restyle */}
      <style>{CSS}</style>

      {/* Accessibility skip link */}
      <a
        href="#main-content"
        style={{
          position:'absolute', left:'-9999px', top:0, zIndex:9999,
          background:'var(--lime)', color:'#000',
          padding:'8px 16px', fontWeight:700, fontSize:14,
          borderRadius:'0 0 8px 0',
        }}
        onFocus={e => { e.target.style.left = '0'; }}
        onBlur={e  => { e.target.style.left = '-9999px'; }}
      >
        Skip to main content
      </a>

      <Navbar page={page} navigate={navigate}/>

      {/* ── Routes ── */}
      {page === 'home'       && <Home         navigate={navigate}/>}
      {page === 'find-turf'  && <FindTurf     navigate={navigate}/>}
      {page === 'about'      && <About        navigate={navigate}/>}
      {page === 'blog'       && <Blog         navigate={navigate}/>}
      {page === 'contact'    && <Contact      navigate={navigate}/>}
      {page === 'list-turf'  && <ListYourTurf navigate={navigate}/>}
      {page === 'privacy'    && <Privacy      navigate={navigate}/>}
      {page === 'terms'      && <Terms        navigate={navigate}/>}
      {page === 'refund'     && <Refund       navigate={navigate}/>}
      {page === 'cookies'    && <Cookies      navigate={navigate}/>}
      {page === 'grievance'  && <Grievance    navigate={navigate}/>}
      {page === 'disclaimer' && <Disclaimer   navigate={navigate}/>}

      <Footer navigate={navigate}/>

      {/* WhatsApp support button */}
      <button
        className="wabtn"
        onClick={() => window.open('https://wa.me/918940261212')}
        aria-label="Chat on WhatsApp — +91 89402 61212"
        title="WhatsApp Support"
      >
        💬
      </button>

      {/* Cookie consent banner */}
      {showCookieBanner && (
        <CookieBanner
          onAccept={handleAcceptCookies}
          onEssential={handleEssentialCookies}
          onManage={handleManageCookies}
        />
      )}
    </div>
  );
}
