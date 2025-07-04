import { createContext, useContext, useEffect, useState } from "react";
const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProductsInfos() {
      const url =
        "https://kohls.p.rapidapi.com/products/list?limit=100&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a869d5ae45mshdec2ffbb2a10db1p1a7913jsnd5d7cd0b7dd9",
          "x-rapidapi-host": "kohls.p.rapidapi.com",
        },
      };

      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setProducts(result.payload.products);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getProductsInfos();
  }, []);

  const value = {
    products,
    loading,
    error,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
