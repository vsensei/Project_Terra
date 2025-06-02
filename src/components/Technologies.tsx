import styles from './Technologies.module.css';

import type { Technology } from 'types';

type TechInfoArgs = {
  technologies: Technology[];
};

export default function Technologies({ technologies }: TechInfoArgs) {
  return (
    <div className={styles.container}>
      {technologies.map((technology) => {
        return (
          <div className={styles.techInfo} key={technology}>
            {technology}
          </div>
        );
      })}
    </div>
  );
}
