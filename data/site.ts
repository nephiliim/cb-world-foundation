export const donationLink = 'https://gofund.me/97c17c72b';

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

export const coreMessages = [
  'Tackling knife crime through education and awareness.',
  'Supporting bereaved families with compassion and practical help.',
  'Honouring Claudyo Jauad Lafayette through legacy-led community work.',
  'Promoting bleed control kits and safer community spaces.'
];

export const foundationWork = [
  {
    title: 'Knife crime prevention',
    description: 'Education-led conversations with young people, families and communities.'
  },
  {
    title: 'School talks',
    description: 'Honest, age-appropriate sessions that challenge choices and stereotypes.'
  },
  {
    title: 'Bleed control kits',
    description: 'Advocacy and awareness around life-saving emergency equipment.'
  },
  {
    title: 'Bereavement support',
    description: 'Support for families navigating grief after traumatic loss.'
  }
];

export const galleryCategories = ['Claudyo', 'Family', 'Foundation', 'Community', 'Events', 'Memorial', 'Acts of Kindness', 'Media'];

export const contactTypes = ['General contact', 'Schools', 'Media', 'Volunteer', 'Support request'];

export const assetFolders = [
  'public/logo',
  'public/hero',
  'public/founders',
  'public/claudyo',
  'public/claudyo/childhood',
  'public/claudyo/family',
  'public/claudyo/modelling',
  'public/claudyo/music',
  'public/gallery/foundation',
  'public/gallery/community',
  'public/gallery/school-talks',
  'public/gallery/bleed-control',
  'public/gallery/events',
  'public/gallery/memorial',
  'public/acts-of-kindness/gifts',
  'public/acts-of-kindness/families',
  'public/acts-of-kindness/support',
  'public/media/bbc',
  'public/media/itv',
  'public/media/newspapers',
  'public/videos/bbc',
  'public/videos/itv',
  'public/videos/foundation',
  'public/shop/hoodies',
  'public/shop/tshirts',
  'public/shop/caps',
  'public/shop/wristbands'
];
export const programs = foundationWork.map((item) => ({
  slug: item.title.toLowerCase().replaceAll(' ', '-'),
  title: item.title,
  summary: item.description,
  description: item.description,
  image: '/hero/cb-forever-blue.jpg'
}));

export const newsPosts = [
  {
    title: "CB's World Foundation launches online",
    date: "2026-07-04",
    summary:
      "The first version of the CB's World Foundation website is now live, sharing Claudyo's legacy and the foundation's mission.",
    image: "/hero/cb-main-portrait.jpg",
  },
  {
    title: "Building a platform for community impact",
    date: "2026-07-04",
    summary:
      "The foundation website is being developed into a home for stories, events, donations, media and community support.",
    image: "/hero/cb-forever-blue.jpg",
  },
];