import { useState, useEffect } from 'react';

/** Live incrementing counter (e.g. 'bookings today').
 *  @param {number} base Starting value */
export function useLive(base) {
  const [v, setV] = useState(base);
  
  useEffect(() => {
    setV(base);
  }, [base]);

  return v;
}


/* ══════════════════════════════════════
   SEO HOOK — per-page meta, OG, Twitter, JSON-LD
══════════════════════════════════════ */
