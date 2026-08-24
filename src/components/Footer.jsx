import { site, nav } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__mark nav__mark--lg">301</span>
          <p className="footer__tag">{site.tagline}</p>
          <p className="footer__loc">{site.locationLine}</p>
        </div>

        <nav className="footer__nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </nav>
      </div>
      <div className="container footer__bottom">
        <span>{site.copyright}</span>
        <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </footer>
  );
}
