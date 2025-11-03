export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Boutique venture design studio</p>
        <h1>Crafting brand worlds that feel like home from day one</h1>
        <p className="hero__description">
          Navis Temlis partners with founders who lead with feeling. We weave strategy, storytelling, and sensorial art direction
          into every launch so your audience recognises you instantly.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">Plan your launch</a>
          <a className="button button--ghost" href="#work">See our work</a>
        </div>
      </div>
      <div className="hero__metrics">
        <div>
          <h2>28 launches</h2>
          <p>Crafted identities and digital habitats since 2017.</p>
        </div>
        <div>
          <h2>72 hr</h2>
          <p>Average time from inquiry to a tailored creative roadmap.</p>
        </div>
        <div>
          <h2>93% retain</h2>
          <p>Of collaborators stay with us across multiple releases.</p>
        </div>
      </div>
    </header>
  );
}
