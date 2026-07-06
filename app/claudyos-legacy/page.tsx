import Link from "next/link";
import { galleryImages, heroImages } from "@/data/site";

const timeline = [
  ["2006", "Claudyo was born — a much-loved son whose life would touch so many people."],
  ["Growing up", "Remembered as loved, full of personality and surrounded by family and friends."],
  ["17 years", "A young life full of memories, dreams and meaning."],
  ["Today", "His legacy continues through the foundation, justice appeal and community action."],
];

export default function ClaudyosLegacyPage() {
  return (
    <main>
      <section className="page-hero legacy-hero">
        <div>
          <span className="eyebrow">Claudyo's Legacy</span>
          <h1>17 years. A lifetime of love. A legacy still moving people.</h1>
          <p>Meet Claudyo first — the son, friend and young man behind the foundation.</p>
          <div className="button-row"><Link className="button primary" href="/justice-for-claudyo">Justice for Claudyo</Link><Link className="button ghost" href="/legacy-wall">Leave a feather</Link></div>
        </div>
        <img src={heroImages.claudyoPortrait} alt="Claudyo Lafayette" />
      </section>

      <section className="split-section">
        <img className="feature-image" src={heroImages.claudyoNews} alt="Claudyo Jauad Lafayette" />
        <div>
          <span className="eyebrow">Who Claudyo was</span>
          <h2>A son, a friend and a young man whose memory continues to inspire action.</h2>
          <p>This page is a space to honour Claudyo's life, memories and the love his family and community continue to carry for him.</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span className="eyebrow">Timeline</span><h2>A life remembered with love.</h2></div>
        <div className="timeline">
          {timeline.map(([year, text]) => <article key={year}><strong>{year}</strong><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading"><span className="eyebrow">Memories</span><h2>Photos that tell part of the story.</h2></div>
        <div className="gallery-preview">
          {galleryImages.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
        </div>
      </section>
    </main>
  );
}
