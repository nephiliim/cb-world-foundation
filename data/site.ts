export const siteConfig = {
  name: "CB's World Foundation",
  shortName: "CB World",
  tagline: "Helping young people feel seen, supported, and ready for the future.",
  description:
    "CB's World Foundation is a community-first charity website focused on youth support, mentoring, events, and positive opportunities.",
  email: "hello@cbsworldfoundation.org",
  phone: "+44 0000 000000",
  location: "Coventry, United Kingdom",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#"
  }
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" }
];

export const impactStats = [
  { value: "250+", label: "young people supported" },
  { value: "40+", label: "community sessions" },
  { value: "15+", label: "local partners" },
  { value: "100%", label: "community focused" }
];

export const programs = [
  {
    slug: "youth-mentoring",
    title: "Youth mentoring",
    summary: "Guided support for young people who need confidence, direction, and consistency.",
    description:
      "Regular mentoring sessions that help young people build confidence, set goals, and stay consistent.",
    icon: "🤝",
    outcomes: ["Confidence building", "Goal setting", "Positive role models", "Accountability check-ins"]
  },
  {
    slug: "community-events",
    title: "Community events",
    summary: "Safe events that bring families, volunteers, and local organisations together.",
    description:
      "Safe events that bring families, volunteers, and local organisations together around positive change.",
    icon: "🎉",
    outcomes: ["Family engagement", "Community connection", "Positive activities", "Volunteer involvement"]
  },
  {
    slug: "skills-workshops",
    title: "Skills and workshops",
    summary: "Practical sessions for creativity, wellbeing, employability, and digital confidence.",
    description:
      "Practical workshops covering life skills, creativity, wellbeing, employability, and digital confidence.",
    icon: "🧠",
    outcomes: ["Life skills", "Digital confidence", "Creative expression", "Employability support"]
  }
];

export const values = [
  "Community before everything",
  "Support without judgement",
  "Opportunities that feel real",
  "Confidence through consistency"
];

export const newsPosts = [
  {
    slug: "foundation-launch-plan",
    title: "Building the first CB's World Foundation website",
    date: "2026-07-04",
    excerpt:
      "The new website gives the foundation a public home for programmes, updates, volunteering, donations, and future community stories."
  },
  {
    slug: "volunteer-callout",
    title: "Volunteer interest list now ready",
    date: "2026-07-04",
    excerpt:
      "Milestone 2 adds a proper contact flow so volunteers, sponsors, and community partners can register their interest."
  }
];

export const donationOptions = [
  { amount: "£10", text: "Supports session materials" },
  { amount: "£25", text: "Helps run a workshop" },
  { amount: "£50", text: "Supports outreach activity" },
  { amount: "Custom", text: "Sponsor a future project" }
];
