import type { IconType } from 'react-icons';

export type ProjectCategory = 'typescript' | 'php' | 'go' | 'javascript';

export type ProjectStatus = 'live' | 'wip' | 'private';

export interface ProjectRecord {
  slug: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStackKeys: string[];
  categories: ProjectCategory[];
  featured: boolean;
  year: number;
  status: ProjectStatus;
  problem: string;
  solution: string;
  features: string[];
  results: string[];
}

export interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

export interface Project extends Omit<ProjectRecord, 'techStackKeys'> {
  techStack: TechStackItem[];
}

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  typescript: 'TypeScript',
  php: 'PHP',
  go: 'Go',
  javascript: 'JavaScript',
};
