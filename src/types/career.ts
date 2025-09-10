export interface CareerPhase {
  phase: string;
  skills: string[];
  free_resources: string[];
  paid_resources: string[];
  projects: string[];
}

export interface CareerRoadmap {
  domain: string;
  roadmap: CareerPhase[];
  career_paths: string[];
  companies: string[];
  interview_prep: string[];
}

export interface UserInput {
  interests: string;
  skills: string;
  selectedDomain?: string; // Add optional selected domain
  grade: string; // Add grade field
  experience: string; // Add experience level
}