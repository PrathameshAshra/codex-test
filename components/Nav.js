export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav__brand" href="#top">
        Navis <span>Temlis</span>
      </a>
      <div className="nav__links">
        <a href="#services">Capabilities</a>
        <a href="#process">Approach</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a className="button button--ghost" href="#contact">
          Start a project
        </a>
      </div>
    </nav>
  );
}
