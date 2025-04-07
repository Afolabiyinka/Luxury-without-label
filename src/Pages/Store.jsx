import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import productData from "../Store.json";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.name} />
      ))}
    </div>
  );
};

export default Store;
