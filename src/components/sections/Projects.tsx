import projectsData from 'data/projects';
import Project from '../Project';

import styles from './Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projects}>
      {projectsData.map((projectData) => (
        <Project projectData={projectData} key={projectData.name} />
      ))}
    </div>
  );
}
