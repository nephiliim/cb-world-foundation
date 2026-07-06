export const donationLink = "https://gofund.me/97c17c72b";

export const siteConfig = {
  name: "CB's World Foundation",
  tagline: "Keeping Claudyo's Legacy Alive",
  description:
    "A legacy-led foundation tackling knife crime, supporting families, and creating hope through community action.",
  donationLink,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Legacy", href: "/claudyos-legacy" },
  { label: "Foundation", href: "/foundation" },
  { label: "Acts of Kindness", href: "/acts-of-kindness" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const impactStats = [
  { value: "4", label: "Core focus areas" },
  { value: "8", label: "Real media assets" },
  { value: "1", label: "Legacy-led mission" },
  { value: "100%", label: "Community focused" },
];

export const foundationWork = [
  {
    slug: "knife-crime-prevention",
    title: "Knife crime prevention",
    description:
      "Education-led conversations with young people, schools, families and communities.",
    icon: "🕊️",
  },
  {
    slug: "school-talks",
    title: "School talks",
    description:
      "Honest, age-appropriate sessions that challenge choices and stereotypes.",
    icon: "🎓",
  },
  {
    slug: "bleed-control-kits",
    title: "Bleed control kits",
    description:
      "Advocacy and awareness around life-saving emergency equipment in public spaces.",
    icon: "❤️",
  },
  {
    slug: "bereavement-support",
    title: "Bereavement support",
    description:
      "Compassionate support for families navigating grief after traumatic loss.",
    icon: "💙",
  },
];

export const galleryImages = [
  {
    src: "https://crimestoppers-uk.org/getmedia/1d8e3981-ac90-4a4b-aa47-1c3594b32ce7/Claudyo-Lafayette-photo-1.png",
    alt: "Claudyo Lafayette full portrait",
    category: "Legacy",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2024/07/claudyo-1-1.jpg",
    alt: "Claudyo Jauad Lafayette aged 17",
    category: "Legacy",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2025/07/18f533fc-1ed6-4db1-bdff-3c416dda387b.jpg",
    alt: "Claudyo’s family at his grave",
    category: "Family",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2024/07/Claudyos-mother-and-her-partner-at-a-memorial.jpg",
    alt: "Yzakia and Nuno at Claudyo’s memorial",
    category: "Memorial",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2025/07/1947ce92-eca3-47fa-903e-e4932f9c5bb7.jpg",
    alt: "Family and friends at the Ampthill estate memorial",
    category: "Memorial",
  },
];

export const newsPosts = [
  {
    slug: "foundation-v2-launch",
    title: "CB's World Foundation v2 launches",
    date: "2026-07-04",
    excerpt:
      "A cleaner, stronger digital home for Claudyo's legacy, foundation work, media and community support.",
  },
  {
    slug: "building-the-platform",
    title: "Building a platform for community impact",
    date: "2026-07-04",
    excerpt:
      "The website is being shaped into a home for stories, donations, media, events and future admin tools.",
  },
];

export const contactTypes = ["General contact", "Schools", "Media", "Volunteer", "Support request"];

export const programs = foundationWork.map((item) => ({
  slug: item.slug,
  title: item.title,
  summary: item.description,
  description: item.description,
  image: "/images/legacy/legacy-1.jpg",
  icon: item.icon,
  outcomes: ["Raise awareness", "Support families", "Create safer communities"],
}));
