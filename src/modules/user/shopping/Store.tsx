import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import { Frown, RotateCcw } from "lucide-react";
import DummyCard from "./components/DummyCard";
import type { ApiProduct } from "./types/types";
import { useProducts } from "./hooks/useProducts";
import { Button } from "@/components/ui/button";

const Store = () => {
  const { products, loading, error, refetch } = useProducts();

  return (
    <motion.div
      className="flex flex-col justify-center items-center p-2 w-full h-full relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {loading ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 h-full items-center justify-center px-6 md:px-8">
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
        </div>
      ) : error ? (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="text-center flex flex-col items-center justify-center">
            <Frown size={100} className="mb-4 stroke-[1px]" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Error fetching products
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Unstable internet connection!
            </p>
            <Button size={`lg`} onClick={() => refetch()}>
              <RotateCcw className="h-6 w-6 mr-2" />
              Retry
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 items-center justify-center px-6 md:px-8 w-full">
          {products.map((product: ApiProduct) => (
            <ProductCard key={product.webID} product={product} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Store;
