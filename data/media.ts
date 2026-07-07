export type GalleryMediaItem = {
  title: string;
  description: string;
  category: "Claudyo" | "Awareness" | "Community" | "Events" | "Music" | "Videos";
  type: "image" | "video";
  src: string;
  poster?: string;
};

export const galleryMedia: GalleryMediaItem[] = [
  {
    title: "Claudyo — Long Live His Legacy",
    description: "A calm, warm portrait for the homepage and gallery, remembering Claudyo with love and dignity.",
    category: "Claudyo",
    type: "image",
    src: "/images/gallery/claudyo-white-portrait.jpeg",
  },
  {
    title: "Claudyo — everyday memories",
    description: "A personal portrait showing the young man behind the legacy.",
    category: "Claudyo",
    type: "image",
    src: "/images/gallery/claudyo-hoodie-portrait.jpeg",
  },
  {
    title: "Family memories",
    description: "A treasured family moment that forms part of Claudyo’s story and the love surrounding him.",
    category: "Claudyo",
    type: "image",
    src: "/images/gallery/claudyo-family-suit.jpeg",
  },
  {
    title: "Bereaved Parents Month",
    description: "Recognising the pain carried by parents who have lost a child, and reminding people to be gentle with grieving families.",
    category: "Awareness",
    type: "image",
    src: "/images/gallery/bereaved-parents-month.jpeg",
  },
  {
    title: "Intro video for the foundation",
    description: "An introduction to Claudyo’s legacy, the foundation, and why this work matters.",
    category: "Videos",
    type: "video",
    src: "/videos/gallery/intro-video.mp4",
    poster: "/images/gallery/claudyo-white-portrait.jpeg",
  },
  {
    title: "Knife crime awareness and bleed control kits",
    description: "From an awareness event where Claudyo’s mum and Kaheylla spoke about the impact knife crime brings, why bleed control kits matter, and how we move forward to protect future generations while continuing Claudyo’s legacy despite grief.",
    category: "Events",
    type: "video",
    src: "/videos/gallery/med-kits-gallery.mp4",
    poster: "/images/gallery/bereaved-parents-month.jpeg",
  },
  {
    title: "Honouring him during awareness month",
    description: "A July awareness video recognising bereaved parents, grief, love and the need for communities to keep speaking up.",
    category: "Awareness",
    type: "video",
    src: "/videos/gallery/awareness-july-month.mp4",
    poster: "/images/gallery/bereaved-parents-month.jpeg",
  },
  {
    title: "Bereaved parents matter",
    description: "A video reminding people that grieving parents need kindness, patience and support.",
    category: "Awareness",
    type: "video",
    src: "/videos/gallery/bereaved-parents.mp4",
    poster: "/images/gallery/bereaved-parents-month.jpeg",
  },
  {
    title: "His voice, his music, his legacy",
    description: "Celebrating Claudyo’s life, his music, and the voice he left behind while using his story to raise awareness for young people.",
    category: "Music",
    type: "video",
    src: "/videos/gallery/b-man-gallery.mp4",
    poster: "/images/gallery/claudyo-white-portrait.jpeg",
  },
  {
    title: "Graduation memories and awareness",
    description: "A reminder to educate ourselves, young adults and children, and never judge a book by its cover.",
    category: "Awareness",
    type: "video",
    src: "/videos/gallery/whatsapp-video-102852.mp4",
    poster: "/images/gallery/claudyo-hoodie-portrait.jpeg",
  },
  {
    title: "Community awareness video",
    description: "A short awareness video for sharing Claudyo’s story and encouraging safer choices.",
    category: "Community",
    type: "video",
    src: "/videos/gallery/tiktok-post.mp4",
    poster: "/images/gallery/claudyo-hoodie-portrait.jpeg",
  },
  {
    title: "Legacy video",
    description: "A remembrance video keeping Claudyo’s name, story and legacy alive.",
    category: "Videos",
    type: "video",
    src: "/videos/gallery/whatsapp-video-103738.mp4",
    poster: "/images/gallery/claudyo-white-portrait.jpeg",
  },
  {
    title: "Awareness short",
    description: "A short awareness post created to reach young people and keep the conversation going.",
    category: "Videos",
    type: "video",
    src: "/videos/gallery/whatsapp-video-103824.mp4",
    poster: "/images/gallery/claudyo-white-portrait.jpeg",
  },
  {
    title: "Legacy continues",
    description: "A video honouring Claudyo and encouraging change for the next generation.",
    category: "Videos",
    type: "video",
    src: "/videos/gallery/whatsapp-video-104253.mp4",
    poster: "/images/gallery/claudyo-white-portrait.jpeg",
  },
];

export const anonymousFeedback = [
  {
    quote:
      "Hearing the story made me understand the true impact knife crime has on a whole family, not just one person.",
    label: "Event attendee",
  },
  {
    quote:
      "The talk was powerful and opened up a conversation that young people really need to hear.",
    label: "Community member",
  },
  {
    quote:
      "The bleed control kit awareness was something I will never forget. I did not realise how important it could be.",
    label: "Awareness session feedback",
  },
  {
    quote:
      "You can feel the love behind the foundation. Claudyo’s legacy is already helping people think differently.",
    label: "Supporter feedback",
  },
  {
    quote:
      "It reminded me not to judge young people by how they look, and to listen before making assumptions.",
    label: "Anonymous feedback",
  },
  {
    quote:
      "The way grief has been turned into action is inspiring. This work can make a real difference for future generations.",
    label: "Anonymous supporter",
  },
];
