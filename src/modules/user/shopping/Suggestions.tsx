import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DummyCard from "./components/DummyCard";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "./hooks/useProducts";
import type { ApiProduct } from "./types/types";
const Suggestions = () => {
  const { loading, error, products } = useProducts();

  return (
    <motion.section
      className="flex flex-col items-center p-4 sm:p-6 w-full relative py-8 sm:py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {loading ? (
        <div className="flex flex-col items-center gap-8 p-3 w-full">
          <div className="w-full  gap-5 px-4  p-5 overflow-x-scroll  flex md:gap-6 lg:gap-8 md:px-6 lg:px-8">
            <DummyCard />
            <DummyCard />
            <DummyCard />
            <DummyCard />
          </div>

          <Link to="/store">
            <Button size="lg" className="mt-4">
              <ShoppingBag className="mr-2 h-5 w-5" />
              View More
            </Button>
          </Link>
        </div>
      ) : error ? (
        <div></div>
      ) : (
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full  gap-5 px-4  p-5 overflow-x-scroll  flex md:gap-6 lg:gap-8 md:px-6 lg:px-8">
            {products.slice(0, 10).map((product: ApiProduct) => (
              <motion.div
                key={product.webID}
                className="shrink-0 w-72 sm:w-72"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Suggestions;
