import Link from "next/link";
import { CTA } from "@/components/CTA";
import { galleryImages, images } from "@/data/site";

export default function LegacyPage() {
  return (
    <main>
  <section className="page-hero legacy-hero">
    <div className="container split">

      <div>
        <span className="kicker">Claudyo&apos;s Legacy</span>

        <h1>Honouring Claudyo Jauad Lafayette.</h1>

        <p className="section-copy">
          A story of love, strength and remembrance. Claudyo&apos;s legacy lives
          on through every family we support, every young person we inspire and
          every life we help protect.
        </p>

        <Link className="button primary" href="/legacy-wall">
          Leave a Message
        </Link>
      </div>

            <div className="legacy-hero-image-wrap">
        <img
          className="legacy-hero-image"
          src={images.claudyoPortrait}
          alt="Claudyo Lafayette"
        />
      </div>

    </div>
  </section>

      <section className="section light">
        <div className="container">
          <span className="kicker">Loving Memory</span>
          <h2 className="section-title">Claudyo Jauad Lafayette</h2>
          <p className="section-copy">
            <strong>Born: 16 April 2006</strong><br />
            <strong>Passed: 15 July 2023</strong>
          </p>

          <div className="legacy-story">
            <p>
              From the time he was a very young boy, Claudyo stepped up to be the man of the house,
              carrying a sense of responsibility far beyond his years as the son of a single mother.
              His mother was incredibly proud of the way he protected her and his older sister. For many
              years, it was always the three of them.
            </p>

            <p>
              Claudyo was never perfect, but he was always deeply and unapologetically himself. He once
              said, “People don&apos;t accept me for who I am. Being myself always gets me into trouble.”
              His mum would remind him, “I don&apos;t want a perfect son, I just want you to be the best
              person you can be.”
            </p>

            <p>
              That goodness and courage showed throughout his life. He stood up for vulnerable children,
              stepped in to separate fights, and often took blame to protect others. Younger children would
              wait for him at the school gates because they felt safer walking in with him.
            </p>

            <p>
              He had a special connection with his mentor, Mr O&apos;Reilly, a relationship that lasted for
              many years and meant a great deal to him and his family.
            </p>

            <p>
              Claudyo was full of joy and life. He loved to dance, he was always smiling, and he had a gift
              for making people laugh. He was also incredibly talented musically, spending time in recording
              studios and leaving behind thirteen songs that his family will treasure forever.
            </p>

            <p>
              He loved being out on his bike or scooter. He used to say it made him feel free. Riding gave
              him space from the world and helped him clear his mind.
            </p>

            <p>
              At just seventeen years old, Claudyo tragically lost his life to knife crime while doing what
              he so often did — putting others before himself.
            </p>

            <p>
              If love could have saved him, he would still be here today. His music, his story and his
              legacy continue to touch hearts and change lives. His family still see signs of him along the
              way — butterflies and feathers — gentle reminders that his kind heart is still with them.
            </p>

            <p>
              His legacy lives on through every life he inspired, and every life the foundation strives to
              protect in his name.
            </p>

            <p>
              <strong>
                That was Claudyo Kahary Jauad Lafayette — deeply loved, forever missed, and never forgotten. 💙
              </strong>
            </p>
          </div>
        </div>
      </section>

<section className="section light">
        <div className="container">
          <span className="kicker">Memories</span>
          <h2 className="section-title">Photos and moments</h2>

          <div className="grid gallery-grid">
            {galleryImages.map((img) => (
              <div className="gallery-card" key={img.src}>
                <img src={img.src} alt={img.alt} />
                <span>{img.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <span className="kicker">A Place to Remember</span>

          <h2 className="section-title">
            Mr O&apos;Reilly&apos;s Tribute to Claudyo at the Memorial Bench
          </h2>

          <p className="section-copy">
            During the unveiling of Claudyo&apos;s memorial bench, his mentor,
            Mr O&apos;Reilly, delivered a heartfelt speech celebrating the
            remarkable young man Claudyo was.
          </p>

          <p className="section-copy">
            He spoke about Claudyo&apos;s kindness, his courage, his loyalty to
            others and the positive impact he had on everyone around him. His
            words remind us that Claudyo&apos;s legacy continues to live on
            through the lives he touched and through the work of the CB&apos;S
            WORLD Foundation Charity.
          </p>

          <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  }}
>
  <video
    controls
    preload="metadata"
    style={{
      width: "100%",
      maxWidth: "560px",
      aspectRatio: "16 / 9",
      borderRadius: "16px",
      backgroundColor: "#000",
      boxShadow: "0 10px 30px rgba(0,0,0,.2)",
    }}
  >
    <source
      src="/videos/mr-oreilly-speech.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              opacity: 0.8,
              fontStyle: "italic",
            }}
          >
            &quot;Gone from our sight, but never from our hearts.&quot;
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}