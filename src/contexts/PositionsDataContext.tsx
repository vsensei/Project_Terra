import { createContext } from 'react';

import type { PositionData } from 'types';

export type PositionsDataContextType = {
  positions: PositionData[];
  isPositionsDataBlurred: boolean;
};

const PositionsDataContext = createContext<PositionsDataContextType | null>(
  null
);

export default PositionsDataContext;
