export default function ContactPage() {
  return (
    <main>
      <section className="simple-page-header">
        <span className="eyebrow">Contact</span>
        <h1>Contact CB’s World Foundation.</h1>
        <p>For schools, media, volunteering, support requests or general enquiries, please get in touch.</p>
      </section>
      <section className="section">
        <form className="contact-form">
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input placeholder="you@example.com" /></label>
          <label>Message<textarea placeholder="How can the foundation help?" /></label>
          <button className="button primary" type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}
