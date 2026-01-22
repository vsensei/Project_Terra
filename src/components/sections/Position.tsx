import Blur from 'components/shared/Blur';
import Technologies from 'components/Technologies';
import AppDataContext from 'contexts/AppDataContext';
import { useContext } from 'react';
import { convertMarkedStringToArray } from 'utils/string';

import type { AppDataContextType } from 'contexts/AppDataContext';

import styles from './Position.module.css';

export default function Position() {
  const {
    appData: { positions },
    isPositionsDataBlurred,
  } = useContext(AppDataContext) as AppDataContextType;

  return (
    <div className={styles.experience}>
      <h2>Work Experience</h2>
      {positions.map(
        ({
          positionName,
          employer,
          time,
          summary,
          rawDescription,
          technologies,
        }) => {
          return (
            <div className={styles.panel} key={time}>
              <Blur isActive={isPositionsDataBlurred} isLoaderShown={true}>
                <div className={styles.container}>
                  <div className={styles.info}>
                    <p>{positionName}</p>
                    <p>{employer}</p>
                    <p>{time}</p>
                  </div>
                  <div>{summary}</div>
                  <ul>
                    {convertMarkedStringToArray(rawDescription).map(
                      (descriptionLine) => (
                        <li key={descriptionLine}>{descriptionLine}</li>
                      ),
                    )}
                  </ul>
                  <div>
                    <p>Technologies:</p>
                    <div>
                      <Technologies technologies={technologies} />
                    </div>
                  </div>
                </div>
              </Blur>
            </div>
          );
        },
      )}
    </div>
  );
}
