export interface TechnologyItem {
  id: string;
  name: string;
  category: 'core' | 'backend' | 'creative' | 'tools' | 'learning';
  categoryLabel: string;
  context: string;
  relatedProjects: string[];
  status: 'ACTIVE FOCUS' | 'BUILDING WITH' | 'EXPERIMENTING WITH' | 'WORKFLOW TOOL';
  accent: 'sky' | 'indigo' | 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose';
  connections: string[];
}

export const techUniverseData: TechnologyItem[] = [
  // CORE WEB
  {
    id: 'html',
    name: 'HTML5',
    category: 'core',
    categoryLabel: 'CORE WEB',
    context: 'Semantic markup, accessibility ARIA landmarks, and document structure.',
    relatedProjects: ['Reception Admin', 'Portfolio', 'Weather App'],
    status: 'BUILDING WITH',
    accent: 'amber',
    connections: ['css', 'js', 'react'],
  },
  {
    id: 'css',
    name: 'CSS3 / Tailwind',
    category: 'core',
    categoryLabel: 'CORE WEB',
    context: 'Design token architecture, fluid typography clamp(), and responsive layout grids.',
    relatedProjects: ['Portfolio', 'Reception Admin', 'Workout Tracker'],
    status: 'BUILDING WITH',
    accent: 'sky',
    connections: ['html', 'js', 'react'],
  },
  {
    id: 'js',
    name: 'JavaScript (ES6+)',
    category: 'core',
    categoryLabel: 'CORE WEB',
    context: 'Async/await handlers, array pipelines, DOM events, and object manipulation.',
    relatedProjects: ['Weather App', 'Daily Moodie', 'Money Tracker'],
    status: 'BUILDING WITH',
    accent: 'amber',
    connections: ['html', 'css', 'react', 'typescript'],
  },
  {
    id: 'react',
    name: 'React',
    category: 'core',
    categoryLabel: 'CORE WEB',
    context: 'Component architecture, custom hooks, state lifecycles, and UI view flows.',
    relatedProjects: ['Portfolio', 'Reception Admin', 'Nexora System', 'Weather App', 'Money Tracker', 'Workout Tracker', 'Daily Moodie'],
    status: 'ACTIVE FOCUS',
    accent: 'sky',
    connections: ['js', 'typescript', 'threejs', 'framer-motion'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'core',
    categoryLabel: 'CORE WEB',
    context: 'Type contracts, generics, interface modeling, and strict error prevention.',
    relatedProjects: ['Portfolio', 'Reception Admin', 'Nexora System', 'Money Tracker', 'Workout Tracker'],
    status: 'ACTIVE FOCUS',
    accent: 'sky',
    connections: ['react', 'js', 'sql'],
  },

  // BACKEND / DATA
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    categoryLabel: 'BACKEND / DATA',
    context: 'Data processing scripts, automation utilities, and backend logic prototyping.',
    relatedProjects: ['Nexora System'],
    status: 'BUILDING WITH',
    accent: 'indigo',
    connections: ['flask', 'sql'],
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'backend',
    categoryLabel: 'BACKEND / DATA',
    context: 'Lightweight REST API endpoints and HTTP route dispatchers.',
    relatedProjects: ['Nexora System'],
    status: 'BUILDING WITH',
    accent: 'indigo',
    connections: ['python', 'sql'],
  },
  {
    id: 'sql',
    name: 'SQL / Databases',
    category: 'backend',
    categoryLabel: 'BACKEND / DATA',
    context: 'Relational data modeling, table normalization, and foreign key relationships.',
    relatedProjects: ['Nexora System', 'Reception Admin'],
    status: 'BUILDING WITH',
    accent: 'cyan',
    connections: ['python', 'flask', 'typescript'],
  },

  // CREATIVE TECHNOLOGY
  {
    id: 'threejs',
    name: 'Three.js / WebGL',
    category: 'creative',
    categoryLabel: 'CREATIVE TECHNOLOGY',
    context: 'GPU-accelerated 3D canvas scenes, lighting, mesh geometries, and camera controls.',
    relatedProjects: ['Portfolio (Genesis Core)'],
    status: 'EXPERIMENTING WITH',
    accent: 'sky',
    connections: ['glsl', 'react', 'gsap'],
  },
  {
    id: 'glsl',
    name: 'GLSL Shaders',
    category: 'creative',
    categoryLabel: 'CREATIVE TECHNOLOGY',
    context: 'Fragment & vertex shader passes for procedural background atmosphere glows.',
    relatedProjects: ['Portfolio'],
    status: 'EXPERIMENTING WITH',
    accent: 'cyan',
    connections: ['threejs'],
  },
  {
    id: 'gsap',
    name: 'GSAP',
    category: 'creative',
    categoryLabel: 'CREATIVE TECHNOLOGY',
    context: 'Timeline-based sequence animations and element transitions.',
    relatedProjects: ['Portfolio'],
    status: 'EXPERIMENTING WITH',
    accent: 'emerald',
    connections: ['threejs', 'css'],
  },
  {
    id: 'web-audio',
    name: 'Web Audio API',
    category: 'creative',
    categoryLabel: 'CREATIVE TECHNOLOGY',
    context: 'Audio frequency visualizers and ambient sound triggers.',
    relatedProjects: ['Portfolio Lab'],
    status: 'EXPERIMENTING WITH',
    accent: 'violet',
    connections: ['js', 'threejs'],
  },
  {
    id: 'mediapipe',
    name: 'MediaPipe',
    category: 'creative',
    categoryLabel: 'CREATIVE TECHNOLOGY',
    context: 'Computer vision, face mesh, and hand gesture tracking experiments in browser.',
    relatedProjects: ['Lab Experiments'],
    status: 'EXPERIMENTING WITH',
    accent: 'rose',
    connections: ['js', 'threejs'],
  },

  // TOOLS / WORKFLOW
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    categoryLabel: 'TOOLS / WORKFLOW',
    context: 'Version control, commit histories, branching, and repository safety.',
    relatedProjects: ['All Projects'],
    status: 'WORKFLOW TOOL',
    accent: 'amber',
    connections: ['github'],
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    categoryLabel: 'TOOLS / WORKFLOW',
    context: 'Remote repository hosting, issue tracking, and version history.',
    relatedProjects: ['All Projects'],
    status: 'WORKFLOW TOOL',
    accent: 'sky',
    connections: ['git'],
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools',
    categoryLabel: 'TOOLS / WORKFLOW',
    context: 'UI layout design, wireframing, color token specs, and vector asset export.',
    relatedProjects: ['Portfolio', 'Reception Admin', 'Daily Moodie'],
    status: 'WORKFLOW TOOL',
    accent: 'indigo',
    connections: ['css', 'react'],
  },
  {
    id: 'ai-prompting',
    name: 'AI Prompting',
    category: 'tools',
    categoryLabel: 'TOOLS / WORKFLOW',
    context: 'AI tool workflows for rapid brainstorming, log debugging, and tech exploration.',
    relatedProjects: ['All Builds & Research'],
    status: 'WORKFLOW TOOL',
    accent: 'emerald',
    connections: ['react', 'typescript'],
  },
];

export const currentlyLearningData = [
  {
    title: 'Deeper React Patterns',
    details: 'Mastering React 19 features, server components, concurrent rendering pipelines, and custom hook optimization.',
  },
  {
    title: 'Advanced TypeScript Safety',
    details: 'Diving deeper into complex generic constraints, conditional types, mapped types, and strict API schema contracts.',
  },
  {
    title: 'Full-Stack Systems Architecture',
    details: 'Connecting React client applications to scalable backend data persistence layers and normalized SQL models.',
  },
  {
    title: 'Creative WebGL Shaders',
    details: 'Experimenting with procedural GLSL noise shaders, post-processing filters, and 3D physical materials.',
  },
];
