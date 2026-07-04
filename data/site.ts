export const donationLink = 'https://gofund.me/97c17c72b';

export const siteConfig = {
  name: "CB's World Foundation",
  tagline: "Keeping Claudyo's Legacy Alive",
  description: "A legacy-led foundation tackling knife crime, supporting families, and creating safer communities through education, awareness and acts of kindness.",
  url: "https://cb-world-foundation-eight.vercel.app",
  donationLink
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: "Claudyo's Legacy", href: '/claudyos-legacy' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'Acts of Kindness', href: '/acts-of-kindness' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Media', href: '/media' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' }
];

export const impactStats = [
  { value: '4', label: 'Core focus areas' },
  { value: '8', label: 'Gallery categories' },
  { value: '1', label: 'Legacy-led mission' },
  { value: '100%', label: 'Community focused' }
];

export const programmes = [
  { slug: 'knife-crime-prevention', title: 'Knife crime prevention', summary: 'Education-led conversations with young people, families and communities.', icon: '🕊️', image: '/hero/cb-forever-blue.jpg', outcomes: ['Raise awareness', 'Challenge choices', 'Create safer spaces'] },
  { slug: 'school-talks', title: 'School talks', summary: 'Honest, age-appropriate sessions that open conversations and encourage better choices.', icon: '🎓', image: '/hero/cb-forever-purple.jpg', outcomes: ['Educate young people', 'Support teachers', 'Start conversations'] },
  { slug: 'bleed-control-kits', title: 'Bleed control kits', summary: 'Advocacy and awareness around life-saving emergency equipment.', icon: '❤️', image: '/hero/cb-forever-gold.jpg', outcomes: ['Promote emergency readiness', 'Support safer venues', 'Save lives'] },
  { slug: 'bereavement-support', title: 'Bereavement support', summary: 'Support for families navigating grief after traumatic loss.', icon: '💙', image: '/founders/founders-1.jpg', outcomes: ['Support families', 'Share resources', 'Offer compassion'] }
];

export const programs = programmes.map((p) => ({ ...p, description: p.summary }));

export const galleryImages = [
  { src: '/hero/cb-main-portrait.jpg', title: 'Claudyo portrait', category: 'Legacy' },
  { src: '/hero/cb-forever-gold.jpg', title: 'Forever CB gold', category: 'Memorial' },
  { src: '/hero/cb-forever-purple.jpg', title: 'Forever CB purple', category: 'Memorial' },
  { src: '/hero/cb-forever-blue.jpg', title: 'Forever CB blue', category: 'Memorial' },
  { src: '/logo/foundation-logo.jpg', title: 'Foundation logo', category: 'Branding' },
  { src: '/founders/founders-1.jpg', title: 'Foundation family', category: 'Foundation' },
  { src: '/founders/founders-2.jpg', title: 'Foundation support', category: 'Foundation' },
  { src: '/founders/founders-3.jpg', title: 'Community foundation', category: 'Foundation' }
];

export const newsPosts = [
  { slug: 'building-cbs-world-foundation', title: "Building CB's World Foundation online", date: '2026-07-04', excerpt: "The foundation website is being developed as a home for Claudyo's legacy, community work, media, donations and future events.", summary: "The foundation website is being developed as a home for Claudyo's legacy, community work, media, donations and future events.", image: '/hero/cb-main-portrait.jpg' }
];
