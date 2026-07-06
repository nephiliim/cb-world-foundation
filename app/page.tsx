import Link from "next/link";
import { galleryImages, images, impactStats, missionCards, newsPosts, siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="kicker">CB's World Foundation</div>
            <h1>Long Live<span>His Legacy</span></h1>
            <p>{siteConfig.description}</p>
            <div className="button-row">
              <a className="button primary" href={siteConfig.donationLink} target="_blank" rel="noreferrer">Donate Now ♥</a>
              <Link className="button secondary" href="/claudyos-legacy">Read His Story</Link>
            </div>
          </div>
          <div className="hero-portrait">
            <img src={images.logo} className="logo-orb" alt="" aria-hidden="true" />
            <img src={images.claudyoPortrait} alt="Claudyo Jauad Lafayette" />
          </div>
        </div>
      </section>

      <div className="container stats-bar">
        {impactStats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">Our Mission</span>
          <h2 className="section-title">Building safer communities. Creating brighter futures.</h2>
          <p className="section-copy">Through education, awareness, justice and real support, CB's World Foundation is working every day to turn pain into purpose and protect young lives.</p>
          <div className="grid mission-grid">
            {missionCards.map(card => <div className="card" key={card.title}><div className="icon">{card.icon}</div><h3>{card.title}</h3><p>{card.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container split">
          <img className="feature-image" src={images.claudyoNews} alt="Claudyo Lafayette" />
          <div>
            <span className="kicker">Meet Claudyo</span>
            <h2 className="section-title">A son, a friend and a young man remembered with love.</h2>
            <p className="section-copy">Claudyo's legacy is the reason this foundation exists. His story continues through every conversation, every act of kindness and every young life protected.</p>
            <Link className="button primary" href="/claudyos-legacy">Read Claudyo's Story</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container justice-band">
          <div>
            <span className="kicker">Justice for Claudyo</span>
            <h2 className="reward">{siteConfig.reward} Reward</h2>
            <p className="section-copy">For information leading to a conviction. If you know anything, please do the right thing.</p>
            <div className="button-row"><a className="button primary" href={siteConfig.policeAppealUrl} target="_blank" rel="noreferrer">Submit Information</a><Link className="button secondary" href="/justice-for-claudyo">Learn More</Link></div>
          </div>
          <div><h3>Crimestoppers</h3><p className="reward" style={{fontSize:34}}>{siteConfig.crimestoppersPhone}</p><p>100% anonymous. Always.</p></div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <span className="kicker">Gallery</span>
          <h2 className="section-title">Real moments. Real memories.</h2>
          <div className="grid gallery-grid">{galleryImages.map(img => <div className="gallery-card" key={img.src}><img src={img.src} alt={img.alt} /><span>{img.category}</span></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Latest News</span>
          <h2 className="section-title">The legacy in action.</h2>
          <div className="grid mission-grid">{newsPosts.map(post => <article className="card" key={post.slug}><img className="feature-image" src={post.image} alt="" /><h3>{post.title}</h3><p>{post.excerpt}</p></article>)}</div>
        </div>
      </section>
    </main>
  );
}
