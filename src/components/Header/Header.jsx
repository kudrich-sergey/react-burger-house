import { useContext } from "react";
import cn from "classnames";

import { useModals } from "../../hooks/useModals";
import { useCart } from "../../hooks/useCart";
import { AppContext } from "../../AppContext";
import styles from "./Header.module.scss";

export const Header = () => {
  const { totalPrice } = useCart();

  const { executeScroll, isFixedHeader, whyRef, productsRef, contactsRef } =
    useContext(AppContext);

  const { modal, openModal } = useModals();

  const handleOpenBasket = () => {
    if (totalPrice > 0) {
      openModal();
    }
  };

  return (
    <header className={cn(styles.header, { [styles.fixed]: isFixedHeader })}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="images/logo.png" alt="logo" />
        </div>
        <nav className={styles.menu}>
          <ul className={styles.menu_list}>
            <li
              className={styles.menu_item}
              onClick={() => executeScroll(whyRef)}
            >
              Почему у нас
            </li>
            <li
              className={styles.menu_item}
              onClick={() => executeScroll(productsRef)}
            >
              Меню бургеров
            </li>
            <li
              className={styles.menu_item}
              onClick={() => executeScroll(contactsRef)}
            >
              Остались вопросы?
            </li>
          </ul>
        </nav>
        <div className={styles.basket} onClick={handleOpenBasket}>
          {totalPrice} ₽
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="23"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M17 18.5C17.5304 18.5 18.0391 18.7107 18.4142 19.0858C18.7893 19.4609 19 19.9696 19 20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5C16.4696 22.5 15.9609 22.2893 15.5858 21.9142C15.2107 21.5391 15 21.0304 15 20.5C15 19.39 15.89 18.5 17 18.5ZM1 2.5H4.27L5.21 4.5H20C20.2652 4.5 20.5196 4.60536 20.7071 4.79289C20.8946 4.98043 21 5.23478 21 5.5C21 5.67 20.95 5.84 20.88 6L17.3 12.47C16.96 13.08 16.3 13.5 15.55 13.5H8.1L7.2 15.13L7.17 15.25C7.17 15.3163 7.19634 15.3799 7.24322 15.4268C7.29011 15.4737 7.3537 15.5 7.42 15.5H19V17.5H7C6.46957 17.5 5.96086 17.2893 5.58579 16.9142C5.21071 16.5391 5 16.0304 5 15.5C5 15.15 5.09 14.82 5.24 14.54L6.6 12.09L3 4.5H1V2.5ZM7 18.5C7.53043 18.5 8.03914 18.7107 8.41421 19.0858C8.78929 19.4609 9 19.9696 9 20.5C9 21.0304 8.78929 21.5391 8.41421 21.9142C8.03914 22.2893 7.53043 22.5 7 22.5C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5C5 19.39 5.89 18.5 7 18.5ZM16 11.5L18.78 6.5H6.14L8.5 11.5H16Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
      {modal}
    </header>
  );
};
