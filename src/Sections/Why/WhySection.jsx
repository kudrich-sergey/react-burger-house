import styles from "./WhySection.module.scss";

export const WhySection = ({ whyRef }) => {
  return (
    <section className={styles.why} ref={whyRef}>
      <div className={styles.container}>
        <div className={styles.common_title}>почему нас выбирают?</div>
        <div className={styles.why_items}>
          <div className={styles.why_item}>
            <img src="images/burger.png" alt="burger" />
            <div className={styles.why_item_title}>Авторские рецепты</div>
            <div className={styles.why_item_text}>
              Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни
              на какие другие. Мы тщательно отбираем лучшие ингредиенты и
              сочетания вкусов для нашего меню.
            </div>
          </div>
          <div className={styles.why_item}>
            <img src="images/meat.png" alt="meat" />
            <div className={styles.why_item_title}>Мраморная говядина</div>
            <div className={styles.why_item_text}>
              Для наших бургеров мы используем отборную 100% мраморную говядину,
              которую закупаем исключительно у фермеров. Мы уверены в качестве
              нашего мяса.
            </div>
          </div>
          <div className={styles.why_item}>
            <img src="images/truck.png" alt="truck" />
            <div className={styles.why_item_title}>Быстрая доставка</div>
            <div className={styles.why_item_text}>
              Мы доставляем в пределах МКАД за 30 минут, а если не успеем —
              доставка бесплатно. Мы тщательно упаковываем наши бургеры, чтобы
              по дороге они не остыли.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
