import Link from "next/link";

type HeroImages = {
  estateMemorial?: string;
  familyGrave?: string;
};

export function V6Mission({ heroImages }: { heroImages: HeroImages }) {
  return (
    <section className="v6-section v6-mission">
      <div className="v6-section-copy">
        <span className="v6-kicker">Our Mission</span>
        <h2>Building safer communities. Creating brighter futures.</h2>
        <p>
          Through education, awareness, justice and real support, CB&apos;s World Foundation is working every day to turn pain into purpose and protect young lives.
        </p>
        <Link className="v6-btn v6-btn-primary" href="/foundation">Learn More</Link>
      </div>
      <div className="v6-video-card">
        <img src={heroImages.estateMemorial || heroImages.familyGrave} alt="CB's World Foundation community memorial" />
        <div className="v6-play">▶</div>
        <span>Watch Our Story</span>
      </div>
    </section>
  );
}
