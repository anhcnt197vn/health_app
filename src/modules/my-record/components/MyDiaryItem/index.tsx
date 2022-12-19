import styles from "./MyDiaryItem.module.scss";

export const MyDiaryItem = () => {
  return (
    <div className={styles.gridItem}>
      <p className={styles.date}>2021.05.21</p>
      <p className={styles.hour}>23:25</p>
      <p className={styles.description}>
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </p>
    </div>
  );
};
