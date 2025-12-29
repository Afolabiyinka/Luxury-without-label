import type { ApiProduct } from "@/modules/shopping/types/types";
import { create } from "zustand";

interface CartStore {
  cartItems: ApiProduct[];
  addToCart: (product: ApiProduct) => void;
  removeFromCart: (productId: string) => void;
  isCart: (productId: string) => boolean;
}

function getCartItems(): ApiProduct[] {
  const stored = localStorage.getItem("cart-items");
  return stored ? JSON.parse(stored) : [];
}

export const useCart = create<CartStore>((set, get) => ({
  cartItems: getCartItems(),

  addToCart: (product) =>
    set((state) => {
      if (state.cartItems.some((fav) => fav.webID === product.webID)) {
        return state;
      }

      const updated = [...state.cartItems, product];
      localStorage.setItem("cart-items", JSON.stringify(updated));
      return { cartItems: updated };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updated = state.cartItems?.filter((fav) => fav.webID !== id);
      localStorage.setItem("cart-items", JSON.stringify(updated));
      return { cartItems: updated };
    }),
  isCart: (id) => {
    return get().cartItems.some((fav) => fav.webID === id);
  },
}));
