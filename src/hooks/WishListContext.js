import { useState, useEffect, useContext, createContext } from "react";

const WishListContext = createContext();

export const useWishList = () => useContext(WishListContext);

export function WishListProvider({ children }) {
  const [wishListItems, setWishListItems] = useState(() => {
    const storedWishes = localStorage.getItem("wishlist");
    if (storedWishes === null) return [];
    return JSON.parse(storedWishes);
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishListItems));
  }, [wishListItems]);

  function inWishlist(productId) {
    return wishListItems.some((product) => product.id === productId);
  }
  function addToWishList(product) {
    setWishListItems((prev) => [...prev, product]);
    localStorage.setItem("wishlist", JSON.stringify(wishListItems));
  }

  function removeFromWishList({ productId }) {
    setWishListItems((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  }

  const value = {
    wishListItems,
    inWishlist,
    addToWishList,
    removeFromWishList,
  };
  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  );
}
