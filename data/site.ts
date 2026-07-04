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
  { src: "/images/hero/claudyo-main.jpg", alt: "Claudyo portrait", category: "Legacy" },
  { src: "/images/logo/cb-world-logo.jpg", alt: "CB World Foundation logo", category: "Branding" },
  { src: "/images/legacy/legacy-1.jpg", alt: "Legacy artwork one", category: "Legacy" },
  { src: "/images/legacy/legacy-2.jpg", alt: "Legacy artwork two", category: "Legacy" },
  { src: "/images/legacy/legacy-3.jpg", alt: "Legacy artwork three", category: "Legacy" },
  { src: "/images/founders/founders-1.jpg", alt: "Foundation founders", category: "Foundation" },
  { src: "/images/founders/founders-2.jpg", alt: "Foundation support", category: "Foundation" },
  { src: "/images/gallery/gallery-1.jpg", alt: "Community gallery image", category: "Community" },
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
