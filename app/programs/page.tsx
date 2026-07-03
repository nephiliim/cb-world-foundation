import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { ProgramCards } from "@/components/ProgramCards";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Programs</span>
          <h1 className="section-title">Support streams ready to develop into real services.</h1>
          <p className="section-copy">
            These cards are editable from the site data file, making it easy to add new sessions, workshops, and outreach programmes later.
          </p>
        </div>
      </section>
      <section className="section"><div className="container"><ProgramCards /></div></section>
      <CTA />
    </>
  );
}
