import { AppButton } from "../../../../components/AppButton";
import { MealItem } from "../../components/MealItem";
import styles from "./MealHistoryContainer.module.scss";

export const MealHistoryContainer: React.FC = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
        <MealItem />
      </div>

      <AppButton className={styles.appButton} title="記録をもっと見る" />
    </section>
  );
};
