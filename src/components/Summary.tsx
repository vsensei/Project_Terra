import { githubLink, linkedInLink, summaryData } from 'data/profileinfo';
import technologiesData from 'data/technologies';
import Technologies from './Technologies';

import styles from './Summary.module.css';

export default function Summary() {
  return (
    <div className={styles.mainInfo}>
      <h1>Web Developer</h1>
      <div className={styles.about}>
        <a
          href={githubLink}
          title='GitHub profile'
          target='_blank'
          rel='noreferrer nofollow'
        >
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/68127517?v=4" alt='avatar' />
        </a>
        <div className={styles.bio}>
          <h2>Nikita Mägistu</h2>
          <p>
            Github:
            <a
              href={githubLink}
              title='GitHub profile'
              target='_blank'
              rel='noreferrer nofollow'
            >
              @vsensei
            </a>
          </p>
          <p>
            LinkedIn:
            <a
              href={linkedInLink}
              title='GitHub profile'
              target='_blank'
              rel='noreferrer nofollow'
            >
              @nikitamyagistu
            </a>
          </p>
          <p>{summaryData}</p>
        </div>
      </div>
      <Technologies technologies={technologiesData} />
    </div>
  );
}
