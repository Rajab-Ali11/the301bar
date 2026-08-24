import { spirits, delta } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Spirits() {
  const [ref, visible] = useReveal();
  return (
    <section className="section" id="spirits">
      <div className="container">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">House & Partner Spirits</p>
          <h2 className="section-title">Liquors & Spirits</h2>
          <p className="section-lede">
            Distilled on site and poured at the second tasting-room location for Sugar Sand Distillery.
            Take your favorite bottle home — available to go.
          </p>
        </div>

        <div className="spirits__grid">
          {spirits.map((s) => (
            <article className="spirit-card" key={s.name}>
              <h3 className="spirit-card__name">{s.name}</h3>
              <p className="spirit-card__note">{s.note}</p>
            </article>
          ))}
        </div>

        <div className="delta">
          <div className="delta__head">
            <p className="eyebrow">{delta.eyebrow}</p>
            <h3 className="delta__title">{delta.title}</h3>
            <p className="delta__note">{delta.note}</p>
          </div>
          <ul className="delta__list">
            {delta.items.map((d) => (
              <li className="delta__item" key={d.name}>
                <span className="delta__name">{d.name}</span>
                <span className="delta__tag">{d.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
