import { summaryFallback } from 'data/portfolioFallback';
import { githubLink, linkedInLink } from 'data/profileInfo';
import { parseTechnologies } from 'utils/env';
import { parseStringWithNewlines } from 'utils/string';
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
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/68127517?v=4'
            alt='avatar'
          />
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
          <p>
            {parseStringWithNewlines(import.meta.env.VITE_PORTFOLIO_SUMMARY) ||
              summaryFallback}
          </p>
        </div>
      </div>
      <Technologies technologies={parseTechnologies()} />
    </div>
  );
}
