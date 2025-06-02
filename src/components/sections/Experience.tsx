import { experienceData } from 'data/experience';
import Technologies from '../Technologies';

import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h2>Work Experience</h2>
      {experienceData.map((experienceData) => {
        const {
          positionName,
          employer,
          time,
          summary,
          descriptionLines,
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
              {descriptionLines.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
            <div className='technologiesContainer'>
              <p>Technologies:</p>
              <div className='technologies'>
                <Technologies technologies={technologies} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
