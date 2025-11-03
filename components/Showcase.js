const projects = [
  {
    title: 'Forage Market',
    summary:
      'Positioned a regenerative grocery startup for national press with a tactile identity, tone-rich product photography, and Shopify Plus experience.',
    stats: ['6 week sprint', '112% launch week sell-through', 'Brand + Digital'],
    color: '#f5efe6'
  },
  {
    title: 'Praxis Labs',
    summary:
      'Brought a future-of-work research collective online with a modular website system and editorial voice that converts subscribers.',
    stats: ['No-code CMS', '24 content templates', 'Web + Editorial'],
    color: '#e0f0ff'
  }
];

export default function Showcase() {
  return (
    <section className="section" id="work">
      <div className="section__header">
        <span className="eyebrow">Selected work</span>
        <h2>Brand worlds we&apos;ve recently launched</h2>
        <p>
          Every engagement pairs deep research with lush art direction so your next release has both meaning and momentum.
        </p>
      </div>
      <div className="showcase-grid">
        {projects.map((project) => (
          <article key={project.title} className="showcase-card" style={{ background: project.color }}>
            <div className="showcase-card__content">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <ul>
              {project.stats.map((stat) => (
                <li key={stat}>{stat}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
