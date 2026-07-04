import PageHero from '@/components/PageHero';
import Section from '@/components/Section';

export default function BlogPage() {
  return <><PageHero eyebrow="Blog" title="Updates and articles" body="A placeholder for foundation news, education posts and campaign updates." /><Section eyebrow="Coming soon" title="Blog manager will be added later"><div className="rounded-3xl bg-skysoft p-8 text-muted">CMS-powered blog posts will be added in a later milestone.</div></Section></>;
}
