import { RedirectButton } from "../../components/RedirectButton";
import styles from "./ButtonRedirectionContainer.module.scss";

export const ButtonRedirectionContainer: React.FC = () => {
  return (
    <section className={styles.container}>
      <RedirectButton description="自分のカラダの記録" title="BODY RECORD" imageUrl="/images/MyRecommend-1.jpg" />
      <RedirectButton description="自分の運動の記録" title="MY EXERCISE" imageUrl="/images/MyRecommend-2.jpg" />
      <RedirectButton description="自分の日記" title="MY DIARY" imageUrl="/images/MyRecommend-3.jpg" />
    </section>
  );
};
