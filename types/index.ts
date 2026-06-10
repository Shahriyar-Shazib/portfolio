export interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'tools';
  level: number; // 0-100
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'api' | 'fullstack' | 'enterprise';
  featured: boolean;
  image?: string;
  github?: string;
  live?: string;
  highlights: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GitHubStats {
  totalCommits: number;
  totalRepos: number;
  totalStars: number;
  followers: number;
}
