import Image from "next/image";
import styles from "./MealItem.module.scss";

export const MealItem: React.FC = () => {
  return (
    <button className={styles.item}>
      <Image src="/images/m01.jpg" fill alt="Meal 01" />
      <div>
        <span>05.21.Morning</span>
      </div>
    </button>
  );
};
