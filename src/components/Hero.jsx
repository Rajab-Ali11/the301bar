import { hero, site } from '../data/content';

function Bottle({ x }) {
  return (
    <g transform={`translate(${x},170) scale(1.1)`}>
      <rect x="-13" y="222" width="26" height="20" rx="3" />
      <path d="M-10 242 L10 242 L10 312 Q10 336 27 360 L27 560 Q27 582 5 582 L-5 582 Q-27 582 -27 560 L-27 360 Q-10 336 -10 312 Z" />
      <rect x="-27" y="408" width="54" height="70" rx="4" />
    </g>
  );
}

function Decor() {
  return (
    <svg className="hero__decor" viewBox="0 0 1200 800" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {/* corner vines */}
        <path d="M-10,10 C 70,50 45,130 100,170 C 145,204 120,280 160,330" />
        <path d="M50,60 C 84,46 112,60 116,94 C 86,98 62,84 50,60 Z" />
        <path d="M92,128 C 128,114 156,130 158,166 C 126,170 102,154 92,128 Z" />
        <path d="M124,200 C 160,188 188,206 188,242 C 156,246 132,228 124,200 Z" />
        <path d="M410,10 C 330,50 360,130 305,170 C 260,204 290,280 250,330" />
        <path d="M360,60 C 326,46 298,60 294,94 C 324,98 348,84 360,60 Z" />
        <path d="M318,128 C 282,114 254,130 252,166 C 284,170 308,154 318,128 Z" />
        <path d="M286,200 C 250,188 222,206 222,242 C 254,246 278,228 286,200 Z" />
        <path d="M1210,790 C 1130,750 1155,670 1100,630 C 1055,596 1080,520 1040,470" />
        <path d="M1150,740 C 1116,754 1088,740 1084,706 C 1114,702 1138,716 1150,740 Z" />
        <path d="M1108,672 C 1072,686 1044,670 1042,634 C 1074,630 1098,646 1108,672 Z" />
        <path d="M-10,790 C 70,750 45,670 100,630 C 145,596 120,520 160,470" />
        <path d="M50,740 C 84,754 112,740 116,706 C 86,702 62,716 50,740 Z" />
        <path d="M92,672 C 128,686 156,670 158,634 C 126,630 102,646 92,672 Z" />
        {/* beer bottles flanking the centered text */}
        <Bottle x={170} />
        <Bottle x={1030} />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <Decor />
      <div className="hero__grain" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow hero__kicker">{hero.kicker}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <p className="hero__lede">
          {hero.line1}
          <br />
          {hero.line2}
        </p>
        <div className="hero__actions">
          <a href="#spirits" className="btn btn--primary">{hero.ctaPrimary}</a>
          <a href="#visit" className="btn btn--ghost">{hero.ctaSecondary}</a>
        </div>
        <p className="hero__loc">{site.locationLine}</p>
      </div>
      <div className="hero__scroll" aria-hidden="true"><span /></div>
    </section>
  );
}
