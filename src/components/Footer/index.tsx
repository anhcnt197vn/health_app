import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <ul>
        <li>
          <Link href="#">会員登録</Link>
        </li>

        <li>
          <Link href="#">運営会社</Link>
        </li>
        <li>
          <Link href="#">利用規約</Link>
        </li>
        <li>
          <Link href="#">個人情報の取扱について</Link>
        </li>
        <li>
          <Link href="#">特定商取引法に基づく表記</Link>
        </li>
        <li>
          <Link href="#">お問い合わせ</Link>
        </li>
      </ul>
    </footer>
  );
}
