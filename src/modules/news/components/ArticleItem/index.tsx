import Image from "next/image";
import styles from "./ArticleItem.module.scss";

export const ArticleItem: React.FC = () => {
  return (
    <button className={styles.button}>
      <div className={styles.imageWrapper}>
        <Image src="/images/m01.jpg" fill alt="Meal 01" />
        <div>
          <span>2021.05.17 23:25</span>
        </div>
      </div>
      <h4>魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</h4>
      <p>#魚料理 #和食 #DHA</p>
    </button>
  );
};
