import { galleryMedia } from "@/data/media";
import styles from "./gallery.module.css";

const categories = ["Claudyo", "Awareness", "Community", "Events", "Music", "Videos"];

export default function GalleryPage() {
  const featured = galleryMedia[0];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={styles.kicker}>Gallery</span>
          <h1 className={styles.title}>Memories, awareness and legacy.</h1>
          <p className={styles.lead}>
            A growing media library for CB’S WORLD Foundation Charity — celebrating Claudyo’s life,
            sharing the work being done in his name, and raising awareness for young people and families.
          </p>

          <div className={styles.feature}>
            <div className={styles.featureCard}>
              <img src={featured.src} alt={featured.title} />
            </div>
            <div className={styles.featureText}>
              <span className={styles.kicker}>Featured memory</span>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <span className={styles.kicker}>Collections</span>
            <h2>Photos and videos</h2>
          </div>
          <div className={styles.filters} aria-label="Gallery categories">
            {categories.map((category) => (
              <span className={styles.filter} key={category}>{category}</span>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {galleryMedia.map((item) => (
            <article className={styles.card} key={item.src}>
              <div className={styles.media}>
                {item.type === "video" ? (
                  <video controls preload="metadata" poster={item.poster}>
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.src} alt={item.title} />
                )}
              </div>
              <div className={styles.body}>
                <span className={styles.badge}>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <h2>More memories can be added over time.</h2>
          <p>
            The gallery is set up so future events, music clips, awareness videos, photos and community work can be added
            without redesigning the page each time.
          </p>
        </div>
      </section>
    </main>
  );
}
