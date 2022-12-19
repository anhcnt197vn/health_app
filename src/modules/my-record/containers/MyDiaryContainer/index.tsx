import { AppButton } from "../../../../components/AppButton";
import { MyDiaryItem } from "../../components/MyDiaryItem";
import styles from "./MyDiaryContainer.module.scss";

export const MyDiaryContainer = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3>MY DIARY</h3>
        <div className={styles.gridContainer}>
          <MyDiaryItem />
          <MyDiaryItem />
          <MyDiaryItem />
          <MyDiaryItem />
          <MyDiaryItem />
          <MyDiaryItem />
          <MyDiaryItem />
          <MyDiaryItem />
        </div>
      </div>
      <AppButton className={styles.appButton} title="記録をもっと見る" />
    </section>
  );
};
