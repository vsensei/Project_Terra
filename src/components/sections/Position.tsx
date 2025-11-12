import PositionsDataContext from 'contexts/PositionsDataContext';
import { useContext } from 'react';
import { convertMarkedStringToArray } from 'utils/string';
import Technologies from '../Technologies';

import type { PositionsDataContextType } from 'contexts/PositionsDataContext';

import Blur from '../shared/Blur';
import styles from './Position.module.css';

export default function Position() {
  const { positions, isPositionsDataBlurred } = useContext(
    PositionsDataContext
  ) as PositionsDataContextType;

  return (
    <div className={styles.experience}>
      <h2>Work Position</h2>
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
                      )
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
        }
      )}
    </div>
  );
}
