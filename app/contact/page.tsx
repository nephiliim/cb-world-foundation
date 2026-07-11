"use client";

import { FormEvent, useState } from "react";
import { contactTypes } from "@/data/site";

const formEndpoint = "https://formspree.io/f/xqerzqje";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Your message could not be sent.");
      }

      form.reset();
      setSuccess("Thank you. Your message has been sent successfully.");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Your message could not be sent."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Contact Us</span>

          <h1>We&apos;re here to help.</h1>

          <p className="section-copy">
            Whether you&apos;d like to support the foundation, invite us to
            speak, volunteer, ask for help, or simply get in touch, we&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <div>
            <span className="kicker">Get In Touch</span>

            <h2 className="section-title">Every conversation matters.</h2>

            <p className="section-copy">
              CB&apos;S WORLD Foundation is committed to supporting families,
              educating young people and working alongside communities to
              create lasting change.
            </p>

            <div className="foundation-value-grid">
              <div className="foundation-value-card">
                <span>Schools</span>
                <h3>Education</h3>
                <p>
                  Invite us to speak about knife crime awareness, community
                  safety and youth empowerment.
                </p>
              </div>

              <div className="foundation-value-card">
                <span>Media</span>
                <h3>Press</h3>
                <p>
                  Interviews, campaigns, charity partnerships and awareness
                  opportunities.
                </p>
              </div>

              <div className="foundation-value-card">
                <span>Volunteers</span>
                <h3>Join Us</h3>
                <p>
                  Become part of the growing community helping to continue
                  Claudyo&apos;s legacy.
                </p>
              </div>
            </div>
          </div>

          <div>
            <form className="form" onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                maxLength={100}
                required
              />

              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              <select className="input" name="enquiryType" required>
                {contactTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <textarea
                className="input"
                name="message"
                placeholder="How can we help?"
                maxLength={2000}
                required
              />

              <input
                type="hidden"
                name="_subject"
                value="New CB'S WORLD Foundation website enquiry"
              />

              {success && (
                <p className="legacy-wall-alert legacy-wall-alert-success">
                  {success}
                </p>
              )}

              {error && (
                <p className="legacy-wall-alert legacy-wall-alert-error">
                  {error}
                </p>
              )}

              <button
                className="button primary"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="foundation-message">
        <div className="container">
          <span className="kicker">Together We Make a Difference</span>

          <h2>
            Small conversations can lead to{" "}
            <strong>life-changing opportunities.</strong>
          </h2>

          <p>
            Whether you&apos;re looking to support the foundation, organise a
            community event or simply learn more about our mission, we&apos;d
            love to hear from you.
          </p>
        </div>
      </section>
    </main>
  );
}