import Link from "next/link";
import { CTA } from "@/components/CTA";
import { galleryImages, heroImages } from "@/data/site";

const timeline = [
  ["2006", "Claudyo was born — a much-loved son whose life would touch so many people."],
  ["Childhood", "Family, laughter, memories and the moments that shaped who he became."],
  ["Growing up", "A young man remembered for his personality, confidence, creativity and love from those around him."],
  ["Today", "His legacy continues through CB's World Foundation, community action and the call for justice."],
];

export default function LegacyPage() {
  return (
    <main>
      <section className="page-hero legacy-hero">
        <div>
          <span className="eyebrow">Claudyo's Legacy</span>
          <h1>Forever loved. Forever remembered. Forever inspiring change.</h1>
          <p>17 years of love, memories and a legacy that continues through family, community and action.</p>
          <div className="button-row">
            <Link className="button primary" href="/justice-for-claudyo">Justice for Claudyo</Link>
            <Link className="button ghost" href="/legacy-wall">Leave a Feather</Link>
          </div>
        </div>
        <img src={heroImages.claudyoPortrait} alt="Claudyo Lafayette" />
      </section>

      <section className="split-section">
        <img className="feature-image" src={heroImages.claudyoNews} alt="Claudyo Jauad Lafayette" />
        <div>
          <span className="eyebrow">Who Claudyo was</span>
          <h2>A son, a friend and a young man whose memory continues to move people.</h2>
          <p>
            This page is a place to remember Claudyo as a person first: loved deeply, remembered proudly and honoured through every act of kindness, every conversation and every step taken in his name.
          </p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">Timeline</span>
          <h2>A life remembered through love.</h2>
        </div>
        <div className="timeline">
          {timeline.map(([year, text]) => (
            <div className="timeline-item" key={year}>
              <strong>{year}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading between">
          <div>
            <span className="eyebrow">Memories</span>
            <h2>Photos that carry the story forward.</h2>
          </div>
          <Link className="text-link" href="/gallery">Open gallery →</Link>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure key={image.src} className="gallery-card">
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.category}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="justice-banner">
        <div>
          <span className="eyebrow">Justice for Claudyo</span>
          <h2>If you know anything, please say something.</h2>
          <p>The appeal remains an important part of Claudyo's story. Information should go through official reporting channels.</p>
        </div>
        <Link className="button primary" href="/justice-for-claudyo">View Justice Appeal</Link>
      </section>

      <CTA />
    </main>
  );
}
