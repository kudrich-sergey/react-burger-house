import { useState } from "react";
import cn from "classnames";

import styles from "./ContactsSection.module.scss";

export const ContactsSection = ({ contactsRef }) => {
  const [state, setState] = useState({ name: "", telephone: "" });
  const [error, setError] = useState({ name: false, telephone: false });

  const handleOnChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

    if (!event.target.value) {
      setError((prev) => ({ ...prev, [event.target.name]: true }));
    } else {
      setError((prev) => ({ ...prev, [event.target.name]: false }));
    }
  };

  const handleOnClick = () => {
    if (!state.name) {
      setError((prev) => ({ ...prev, name: true }));
    } else {
      setError((prev) => ({ ...prev, name: false }));
    }
    if (!state.telephone) {
      setError((prev) => ({ ...prev, telephone: true }));
    } else {
      setError((prev) => ({ ...prev, telephone: false }));
    }
    if (state.name && state.telephone) {
      setState({ name: "", telephone: "" });
    }
  };

  return (
    <section className={styles.contacts} ref={contactsRef}>
      <div className={styles.contacts}>
        <div className={styles.common_title}>Остались вопросы?</div>
        <div className={styles.contacts_form}>
          <div className={styles.contacts_form_text}>
            Оставьте свои контакты и наш менеджер свяжется с Вами и ответит на
            все вопросы
          </div>
          <div className={styles.contacts_form_inputs}>
            <img
              src="images/contacts_image.png"
              alt="Burger in the box"
              className={styles.contacts_image}
            />
            <div
              className={cn(styles.contacts_form_input, {
                [styles.error]: error.name,
              })}
            >
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={state.name}
                onChange={handleOnChange}
              />
            </div>
            <div
              className={cn(styles.contacts_form_input, {
                [styles.error]: error.telephone,
              })}
            >
              <input
                type="text"
                name="telephone"
                placeholder="Ваш телефон"
                value={state.telephone}
                onChange={handleOnChange}
              />
            </div>
            <button className={styles.button} onClick={handleOnClick}>
              Оставить контакты
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
