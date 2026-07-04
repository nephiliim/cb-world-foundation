import Image from 'next/image';
import Link from 'next/link';
import { navItems, donationLink } from '@/data/site';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white ring-2 ring-skysoft"><Image src="/logo/cb-world-logo.jpg" alt="CB's World Foundation logo" fill className="object-cover" /></div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-navy">CB's World</p>
            <p className="text-xs font-semibold text-muted">Foundation Charity</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navItems.slice(0, 7).map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-full text-sm font-semibold text-ink hover:text-royal">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-navy hover:text-royal" href="/contact">Contact</Link>
          <a className="focus-ring rounded-full bg-royal px-5 py-2.5 text-sm font-bold text-white shadow-soft hover:bg-navy" href={donationLink} target="_blank" rel="noreferrer">Donate</a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
