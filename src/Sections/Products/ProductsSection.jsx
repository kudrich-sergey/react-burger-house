import { ProductItem } from "../../components/Product-Item/ProductItem";
import styles from "./ProductsSection.module.scss";

import { Products } from "./Products";

export const ProductsSection = ({ productsRef }) => {
  return (
    <section className={styles.products} ref={productsRef}>
      <div className={styles.container}>
        <div className={styles.common_title}>выберите свой бургер</div>
        <div className={styles.products_items}>
          {Products.map((item) => (
            <ProductItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
