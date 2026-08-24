import { about } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const [textRef, textVisible] = useReveal();
  const [mediaRef, mediaVisible] = useReveal();
  return (
    <section className="section section-alt" id="about">
      <div className="divider-wave" />
      <div className="container about">
        <div className={`about__text reveal ${textVisible ? 'is-visible' : ''}`} ref={textRef}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="section-title">{about.title}</h2>
          {about.body.map((p, i) => (
            <p className="about__p" key={i}>{p}</p>
          ))}
          <div className="about__stats">
            {about.stats.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`about__media reveal ${mediaVisible ? 'is-visible' : ''}`} ref={mediaRef}>
          <img src="https://the301.bar/media/2023/05/BrewStillery_square.jpg" alt="The 301 brewstillery" />
          <div className="about__badge">
            <strong>301</strong>
            <span>Circle Park Dr</span>
          </div>
        </div>
      </div>
    </section>
  );
}
