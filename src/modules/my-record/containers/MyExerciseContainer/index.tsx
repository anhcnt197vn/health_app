import { ExerciseItem } from "../../components/ExerciseItem";
import styles from "./MyExerciseContainer.module.scss";

export const MyExerciseContainer = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.myExercise}>MY EXERCISE</h3>
          <span className={styles.time}>2021.05.21</span>
        </div>

        <div className={styles.list}>
          <div className={styles.leftColumn}>
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
          </div>
          <div className={styles.rightColumn}>
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
            <ExerciseItem />
          </div>
        </div>
      </div>
    </section>
  );
};
