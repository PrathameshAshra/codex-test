export default function Contact() {
  return (
    <section id="contact" className="section section--accent">
      <div className="contact">
        <div>
          <span className="eyebrow">Start a conversation</span>
          <h2>Your next chapter starts with a shared Google Doc and a cup of tea</h2>
          <p>
            Tell us about your audience, timeline, and the feeling you want people to leave with. We&apos;ll reply within a day
            to schedule a chemistry call and craft a path forward.
          </p>
        </div>
        <form className="contact__form">
          <label>
            Name
            <input type="text" name="name" placeholder="Olaolu Slawn" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@studio.com" required />
          </label>
          <label>
            What are you building?
            <textarea name="message" rows="4" placeholder="Share what you&apos;re launching" required />
          </label>
          <button type="submit" className="button button--primary">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
