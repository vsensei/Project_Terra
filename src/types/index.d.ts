export type ProjectData = {
  name: string;
  screenshot: string;
  projectLink: string;
  projectGithubName: string;
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

export type AppDataFirebaseResponse = {
  positions?: PositionData[];
  projects?: ProjectData[];
} | null;

export type AppData = { positions: PositionData[]; projects: ProjectData[] };
