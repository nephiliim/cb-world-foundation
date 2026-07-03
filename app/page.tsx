import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ProgramCards } from "@/components/ProgramCards";
import { Stats } from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <span className="eyebrow">Our impact</span>
          <h2 className="section-title">Building confidence, support, and opportunity.</h2>
          <p className="section-copy">
            Milestone 1 sets up the public website structure so the foundation can explain who it helps,
            what it runs, and how people can support the work.
          </p>
          <Stats />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title">Programs that can grow with the foundation.</h2>
          <ProgramCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
