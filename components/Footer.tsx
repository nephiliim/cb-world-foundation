import { donationLink } from '@/data/site';
export function Footer(){return <footer className="footer"><div className="container footer-grid"><div><h2>CB's World Foundation</h2><p>Keeping Claudyo's legacy alive through community work, awareness and acts of kindness.</p></div><div><a className="button" href={donationLink} target="_blank">Support the foundation</a></div></div></footer>}
