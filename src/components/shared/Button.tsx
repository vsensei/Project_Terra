import styles from './Button.module.css';

type ButtonArgs = {
  text: string;
  handleClick?: () => void;
  isDisabled?: boolean;
};

export default function Button({
  text,
  handleClick,
  isDisabled = false,
}: ButtonArgs) {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
