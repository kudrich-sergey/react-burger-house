import { useContext } from "react";
import { createPortal } from "react-dom";

import { AppContext } from "../../AppContext";
import { useCart } from "../../hooks/useCart";
import styles from "./Modals.module.scss";

export const Modals = ({ close }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { totalPrice } = useCart();

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

    if (cartItems.length <= 1 && cartItems[0].count <= 1) {
      close();
    }
  };

  const placeOrder = () => {
    close();
    setCartItems([]);
  };

  return createPortal(
    <div className={styles.fixed_overlay}>
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <h2>Корзина</h2>
          <button
            onClick={close}
            type="button"
            className={styles.modal_btn_close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#76767a"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <div className={styles.backet_items}>
            {cartItems.map((product) => (
              <div className={styles.backet_item} key={product.id}>
                <div className={styles.backet_item_image}>
                  <img src={product.image} alt="Burger" />
                </div>
                <div className={styles.backet_item_title}>
                  <div>{product.title}</div>
                  <div className={styles.backet_item_weight}>
                    {product.weight} гр
                  </div>
                </div>
                <div className={styles.backet_item_price}>
                  {product.price} ₽
                </div>
                <div className={styles.products_buttons}>
                  <button
                    className={styles.products_minus}
                    onClick={() => minusItem(product)}
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
                    {product.count}
                  </span>
                  <button
                    className={styles.products_plus}
                    onClick={() => plusItem(product)}
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
                <div className={styles.backet_item_total}>
                  {product.count * product.price} ₽
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total_price}>Итого: {totalPrice} ₽</div>
          <button type="button" className={styles.button} onClick={placeOrder}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
