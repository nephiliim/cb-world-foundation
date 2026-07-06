import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Legacy", "/claudyos-legacy"],
  ["Justice", "/justice-for-claudyo"],
  ["Foundation", "/foundation"],
  ["Gallery", "/gallery"],
  ["Legacy Wall", "/legacy-wall"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <header className="site-header-v5">
      <Link href="/" className="site-brand-v5">
        <img src="/images/logo/cb-world-logo.png" alt="CB's World Foundation" />
        <span>CB's World Foundation</span>
      </Link>
      <nav className="site-nav-v5" aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </nav>
      <Link className="site-donate-v5" href="/donate">Donate ♥</Link>
    </header>
  );
}
