import Link from "next/link";
import { images } from "@/data/site";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <img
          src={images.logo}
          alt="CB'S WORLD Foundation Charity logo"
          className="not-found-logo"
        />

        <span className="kicker">404 Error</span>

        <h1>We couldn&apos;t find that page.</h1>

        <p>
          The page may have moved, the link may be outdated, or the address may
          have been entered incorrectly.
        </p>

        <div className="button-row not-found-actions">
          <Link className="button primary" href="/">
            Return Home
          </Link>

          <Link className="button secondary" href="/claudyos-legacy">
            Read Claudyo&apos;s Story
          </Link>
        </div>
      </section>
    </main>
  );
}