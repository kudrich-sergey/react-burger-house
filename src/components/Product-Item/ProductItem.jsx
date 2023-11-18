import { useContext } from "react";

import { AppContext } from "../../AppContext";
import styles from "./ProductItem.module.scss";

export const ProductItem = (item) => {
  const { id, image, title, description, price, weight } = item;
  const { cartItems, setCartItems } = useContext(AppContext);
  const isItemBasket = cartItems.find((obj) => obj.id === id);

  const plusItem = (item) => {
    const findItem = cartItems.find((obj) => obj.id === item.id);
    if (findItem) {
      setCartItems((prev) => {
        return prev.map((obj) => {
          return obj.id === item.id ? { ...obj, count: obj.count + 1 } : obj;
        });
      });
    } else {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const minusItem = (item) => {
    const findItem = cartItems.find((obj) => obj.id === item.id);
    if (findItem && findItem.count > 1) {
      setCartItems((prev) => {
        return prev.map((obj) => {
          return obj.id === item.id ? { ...obj, count: obj.count - 1 } : obj;
        });
      });
    } else {
      setCartItems((prev) => prev.filter((obj) => obj.id !== item.id));
    }
  };

  return (
    <div className={styles.products_item}>
      <div className={styles.products_item_image}>
        <img src={image} alt="Burger" />
      </div>
      <div className={styles.products_item_title}>{title}</div>
      <div className={styles.products_item_text}>{description}</div>
      <div className={styles.products_item_extra}>
        <div>
          <div className={styles.products_item_price}>{price} ₽</div>
          <div className={styles.products_item_weight}>{weight} гр.</div>
        </div>
        {!isItemBasket ? (
          <button
            className={styles.products_button}
            onClick={() => plusItem(item)}
          >
            <span>Заказать</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17 18.5C17.5304 18.5 18.0391 18.7107 18.4142 19.0858C18.7893 19.4609 19 19.9696 19 20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5C16.4696 22.5 15.9609 22.2893 15.5858 21.9142C15.2107 21.5391 15 21.0304 15 20.5C15 19.39 15.89 18.5 17 18.5ZM1 2.5H4.27L5.21 4.5H20C20.2652 4.5 20.5196 4.60536 20.7071 4.79289C20.8946 4.98043 21 5.23478 21 5.5C21 5.67 20.95 5.84 20.88 6L17.3 12.47C16.96 13.08 16.3 13.5 15.55 13.5H8.1L7.2 15.13L7.17 15.25C7.17 15.3163 7.19634 15.3799 7.24322 15.4268C7.29011 15.4737 7.3537 15.5 7.42 15.5H19V17.5H7C6.46957 17.5 5.96086 17.2893 5.58579 16.9142C5.21071 16.5391 5 16.0304 5 15.5C5 15.15 5.09 14.82 5.24 14.54L6.6 12.09L3 4.5H1V2.5ZM7 18.5C7.53043 18.5 8.03914 18.7107 8.41421 19.0858C8.78929 19.4609 9 19.9696 9 20.5C9 21.0304 8.78929 21.5391 8.41421 21.9142C8.03914 22.2893 7.53043 22.5 7 22.5C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5C5 19.39 5.89 18.5 7 18.5ZM16 11.5L18.78 6.5H6.14L8.5 11.5H16Z"
                  fill="#191411"
                />
              </svg>
            </span>
          </button>
        ) : (
          <div className={styles.products_buttons}>
            <button
              className={styles.products_minus}
              onClick={() => minusItem(item)}
            >
              <svg
                stroke="#211a16"
                fill="#211a16"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
              </svg>
            </button>
            <span className={styles.products_counter}>
              {isItemBasket.count}
            </span>
            <button
              className={styles.products_plus}
              onClick={() => plusItem(item)}
            >
              <svg
                stroke="#211a16"
                fill="#211a16"
                strokeWidth="0"
                t="1551322312294"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" />
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
