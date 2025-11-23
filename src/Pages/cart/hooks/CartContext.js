import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedProducts = localStorage.getItem("cartItems");
    if (storedProducts === null) return [];
    return JSON.parse(storedProducts);
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const isCart = (productId) => {
    return cartItems.some((product) => product.id === productId);
  };

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
