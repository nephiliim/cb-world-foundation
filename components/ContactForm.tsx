'use client';

import { useState } from 'react';
import { contactTypes } from '@/data/site';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { 'Content-Type': 'application/json' }
    });
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
      {sent && <div className="mb-5 rounded-2xl bg-skysoft p-4 text-sm font-bold text-navy">Thank you. Your message has been recorded for the foundation team.</div>}
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy">Name<input required name="name" className="rounded-2xl border border-slate-200 px-4 py-3 font-normal text-ink" /></label>
        <label className="grid gap-2 text-sm font-bold text-navy">Email<input required type="email" name="email" className="rounded-2xl border border-slate-200 px-4 py-3 font-normal text-ink" /></label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-navy">Enquiry type<select name="type" className="rounded-2xl border border-slate-200 px-4 py-3 font-normal text-ink">{contactTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
      <label className="mt-5 grid gap-2 text-sm font-bold text-navy">Message<textarea required name="message" rows={6} className="rounded-2xl border border-slate-200 px-4 py-3 font-normal text-ink" /></label>
      <button className="focus-ring mt-6 rounded-full bg-royal px-7 py-3 text-sm font-black text-white hover:bg-navy">Send message</button>
    </form>
  );
}
