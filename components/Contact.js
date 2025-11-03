export default function Contact() {
  return (
    <section id="contact" className="section section--accent">
      <div className="contact">
        <div>
          <span className="eyebrow">Start the conversation</span>
          <h2>Let&apos;s architect your next chapter</h2>
          <p>
            Share your goals and constraints—we&apos;ll respond within two business days with a curated agenda for our kickoff call.
          </p>
        </div>
        <form className="contact__form">
          <label>
            Name
            <input type="text" name="name" placeholder="Ada Lovelace" required />
          </label>
          <label>
            Work email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            How can we help?
            <textarea name="message" rows="4" placeholder="Tell us about your product vision" required />
          </label>
          <button type="submit" className="button button--primary">
            Request consultation
          </button>
        </form>
      </div>
    </section>
  );
}
