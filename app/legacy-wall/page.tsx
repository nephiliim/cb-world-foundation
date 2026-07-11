"use client";

import { FormEvent, useState } from "react";

type LegacyMessage = {
  name: string;
  message: string;
  createdAt: string;
};

export default function LegacyWallPage() {
  const [messages, setMessages] = useState<LegacyMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      setError("Please write a message before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");
    setNotice("");

    try {
      const newMessage: LegacyMessage = {
        name: name.trim() || "Anonymous",
        message: message.trim(),
        createdAt: new Date().toISOString(),
      };

      const response = await fetch("/api/legacy-messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (!response.ok) {
        throw new Error("Your message could not be submitted.");
      }

      setMessages((current) => [newMessage, ...current]);
      setName("");
      setMessage("");
      setNotice("Thank you. Your message has been added to the wall.");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Your message could not be submitted."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(value: string) {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(value));
  }

  return (
    <main className="legacy-wall-page">
      <section className="page-hero legacy-wall-hero">
        <div className="container">
          <span className="kicker">Legacy Wall</span>
          <h1>Leave a message for Claudyo.</h1>
          <p className="section-copy">
            A place for memories, messages of love and support, and words that
            help keep Claudyo&apos;s legacy alive.
          </p>
        </div>
      </section>

      <section className="section light">
        <div className="container legacy-wall-layout">
          <div className="legacy-wall-form-panel">
            <span className="kicker">Share a Memory</span>
            <h2 className="section-title">Write from the heart.</h2>

            <p className="section-copy">
              Your name is optional. Please share a respectful memory, tribute
              or message of support.
            </p>

            <form className="legacy-wall-form" onSubmit={handleSubmit}>
              <label>
                Your name
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Leave blank to remain anonymous"
                  maxLength={80}
                />
              </label>

              <label>
                Your message
                <textarea
                  className="input legacy-wall-textarea"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Share a memory, tribute or message of support..."
                  maxLength={1000}
                  rows={8}
                  required
                />
              </label>

              <div className="legacy-wall-character-count">
                {message.length} / 1000
              </div>

              {error && (
                <p className="legacy-wall-alert legacy-wall-alert-error">
                  {error}
                </p>
              )}

              {notice && (
                <p className="legacy-wall-alert legacy-wall-alert-success">
                  {notice}
                </p>
              )}

              <button
                className="button primary"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Message"}
              </button>
            </form>
          </div>

          <div className="legacy-wall-intro-card">
            <span className="kicker">Long Live CB</span>

            <blockquote>
              “His legacy lives on through every life he inspired and every life
              we strive to protect in his name.”
            </blockquote>

            <p>
              Every message shared here becomes part of a growing collection of
              love, remembrance and community support.
            </p>
          </div>
        </div>
      </section>

      <section className="section legacy-wall-messages-section">
        <div className="container">
          <div className="legacy-wall-heading">
            <div>
              <span className="kicker">Messages of Love</span>
              <h2 className="section-title">Remembered by the community.</h2>
            </div>

            {messages.length > 0 && (
              <span className="legacy-wall-count">
                {messages.length}{" "}
                {messages.length === 1 ? "message" : "messages"}
              </span>
            )}
          </div>

          {messages.length > 0 ? (
            <div className="legacy-wall-grid">
              {messages.map((item, index) => (
                <article
                  className="legacy-message-card"
                  key={`${item.createdAt}-${index}`}
                >
                  <span className="legacy-message-mark">“</span>

                  <p>{item.message}</p>

                  <footer>
                    <strong>{item.name}</strong>
                    <time dateTime={item.createdAt}>
                      {formatDate(item.createdAt)}
                    </time>
                  </footer>
                </article>
              ))}
            </div>
          ) : (
            <div className="legacy-wall-empty-card">
              <h3>Be the first to leave a message.</h3>
              <p>
                Messages of love, remembrance and support will appear here.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}