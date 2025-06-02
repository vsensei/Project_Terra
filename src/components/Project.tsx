import Link from './Link';
import Technologies from './Technologies';
import githubLogo from 'assets/images/github-logo.svg';

import styles from './Project.module.css';

import type { ProjectInfo } from 'types';

type ProjectArgs = {
  projectData: ProjectInfo;
};

export default function Project({ projectData }: ProjectArgs) {
  const {
    screenshot,
    projectlink,
    githublink,
    logo,
    technologies,
    name,
    description,
  } = projectData;
  const shouldDisplay = screenshot && projectlink && logo;

  return shouldDisplay ? (
    <div
      className={styles.project}
      key={name}
      style={{ backgroundImage: `url('images/${screenshot}')` }}
    >
      <div className={styles.background} />
      <div className={styles.info}>
        <div className={styles.infoName}>{name}</div>
        <div className={styles.summary}>
          <div className={styles.description}>{description}</div>
          <div>
            <Technologies technologies={technologies} />
            <div className={styles.links}>
              <Link href={`${githublink}${githublink}`} image={githubLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
