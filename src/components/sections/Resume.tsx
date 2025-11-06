import cvPdf from 'assets/cv.pdf';
import Button from 'components/shared/Button';
import { useRef, useState } from 'react';

import styles from './Resume.module.css';

export default function Resume() {
  const [isMounted, setIsMounted] = useState(false);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    setIsMounted(true);
  };

  return (
    <>
      <a
        className={styles.downloadLink}
        href={cvPdf}
        download='CV Nikita Mägistu'
        target='_blank'
      >
        <Button text='Download CV' />
      </a>
      {!isMounted && <p>Loading...</p>}
      <iframe
        className={styles.pdfViewer}
        src={`${cvPdf}#toolbar=0&navpanes=0&view=fit`}
        width='100%'
        height='1100px'
        ref={iframeRef}
        onLoad={handleIframeLoad}
      />
    </>
  );
}
