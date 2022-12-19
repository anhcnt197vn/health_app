import Image from "next/image";
import styles from "./ScrollToTopButton.module.scss";

export default function ScrollToTopButton() {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.container} onClick={onScrollToTop}>
      <Image src="/svg/narrow-up.svg" width={15} height={8} alt="Scroll to top" />
    </button>
  );
}
