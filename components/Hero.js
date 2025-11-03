export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">DEVLOPMENT COPNSITLACYU</p>
        <h1>Modern software consulting for bold teams</h1>
        <p className="hero__description">
          We partner with ambitious founders and product leaders to deliver resilient, cloud-native platforms that scale with confidence.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">Book a discovery call</a>
          <a className="button button--ghost" href="#services">Explore our services</a>
        </div>
      </div>
      <div className="hero__metrics">
        <div>
          <h2>10+</h2>
          <p>Years building enterprise systems</p>
        </div>
        <div>
          <h2>99.95%</h2>
          <p>Average uptime across managed platforms</p>
        </div>
        <div>
          <h2>48hrs</h2>
          <p>To deliver a tailored engineering roadmap</p>
        </div>
      </div>
    </header>
  );
}
