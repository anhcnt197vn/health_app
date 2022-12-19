import classNames from "classnames";
import styles from "./AppButton.module.scss";

interface Props {
  className?: string;
  title: string;
}

export const AppButton: React.FC<Props> = ({ className, title }) => {
  return (
    <button className={classNames(styles.container, className)}>
      <span>{title}</span>
    </button>
  );
};
