'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems, donationLink } from '@/data/site';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen((value) => !value)} className="focus-ring rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-navy" aria-expanded={open} aria-controls="mobile-menu">
        {open ? 'Close' : 'Menu'}
      </button>
      {open && (
        <div id="mobile-menu" className="absolute left-4 right-4 top-20 rounded-3xl border border-slate-100 bg-white p-4 shadow-soft">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-ink hover:bg-skysoft hover:text-royal">
                {item.label}
              </Link>
            ))}
            <a href={donationLink} target="_blank" rel="noreferrer" className="mt-2 rounded-2xl bg-royal px-4 py-3 text-center text-sm font-black text-white">Donate on GoFundMe</a>
          </nav>
        </div>
      )}
    </div>
  );
}
