import React, { useState, useEffect } from 'react';
import { useLive } from '../hooks';
import { useStats } from '../data';
import Logo from './Logo';

/**
 * Navbar — fixed top navigation
 * Desktop: Logo, links, live counter, CTAs
 * Mobile/Tablet: Logo + hamburger slide-down menu
 *
 * To add a page link: edit the 'links' array inside this file.
 */
function Navbar({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    h(); // run once on mount
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => { setMenuOpen(false); }, [page]);
  const { stats } = useStats();
  const live = useLive(stats?.todayBookings || 47);
  const links = [["home","Home"],["find-turf","Find a Turf"],["about","About Us"],["blog","Blog"],["faq","FAQ"],["contact","Contact"]];
  const go = (p) => { navigate(p); setMenuOpen(false); };
  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main Navigation">
        <div className="nbrand" onClick={() => go("home")} aria-label="Match Ticket Logo">
          <Logo variant="full" height={32} />
        </div>
        <ul className="nlinks">
          {links.map(([p,l]) => (
            <li key={p}><button className={`nlink${page===p?" act":""}`} onClick={() => go(p)}>{l}</button></li>
          ))}
        </ul>
        <div className="nctas">
          {live > 0 && <div className="nlive"><div className="nlive-dot"/>{live} today</div>}
          <button className="bgs" onClick={() => window.location.href = "http://app.matchticket.in/"}>Sign In</button>
          <button className="bl sm" onClick={() => go("list-turf")}>List Turf</button>
          <button className={`ham${menuOpen?" open":""}`} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      <div className={`mob-menu${menuOpen?" open":""}`}>
        {links.map(([p,l]) => (
          <button key={p} className={`mob-link${page===p?" act":""}`} onClick={() => go(p)}>{l}</button>
        ))}
        <div className="mob-divider"/>
        <div className="mob-btns">
          <button className="bl sm" style={{flex:1,justifyContent:"center"}} onClick={() => go("list-turf")}>List Your Turf</button>
          <button className="bg sm" style={{flex:1,justifyContent:"center"}} onClick={() => go("find-turf")}>Find a Turf</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
