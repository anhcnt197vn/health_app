import Image from "next/image";
import { ReactNode } from "react";
import styles from "./HexagonMenu.module.scss";

interface Props {
  title: string;
  renderIcon: () => ReactNode;
}

export const HexagonMenu: React.FC<Props> = ({ title, renderIcon }) => {
  return (
    <button className={styles.container}>
      <Image src="/svg/hexagon.svg" alt="Hexagon Menu" height={136} width={154} />
      <div className={styles.content}>
        <span>{title}</span>
        {renderIcon()}
      </div>
    </button>
  );
};
