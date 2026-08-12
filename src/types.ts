export interface NavItem {
  label: string;
  href: string;
}

export interface StorytellingMethod {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tagline: string;
  details: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'students' | 'teachers' | 'language' | 'corporate' | 'cambridge';
  highlights: string[];
  audience: string;
}

export interface TimelineItem {
  id: string;
  period?: string;
  title: string;
  description: string;
  tag?: string;
}

export interface PhilosophyPrinciple {
  id: string;
  word: string;
  meaning: string;
  description: string;
  color: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  organization: string;
  programType: string;
  targetAudience: string;
  message: string;
}
