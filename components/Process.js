const phases = [
  {
    title: 'Discover & Align',
    summary:
      'Stakeholder interviews, tech audits, and opportunity mapping to align on impact, constraints, and success metrics.'
  },
  {
    title: 'Design & Prototype',
    summary:
      'Rapidly iterate architecture diagrams, UX flows, and proof-of-concepts to de-risk assumptions before full investment.'
  },
  {
    title: 'Build & Optimize',
    summary:
      'Incremental delivery with continuous integration, observability, and performance tuning baked into every release.'
  }
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="section__header">
        <span className="eyebrow">Engagement model</span>
        <h2>Transparent delivery, measurable outcomes</h2>
        <p>
          We operate as an extension of your engineering org, sharing velocity metrics, burn-up charts, and deployment health at
          every sprint.
        </p>
      </div>
      <ol className="timeline">
        {phases.map((phase, index) => (
          <li key={phase.title}>
            <span className="timeline__index">0{index + 1}</span>
            <div>
              <h3>{phase.title}</h3>
              <p>{phase.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
