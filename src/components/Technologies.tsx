import styles from './Technologies.module.css';

type TechInfoArgs = {
  technologies?: string[];
};

export default function Technologies({ technologies }: TechInfoArgs) {
  return (
    <div className={styles.container}>
      {technologies &&
        technologies.map((technology) => {
          return (
            <div className={styles.techInfo} key={technology}>
              {technology}
            </div>
          );
        })}
    </div>
  );
}
