import ProductCard from "../Components/ProductCard";
import { motion } from "framer-motion";
import { Frown, RefreshCcw } from "lucide-react";
import { useProducts } from "../Contexts/ProductsContext";
import { Button } from "@material-tailwind/react";
import DummyCard from "../Components/DummyCard";
// import Pagination from "../Components/Pagination";

const Store = () => {
  const { products, loading, error, getProducts } = useProducts();
  return (
    <motion.div
      className="flex flex-col justify-center items-center p-2 w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {loading ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 items-center justify-center px-6 md:px-8">
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
            <Frown size={64} className="text-gray-400 animate-bounce mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Error fetching products
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Unstable internet connection!
            </p>
            <Button onClick={() => getProducts} color="secondary">
              <RefreshCcw />
              Try Again
            </Button>
            {/* <Pagination currentPage={1} /> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-7 items-center justify-center px-6 md:px-8">
            <h1 className="text-2xl font-bold font-mono mb-4">
              Trendy fashion picks
            </h1>
            {products.map((product) => (
              <ProductCard
                key={product.webID}
                product={{
                  id: product.webID,
                  name: product.productTitle,
                  image: product.image?.url,
                  // prices: product.prices?.[0]?.regularPrice || "N/A",
                  webID: product.webID,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Store;
