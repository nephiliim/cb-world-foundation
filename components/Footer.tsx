import Link from 'next/link';
import { navItems, donationLink } from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-100">CB's World Foundation Charity</p>
          <h2 className="heading-font mt-4 text-3xl font-bold">Honouring Claudyo. Supporting families. Building safer communities.</h2>
          <a href={donationLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-navy">Donate now</a>
        </div>
        <div>
          <p className="font-black">Explore</p>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 6).map((item) => <Link className="text-sm text-blue-100 hover:text-white" key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="font-black">Contact</p>
          <p className="mt-4 text-sm leading-6 text-blue-100">For schools, media, volunteers and support requests, use the contact page and choose the right enquiry type.</p>
          <Link href="/contact" className="mt-4 inline-flex text-sm font-bold text-white underline">Contact the foundation</Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-blue-100">© {new Date().getFullYear()} CB's World Foundation Charity. Built with care.</div>
    </footer>
  );
}
