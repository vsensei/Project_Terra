import styles from './Link.module.css';

type LinkProps = {
  href: string;
  image?: string;
};

const Link = ({ href, image }: LinkProps) => {
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
