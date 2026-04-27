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
      className="flex flex-col items-center px-4 md:px-10 py-8 w-full min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <DummyCard key={i} />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="h-[60vh] w-full flex justify-center items-center">
          <div className="text-center flex flex-col items-center">
            <Frown className="mb-4 w-16 h-16 stroke-[1.5]" />
            <h2 className="text-2xl font-semibold mb-2">
              Error fetching products
            </h2>
            <p className="text-gray-500 mb-6">
              Something went wrong. Try again.
            </p>
            <Button size="lg" onClick={() => refetch()}>
              <RotateCcw className="h-5 w-5 mr-2" />
              Retry
            </Button>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {products.length > 0 ? (
            products.map((product: ApiProduct) => (
              <ProductCard key={product.webID} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500">No products available.</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Store;