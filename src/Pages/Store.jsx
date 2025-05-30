import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { motion } from "framer-motion";
import Loader from "../Components/Loader";
import { Frown } from "lucide-react";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function getProductsInfos() {
    const url =
      "https://kohls.p.rapidapi.com/products/list?limit=100&offset=1&dimensionValueID=AgeAppropriate%3ATeens";
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
      console.log(result);
      setProducts(result.payload.products);
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getProductsInfos();
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center p-2 w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : error ? (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <Frown size={64} className="text-gray-400 animate-bounce mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Error fetching products
            </h2>
            <p className="text-lg text-gray-600">
              Unstable internet connection!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid  md:grid-cols-3 gap-7 items-center justify-center px-4">
          {products.map((product) => (
            <ProductCard
              key={product.webID}
              product={{
                id: product.webID,
                name: product.productTitle,
                image:
                  product.image?.url ||
                  product.image?.main ||
                  product.image?.imageURL ||
                  "https://via.placeholder.com/150",
                prices: product.prices?.[0]?.regularPrice || "N/A",
                webID: product.webID,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Store;
