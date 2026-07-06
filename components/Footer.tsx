import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer-v5">
      <div>
        <img src="/images/logo/cb-world-logo.png" alt="CB's World Foundation logo" />
        <h2>CB's World Foundation</h2>
        <p>Building a legacy of love, justice and change in memory of Claudyo Jauad Lafayette.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <Link href="/claudyos-legacy">Claudyo’s Legacy</Link>
        <Link href="/justice-for-claudyo">Justice for Claudyo</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/legacy-wall">Legacy Wall</Link>
      </div>
      <div>
        <h3>Support</h3>
        <Link href="/donate">Donate</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/foundation">Foundation</Link>
      </div>
    </footer>
  );
}
