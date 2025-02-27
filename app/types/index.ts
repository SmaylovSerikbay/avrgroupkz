export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  service?: 'mobile-development' | 'web-development' | 'vr-ar-mr';
  slug?: string;
  fullDescription?: string;
  features?: string[];
} 