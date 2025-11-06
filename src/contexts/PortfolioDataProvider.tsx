import { portfolioFallback } from 'data/portfolioFallback';
import { useEffect, useState } from 'react';
import { fetchPortfolioData } from 'src/utils/fetchPortfolioData';
import PortfolioDataContext from './PortfolioDataContext';

import type { FC, ReactNode } from 'react';
import type { PortfolioData } from 'types';

type PortfolioDataProps = {
  children: ReactNode;
};

const PortfolioDataProvider: FC<PortfolioDataProps> = ({ children }) => {
  const [portfolioData, setPortfolioData] =
    useState<PortfolioData>(portfolioFallback);
  const [isPortfolioDataBlurred, setIsPortfolioDataBlurred] =
    useState<boolean>(true);

  useEffect(() => {
    fetchPortfolioData(setPortfolioData).finally(() => {
      setIsPortfolioDataBlurred(false);
    });
  }, []);

  return (
    <PortfolioDataContext.Provider
      value={{
        portfolioData,
        setPortfolioData,
        isPortfolioDataBlurred,
        setIsPortfolioDataBlurred,
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  );
};

export default PortfolioDataProvider;
