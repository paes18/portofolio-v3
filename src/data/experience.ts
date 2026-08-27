export interface ResponsibilityPillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TransferableSkill {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location: string;
  headline: string;
  introduction: string;
  philosophy: string;
  pillars: ResponsibilityPillar[];
  crossover: {
    leadership: string[];
    development: string[];
    sharedCore: string;
  };
  evolution: {
    before: { title: string; items: string[] };
    now: { title: string; items: string[] };
    next: { title: string; items: string[] };
  };
  transferableSkills: TransferableSkill[];
}

export const verifiedExperience: ExperienceData = {
  company: 'CV. Multazam / Gilo Water',
  role: 'Manager QC',
  period: '2024 — 2026',
  location: 'Indonesia',
  headline: 'NOT JUST CODE. I LEARNED TO LEAD.',
  introduction: 'Long before I started thinking about software systems, I was already learning how to manage real-world systems.',
  philosophy: 'Leadership isn\'t about being the loudest person in the room. It\'s about making sure the room keeps moving.',
  pillars: [
    {
      id: 'quality',
      number: '01',
      title: 'QUALITY',
      description: 'Maintaining rigorous quality standards, inspection procedures, and operational consistency.',
    },
    {
      id: 'operations',
      number: '02',
      title: 'OPERATIONS',
      description: 'Understanding how processes work in real environments and optimizing workflow logistics.',
    },
    {
      id: 'people',
      number: '03',
      title: 'PEOPLE',
      description: 'Working with and leading a team—directing daily operations with clear communication.',
    },
    {
      id: 'decisions',
      number: '04',
      title: 'DECISIONS',
      description: 'Handling operational problems in real time and making practical, accountable choices under pressure.',
    },
  ],
  crossover: {
    leadership: ['Communication', 'Clarity', 'Responsibility', 'Decision Making'],
    development: ['Architecture', 'Clarity', 'Debugging', 'Decision Making'],
    sharedCore: 'SYSTEM THINKING & PROBLEM SOLVING',
  },
  evolution: {
    before: {
      title: 'BEFORE (2024–2026)',
      items: ['Quality Control', 'Operations Management', 'Team Leadership'],
    },
    now: {
      title: 'NOW (2026)',
      items: ['Web Development', 'Software Architecture', 'Creative Technology'],
    },
    next: {
      title: 'NEXT',
      items: ['Full-Stack Engineering', 'Scalable Systems', 'Creative Engineering'],
    },
  },
  transferableSkills: [
    {
      id: 'skill-1',
      number: '01',
      title: 'Responsibility',
      description: 'Owning outcomes when problems occur and holding standards firm.',
    },
    {
      id: 'skill-2',
      number: '02',
      title: 'Communication',
      description: 'Translating high-level directives into clear, actionable team steps.',
    },
    {
      id: 'skill-3',
      number: '03',
      title: 'Decision Making',
      description: 'Evaluating options rapidly and acting with practical accountability.',
    },
    {
      id: 'skill-4',
      number: '04',
      title: 'Consistency',
      description: 'Executing processes repeatedly with meticulous attention to detail.',
    },
    {
      id: 'skill-5',
      number: '05',
      title: 'Leadership',
      description: 'Guiding people toward an operational goal without needing power dynamics.',
    },
  ],
};
