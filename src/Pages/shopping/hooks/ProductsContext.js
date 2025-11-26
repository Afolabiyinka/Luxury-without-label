import { createContext, useContext, useEffect, useState } from "react";
const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function getProducts() {
    const url =
      "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2f610978fbmsh006b099c52c156dp1d2834jsnc2b929edd4b6",
        "x-rapidapi-host": "kohls.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      setProducts(result.payload.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function getReviews(productId) {
    const url = `https://kohls.p.rapidapi.com/reviews/list?Limit=6&Offset=0&ProductId=${productId}&Sort=SubmissionTime%3Adesc`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a869d5ae45mshdec2ffbb2a10db1p1a7913jsnd5d7cd0b7dd9",
        "x-rapidapi-host": "kohls.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setReviews(result.payload.results || []);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const value = {
    products,
    loading,
    error,
    getReviews,
    reviews,
    getProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
