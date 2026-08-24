import { gallery } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Gallery() {
  const [ref, visible] = useReveal();
  return (
    <section className="section section-alt" id="gallery">
      <div className="divider-wave" />
      <div className="container">
        <div className={`reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <p className="eyebrow">Inside The 301</p>
          <h2 className="section-title">Gallery</h2>
          <p className="section-lede">A taste of the room, the pours, and the good times on tap.</p>
        </div>

        <div className="gallery__grid">
          {gallery.map((src, i) => (
            <figure className="gallery__item" key={i}>
              <img src={src} alt={`The 301 gallery ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
