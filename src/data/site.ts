export interface SocialLink {
  label: string;
  url: string;
  iconName: string;
}

export interface TraitItem {
  id: string;
  title: string;
  description: string;
}

export interface HobbyGalleryItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImage?: string;
  badge: string;
  accent: 'emerald' | 'sky' | 'indigo' | 'amber';
}

export interface SiteIdentity {
  name: string;
  fullName: string;
  nickname: string;
  knownAs: string;
  handle: string;
  role: string;
  focus: string;
  location: string;
  basedIn: string;
  age: number;
  tagline: string;
  shortBio: string;
  fullBio: string;
  coreStatement: string;
  coreStatementEn: string;
  email: string;
  status: string;
  socials: SocialLink[];
  traits: TraitItem[];
  duality: {
    technical: string[];
    creative: string[];
  };
  currently: string[];
  philosophy: string[];
  likes: string[];
  hobbies: string[];
  hobbyGalleries: HobbyGalleryItem[];
  leadershipTeaser: {
    headline: string;
    role: string;
    company: string;
    period: string;
    summary: string;
  };
}

export const siteData: SiteIdentity = {
  name: 'Faiz',
  fullName: 'FAIZ PATIOGI KITTA',
  nickname: 'PAES',
  knownAs: 'PAES',
  handle: 'PAES18',
  role: 'WEB DEVELOPER',
  focus: 'WEB / CREATIVE TECHNOLOGY',
  location: 'Indonesia',
  basedIn: 'INDONESIA',
  age: 19,
  tagline: 'Crafting high-performance digital products & creative web experiences.',
  shortBio: 'Young developer specializing in React, TypeScript, and modern creative web systems with a focus on problem-solving, motion, and clean code.',
  fullBio: `Faiz is a 19-year-old developer based in Indonesia who loves taking raw ideas and turning them into interactive digital products. From writing clean TypeScript to experimenting with 3D canvas and AI tools, he is obsessed with the sweet spot where engineering meets visual design.`,
  coreStatement: 'Gue suka bikin sesuatu yang awalnya cuma ide sampai akhirnya beneran bisa dipakai.',
  coreStatementEn: 'I love turning things that start as raw ideas into products that actually work.',
  email: 'faiztio28@gmail.com',
  status: 'Open to Select Opportunities & Collaborations',
  socials: [
    { label: 'GitHub', url: 'https://github.com/paes18', iconName: 'Github' },
    { label: 'Instagram', url: 'https://instagram.com/fzz1_8', iconName: 'Instagram' },
    { label: 'TikTok', url: 'https://tiktok.com/@silentera919', iconName: 'TikTok' },
  ],
  traits: [
    {
      id: '01',
      title: 'AMBITIOUS',
      description: 'Always looking for the next thing to learn, build, or improve—constantly pushing past personal limits.',
    },
    {
      id: '02',
      title: 'CREATIVE',
      description: 'Interested in the space where code, design, interaction, and ideas meet to create memorable user experiences.',
    },
    {
      id: '03',
      title: 'LEADER',
      description: 'Experienced in managing people and operations, not just working behind a screen.',
    },
  ],
  duality: {
    technical: [
      'Development',
      'Problem Solving',
      'Databases',
      'APIs',
      'Architecture',
      'Debugging',
    ],
    creative: [
      'UI Design',
      'Visual Design',
      '3D Elements',
      'Motion & Dynamics',
      'Interaction Design',
      'AI Experimentation',
    ],
  },
  currently: [
    'learning React',
    'diving deeper into TypeScript',
    'experimenting with creative web',
    'building personal projects',
    'figuring out how to make the next thing better',
  ],
  philosophy: ['BUILD', 'BREAK', 'LEARN', 'FIX', 'REPEAT'],
  likes: ['technology', 'coding', 'running', 'mancing', 'gaming (Mobile Legends)', 'lo-fi & chill music'],
  hobbies: ['long-distance running (20K PR)', 'competitive gaming (Mythical Immortal 103★)', 'mancing (focus & patience)', 'coding with chill music'],
  hobbyGalleries: [
    {
      id: 'running',
      title: 'Long-Distance Running',
      category: 'Endurance & Discipline',
      tagline: 'Personal Record: 20.13 KM Morning Run',
      description: 'Building mental stamina and physical resilience through long-distance morning runs in Tirtohargo, Yogyakarta.',
      image: '/hobbies/strava-20k.png',
      secondaryImage: '/hobbies/running-outdoor.png',
      badge: 'STRAVA 20.13 KM PR',
      accent: 'amber',
    },
    {
      id: 'gaming',
      title: 'Competitive Gaming',
      category: 'Focus & High Pressure',
      tagline: 'Mythical Immortal 103★ Rank & MVP Gusion Match',
      description: 'Sharpening split-second decision making, team coordination, and strategic focus under intense competitive pressure.',
      image: '/hobbies/gaming-immortal.png',
      secondaryImage: '/hobbies/gaming-mvp.png',
      badge: 'MYTHICAL IMMORTAL 103★',
      accent: 'sky',
    },
    {
      id: 'coding-music',
      title: 'Coding & Chill Music',
      tagline: 'Late Night Flow State with Lo-Fi Beats',
      category: 'Creative Flow State',
      description: 'Deep late-night development sessions on ThinkPad paired with headphones and relaxed, uninterrupted music playlists.',
      image: '/hobbies/coding-setup.png',
      secondaryImage: '/hobbies/chill-music.png',
      badge: 'WORKSTATION FLOW',
      accent: 'indigo',
    },
    {
      id: 'fishing',
      title: 'Mancing / Fishing',
      category: 'Patience & Observation',
      tagline: 'Unplugging & Focus in Nature',
      description: 'Taking time out in nature to recharge, observe quiet details, and practice patience away from digital screens.',
      image: '/hobbies/fishing-1.png',
      secondaryImage: '/hobbies/fishing-2.png',
      badge: 'OUTDOOR FOCUS',
      accent: 'emerald',
    },
  ],
  leadershipTeaser: {
    headline: "Turns out, I don't only build things with code.",
    role: 'Manager QC',
    company: 'CV. Multazam / Gilo Water',
    period: '2024–2026',
    summary: 'Managing quality operations and people taught Faiz a different kind of problem solving—operational discipline, system thinking, and leadership under pressure.',
  },
};
