export interface Article {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  url: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
 
export interface ResumeExperience {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  start: string;
  end: string;
}

export interface ResumeLink { label: string; url: string }

export interface Resume {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  website?: string;
  phone?: string;
  experience: ResumeExperience[];
  education?: ResumeEducation[];
  skills?: string[];
  links?: ResumeLink[];
  projects?: ResumeProject[];
  awards?: string[];
}

export interface ResumeProject {
  name: string;
  stack?: string;
  period?: string;
  highlights?: string[];
}
