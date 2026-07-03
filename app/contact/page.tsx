import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container grid contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="section-title">Speak to CB's World Foundation.</h1>
          <p className="section-copy">Use this page for volunteers, sponsors, parents, partners, and community enquiries.</p>
          <div className="contact-card">
            <p><strong>Email:</strong> {siteConfig.email}</p>
            <p><strong>Phone:</strong> {siteConfig.phone}</p>
            <p><strong>Location:</strong> {siteConfig.location}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
