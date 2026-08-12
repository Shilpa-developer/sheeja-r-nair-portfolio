import { NavItem, StorytellingMethod, TrainingProgram, TimelineItem, PhilosophyPrinciple } from '../types';

export const SHEEJA_PORTRAIT_PATH = new URL(
  '../assets/images/WhatsApp Image 2026-08-09 at 23.10.30.jpeg',
  import.meta.url
).href;

export const PIXEL_PETAL_LOGO_PATH = new URL(
  '../assets/images/pixel_petal_logo_1786297823300.jpg',
  import.meta.url
).href;

export const NAVBAR_PIXEL_PETAL_LOGO_PATH = new URL(
  '../assets/images/P&P Navicon.jpeg',
  import.meta.url
).href;

export const SHEEJA_LINKEDIN_URL = 'https://www.linkedin.com/in/sheeja-nair-4858827a?utm_source=share_via&utm_content=profile&utm_medium=member_android';
export const SHEEJA_INSTAGRAM_URL = 'https://www.instagram.com/sheejarnair?igsh=cGozNzBkdWtqZHZp';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Storytelling', href: '#storytelling' },
  { label: 'Training', href: '#training' },
  { label: 'Experience', href: '#experience' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

export const STORYTELLING_METHODS: StorytellingMethod[] = [
  {
    id: 'storytelling',
    title: 'Storytelling',
    tagline: 'Language through Narrative',
    description: 'Immersive narrative experiences where words come alive through rhythm, context, and emotion.',
    iconName: 'BookOpen',
    details: [
      'Builds intuitive vocabulary and contextual comprehension',
      'Ignites imagination and natural conversational flow',
      'Encourages active listening and critical reflection'
    ]
  },
  {
    id: 'role-play',
    title: 'Role Play',
    tagline: 'Active Persona Immersion',
    description: 'Stepping into characters to practice practical communication, empathy, and real-life dialogue.',
    iconName: 'Users',
    details: [
      'Reduces public speaking anxiety through character play',
      'Simulates authentic situational communication',
      'Develops immediate conversational confidence'
    ]
  },
  {
    id: 'theatre-techniques',
    title: 'Theatre Techniques',
    tagline: 'Stage & Presence',
    description: 'Integrating vocal modulation, body language, and space awareness for expressive delivery.',
    iconName: 'Sparkles',
    details: [
      'Mastering voice projection and expressive articulation',
      'Non-verbal communication and posture awareness',
      'Interactive ensemble dynamics and group confidence'
    ]
  },
  {
    id: 'draw-and-tell',
    title: 'Draw & Tell',
    tagline: 'Visual Narrative Fusion',
    description: 'Combining visual sketching with oral storytelling to anchor vocabulary and memory.',
    iconName: 'Palette',
    details: [
      'Visual-auditory multi-sensory learning',
      'Ideal for young learners and visual thinkers',
      'Transforms abstract language concepts into clear imagery'
    ]
  },
  {
    id: 'voice-and-expression',
    title: 'Voice & Expression',
    tagline: 'Diction & Modulation',
    description: 'Refining pitch, tone, pacing, and emotional expression to convey stories with conviction.',
    iconName: 'Mic',
    details: [
      'Pacing, pausing, and emphasis techniques',
      'Tone variation to match narrative mood',
      'Clear pronunciation and articulation practice'
    ]
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'students',
    title: 'STORYTELLING FOR STUDENTS',
    subtitle: 'Building Language & Confidence',
    description: 'Interactive storytelling sessions designed to build language, confidence, imagination and communication skills.',
    category: 'students',
    audience: 'Primary & Secondary School Students',
    highlights: [
      'Active vocabulary expansion through story arcs',
      'Creative expression and public speaking ease',
      'Critical thinking & imaginative problem solving'
    ]
  },
  {
    id: 'teachers',
    title: 'TEACHER TRAINING',
    subtitle: 'Pedagogy & Classroom Strategies',
    description: 'English language development and classroom strategies for teachers, including government school educators.',
    category: 'teachers',
    audience: 'School Educators & Resource Teachers',
    highlights: [
      'Integrating storytelling as an active teaching tool',
      'Classroom engagement & inclusive student participation',
      'Conversational English development for educators'
    ]
  },
  {
    id: 'language',
    title: 'ENGLISH LANGUAGE TRAINING',
    subtitle: 'Fluency & Effective Communication',
    description: 'Conversational English, vocabulary, pronunciation, grammar and communication skills for learners of different levels.',
    category: 'language',
    audience: 'Learners of All Levels',
    highlights: [
      'Natural conversational fluency and idiom usage',
      'Clear pronunciation and stress pattern guidance',
      'Practical grammar application in daily speech'
    ]
  },
  {
    id: 'corporate',
    title: 'CORPORATE LANGUAGE TRAINING',
    subtitle: 'Professional & Business Communication',
    description: 'Business English, communication and people skills programmes for working professionals and corporate teams.',
    category: 'corporate',
    audience: 'Working Professionals & Corporate Teams',
    highlights: [
      'Impactful business communication & presentation skills',
      'Interpersonal dynamic and professional etiquette',
      'Written email clarity and articulate workplace dialogue'
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 't1',
    period: '20+ Years Journey',
    title: 'Nearly two decades in education and teaching',
    description: 'A lifelong dedication to teaching, mentoring, and enriching learning spaces across schools and institutions.'
  },
  {
    id: 't2',
    title: 'English & Language Skills Instruction',
    description: 'Extensive experience teaching English language development, vocabulary, and communication to school students.'
  },
  {
    id: 't3',
    title: 'Storytelling Integrated Pedagogy',
    description: 'Pioneered storytelling as a core learning method to make complex language concepts active and memorable.'
  },
  {
    id: 't4',
    title: 'Resource Person across Schools',
    description: 'Worked as an external resource expert collaborating with diverse schools to elevate curriculum delivery.'
  },
  {
    id: 't5',
    title: 'Regional English Language Programmes',
    description: 'Conducted English language training initiatives across cities in and around Tamil Nadu.'
  },
  {
    id: 't6',
    title: 'Multi-Generational Training',
    description: 'Trained teachers, students, and young adults in conversational English and authentic language confidence.'
  },
  {
    id: 't7',
    title: 'Corporate Professional Workshops',
    description: 'Conducted targeted training programmes for corporate working professionals, including an IT company.'
  },
  {
    id: 't8',
    title: 'Cambridge English Certification Trainer',
    description: 'Certified trainer preparing learners for Cambridge English qualifications across PET, B1, B2, and C1 levels.'
  },
  {
    id: 't9',
    title: 'Interactive School Storytelling',
    description: 'Organized and conducted vibrant storytelling sessions for schools, engaging both students and faculty.'
  },
  {
    id: 't10',
    title: 'Teacher Mentorship & Guidance',
    description: 'Mentored school teachers in English language proficiency, empowering them to lead confident classrooms.'
  },
  {
    id: 't11',
    title: 'Child Safety & Awareness Initiatives',
    description: 'Conducted vital educational programmes addressing child safety, including good touch, bad touch, and bullying awareness for primary school children.'
  }
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    id: 'listen',
    word: 'LISTEN',
    meaning: 'Understand the learner',
    description: 'Every individual brings unique experiences and learning paces. Effective education begins with patient, empathetic listening.',
    color: '#C25E40'
  },
  {
    id: 'engage',
    word: 'ENGAGE',
    meaning: 'Make learning active',
    description: 'Passive reception fades quickly. Active participation through conversation, movement, and role play anchors knowledge permanently.',
    color: '#D97706'
  },
  {
    id: 'imagine',
    word: 'IMAGINE',
    meaning: 'Use stories and creativity',
    description: 'Imagination unlocks memory. When language is rooted in vivid stories and creative imagery, abstract rules transform into living thought.',
    color: '#7C2D12'
  },
  {
    id: 'empower',
    word: 'EMPOWER',
    meaning: 'Help learners find their voice',
    description: 'Fluency is more than correct grammar; it is the courage to articulate ideas with clarity, dignity, and authentic expression.',
    color: '#0F766E'
  }
];
