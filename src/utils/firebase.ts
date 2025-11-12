import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { db } from 'lib/firebase';

import type { PositionData } from 'types';

export const fetchPositionsData = async (): Promise<PositionData[] | null> => {
  try {
    const portfolioDataDoc = await getDoc(
      doc(collection(db, 'portfolio'), 'portfolioData')
    );
    const portfolioData = portfolioDataDoc.data();

    if (
      !portfolioData ||
      !portfolioData.positions ||
      !Array.isArray(portfolioData.positions)
    ) {
      throw new Error('No valid positions data');
    }

    return portfolioData.positions;
  } catch (err) {
    console.error(
      'Could not fetch data from Firebase. Falling back to default, the information might be oudated.',
      err
    );

    return null;
  }
};
