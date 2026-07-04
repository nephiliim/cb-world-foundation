import Link from 'next/link';
import { navItems, donationLink } from '@/data/site';
export function Header(){return <header className="header"><div className="container nav"><Link className="brand" href="/"><img src="/logo/foundation-logo.jpg" alt="CB's World Foundation logo"/><span>CB's World Foundation</span></Link><nav className="links">{navItems.map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}<a className="button" href={donationLink} target="_blank">Donate</a></nav></div></header>}
