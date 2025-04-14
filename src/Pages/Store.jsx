import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import productData from "../Mock Backend/Store.json";
import { motion } from "framer-motion";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center p-5 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
    >
      <div className="grid  md:grid-cols-3 gap-7 items-center justify-center px-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </motion.div>
  );
};

export default Store;
