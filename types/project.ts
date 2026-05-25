export interface Project {
  id: string;
  title: string;
  description: string;

  businessObjective?: string;

  highlights: string[];

  image?: string;

  images?: string[];

  videos?: string[];

  github: string;

  liveUrl?: string;

  technologies: string[];
}

