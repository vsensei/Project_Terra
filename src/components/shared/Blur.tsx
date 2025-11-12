import loading from 'assets/images/loading.svg?no-inline'; // no-inline fixes the SVG not being loaded due to CSP

import type { PropsWithChildren } from 'react';

import styles from './Blur.module.css';

type BlurProps = {
  isActive: boolean;
  isLoaderShown: boolean;
};

export default function Blur({
  isActive = false,
  isLoaderShown = false,
  children,
}: PropsWithChildren<BlurProps>) {
  return (
    <div className={styles.container}>
      {children}
      {isActive && (
        <div className={styles.overlay}>
          {isLoaderShown && (
            <img className={styles.loading} src={loading} alt='loading' />
          )}
        </div>
      )}
    </div>
  );
}
