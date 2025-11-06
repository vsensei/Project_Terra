import { createContext } from 'react';

import type { Dispatch } from 'react';
import type { PortfolioData } from 'types';

export type PortfolioDataContextType = {
  portfolioData: PortfolioData;
  setPortfolioData: Dispatch<PortfolioData>;
  isPortfolioDataBlurred: boolean;
  setIsPortfolioDataBlurred: Dispatch<boolean>;
};

const PortfolioDataContext = createContext<PortfolioDataContextType | null>(
  null
);

export default PortfolioDataContext;
