import Link from 'next/link';

export default function ButtonLink({ href, children, variant = 'primary' }: { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const base = 'focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition';
  const styles = variant === 'primary'
    ? 'bg-royal text-white shadow-soft hover:-translate-y-0.5 hover:bg-navy'
    : 'border border-navy/20 bg-white text-navy hover:-translate-y-0.5 hover:border-royal hover:text-royal';
  return <Link className={`${base} ${styles}`} href={href}>{children}</Link>;
}
