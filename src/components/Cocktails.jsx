import { cocktails } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Cocktails() {
  const [ref, visible] = useReveal();
  return (
    <section className="section" id="cocktails">
      <div className="container">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">Mixed to Order</p>
          <h2 className="section-title">Cocktails</h2>
          <p className="section-lede">
            Built with our house spirits and small-batch shine. Ask about having any cocktail smoked.
          </p>
        </div>

        <div className="cocktails__grid">
          {cocktails.map((c) => (
            <article className="cocktail" key={c.name}>
              <h3 className="cocktail__name">{c.name}</h3>
              <p className="cocktail__desc">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
