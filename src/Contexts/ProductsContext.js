import { createContext, useContext, useEffect, useState } from "react";
const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function getProducts() {
    const url =
      "https://kohls.p.rapidapi.com/products/list?limit=24&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a869d5ae45mshdec2ffbb2a10db1p1a7913jsnd5d7cd0b7dd9",
        "x-rapidapi-host": "kohls.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setProducts(result.payload.products);
      console.log(result.payload.products);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  async function getProductDetails({ webId }) {
    const url = `https://kohls.p.rapidapi.com/products/detail?webID=${webId}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "YOUR_API_KEY",
        "x-rapidapi-host": "kohls.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // ✅ parse json
      return result;
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  }
  const value = {
    products,
    loading,
    error,
    getProductDetails,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
