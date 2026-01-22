import { collection, doc, getDoc } from 'firebase/firestore/lite';
import { db } from 'lib/firebase';

import type { AppData, AppDataFirebaseResponse } from 'types';

export const fetchAppData = async (): Promise<AppData | null> => {
  try {
    const appDataDoc = await getDoc(
      doc(collection(db, 'portfolio'), 'portfolioData'),
    );
    const appData = appDataDoc.data() as AppDataFirebaseResponse;

    if (
      !appData ||
      !appData.positions ||
      !appData.projects ||
      !Array.isArray(appData.positions) ||
      !Array.isArray(appData.projects)
    ) {
      throw new Error('No valid app data');
    }

    return {
      positions: appData.positions,
      projects: appData.projects,
    };
  } catch (err) {
    console.error(
      'Could not fetch data from Firebase. Falling back to default, the information might be oudated.',
      err,
    );

    return null;
  }
};
