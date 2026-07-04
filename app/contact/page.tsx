import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { contactTypes } from "@/data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact CB's World Foundation" copy="Use this page for schools, media, volunteering, partnership enquiries and support requests." />
      <Section>
        <form className="container form">
          <input placeholder="Your name" />
          <input placeholder="Email address" type="email" />
          <select>{contactTypes.map((type) => <option key={type}>{type}</option>)}</select>
          <textarea placeholder="Your message" />
          <button className="button" type="button">Send message</button>
        </form>
      </Section>
    </>
  );
}
