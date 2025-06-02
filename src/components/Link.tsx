import styles from './Link.module.css';

type LinkArgs = {
  href: string;
  image?: string;
};

const Link = ({ href, image }: LinkArgs) => {
  return (
    <a
      className={styles.link}
      href={href}
      style={{
        backgroundImage: `url('${image}')`,
      }}
      title='GitHub link'
      target='_blank'
      rel='noreferrer nofollow'
    />
  );
};

export default Link;
