import ButtonLink from '@/components/ButtonLink';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';
import { donationLink } from '@/data/site';

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Support the work of CB's World Foundation" body="Donations help the foundation support families, educate young people, promote community safety and continue Claudyo's legacy." />
      <Section eyebrow="GoFundMe" title="Every donation helps turn awareness into action">
        <div className="rounded-3xl bg-navy p-8 text-white shadow-soft">
          <p className="max-w-3xl text-lg leading-8 text-blue-100">Milestone 1 connects the main donation call-to-action to the official GoFundMe link. Stripe and PayPal can be added in a later milestone.</p>
          <div className="mt-8"><a href={donationLink} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-black text-navy">Donate on GoFundMe</a></div>
        </div>
      </Section>
    </>
  );
}
