import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cartItems");

    if (storedProducts) setCartItems(JSON.parse(storedProducts));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, []);

  const isCart = (productId) => {
    return cartItems.some((product) => product.id === productId);
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((product) => product.id !== productId));
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
