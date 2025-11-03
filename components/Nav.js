export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav__brand" href="#top">
        DEVLOPMENT <span>COPNSITLACYU</span>
      </a>
      <div className="nav__links">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
        <a className="button button--ghost" href="#contact">
          Let&apos;s talk
        </a>
      </div>
    </nav>
  );
}
