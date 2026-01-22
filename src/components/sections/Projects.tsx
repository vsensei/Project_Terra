import Project from 'components/Project';
import AppDataContext from 'contexts/AppDataContext';
import { useContext } from 'react';

import type { AppDataContextType } from 'contexts/AppDataContext';

import styles from './Projects.module.css';

export default function Projects() {
  const {
    appData: { projects },
  } = useContext(AppDataContext) as AppDataContextType;

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Project projectData={project} key={project.name} />
      ))}
    </div>
  );
}
