export const donationLink = "https://gofund.me/97c17c72b";

export const siteConfig = {
  name: "CB's World Foundation",
  tagline: "Keeping Claudyo's Legacy Alive",
  description:
    "A legacy-led foundation supporting families, preventing knife crime and creating safer communities through education, kindness and action.",
  donationLink,
  policeAppealUrl: "https://mipp.police.uk/operation/01MPS23V46-PO1",
  crimestoppersPhone: "0800 555 111",
  reward: "£20,000",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Legacy", href: "/claudyos-legacy" },
  { label: "Justice", href: "/justice-for-claudyo" },
  { label: "Foundation", href: "/foundation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const heroImages = {
  claudyoPortrait:
    "https://crimestoppers-uk.org/getmedia/1d8e3981-ac90-4a4b-aa47-1c3594b32ce7/Claudyo-Lafayette-photo-1.png",
  claudyoNews:
    "https://www.camdennewjournal.co.uk/media/2024/07/claudyo-1-1.jpg",
  familyGrave:
    "https://www.camdennewjournal.co.uk/media/2025/07/18f533fc-1ed6-4db1-bdff-3c416dda387b.jpg",
  memorial:
    "https://www.camdennewjournal.co.uk/media/2024/07/Claudyos-mother-and-her-partner-at-a-memorial.jpg",
  estateMemorial:
    "https://www.camdennewjournal.co.uk/media/2025/07/1947ce92-eca3-47fa-903e-e4932f9c5bb7.jpg",
};

export const missionCards = [
  {
    icon: "🦋",
    title: "Legacy",
    text: "Honouring Claudyo's life by turning love, grief and memory into lasting community action.",
    href: "/claudyos-legacy",
  },
  {
    icon: "⚖️",
    title: "Justice",
    text: "Keeping the appeal visible and encouraging anyone with information to use official reporting channels.",
    href: "/justice-for-claudyo",
  },
  {
    icon: "💙",
    title: "Support",
    text: "Supporting families and communities affected by violence with compassion and practical help.",
    href: "/foundation",
  },
  {
    icon: "🌍",
    title: "Change",
    text: "Working with young people, schools and communities to create safer spaces and better futures.",
    href: "/foundation",
  },
];

export const impactStats = [
  { value: "17", label: "Years of love and memories" },
  { value: "£20k", label: "Reward for information" },
  { value: "4", label: "Core focus areas" },
  { value: "100%", label: "Legacy-led mission" },
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

export const programs = foundationWork.map((item) => ({
  ...item,
  summary: item.description,
  image: heroImages.claudyoPortrait,
  outcomes: ["Raise awareness", "Support families", "Create safer communities"],
}));

export const galleryImages = [
  { src: heroImages.claudyoPortrait, alt: "Claudyo Lafayette portrait", category: "Legacy" },
  { src: heroImages.claudyoNews, alt: "Claudyo Jauad Lafayette aged 17", category: "Legacy" },
  { src: heroImages.familyGrave, alt: "Claudyo's family at his grave", category: "Family" },
  { src: heroImages.memorial, alt: "Yzakia and Nuno at Claudyo's memorial", category: "Memorial" },
  { src: heroImages.estateMemorial, alt: "Family and friends at the Ampthill estate memorial", category: "Community" },
];

export const newsPosts = [
  {
    slug: "justice-for-claudyo-appeal",
    title: "Justice for Claudyo appeal remains active",
    date: "2026-07-04",
    excerpt:
      "A £20,000 reward is available for information that leads to a conviction. If you know anything, please use the official reporting channels.",
  },
  {
    slug: "building-the-foundation",
    title: "Building Claudyo's legacy through action",
    date: "2026-07-04",
    excerpt:
      "CB's World Foundation is being shaped as a home for remembrance, support, education and community impact.",
  },
];

export const contactTypes = ["General contact", "Schools", "Media", "Volunteer", "Support request"];
