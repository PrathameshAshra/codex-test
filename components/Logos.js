const logos = [
  'Forage',
  'Northwind Atlas',
  'Golden Hour',
  'Praxis & Co.',
  'Mariner',
  'Quiet Ritual'
];

export default function Logos() {
  return (
    <section className="section section--logos" aria-label="Partner brands">
      <div className="section__header section__header--centered">
        <span className="eyebrow">Trusted by founders of</span>
        <p>
          From seed-stage dreamers to growth-stage darlings, Navis Temlis pairs narrative, identity, and interface design to
          make launches feel inevitable.
        </p>
      </div>
      <div className="logo-grid">
        {logos.map((logo) => (
          <span key={logo} className="logo-pill">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
