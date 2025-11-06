import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from 'lib/firebase';

import type { Dispatch } from 'react';
import type { PortfolioData } from 'types';

export const fetchPortfolioData = async (
  setPortfolioData: Dispatch<PortfolioData>
) => {
  try {
    const portfolioDataRef = doc(collection(db, 'portfolio'), 'portfolioData');
    const portfolioData = (await getDoc(portfolioDataRef)).data();
    setPortfolioData(portfolioData as PortfolioData);
  } catch (err) {
    console.error(
      'Could not fetch data from Firebase. Falling back to default, the information might be oudated.',
      err
    );
  }
};
