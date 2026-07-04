import Image from 'next/image';
import ButtonLink from '@/components/ButtonLink';
import Section from '@/components/Section';

const memoryCards = [
  {
    title: 'A life remembered with love',
    text: 'This page is designed as a calm, respectful space to remember Claudyo, share his story, and show how his legacy continues through the foundation.',
  },
  {
    title: 'Purpose from pain',
    text: 'CB\'s World Foundation turns grief into action by supporting families, young people and communities through awareness, kindness and education.',
  },
  {
    title: 'Keeping CB forever',
    text: 'The imagery, colours and message across the site are built around remembrance, hope and the promise that Claudyo\'s name continues to live on.',
  },
];

const timeline = [
  ['His life', 'A son, brother, friend and loved one whose personality, style and dreams continue to inspire everyone connected to the foundation.'],
  ['His passions', 'Music, modelling, creativity, family and friendship will be reflected here through verified stories, photos and memories.'],
  ['The foundation', 'CB\'s World Foundation was created to carry his name forward through community support, awareness and acts of kindness.'],
  ['The future', 'This page will grow into a living archive with photos, videos, messages, events and milestones from the foundation journey.'],
];

export default function LegacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/claudyo/cb-forever-gold.jpg"
            alt="CB forever tribute artwork"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Claudyo's Legacy</p>
            <h1 className="heading-font mt-5 text-5xl font-bold tracking-tight sm:text-7xl">Keeping Claudyo's legacy alive.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">A dedicated space for Claudyo Jauad Lafayette — his story, his memories, his dreams, and the foundation built in his name.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/donate">Support the foundation</ButtonLink>
              <ButtonLink href="/gallery" variant="secondary">View gallery</ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <Image
              src="/claudyo/cb-main-portrait.jpg"
              alt="Portrait of Claudyo"
              width={900}
              height={1300}
              className="h-[560px] w-full rounded-[1.5rem] object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <Section eyebrow="His story" title="A page built with love, respect and purpose">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] bg-skysoft shadow-soft">
            <Image
              src="/claudyo/cb-forever-purple.jpg"
              alt="CB forever tribute artwork with butterflies"
              width={1200}
              height={1200}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-slate-100">
            <p className="text-lg leading-8 text-muted">This is the emotional centre of the website. It gives visitors a clear place to learn who Claudyo was and why CB's World Foundation exists. The page is designed to grow over time with real memories, verified dates, videos, family messages, press coverage and foundation milestones.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {memoryCards.map((card) => (
                <article key={card.title} className="rounded-2xl bg-skysoft p-5">
                  <h3 className="font-black text-navy">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Timeline" title="The story we will build out next">
        <div className="grid gap-4 md:grid-cols-2">
          {timeline.map(([title, text], index) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-black text-white">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-black text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Tribute gallery" title="CB forever">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['/claudyo/cb-forever-gold.jpg', 'Gold butterfly tribute artwork'],
            ['/claudyo/cb-forever-blue.jpg', 'Blue and gold butterfly tribute artwork'],
            ['/claudyo/cb-forever-purple.jpg', 'Purple butterfly tribute artwork'],
          ].map(([src, alt]) => (
            <div key={src} className="overflow-hidden rounded-[2rem] bg-skysoft shadow-soft">
              <Image src={src} alt={alt} width={900} height={900} className="h-[420px] w-full object-cover" />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Video memories" title="Video space ready for foundation media">
        <div className="grid gap-6 lg:grid-cols-2">
          <video className="aspect-video w-full rounded-[2rem] bg-black shadow-soft" controls preload="metadata">
            <source src="/videos/foundation-video-1.mp4" type="video/mp4" />
          </video>
          <video className="aspect-video w-full rounded-[2rem] bg-black shadow-soft" controls preload="metadata">
            <source src="/videos/foundation-video-2.mp4" type="video/mp4" />
          </video>
        </div>
      </Section>

      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-gold">Long live CB</p>
          <h2 className="heading-font mt-4 text-4xl font-bold sm:text-6xl">A legacy that continues through every act of kindness.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">Support the work, share the story, volunteer your time, or help the foundation reach more families and young people.</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact">Get involved</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
