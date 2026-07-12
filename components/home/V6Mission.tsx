import Link from "next/link";

type HeroImages = {
  estateMemorial?: string;
  familyGrave?: string;
};

type V6MissionProps = {
  heroImages: HeroImages;
  title?: string;
  text?: string;
};

export function V6Mission({
  heroImages,
  title,
  text,
}: V6MissionProps) {
  const posterImage =
    heroImages.estateMemorial ||
    heroImages.familyGrave ||
    "";

  return (
    <section className="v6-section v6-mission">
      <div className="v6-section-copy">
        <span className="v6-kicker">Our Mission</span>

        <h2>
          {title ||
            "Building safer communities. Creating brighter futures."}
        </h2>

        <p>
          {text ||
            "Through education, awareness, justice and real support, CB's World Foundation is working every day to turn pain into purpose and protect young lives."}
        </p>

        <Link
          className="v6-btn v6-btn-primary"
          href="/foundation"
        >
          Learn More
        </Link>
      </div>

      <div className="v6-story-video-card">
        <video
          controls
          playsInline
          preload="metadata"
          poster={posterImage}
        >
          <source
            src="/videos/foundation-video-1.mp4"
            type="video/mp4"
          />

          Your browser does not support the video.
        </video>

        <span>Watch Our Story</span>
      </div>
    </section>
  );
}