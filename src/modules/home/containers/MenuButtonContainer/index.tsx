import { HexagonMenu } from "../../components/HexagonMenu";
import Image from "next/image";
import styles from "./MenuButtonContainer.module.scss";

export const MenuButtonContainer: React.FC = () => {
  return (
    <section className={styles.container}>
      <HexagonMenu
        title="Morning"
        renderIcon={() => <Image src="/svg/knife.svg" alt="Morning Menu" height={53} width={45} />}
      />
      <HexagonMenu
        title="Lunch"
        renderIcon={() => <Image src="/svg/knife.svg" alt="Morning Menu" height={53} width={45} />}
      />
      <HexagonMenu
        title="Dinner"
        renderIcon={() => <Image src="/svg/knife.svg" alt="Morning Menu" height={53} width={45} />}
      />
      <HexagonMenu
        title="Snack"
        renderIcon={() => <Image src="/svg/knife.svg" alt="Morning Menu" height={53} width={45} />}
      />
    </section>
  );
};
