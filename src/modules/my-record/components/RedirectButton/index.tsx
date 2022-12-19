import Image from "next/image";
import styles from "./RedirectButton.module.scss";

export function RedirectButton({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <button className={styles.buttonContainer}>
      <Image src={imageUrl} alt="My recommend" fill />
      <p className={styles.title}>{title}</p>
      <div className={styles.descriptionWrapper}>
        <p>{description}</p>
      </div>
    </button>
  );
}
