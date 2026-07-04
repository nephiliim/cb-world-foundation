import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Speak to CB's World Foundation" body="Use the form for general contact, schools, media, volunteering or support requests." />
      <Section eyebrow="Enquiry form" title="Send a message">
        <ContactForm />
      </Section>
    </>
  );
}
