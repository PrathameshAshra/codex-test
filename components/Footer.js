export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Navis Temlis Studio. Independent & international.</p>
      <div className="footer__links">
        <a href="mailto:hello@navistemlis.studio">hello@navistemlis.studio</a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
