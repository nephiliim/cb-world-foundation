export const donationLink = "https://gofund.me/97c17c72b";

export const siteConfig = {
  name: "CB's World Foundation",
  tagline: "Keeping Claudyo's Legacy Alive",
  description: "A legacy-led foundation tackling knife crime, supporting families, and creating hope through community action.",
  donationLink,
  reward: "£20,000",
  policeAppealUrl: "https://mipp.police.uk/operation/01MPS23V46-PO1",
  crimestoppersPhone: "0800 555 111",
};

export const missionCards = [
  { title: "Legacy", description: "Keeping Claudyo's memory alive through love and action.", text: "Keeping Claudyo's memory alive through love and action.", icon: "🦋" },
  { title: "Justice", description: "Seeking justice for Claudyo and raising awareness.", text: "Seeking justice for Claudyo and raising awareness.", icon: "⚖️" },
  { title: "Support", description: "Supporting young people and families through difficult times.", text: "Supporting young people and families through difficult times.", icon: "💙" },
  { title: "Community", description: "Bringing communities together to create a safer future.", text: "Bringing communities together to create a safer future.", icon: "🤝" },
];

export const impactStats = [
  { value: "£20k", label: "Reward appeal" },
  { value: "17", label: "Years loved" },
  { value: "4", label: "Core pillars" },
  { value: "1", label: "Legacy-led mission" },
];

export const foundationWork = [
  { slug: "knife-crime-prevention", title: "Knife crime prevention", description: "Education-led conversations with young people, schools, families and communities.", icon: "🕊️" },
  { slug: "school-talks", title: "School talks", description: "Honest sessions that help young people understand choices, consequences and hope.", icon: "🎓" },
  { slug: "bleed-control-kits", title: "Bleed control kits", description: "Advocacy and awareness around life-saving emergency equipment in public spaces.", icon: "❤️" },
  { slug: "bereavement-support", title: "Bereavement support", description: "Compassionate support for families navigating grief after traumatic loss.", icon: "💙" },
];

export const programs = foundationWork.map((item) => ({
  slug: item.slug,
  title: item.title,
  summary: item.description,
  description: item.description,
  image: "/images/logo/cb-world-logo.png",
  icon: item.icon,
  outcomes: ["Raise awareness", "Support families", "Create safer communities"],
}));
