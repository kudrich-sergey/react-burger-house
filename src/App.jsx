import { useState, useRef, useEffect } from "react";

import { MainSection } from "./Sections/Main/MainSection";
import { WhySection } from "./Sections/Why/WhySection";
import { ProductsSection } from "./Sections/Products/ProductsSection";
import { ContactsSection } from "./Sections/Contacts/ContactsSection";
import { AppContext } from "./AppContext";

export const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isFixedHeader, setIsFixedHeader] = useState(false);
  const whyRef = useRef(null);
  const productsRef = useRef(null);
  const contactsRef = useRef(null);

  const executeScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const fixedHeader = () => {
      if (window.scrollY > 480) {
        setIsFixedHeader(true);
      } else {
        setIsFixedHeader(false);
      }
    };
    window.addEventListener("scroll", fixedHeader);

    return () => {
      window.removeEventListener("scroll", fixedHeader);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        executeScroll,
        isFixedHeader,
        whyRef,
        productsRef,
        contactsRef,
      }}
    >
      <MainSection />
      <WhySection whyRef={whyRef} />
      <ProductsSection productsRef={productsRef} />
      <ContactsSection contactsRef={contactsRef} />
    </AppContext.Provider>
  );
};
