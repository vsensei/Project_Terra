import AppDataContext from 'contexts/AppDataContext';
import { positionsFallback } from 'data/portfolioFallback';
import projectsFallback from 'data/projectsFallback';
import { useEffect, useState } from 'react';
import { fetchAppData } from 'utils/firebase';

import type { FC, ReactNode } from 'react';
import type { AppData } from 'types';

type PositionsDataProps = {
  children: ReactNode;
};

const AppDataProvider: FC<PositionsDataProps> = ({ children }) => {
  const [appData, setAppData] = useState<AppData>({
    positions: positionsFallback,
    projects: projectsFallback,
  });
  const [isPositionsDataBlurred, setIsPositionsDataBlurred] =
    useState<boolean>(true);

  useEffect(() => {
    const getAppData = async () => {
      const firebaseAppData = await fetchAppData();

      if (firebaseAppData) {
        setAppData(firebaseAppData);
      }

      setIsPositionsDataBlurred(false);
    };

    getAppData();
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        appData,
        isPositionsDataBlurred,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataProvider;
