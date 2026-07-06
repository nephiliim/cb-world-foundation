export const donationLink = "https://gofund.me/97c17c72b";

export const siteConfig = {
  name: "CB's World Foundation",
  tagline: "Honouring Claudyo. Building a legacy of love, justice and change.",
  description:
    "A legacy-led foundation supporting families, raising awareness and creating safer communities in memory of Claudyo Jauad Lafayette.",
  donationLink,
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Claudyo's Legacy", href: "/claudyos-legacy" },
  { label: "Justice", href: "/justice-for-claudyo" },
  { label: "Foundation", href: "/foundation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Legacy Wall", href: "/legacy-wall" },
  { label: "Contact", href: "/contact" },
];

export const impactStats = [
  { value: "2,450+", label: "Acts of Kindness" },
  { value: "1,320+", label: "Legacy Messages" },
  { value: "8,750+", label: "Community Supporters" },
  { value: "£12,350+", label: "Raised for Change" },
];

export const foundationWork = [
  {
    slug: "legacy",
    title: "Legacy",
    description: "Keeping Claudyo's memory alive through love, action and community support.",
    icon: "🦋",
  },
  {
    slug: "justice",
    title: "Justice",
    description: "Seeking justice for Claudyo and encouraging anyone with information to speak up.",
    icon: "⚖️",
  },
  {
    slug: "support",
    title: "Support",
    description: "Supporting young people and families through difficult times.",
    icon: "💙",
  },
  {
    slug: "community",
    title: "Community",
    description: "Bringing people together to create a safer, kinder future.",
    icon: "🤝",
  },
];

export const programs = foundationWork.map((item) => ({
  slug: item.slug,
  title: item.title,
  summary: item.description,
  description: item.description,
  image: "/images/logo/cb-foundation-logo.jpg",
  icon: item.icon,
  outcomes: ["Raise awareness", "Support families", "Create safer communities"],
}));

export const galleryImages = [
  {
    src: "https://crimestoppers-uk.org/getmedia/1d8e3981-ac90-4a4b-aa47-1c3594b32ce7/Claudyo-Lafayette-photo-1.png",
    alt: "Claudyo Lafayette portrait",
    category: "Legacy",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2024/07/claudyo-1-1.jpg",
    alt: "Claudyo Jauad Lafayette aged 17",
    category: "Legacy",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2025/07/18f533fc-1ed6-4db1-bdff-3c416dda387b.jpg",
    alt: "Claudyo's family at his grave",
    category: "Family",
  },
  {
    src: "https://www.camdennewjournal.co.uk/media/2024/07/Claudyos-mother-and-her-partner-at-a-memorial.jpg",
    alt: "Yzakia and Nuno at Claudyo's memorial",
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
    slug: "ampthill-estate-memorial",
    title: "Family and friends gather at Ampthill estate memorial",
    date: "2025-05-18",
    excerpt: "A community moment of remembrance, love and support for Claudyo's legacy.",
    image: "https://www.camdennewjournal.co.uk/media/2025/07/1947ce92-eca3-47fa-903e-e4932f9c5bb7.jpg",
  },
  {
    slug: "family-visit-grave",
    title: "Claudyo's family visit his grave on what would have been his 18th birthday",
    date: "2025-05-10",
    excerpt: "A deeply personal moment of remembrance and love from Claudyo's family.",
    image: "https://www.camdennewjournal.co.uk/media/2025/07/18f533fc-1ed6-4db1-bdff-3c416dda387b.jpg",
  },
  {
    slug: "anniversary-memorial",
    title: "Yzakia and Nuno return to the spot Claudyo died on last year's anniversary",
    date: "2025-05-02",
    excerpt: "A powerful reminder of the continuing call for justice and change.",
    image: "https://www.camdennewjournal.co.uk/media/2024/07/Claudyos-mother-and-her-partner-at-a-memorial.jpg",
  },
];

export const contactTypes = ["General contact", "Schools", "Media", "Volunteer", "Support request"];

export const heroImages = {
  logo: "/images/logo/cb-world-logo.jpg",
  claudyo: "https://crimestoppers-uk.org/getmedia/1d8e3981-ac90-4a4b-aa47-1c3594b32ce7/Claudyo-Lafayette-photo-1.png",
  claudyoPortrait: "https://crimestoppers-uk.org/getmedia/1d8e3981-ac90-4a4b-aa47-1c3594b32ce7/Claudyo-Lafayette-photo-1.png",
  memorial: "https://www.camdennewjournal.co.uk/media/2024/07/Claudyos-mother-and-her-partner-at-a-memorial.jpg",
  family: "https://www.camdennewjournal.co.uk/media/2025/07/18f533fc-1ed6-4db1-bdff-3c416dda387b.jpg",
};

export const missionCards = [
  {
    title: "Legacy",
    description: "Keeping Claudyo's memory alive through love and action.",
    icon: "🦋",
  },
  {
    title: "Justice",
    description: "Seeking justice for Claudyo and raising awareness.",
    icon: "⚖️",
  },
  {
    title: "Support",
    description: "Supporting young people and families through difficult times.",
    icon: "💙",
  },
  {
    title: "Community",
    description: "Bringing communities together to create a safer future.",
    icon: "🤝",
  },
];
