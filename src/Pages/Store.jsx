import ProductCard from "../Components/ProductCard";
import { motion } from "framer-motion";
import { Frown } from "lucide-react";
import { useProducts } from "../hooks/ProductsContext";
import DummyCard from "../Components/DummyCard";

const Store = () => {
  const { products, loading, error, getProducts } = useProducts();
  return (
    <motion.div
      className="flex flex-col justify-center items-center p-2 w-full h-full relative"
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
            <Frown size={64} className="animate-bounce mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Error fetching products
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Unstable internet connection!
            </p>

            {/* <Pagination currentPage={1} /> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-7 items-center justify-center px-6 md:px-8">
            {products.map((product) => (
              <ProductCard
                key={product.webID}
                product={{
                  id: product.webID,
                  name: product.productTitle,
                  image: product.image?.url,
                  price:
                    product.prices?.[0]?.salePrice?.minPrice ??
                    product.prices?.[0]?.regularPrice?.minPrice ??
                    "N/A",
                  webID: product.webID,
                  colors: product.availableColr,
                  rating: product.rating.avgRating,
                  reviews: product.rating.count,
                  otherImgs: product.swatchImages,
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
