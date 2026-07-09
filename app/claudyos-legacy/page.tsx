import Link from "next/link";
import { CTA } from "@/components/CTA";
import { galleryImages, images } from "@/data/site";

export default function LegacyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container split">
          <div>
            <span className="kicker">Claudyo&apos;s Legacy</span>
            <h1>Honouring Claudyo Jauad Lafayette.</h1>
            <p className="section-copy">
              A story of love, memory and a legacy that continues through community action.
            </p>
            <Link className="button primary" href="/legacy-wall">
              Leave a Message
            </Link>
          </div>
          <img className="feature-image" src={images.claudyoPortrait} alt="Claudyo Lafayette" />
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

      <section className="section">
        <div className="container split">
          <img className="feature-image" src={images.claudyoNews} alt="Claudyo" />
          <div>
            <span className="kicker">Who Claudyo Was</span>
            <h2 className="section-title">A son, a friend and a young man whose memory continues to move people.</h2>
            <p className="section-copy">
              This page is a place to remember Claudyo&apos;s life, his impact, and the foundation built in his name.
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

      <CTA />
    </main>
  );
}