import { bottles, drafts, wines } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function List({ items }) {
  return (
    <ul className="menu-list">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

export default function BeerWine() {
  const [ref, visible] = useReveal();
  return (
    <section className="section section-alt" id="beer">
      <div className="divider-wave" />
      <div className="container">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">Bottles · Drafts · Vines</p>
          <h2 className="section-title">Beer & Wine</h2>
          <p className="section-lede">
            From house drafts and familiar bottles to a globally curated wine list — something poured for every palate.
          </p>
        </div>

        <div className="beerwine">
          <div className="beerwine__col">
            <h3 className="block-title">Bottled Beers</h3>
            {bottles.map((b) => (
              <div className="menu-group" key={b.group}>
                <p className="menu-group__label">{b.group}</p>
                <List items={b.items} />
              </div>
            ))}

            <h3 className="block-title block-title--mt">Craft Draft Beers</h3>
            <p className="menu-sub">Flights of Four available</p>
            {drafts.map((d) => (
              <div className="menu-group" key={d.group}>
                <p className="menu-group__label">{d.group}</p>
                <ul className="menu-list">
                  {d.items.map((it) => (
                    <li key={it.name}>
                      <span>{it.name}</span>
                      {it.abv && <em className="abv">{it.abv}</em>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="beerwine__col">
            <h3 className="block-title">Wine Selections</h3>
            <ul className="wine-list">
              {wines.map((w) => (
                <li className="wine-item" key={w.name}>
                  <span className="wine-item__name">{w.name}</span>
                  <span className="wine-item__note">{w.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
