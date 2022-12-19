import styles from "./RecommendedContainer.module.scss";

export const RecommendedContainer: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h3>RECOMMENDED COLUMN</h3>
          <p>オススメ</p>
        </div>
        <div className={styles.item}>
          <h3>RECOMMENDED DIET</h3>
          <p>ダイエット</p>
        </div>
        <div className={styles.item}>
          <h3>RECOMMENDED BEAUTY</h3>
          <p>美容</p>
        </div>
        <div className={styles.item}>
          <h3>RECOMMENDED HEALTH</h3>
          <p>健康</p>
        </div>
      </div>
    </section>
  );
};
