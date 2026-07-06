"use client";

import { useState } from "react";

export function LegacyWallForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    const response = await fetch("/api/legacy-messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    event.currentTarget.reset();
    setStatus("success");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" type="text" required maxLength={80} />
      </label>

      <label>
        Email address <span className="muted">Only used if the team needs to contact you</span>
        <input name="email" type="email" required maxLength={120} />
      </label>

      <label>
        Message
        <textarea name="message" required rows={6} maxLength={600} />
      </label>

      <button className="button button-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit message"}
      </button>

      {status === "success" && (
        <p className="success-message">Thank you. Your message has been submitted for review.</p>
      )}
      {status === "error" && (
        <p className="error-message">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
