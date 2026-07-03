import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { values } from "@/data/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1 className="section-title">A foundation built around community, care, and consistency.</h1>
          <p className="section-copy">
            CB's World Foundation exists to create safe spaces, practical support, and positive routes forward for young people and families.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          <div className="card">
            <h2>Our mission</h2>
            <p className="section-copy">
              To support young people with mentoring, events, workshops, and access to opportunities that help them feel capable and valued.
            </p>
          </div>
          <div className="card">
            <h2>Our values</h2>
            <ul className="list">
              {values.map((value) => <li key={value}>{value}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
