import { useEffect, useRef, useState } from 'react';

// Reveal-on-scroll helper used across sections.
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}
