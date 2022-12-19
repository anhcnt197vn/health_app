import { AppButton } from "../../../../components/AppButton";
import { ArticleItem } from "../../components/ArticleItem";
import styles from "./ArticlesContainer.module.scss";

export const ArticlesContainer: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
      <AppButton className={styles.appButton} title="記録をもっと見る" />
    </section>
  );
};
