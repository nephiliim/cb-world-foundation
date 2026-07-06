type GalleryImage = { src: string; alt: string; category: string };
type NewsPost = { slug: string; title: string; excerpt: string; image?: string };

export function V6Gallery({ images, news }: { images: GalleryImage[]; news: NewsPost[] }) {
  return (
    <section className="v6-section">
      <div className="v6-section-head">
        <div>
          <span className="v6-kicker">Latest Updates</span>
          <h2>Real moments. Real memories.</h2>
        </div>
        <a href="/news">View all news →</a>
      </div>
      <div className="v6-gallery-news">
        <div className="v6-gallery-grid">
          {images.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.alt} />
              <figcaption>{img.category}</figcaption>
            </figure>
          ))}
        </div>
        <div className="v6-news-list">
          {news.map((post) => (
            <article key={post.slug}>
              <span>News</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
