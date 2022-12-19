import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Image src="/svg/logo.svg" width={144} height={64} alt="logo" />
      </Link>
      <div className={styles.nav}>
        <Link className={styles.navItem} href="/my-record">
          <Image src="/svg/memo.svg" width={32} height={32} alt="memo" />
          <p>自分の記録</p>
        </Link>
        <Link className={styles.navItem} href="#">
          <Image src="/svg/challenge.svg" width={32} height={32} alt="challenge" />
          <p>チャレンジ</p>
        </Link>
        <Link className={styles.navItem} href="/news">
          <Image src="/svg/info.svg" width={32} height={32} alt="info" />
          <p>お知らせ</p>
        </Link>
        <button>
          <Image src="/svg/menu.svg" width={32} height={32} alt="menu" />
        </button>
      </div>
    </header>
  );
}
