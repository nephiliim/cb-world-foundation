import Link from "next/link";

type Props = { heroImages: { family?: string; memorial?: string } };

export function V6Mission({ heroImages }: Props) {
  const image = heroImages.family || heroImages.memorial;
  return (
    <section className="v6-section v6-mission">
      <div className="v6-copy-block">
        <p className="v6-kicker">Our mission</p>
        <h2>Building safer communities. Creating brighter futures.</h2>
        <p>
          Through education, awareness, justice and real support, CB’s World Foundation is working every day to turn pain into purpose and protect young lives.
        </p>
        <Link className="v6-btn v6-btn-primary" href="/foundation">Learn More</Link>
      </div>
      <div className="v6-media-card">
        {image && <img src={image} alt="Foundation community and family memorial" />}
        <div className="v6-play">▶</div>
        <span>Watch Our Story</span>
      </div>
    </section>
  );
}
