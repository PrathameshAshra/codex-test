const phases = [
  {
    title: 'Listen & Learn',
    summary:
      'Immersive founder interviews, audience pulse checks, and cultural audits to uncover the soul and ambition of the brand.'
  },
  {
    title: 'Shape & Prototype',
    summary:
      'Translate insights into mood narratives, brand architecture, and low-fidelity product journeys to pressure-test the story.'
  },
  {
    title: 'Launch & Steward',
    summary:
      'Build final systems, orchestrate production partners, and embed with your team to launch, measure, and iterate together.'
  }
];

export default function Process() {
  return (
    <section id="process" className="section section--process">
      <div className="section__header">
        <span className="eyebrow">Approach</span>
        <h2>A collaborative rhythm that keeps vision and detail in sync</h2>
        <p>
          We operate like an in-house team—co-creating with your stakeholders, documenting every decision, and always leaving
          you with systems your team can steward with ease.
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
