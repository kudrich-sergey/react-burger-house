import { useContext } from "react";
import { AppContext } from "../AppContext";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);

  return { cartItems, setCartItems, totalPrice };
};
