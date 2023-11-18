import { useContext } from "react";

import { Header } from "../../components/Header/";
import { AppContext } from "../../AppContext";
import styles from "./MainSection.module.scss";

export const MainSection = () => {
  const { executeScroll, productsRef } = useContext(AppContext);

  return (
    <section className={styles.main}>
      <Header />
      <section className={styles.main_content}>
        <div className={styles.container}>
          <div className={styles.main_info}>
            <span className={styles.main_info_small}>Новое меню</span>
            <h1 className={styles.main_title}>Бургер Чеддер</h1>
            <p className={styles.main_text}>
              Мы обновили наше меню, спешите попробовать сезонные новинки и
              насладиться отличным вкусом наших бургеров. Готовим для вас лучшие
              бургеры в городе из отборной мраморной говядины.
            </p>
            <button
              className={styles.button}
              onClick={() => executeScroll(productsRef)}
            >
              Смотреть меню
            </button>
          </div>
          <img
            src="images/main_burger.png"
            alt="Big Burger"
            className={styles.main_image}
          />
        </div>
      </section>
    </section>
  );
};
