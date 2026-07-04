import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function FeedbackPage() {
  return (
    <>
      <PageHero eyebrow="Feedback" title="Leave a message, memory or suggestion" body="This page is prepared for a future community wall with admin approval for memories, support messages and suggestions." />
      <Section eyebrow="Coming next" title="Community wall placeholder">
        <div className="rounded-3xl bg-skysoft p-8 text-muted">Milestone 4 will add memory submissions, approval workflow and a public wall.</div>
      </Section>
    </>
  );
}
