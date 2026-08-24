import { useState, useEffect } from 'react';
import { nav, site } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__mark">301</span>
          <span className="nav__name">THE 301</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={site.facebook} target="_blank" rel="noreferrer" className="nav__cta">
            Reservations
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
