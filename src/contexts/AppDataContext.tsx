import { createContext } from 'react';

import type { AppData } from 'types';

export type AppDataContextType = {
  appData: AppData;
  isPositionsDataBlurred: boolean;
};

const AppDataContext = createContext<AppDataContextType | null>(null);

export default AppDataContext;
