import {
  useState,
  useEffect,
  useContext,
  createContext,
  type ReactNode,
} from "react";

export type WishListProduct = {
  id: string;
  name: string;
  image?: string;
  price?: number;
};

type WishListContextType = {
  wishListItems: WishListProduct[];
  inWishlist: (productId: string) => boolean;
  addToWishList: (product: WishListProduct) => void;
  removeFromWishList: (productId: string) => void;
};

const WishListContext = createContext<WishListContextType | undefined>(
  undefined
);

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context)
    throw new Error("useWishList must be used within WishListProvider");
  return context;
};

type WishListProviderProps = { children: ReactNode };

export const WishListProvider = ({ children }: WishListProviderProps) => {
  const [wishListItems, setWishListItems] = useState<WishListProduct[]>(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishListItems));
  }, [wishListItems]);

  const inWishlist = (productId: string) =>
    wishListItems.some((product) => product.id === productId);

  const addToWishList = (product: WishListProduct) => {
    setWishListItems((prev) => [...prev, product]);
  };

  const removeFromWishList = (productId: string) => {
    setWishListItems((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  const value: WishListContextType = {
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
};
