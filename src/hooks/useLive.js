import { useState, useEffect } from 'react';

/** Live incrementing counter (e.g. 'bookings today').
 *  @param {number} base Starting value */
export function useLive(base) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const t = setInterval(() => { if (Math.random() > 0.7) setV(x => x + 1); }, 4000);
    return () => clearInterval(t);
  }, []);
  return v;
}


/* ══════════════════════════════════════
   SEO HOOK — per-page meta, OG, Twitter, JSON-LD
══════════════════════════════════════ */
