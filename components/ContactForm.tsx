"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("error");
      setMessage("Please fill in your name, email, subject, and message.");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
    setMessage("Thanks — your message has been checked and is ready for email integration in the next milestone.");
  }

  return (
    <form className="card form" onSubmit={onSubmit}>
      <input className="input" name="name" placeholder="Your name" aria-label="Your name" required />
      <input className="input" name="email" type="email" placeholder="Email address" aria-label="Email address" required />
      <select className="input" name="enquiryType" aria-label="Enquiry type" defaultValue="Volunteer">
        <option>Volunteer</option>
        <option>Donate</option>
        <option>Partnership</option>
        <option>General question</option>
      </select>
      <input className="input" name="subject" placeholder="Subject" aria-label="Subject" required />
      <textarea className="textarea" name="message" placeholder="Message" aria-label="Message" required />
      <button className="button button-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
      {message && <small className={`form-status ${status}`}>{message}</small>}
      <small className="section-copy">Milestone 2 validates messages. Milestone 3 can connect this to Resend, Gmail, or another email provider.</small>
    </form>
  );
}
