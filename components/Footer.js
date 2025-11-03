export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} DEVLOPMENT COPNSITLACYU. Crafted with clarity and care.</p>
      <div className="footer__links">
        <a href="mailto:hello@devlopmentcopnsitlacyu.com">hello@devlopmentcopnsitlacyu.com</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
