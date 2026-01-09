import { create } from "zustand";
import type { ApiProduct } from "../../shopping/types/types";

interface WishlistItemsStore {
  wishlistItems: ApiProduct[];
  addToWishlist: (product: ApiProduct) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

function getWishlistItems() {
  const stored = localStorage.getItem("wishlist-items");

  return stored ? JSON.parse(stored) : [];
}

export const useWishlist = create<WishlistItemsStore>((set, get) => ({
  wishlistItems: getWishlistItems(),
  addToWishlist: (product) =>
    set((state) => {
      if (state.wishlistItems.some((fav) => fav.webID === product.webID)) {
        return state;
      }

      const updated = [...state.wishlistItems, product];
      localStorage.setItem("wishlist-items", JSON.stringify(updated));
      return { wishlistItems: updated };
    }),
  removeFromWishlist: (id) =>
    set((state) => {
      const updated = state.wishlistItems?.filter((fav) => fav.webID != id);
      localStorage.setItem("wishlist-items", JSON.stringify(updated));

      return { wishlistItems: updated };
    }),
  isInWishlist: (id) => {
    return get().wishlistItems.some((fav) => fav.webID === id);
  },
}));
