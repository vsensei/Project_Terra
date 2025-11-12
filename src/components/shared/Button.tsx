import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  handleClick?: () => void;
  isDisabled?: boolean;
};

export default function Button({
  text,
  handleClick,
  isDisabled = false,
}: ButtonProps) {
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
