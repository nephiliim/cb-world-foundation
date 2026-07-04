import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = { title: "Claudyo's Legacy" };

export default function LegacyPage() {
  return (
    <>
      <PageHero eyebrow="His story" title="Claudyo's Legacy" copy="A page dedicated to Claudyo Jauad Lafayette, his life, his family, his dreams and the legacy that continues through CB's World Foundation." />
      <Section>
        <div className="container content-grid">
          <img className="rounded-media" src="/images/hero/claudyo-main.jpg" alt="Claudyo portrait" />
          <div>
            <span className="eyebrow">Legacy-led</span>
            <h2>A life remembered through action.</h2>
            <p className="large-copy">This foundation exists so Claudyo's name continues to stand for love, hope, support and change. The story is personal, but the mission reaches the whole community.</p>
          </div>
        </div>
      </Section>
      <Section className="soft-section">
        <div className="container gallery-grid">
          <img src="/images/legacy/legacy-1.jpg" alt="Legacy artwork" />
          <img src="/images/legacy/legacy-2.jpg" alt="Legacy artwork" />
          <img src="/images/legacy/legacy-3.jpg" alt="Legacy artwork" />
          <img src="/images/founders/founders-1.jpg" alt="Foundation family" />
        </div>
      </Section>
    </>
  );
}
