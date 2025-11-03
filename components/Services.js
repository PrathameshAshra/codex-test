const services = [
  {
    title: 'Brand Architecture',
    description:
      'Name development, messaging ladders, and visual territories that balance intuition with commercial clarity.',
    icon: '✷'
  },
  {
    title: 'Digital Experience Design',
    description:
      'Website and product interfaces that translate your ethos into tactile, conversion-ready user journeys.',
    icon: '⌘'
  },
  {
    title: 'Launch Campaigns',
    description:
      'Art direction, film, and campaign systems that keep the momentum from teaser to post-launch nurture.',
    icon: '✺'
  }
];

export default function Services() {
  return (
    <section id="services" className="section section--surface">
      <div className="section__header">
        <span className="eyebrow">Capabilities</span>
        <h2>Everything you need to open your brand&apos;s next chapter</h2>
        <p>
          Our team blends strategy, copy, design, and production. Each engagement is bespoke yet anchored by proven rituals that
          create emotional resonance and measurable traction.
        </p>
      </div>
      <div className="cards">
        {services.map((service) => (
          <article key={service.title} className="card">
            <div className="card__icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
