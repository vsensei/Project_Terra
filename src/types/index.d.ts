export type ProjectData = {
  name: string;
  screenshot: string;
  projectlink: string;
  githublink: string;
  logo: `${string}.svg`;
  technologies: Technology[];
  description: string;
};

export type PositionData = {
  positionName: string;
  employer: string;
  time: string;
  summary: string;
  rawDescription: string;
  technologies: Technology[];
};
