import styles from './Technologies.module.css';

type TechInfoProps = {
  technologies?: string[];
};

export default function Technologies({ technologies }: TechInfoProps) {
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
