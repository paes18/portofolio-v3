export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  icon?: string;
}

export interface TechnicalDecision {
  question: string;
  choice: string;
  reason: string;
}

export interface ChallengeItem {
  problem: string;
  solution: string;
  learned: string;
}

export interface ThinkingStep {
  stage: 'PROBLEM' | 'QUESTION' | 'IDEA' | 'DECISION';
  text: string;
}

export interface ProcessStep {
  number: string;
  label: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  roleContext: string;
}

export interface CaseStudyData {
  context: {
    title: string;
    type: 'Personal' | 'Academic' | 'Experimental' | 'System Concept' | 'Production System';
    explanation: string;
  };
  problem: {
    headline: string;
    explanation: string;
  };
  thinking: ThinkingStep[];
  process: ProcessStep[];
  build: {
    technologies: TechStackItem[];
    decisions: TechnicalDecision[];
  };
  architecture?: {
    enabled: boolean;
    title: string;
    nodes: ArchitectureNode[];
  };
  challenges: ChallengeItem[];
  lesson: {
    quote: string;
    explanation: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  categorySlug: 'web-app' | 'system' | 'creative' | 'productivity';
  year: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  role: string;
  image?: string;
  gallery?: string[];
  accent: 'cyan' | 'sky' | 'indigo' | 'amber' | 'emerald' | 'violet' | 'rose';
  featured: boolean;
  status: 'Production' | 'Live System' | 'In Lab' | 'Completed Concept';
  caseStudy: CaseStudyData;
  links: {
    live?: string;
    github?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'reception-admin',
    slug: 'reception-admin',
    number: '01',
    title: 'CRM Hotel / Reception Admin',
    shortTitle: 'CRM Hotel System',
    category: 'Web Application / Enterprise Management',
    categorySlug: 'system',
    year: '2025–2026',
    tagline: 'Enterprise hotel reception & financial monitoring system built for real-time operations.',
    description: 'An enterprise hotel management application designed for front-desk reception, occupancy analytics, ADR & RevPAR financial metrics, and role-based permissions.',
    longDescription: 'CRM Hotel (Hotel Multazam) is a production-focused administration and financial monitoring system. Engineered to handle front-desk reception workflows, real-time room occupancy analytics, ADR (Average Daily Rate), RevPAR financial metrics, and role-based system administration.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Financial Analytics', 'REST API', 'Role Matrix'],
    role: 'Lead Developer & Architect',
    image: '/projects/reception-admin.png',
    accent: 'cyan',
    featured: true,
    status: 'In Lab',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Production System',
        explanation: 'Hotel front-desk environments require rapid operational data entry, instant room availability checks, and clear status indicators. Reception Admin was created to streamline check-in logs and prevent operational bottlenecks at front desks.',
      },
      problem: {
        headline: '“Managing operational information shouldn\'t feel like fighting the interface.”',
        explanation: 'Traditional reception software is often cluttered with nested menus and multi-click workflows. When guests are standing at reception, staff need zero-latency search and instant status updates.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Front-desk staff face cluttered screens and slow multi-click check-in steps.' },
        { stage: 'QUESTION', text: 'How can we minimize clicks and make room status instantly legible at a glance?' },
        { stage: 'IDEA', text: 'Create a high-contrast tabular dashboard with instant key-driven filters.' },
        { stage: 'DECISION', text: 'Build a focused single-page React interface with keyboard-optimized state handlers.' },
      ],
      process: [
        { number: '01', label: 'WORKFLOW MAPPING', description: 'Mapped daily check-in, check-out, and room cleaning log lifecycle stages.' },
        { number: '02', label: 'INTERFACE STRUCTURE', description: 'Designed high-visibility status chips (Occupied, Cleaning, Available) for instant reading.' },
        { number: '03', label: 'STATE & API BUILD', description: 'Engineered type-safe state interfaces using TypeScript for room and guest records.' },
        { number: '04', label: 'TEST & REFINE', description: 'Tested keyboard navigation speed and search latency under rapid state updates.' },
      ],
      build: {
        technologies: [
          { name: 'React', roleContext: 'UI component architecture & reactive layout' },
          { name: 'TypeScript', roleContext: 'Strict data contract interfaces for room & guest models' },
          { name: 'REST API', roleContext: 'Asynchronous fetch handlers for data persistence' },
          { name: 'Vanilla CSS / Tailwind', roleContext: 'High-contrast dark design token system' },
        ],
        decisions: [
          {
            question: 'WHY REACT & TYPESCRIPT?',
            choice: 'Type-safe React Component Architecture',
            reason: 'Explicit TypeScript interfaces prevented invalid room status states and made refactoring predictable.',
          },
          {
            question: 'WHY TABULAR LAYOUT OVER GRID?',
            choice: 'Dense Status Table View',
            reason: 'Tabular data layouts allow reception staff to scan 30+ room states simultaneously without scrolling.',
          },
        ],
      },
      architecture: {
        enabled: true,
        title: 'SYSTEM DATA FLOW',
        nodes: [
          { id: 'client', label: 'FRONT-DESK UI', role: 'React / TS State' },
          { id: 'state', label: 'STATE ENGINE', role: 'Filter & Search Store' },
          { id: 'api', label: 'API GATEWAY', role: 'REST Handlers' },
          { id: 'database', label: 'DATA PERSISTENCE', role: 'Room & Guest DB' },
        ],
      },
      challenges: [
        {
          problem: 'Handling frequent room status updates without re-rendering the entire room table.',
          solution: 'Isolated table row state updates using React memoization and modular row item components.',
          learned: 'Optimizing render cycles is crucial when building high-density management tools.',
        },
      ],
      lesson: {
        quote: '“Good software for operations doesn\'t try to be flashy—it tries to be invisible and lightning fast.”',
        explanation: 'Building Reception Admin taught Faiz that user interface clarity and operational speed matter far more to real users than ornamental visual bloat.',
      },
    },
    links: {
      live: 'https://hotel-multazam.vercel.app/',
      github: 'https://github.com/paes18',
    },
  },
  {
    id: 'portfolio',
    slug: 'portfolio',
    number: '02',
    title: 'Faiz / PAES Universe',
    shortTitle: 'Personal Portfolio',
    category: 'Personal / Creative Technology',
    categorySlug: 'creative',
    year: '2026',
    tagline: 'A living playground where code architecture, 3D WebGL scenes, and editorial typography collide.',
    description: 'Faiz\'s personal portfolio experience combining web development, visual design, interaction, motion, and 3D experimentation.',
    longDescription: 'This portfolio represents Faiz\'s digital playground and personal identity. Built with React, TypeScript, Three.js/WebGL, and custom motion components, it serves as a live testament to his technical discipline and creative direction.',
    technologies: ['React', 'TypeScript', 'Three.js / WebGL', 'Framer Motion', 'Tailwind CSS'],
    role: 'Creative Developer & Lead Architect',
    accent: 'sky',
    featured: true,
    status: 'Production',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Personal',
        explanation: 'Standard template portfolios rarely capture the personality or technical ambition of a young developer. I built this portfolio as an interactive digital artifact to showcase visual craft, 3D graphics, and modular engineering.',
      },
      problem: {
        headline: '“Most developer portfolios feel like static digital resumes with zero identity.”',
        explanation: 'A great portfolio should not just list skills—it should demonstrate them live in the browser through fluid motion, custom cursors, and responsive 3D environments.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Generic template portfolios lack visual character and interactivity.' },
        { stage: 'QUESTION', text: 'How can code architecture, 3D graphics, and editorial typography exist in harmony?' },
        { stage: 'IDEA', text: 'Build a dark high-tech design system centered around an interactive 3D Genesis Core.' },
        { stage: 'DECISION', text: 'Use React Three Fiber with custom GLSL shaders and Framer Motion spring physics.' },
      ],
      process: [
        { number: '01', label: 'DESIGN SYSTEM TOKENS', description: 'Established CSS color variables, editorial font scales, and glassmorphism panel styles.' },
        { number: '02', label: '3D SCENE ARCHITECTURE', description: 'Crafted the Genesis Core 3D geometry in Three.js with pointer tracking and hover reactions.' },
        { number: '03', label: 'MOTION & INTERACTION', description: 'Built custom cursor hooks, scroll-linked typography transforms, and reveal animations.' },
        { number: '04', label: 'PERFORMANCE TUNING', description: 'Implemented reduced-motion fallbacks, canvas decoupling, and fast lazy imports.' },
      ],
      build: {
        technologies: [
          { name: 'React 19', roleContext: 'Component model & concurrent state management' },
          { name: 'TypeScript', roleContext: 'Strict type safety across design tokens & data files' },
          { name: 'Three.js / React Three Fiber', roleContext: 'GPU-accelerated 3D WebGL Genesis Core scene' },
          { name: 'Framer Motion', roleContext: 'Physics-based micro-interactions & layout reveals' },
        ],
        decisions: [
          {
            question: 'WHY THREE.JS / WEBGL?',
            choice: 'GPU-Accelerated Canvas Rendering',
            reason: 'Static 2D images cannot deliver the tactile, alive feeling of an interactive 3D artifact reacting to cursor physics.',
          },
          {
            question: 'WHY CUSTOM DESIGN SYSTEM OVER UI LIBRARIES?',
            choice: 'Bespoke CSS Token Architecture',
            reason: 'Building custom CSS tokens guaranteed 100% control over glass panel borders, dark mode glow, and editorial font scale.',
          },
        ],
      },
      architecture: {
        enabled: true,
        title: 'PORTFOLIO ENGINE PIPELINE',
        nodes: [
          { id: 'dom', label: 'REACT APP DOM', role: 'Layout & Typography' },
          { id: 'canvas', label: 'R3F / WEBGL SCENE', role: 'Genesis 3D Core' },
          { id: 'motion', label: 'FRAMER MOTION', role: 'Physics & Scroll Hooks' },
          { id: 'cursor', label: 'TACTILE CURSOR', role: 'Contextual Pointer State' },
        ],
      },
      challenges: [
        {
          problem: 'Preventing 3D WebGL render loops from causing layout stutter on mobile devices.',
          solution: 'Implemented viewport intersection observers to pause 3D frame rendering when the canvas scrolls out of view.',
          learned: 'Resource scheduling is critical when mixing 3D graphics with dense DOM layouts.',
        },
      ],
      lesson: {
        quote: '“Code and design shouldn\'t be separated. The best digital experiences happen when both speak the same language.”',
        explanation: 'Building this portfolio proved that technical discipline and creative artistry reinforce each other when engineered with care.',
      },
    },
    links: {
      live: 'https://paes18.dev',
      github: 'https://github.com/paes18/portofolio-v3',
    },
  },
  {
    id: 'nexora',
    slug: 'nexora',
    number: '03',
    title: 'Nexora System',
    shortTitle: 'Nexora',
    category: 'Academic / Management System',
    categorySlug: 'system',
    year: '2025',
    tagline: 'A structured academic management concept focused on data modeling and interface clarity.',
    description: 'A system concept involving academic and management requirements with database schema design and structured user access roles.',
    longDescription: 'Nexora is an academic management system conceptualized to handle course scheduling, student records, and administrative data flows with strict schema validation and clear relational architecture.',
    technologies: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'SQL Schemas'],
    role: 'Frontend & Database Architect',
    accent: 'indigo',
    featured: true,
    status: 'Completed Concept',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Academic',
        explanation: 'Nexora was developed as a conceptual academic management platform to explore relational database normalization, multi-role user authentication, and enterprise software architecture.',
      },
      problem: {
        headline: '“Academic data structures quickly turn chaotic without strict schema relationships.”',
        explanation: 'Managing student enrollments, course prerequisites, and administrative permissions requires a clear relational model and clean data representation.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Complex academic entity relationships cause data duplication if unnormalized.' },
        { stage: 'QUESTION', text: 'How can database entity relationships be mapped cleanly to frontend React views?' },
        { stage: 'IDEA', text: 'Design a normalized SQL schema paired with type-safe TypeScript interfaces.' },
        { stage: 'DECISION', text: 'Build role-gated UI dashboards (Admin, Instructor, Student) with modular tables.' },
      ],
      process: [
        { number: '01', label: 'ERD DATA MODELING', description: 'Designed entity relationship diagrams for Users, Courses, Departments, and Enrollments.' },
        { number: '02', label: 'SQL SCHEMA BUILD', description: 'Wrote normalized SQL migration scripts with foreign key constraints.' },
        { number: '03', label: 'UI DASHBOARD LAYOUT', description: 'Created role-based UI views with contextual filters and course enrollment forms.' },
        { number: '04', label: 'SCHEMA VALIDATION', description: 'Enforced type boundaries from backend database models up to React props.' },
      ],
      build: {
        technologies: [
          { name: 'React & TypeScript', roleContext: 'Role-gated dashboard views & type interfaces' },
          { name: 'PostgreSQL / SQL', roleContext: 'Normalized relational tables & foreign key constraints' },
          { name: 'Node.js / Express', roleContext: 'REST API service layer for record operations' },
        ],
        decisions: [
          {
            question: 'WHY RELATIONAL SQL OVER NO-SQL?',
            choice: 'PostgreSQL Relational Engine',
            reason: 'Academic records require strict foreign key constraints between courses, users, and grades.',
          },
        ],
      },
      architecture: {
        enabled: true,
        title: 'RELATIONAL ARCHITECTURE',
        nodes: [
          { id: 'react', label: 'ROLE DASHBOARD UI', role: 'React / TS' },
          { id: 'express', label: 'EXPRESS REST API', role: 'Auth & Validation' },
          { id: 'sql', label: 'POSTGRESQL DB', role: 'Relational Entities' },
        ],
      },
      challenges: [
        {
          problem: 'Structuring clean UI views for multi-table relational data queries.',
          solution: 'Designed reusable data table components with column-based sorting and pagination controls.',
          learned: 'Database schema normalization makes frontend state management significantly cleaner.',
        },
      ],
      lesson: {
        quote: '“Clear architecture starts at the data layer. When database relationships are clean, UI development becomes effortless.”',
        explanation: 'Working on Nexora reinforced the importance of planning data schemas before writing user interface code.',
      },
    },
    links: {
      github: 'https://github.com/paes18',
    },
  },
  {
    id: 'weather-app',
    slug: 'weather-app',
    number: '04',
    title: 'Weather App',
    shortTitle: 'Weather App',
    category: 'Web Application / API',
    categorySlug: 'web-app',
    year: '2025',
    tagline: 'Dynamic atmosphere engine driven by real-time weather API parameters.',
    description: 'A weather application using external weather APIs with adaptive visual themes that react to local forecast conditions.',
    longDescription: 'Weather App connects to live forecast APIs to deliver real-time meteorological data paired with responsive ambient gradients and weather-specific iconography.',
    technologies: ['JavaScript / React', 'OpenWeather API', 'CSS Gradients', 'Async Data'],
    role: 'Frontend Developer',
    image: '/projects/weather-app.png',
    accent: 'amber',
    featured: false,
    status: 'Production',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Experimental',
        explanation: 'Built to explore asynchronous REST API consumption, geocoding location services, and condition-driven dynamic visual atmosphere themes.',
      },
      problem: {
        headline: '“Weather data is numbers—weather experiences should be atmospheric.”',
        explanation: 'Most weather apps show static text numbers. A weather application should visually reflect temperature, cloudiness, and rainfall through dynamic UI elements.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Static weather apps feel cold and disconnected from real atmosphere.' },
        { stage: 'QUESTION', text: 'How can API data parameters automatically transform the UI color spectrum?' },
        { stage: 'IDEA', text: 'Map API condition codes (Clear, Rain, Snow, Clouds) to dynamic CSS gradient tokens.' },
        { stage: 'DECISION', text: 'Build an ambient weather widget with city search and 5-day forecast cards.' },
      ],
      process: [
        { number: '01', label: 'API INTEGRATION', description: 'Connected OpenWeather API endpoints for current conditions and hourly forecasts.' },
        { number: '02', label: 'ATMOSPHERE MAPPING', description: 'Created condition-to-color mapping utilities for background atmosphere transitions.' },
        { number: '03', label: 'LOCATION GEOCODING', description: 'Implemented browser navigator geolocation fallback with manual search entry.' },
      ],
      build: {
        technologies: [
          { name: 'React / JS', roleContext: 'Async state management & UI components' },
          { name: 'OpenWeather API', roleContext: 'Real-time forecast & meteorological data payload' },
          { name: 'CSS Gradients', roleContext: 'Condition-adaptive background atmosphere transitions' },
        ],
        decisions: [
          {
            question: 'WHY DYNAMIC CSS GRADIENTS?',
            choice: 'CSS Variable Theme Mapping',
            reason: 'Modifying CSS custom variables on API response produced smooth visual shifts without downloading heavy image backgrounds.',
          },
        ],
      },
      challenges: [
        {
          problem: 'Handling slow network API responses and location permission rejections gracefully.',
          solution: 'Added skeleton loader states and fallback default location coordinates (Jakarta, ID).',
          learned: 'Always build graceful fallbacks for external network dependencies.',
        },
      ],
      lesson: {
        quote: '“Connecting code to external data becomes exciting when data directly drives visual atmosphere.”',
        explanation: 'Weather App taught Faiz how to translate raw JSON payloads into responsive visual feedback.',
      },
    },
    links: {
      live: 'https://weather-app-v2-nine-eosin.vercel.app/',
      github: 'https://github.com/paes18',
    },
  },
  {
    id: 'money-tracker',
    slug: 'money-tracker',
    number: '05',
    title: 'Money Tracker',
    shortTitle: 'Money Tracker',
    category: 'Productivity / Finance',
    categorySlug: 'productivity',
    year: '2025',
    tagline: 'Minimalist financial log designed for fast daily entry and clear visual summaries.',
    description: 'A personal finance tracking application for recording income, expenses, and managing daily financial activity.',
    longDescription: 'Money Tracker provides a streamlined interface for tracking daily transactions, categorizing spending, and visualizing budget breakdowns over time.',
    technologies: ['React', 'TypeScript', 'Chart.js / Recharts', 'Local Storage'],
    role: 'Web Developer',
    image: '/projects/money-tracker.png',
    accent: 'emerald',
    featured: false,
    status: 'Production',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Personal',
        explanation: 'Created to solve a personal pain point: traditional finance apps were too complex for quick daily expense logging.',
      },
      problem: {
        headline: '“If logging an expense takes more than 5 seconds, people stop doing it.”',
        explanation: 'Financial trackers often fail because transaction entry forms require too many steps. Speed and category clarity are paramount.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Complex budget apps discourage daily transaction entry.' },
        { stage: 'QUESTION', text: 'How fast can an expense logging flow be engineered?' },
        { stage: 'IDEA', text: 'Build a 2-click transaction entry bar paired with instant visual breakdown charts.' },
        { stage: 'DECISION', text: 'Use client-side storage for instant load times and zero network latency.' },
      ],
      process: [
        { number: '01', label: 'UI REDUCTION', description: 'Eliminated unnecessary fields, keeping only Amount, Category, and Note.' },
        { number: '02', label: 'DATA VISUALIZATION', description: 'Integrated bar & pie charts for monthly category expense distribution.' },
        { number: '03', label: 'PERSISTENCE', description: 'Implemented IndexedDB / localStorage persistence with JSON export options.' },
      ],
      build: {
        technologies: [
          { name: 'React & TS', roleContext: 'Transaction model state & fast entry form' },
          { name: 'Recharts', roleContext: 'Client-side financial breakdown graphs' },
          { name: 'Local Storage', roleContext: 'Instant offline data persistence' },
        ],
        decisions: [
          {
            question: 'WHY LOCAL STORAGE FIRST?',
            choice: 'Offline-First Client Storage',
            reason: 'Zero network requests mean instant app open speeds and complete privacy for personal financial logs.',
          },
        ],
      },
      challenges: [
        {
          problem: 'Formatting currency values and calculating category totals accurately without performance lag.',
          solution: 'Used JavaScript Intl.NumberFormat and memoized category aggregation computations.',
          learned: 'Small UI details like currency formatting make productivity tools feel professional.',
        },
      ],
      lesson: {
        quote: '“Friction kills productivity apps. Reducing steps is the best feature you can build.”',
        explanation: 'Money Tracker proved that removing friction leads to consistent daily app usage.',
      },
    },
    links: {
      live: 'https://money-tracker-v2-murex.vercel.app/',
      github: 'https://github.com/paes18',
    },
  },
  {
    id: 'workout-tracker',
    slug: 'workout-tracker',
    number: '06',
    title: 'FZ Sports',
    shortTitle: 'FZ Sports',
    category: 'Health / Workout Schedule',
    categorySlug: 'productivity',
    year: '2025',
    tagline: 'Simple workout schedule builder with daily streak tracking and training quotes.',
    description: 'A workout tracking application designed to help build sports schedules, log workout streaks, and track physical progress.',
    longDescription: 'FZ Sports allows users to build custom workout schedules, track daily training streaks, and maintain personal fitness discipline.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    role: 'Web Developer',
    image: '/projects/workout-tracker.png',
    accent: 'violet',
    featured: false,
    status: 'Production',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Personal',
        explanation: 'Built to track fitness training sessions, weight progression, and workout set history without needing clumsy notebook notes.',
      },
      problem: {
        headline: '“Progressive overload requires accurate set and repetition tracking between gym intervals.”',
        explanation: 'Gym environments demand large tap targets and quick input fields that can be operated easily between workout sets.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Small UI inputs are hard to use during active gym workouts.' },
        { stage: 'QUESTION', text: 'How can set/rep logging be optimized for fast mobile touch interaction?' },
        { stage: 'IDEA', text: 'Design large numerical stepper buttons and an automated rest interval timer.' },
        { stage: 'DECISION', text: 'Build a mobile-first responsive log interface.' },
      ],
      process: [
        { number: '01', label: 'MOBILE TOUCH UI', description: 'Designed large button components optimized for single-thumb mobile operation.' },
        { number: '02', label: 'ROUTINE SYSTEM', description: 'Structured exercise categories (Push, Pull, Legs) with custom weight/rep fields.' },
        { number: '03', label: 'PROGRESS METRICS', description: 'Calculated total training volume and set history trends over time.' },
      ],
      build: {
        technologies: [
          { name: 'React', roleContext: 'Interactive workout session state & step timer' },
          { name: 'TypeScript', roleContext: 'Workout, Set, and Exercise data model interfaces' },
          { name: 'Tailwind CSS', roleContext: 'Mobile-first high-contrast touch layouts' },
        ],
        decisions: [
          {
            question: 'WHY MOBILE-FIRST FOCUS?',
            choice: 'Touch-Optimized Steppers',
            reason: 'Workout tracking happens 100% on mobile devices during gym training sessions.',
          },
        ],
      },
      challenges: [
        {
          problem: 'Managing countdown rest timer state when switching between exercise views.',
          solution: 'Lifted timer state to a global context provider so background countdown continues uninterrupted.',
          learned: 'State lifting is essential when background countdown timers need to persist across UI screens.',
        },
      ],
      lesson: {
        quote: '“Designing for specific user physical contexts changes how you think about touch targets and layout spacing.”',
        explanation: 'Building Workout Tracker taught Faiz how physical environment context dictates UI design choices.',
      },
    },
    links: {
      live: 'https://fz-sports-bice.vercel.app/',
      github: 'https://github.com/paes18',
    },
  },
  {
    id: 'daily-moodie',
    slug: 'daily-moodie',
    number: '07',
    title: 'Moodie',
    shortTitle: 'Moodie',
    category: 'Personal / Mood Journal',
    categorySlug: 'creative',
    year: '2025',
    tagline: 'Daily space for journaling thoughts, tracking moods, and companion stats.',
    description: 'A daily space application for writing personal journal entries, recording mood states, and tracking companion level focus.',
    longDescription: 'Moodie combines intuitive mood logging with personal journal spaces, companion XP stats, and reflection memories.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Local Persistence'],
    role: 'Developer & UI Designer',
    image: '/projects/daily-moodie.png',
    accent: 'rose',
    featured: false,
    status: 'Production',
    caseStudy: {
      context: {
        title: 'WHY I BUILT THIS',
        type: 'Personal',
        explanation: 'Created as a creative side project exploring mood spectrum color shifts, micro-animations, and personal journaling.',
      },
      problem: {
        headline: '“Daily mood check-ins should feel expressive and calming, not corporate.”',
        explanation: 'Mood logs need a warm, expressive aesthetic that encourages daily reflection without feeling like a clinical questionnaire.',
      },
      thinking: [
        { stage: 'PROBLEM', text: 'Clinical journaling apps feel cold and uninspiring.' },
        { stage: 'QUESTION', text: 'How can color theory and micro-animations make daily check-ins enjoyable?' },
        { stage: 'IDEA', text: 'Create an expressive 5-level mood spectrum selector with dynamic ambient background shifts.' },
        { stage: 'DECISION', text: 'Pair mood spectrum selection with short reflection note prompts.' },
      ],
      process: [
        { number: '01', label: 'SPECTRUM DESIGN', description: 'Curated 5 distinct mood spectrum color gradients (Calm, Happy, Neutral, Anxious, Low).' },
        { number: '02', label: 'JOURNAL UI', description: 'Built a clean text reflection input area with monthly calendar heat maps.' },
        { number: '03', label: 'MICRO-ANIMATIONS', description: 'Added gentle SVG morph animations reacting to selected mood states.' },
      ],
      build: {
        technologies: [
          { name: 'React', roleContext: 'Mood state selection & journal log components' },
          { name: 'CSS Animations', roleContext: 'Gentle mood spectrum transition effects' },
          { name: 'Local Storage', roleContext: 'Private local journal persistence' },
        ],
        decisions: [
          {
            question: 'WHY DYNAMIC MOOD GRADIENTS?',
            choice: 'Haptic & Visual Feedback Loop',
            reason: 'Immediate visual feedback reinforces emotional reflection when logging daily mood states.',
          },
        ],
      },
      challenges: [
        {
          problem: 'Balancing playful expression with a clean, mature UI that remains readable.',
          solution: 'Used muted HSL gradient tones and sleek typography rather than overly cartoonish icons.',
          learned: 'Playfulness in UI design works best when anchored by strong typography and subtle color palettes.',
        },
      ],
      lesson: {
        quote: '“Software can evoke emotion. Small details in color and motion turn routine tasks into moments of delight.”',
        explanation: 'Daily Moodie showed Faiz how subtle visual craft can transform a simple utility into a joyful user experience.',
      },
    },
    links: {
      live: 'https://moodie-rho.vercel.app/today',
      github: 'https://github.com/paes18',
    },
  },
];
