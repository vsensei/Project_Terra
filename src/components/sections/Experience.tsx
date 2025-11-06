import loading from 'assets/images/loading.svg?no-inline'; // no-inline fixes the SVG not being loaded due to CSP
import PortfolioDataContext from 'contexts/PortfolioDataContext';
import { useContext } from 'react';
import Technologies from '../Technologies';

import styles from './Experience.module.css';

import type { PortfolioDataContextType } from 'contexts/PortfolioDataContext';

const parseDescriptionToLines = (rawDescription: string = '') =>
  rawDescription.split('#$ ').slice(1);

export default function Experience() {
  const {
    portfolioData: { positions },
    isPortfolioDataBlurred,
  } = useContext(PortfolioDataContext) as PortfolioDataContextType;

  return (
    <div className={styles.experience}>
      <h2>Work Experience</h2>
      {positions &&
        positions.map((experienceData) => {
          const {
            positionName,
            employer,
            time,
            summary,
            rawDescription,
            technologies,
          } = experienceData;

          return (
            <div className={styles.position} key={time}>
              <div className={styles.info}>
                <p>{positionName}</p>
                <p>{employer}</p>
                <p>{time}</p>
              </div>
              <div className='summary'>{summary}</div>
              <ul className='description'>
                {parseDescriptionToLines(rawDescription).map(
                  (descriptionLine) => (
                    <li key={descriptionLine}>{descriptionLine}</li>
                  )
                )}
              </ul>
              <div className='technologiesContainer'>
                <p>Technologies:</p>
                <div className='technologies'>
                  <Technologies technologies={technologies} />
                </div>
              </div>
              {isPortfolioDataBlurred && (
                <div className={styles.overlay}>
                  <img className={styles.loading} src={loading} alt='loading' />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
