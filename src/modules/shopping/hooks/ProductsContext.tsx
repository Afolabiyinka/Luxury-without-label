import { createContext, useContext, useState, type ReactNode } from "react";
import type { ApiProduct } from "../types/types";

/* ========= TYPES ========= */

type Review = {
  rating: number;
  reviewText: string;
  submissionTime: string;
};

type ProductsContextType = {
  products: ApiProduct[];
  reviews: Review[];
  loading: boolean;
  error: boolean | null;
  getProducts: () => Promise<void>;
  getReviews: (productId: string) => Promise<void>;
};

/* ========= CONTEXT ========= */

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

/* ========= HOOK ========= */

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductProvider");
  }
  return context;
};

/* ========= PROVIDER ========= */

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);

  async function getProducts() {
    const url =
      "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY!,
          "x-rapidapi-host": "kohls.p.rapidapi.com",
        },
      });

      const result = await response.json();
      setProducts(result?.payload?.products ?? []);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function getReviews(productId: string) {
    const url = `https://kohls.p.rapidapi.com/reviews/list?Limit=6&Offset=0&ProductId=${productId}&Sort=SubmissionTime%3Adesc`;

    try {
      setLoading(true);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY!,
          "x-rapidapi-host": "kohls.p.rapidapi.com",
        },
      });

      const result = await response.json();
      setReviews(result?.payload?.results ?? []);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const value: ProductsContextType = {
    products,
    reviews,
    loading,
    error,
    getProducts,
    getReviews,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
