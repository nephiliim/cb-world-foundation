import ButtonLink from '@/components/ButtonLink';
import CardGrid from '@/components/CardGrid';
import Section from '@/components/Section';
import { coreMessages, donationLink, foundationWork } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-skysoft via-white to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-royal">CB's World Foundation Charity</p>
            <h1 className="heading-font mt-5 text-5xl font-bold tracking-tight text-navy sm:text-7xl">Honouring Claudyo. Building safer communities.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">A family-led foundation created in memory of Claudyo Jauad Lafayette, focused on knife crime prevention, grief support, youth education and acts of kindness.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/claudyos-legacy">Read Claudyo's story</ButtonLink>
              <a className="focus-ring inline-flex items-center justify-center rounded-full border border-navy/20 bg-white px-6 py-3 text-sm font-bold text-navy hover:border-royal hover:text-royal" href={donationLink} target="_blank" rel="noreferrer">Donate on GoFundMe</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-soft"><img src="/claudyo/cb-main-portrait.jpg" alt="Portrait of Claudyo" className="h-[560px] w-full rounded-[1.5rem] object-cover object-top" /></div>
        </div>
      </section>

      <Section eyebrow="Welcome" title="A foundation led by love, legacy and community action">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl bg-skysoft shadow-soft"><img src="/founders/founders-pink.jpg" alt="CB's World Foundation founders" className="h-full min-h-[420px] w-full object-cover" /></div>
          <div className="rounded-3xl bg-navy p-8 text-white shadow-soft">
            <p className="text-lg leading-8 text-blue-100">CB's World Foundation exists to turn pain into purpose. The website should tell the story with warmth and respect while making it easy for schools, families, volunteers and supporters to get involved.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coreMessages.map((message) => <div key={message} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold leading-6">{message}</div>)}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Our work" title="What the foundation stands for">
        <CardGrid items={foundationWork} />
      </Section>

      <Section eyebrow="Stories" title="Legacy, kindness, media and memories">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Claudyo’s Legacy', '/claudyos-legacy', 'His life, passions, family memories, music, modelling and timeline.'],
            ['Acts of Kindness', '/acts-of-kindness', 'Support for families, care packages, gifts and community love.'],
            ['Media & Press', '/media', 'BBC, ITV, newspaper coverage, interviews and foundation videos.'],
            ['Gallery', '/gallery', 'A growing library of photos from Claudyo, family and foundation work.']
          ].map(([title, href, text]) => (
            <article key={title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              <ButtonLink href={href} variant="secondary">Open page</ButtonLink>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
