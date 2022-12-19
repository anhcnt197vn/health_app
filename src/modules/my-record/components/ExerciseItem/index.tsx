import styles from "./ExerciseItem.module.scss";

export const ExerciseItem = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <p className={styles.name}>* 家事全般（立位・軽い）</p>
        <p className={styles.weight}>26kcal</p>
      </div>
      <p className={styles.min}>10 min</p>
    </div>
  );
};
