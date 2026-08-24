import { site } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Visit() {
  const [ref, visible] = useReveal();
  return (
    <section className="section visit" id="visit">
      <div className="container">
        <div className={`visit__card reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="visit__info">
            <p className="eyebrow">Come On Down</p>
            <h2 className="section-title">Plan Your Visit</h2>
            <p className="section-lede">
              Where brewing meets distilling and great times are on tap. Find us in The Circle in
              Downtown Sebring — and explore our sister location, Sugar Sand Distillery.
            </p>

            <ul className="visit__details">
              <li>
                <span className="visit__label">Address</span>
                <a href="https://maps.google.com/?q=301+Circle+Park+Dr+Sebring+FL" target="_blank" rel="noreferrer">
                  {site.location}
                </a>
              </li>
              <li>
                <span className="visit__label">Sister Location</span>
                <a href={site.sister} target="_blank" rel="noreferrer">Sugar Sand Distillery</a>
              </li>
              <li>
                <span className="visit__label">Social</span>
                <a href={site.facebook} target="_blank" rel="noreferrer">Facebook · @the301</a>
              </li>
            </ul>

            <div className="visit__actions">
              <a href={site.facebook} target="_blank" rel="noreferrer" className="btn btn--primary">Follow & Message</a>
              <a href={site.sister} target="_blank" rel="noreferrer" className="btn btn--ghost">Sugar Sand</a>
            </div>
          </div>

          <div className="visit__sign" aria-hidden="true">
            <img src="https://the301.bar/media/2023/05/301signwhite_new.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
