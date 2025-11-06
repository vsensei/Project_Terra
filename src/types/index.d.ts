export type ProjectInfo = {
  name: string;
  screenshot: string;
  projectlink: string;
  githublink: string;
  logo: `${string}.svg`;
  technologies: Technology[];
  description: string;
};

export type ExperienceInfo = {
  positionName: string;
  employer: string;
  time: string;
  summary: string;
  rawDescription: string;
  technologies: Technology[];
};

export type PortfolioData = {
  positions: ExperienceInfo[];
  technologies: string[];
  summary: string;
};
