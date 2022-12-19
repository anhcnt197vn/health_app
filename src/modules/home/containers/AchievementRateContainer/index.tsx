import Image from "next/image";
import styles from "./AchievementRateContainer.module.scss";

export default function AchievementRateContainer() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.achievementRateWrapper}>
          <Image src="/images/d01.jpg" fill alt="Achievement rate image" />
        </div>
        <div className={styles.bodyFatPercentGraphWrapper}>
          <Image src="/images/main_graph.png" fill alt="Main graph" />
        </div>
      </div>
    </section>
  );
}
