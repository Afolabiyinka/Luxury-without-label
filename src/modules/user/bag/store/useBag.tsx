import type { ApiProduct } from "../../shopping/types/types";
import { create } from "zustand";

interface BagItemsStore {
  bagItems: ApiProduct[];
  addToBag: (product: ApiProduct) => void;
  removeFromBag: (productId: string) => void;
  isInBag: (productId: string) => boolean;
}

function getBagItems(): ApiProduct[] {
  const stored = localStorage.getItem("bag-items");
  return stored ? JSON.parse(stored) : [];
}

export const useBagItems = create<BagItemsStore>((set, get) => ({
  bagItems: getBagItems(),

  addToBag: (product) =>
    set((state) => {
      if (state.bagItems.some((fav) => fav.webID === product.webID)) {
        return state;
      }

      const updated = [...state.bagItems, product];
      localStorage.setItem("bag-items", JSON.stringify(updated));
      return { bagItems: updated };
    }),
  removeFromBag: (id) =>
    set((state) => {
      const updated = state.bagItems?.filter((fav) => fav.webID !== id);
      localStorage.setItem("bag-items", JSON.stringify(updated));
      return { bagItems: updated };
    }),
  isInBag: (id) => {
    return get().bagItems.some((fav) => fav.webID === id);
  },
}));
