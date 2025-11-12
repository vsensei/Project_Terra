import { positionsFallback } from 'data/portfolioFallback';
import { useEffect, useState } from 'react';
import { fetchPositionsData } from 'utils/firebase';
import PositionsDataContext from './PositionsDataContext';

import type { FC, ReactNode } from 'react';
import type { PositionData } from 'types';

type PositionsDataProps = {
  children: ReactNode;
};

const PositionsDataProvider: FC<PositionsDataProps> = ({ children }) => {
  const [positions, setPositions] = useState<PositionData[]>(positionsFallback);
  const [isPositionsDataBlurred, setIsPositionsDataBlurred] =
    useState<boolean>(true);

  useEffect(() => {
    const getPositionsData = async () => {
      const positionsData = await fetchPositionsData();

      if (positionsData) {
        setPositions(positionsData);
      }

      setIsPositionsDataBlurred(false);
    };

    getPositionsData();
  }, []);

  return (
    <PositionsDataContext.Provider
      value={{
        positions,
        isPositionsDataBlurred,
      }}
    >
      {children}
    </PositionsDataContext.Provider>
  );
};

export default PositionsDataProvider;
