import { SECTIONS } from 'const/sections';
import { useState } from 'react';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Button from './shared/Button';

import styles from './Router.module.css';

const router = {
  [SECTIONS.Experience]: <Experience />,
  [SECTIONS.Projects]: <Projects />,
  [SECTIONS.CV]: <Resume />,
} as const;
const routerSections = [...Object.keys(router)] as (keyof typeof SECTIONS)[];

export default function Router() {
  const [selectedRoute, setSelectedRoute] = useState<keyof typeof SECTIONS>(
    SECTIONS.Experience
  );
  const handleRouteChange = (routeName: keyof typeof SECTIONS) => {
    setSelectedRoute(SECTIONS[routeName]);
  };

  return (
    <>
      <div className={styles.router}>
        {routerSections.map((sectionName) => (
          <Button
            text={sectionName}
            handleClick={() => handleRouteChange(sectionName)}
            isDisabled={selectedRoute === sectionName}
            key={sectionName}
          />
        ))}
      </div>
      {router[selectedRoute]}
    </>
  );
}
