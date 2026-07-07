export const siteConfig = {
  name: "CB’S WORLD Foundation Charity",
  tagline: "Long Live His Legacy",
  description:
    "Honouring Claudyo Jauad Lafayette by working to prevent knife crime, support families affected by violence, and create safer communities.",
  donationLink: "https://gofund.me/97c17c72b",
  reward: "£20,000",
  policeAppealUrl: "https://mipp.police.uk/operation/01MPS23V46-PO1",
  crimestoppersPhone: "0800 555 111",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Legacy", href: "/claudyos-legacy" },
  { label: "Justice", href: "/justice-for-claudyo" },
  { label: "Foundation", href: "/foundation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Legacy Wall", href: "/legacy-wall" },
  { label: "Feedback", href: "/feedback" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  logo: "/images/logo/cb-world-logo.jpg",
  claudyoPortrait: "/images/gallery/claudyo-white-portrait.jpeg",
  claudyoNews: "/images/gallery/claudyo-hoodie-portrait.jpeg",
  familyGrave: "https://www.camdennewjournal.co.uk/media/2025/07/18f533fc-1ed6-4db1-bdff-3c416dda387b.jpg",
  memorial: "https://www.camdennewjournal.co.uk/media/2024/07/Claudyos-mother-and-her-partner-at-a-memorial.jpg",
  estateMemorial: "https://www.camdennewjournal.co.uk/media/2025/07/1947ce92-eca3-47fa-903e-e4932f9c5bb7.jpg",
};

export const heroImages = images;

export const missionCards = [
  { title: "Legacy", icon: "🦋", text: "Keeping Claudyo's memory alive through love, action and community." },
  { title: "Justice", icon: "⚖️", text: "Sharing the official appeal and encouraging anyone with information to speak up." },
  { title: "Support", icon: "💙", text: "Standing with families, young people and communities affected by violence." },
  { title: "Community", icon: "🤝", text: "Working together to build safer, kinder futures for young people." },
];

export const impactStats = [
  { value: "£20,000", label: "Reward offered" },
  { value: "17", label: "Years loved" },
  { value: "Justice", label: "Campaign ongoing" },
  { value: "Every Day", label: "Legacy continues" },
];

export const galleryImages = [
  { src: images.claudyoPortrait, alt: "Claudyo Lafayette portrait", category: "Legacy" },
  { src: images.claudyoNews, alt: "Claudyo Jauad Lafayette", category: "Legacy" },
  { src: "/images/gallery/claudyo-family-suit.jpeg", alt: "Family memory", category: "Family" },
  { src: "/images/gallery/bereaved-parents-month.jpeg", alt: "Bereaved Parents Month awareness", category: "Awareness" },
  { src: images.familyGrave, alt: "Claudyo's family at his grave", category: "Family" },
  { src: images.memorial, alt: "Yzakia and Nuno at Claudyo's memorial", category: "Memorial" },
  { src: images.estateMemorial, alt: "Family and friends at Ampthill estate memorial", category: "Memorial" },
];

export const newsPosts = [
  {
    slug: "justice-for-claudyo-appeal",
    title: "Justice for Claudyo appeal continues",
    date: "2026-07-06",
    excerpt: "The foundation continues to share the official appeal and encourage anyone with information to come forward.",
    image: images.claudyoPortrait,
  },
  {
    slug: "legacy-wall-open",
    title: "Legacy Wall opens for messages",
    date: "2026-07-06",
    excerpt: "Supporters can now leave messages of remembrance and support through the Legacy Wall.",
    image: images.familyGrave,
  },
  {
    slug: "bereaved-parents-month",
    title: "Bereaved Parents Month awareness",
    date: "2026-07-07",
    excerpt: "July is recognised as National Bereaved Parents Month, reminding people to be gentle with grieving parents.",
    image: "/images/gallery/bereaved-parents-month.jpeg",
  },
];

export const contactTypes = [
  "General contact",
  "Schools",
  "Media",
  "Volunteer",
  "Support request",
];

export const donationLink = siteConfig.donationLink;
