import { useState, useEffect } from 'react';

/** Animated counter — eases from 0 to target.
 *  @param {number} target  Final value
 *  @param {number} dur     Duration ms
 *  @param {number} delay   Start delay ms */
export function useCount(target, dur, delay) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const s = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - s) / dur, 1);
        setV(Math.floor((1 - Math.pow(1 - p, 3)) * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [delay, dur, target]);
  return v;
}
