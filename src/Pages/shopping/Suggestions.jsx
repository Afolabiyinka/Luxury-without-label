import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import { useProducts } from "./hooks/ProductsContext";
import DummyCard from "./components/DummyCard";
import CustomBotton from "./components/CutstomBtn";
import { Link } from "react-router-dom";

const Suggestions = () => {
  const { loading, error, suggestions } = useProducts();
  return (
    <motion.div
      className="flex flex-col justify-center items-center p-2 sm:p-4 w-full h-full relative py-6 sm:py-9"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 items-center justify-center px-4 sm:px-6 md:px-8 w-full max-w-7xl">
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
        </div>
      ) : error ? (
        <div className="h-full w-full flex justify-center items-center px-4">
          {/* <div className="text-center flex flex-col items-center justify-center">
            <Frown size={64} className="animate-bounce mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Error fetching products
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Unstable internet connection!
            </p>
          </div> */}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl">
          <div className="w-full flex gap-4 sm:gap-5 px-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 lg:gap-7 md:overflow-visible md:px-6 lg:px-8">
            {suggestions.map((product) => (
              <div
                key={product.webID}
                className="snap-start shrink-0 w-64 sm:w-72 md:w-auto"
              >
                <ProductCard
                  product={{
                    id: product.webID,
                    name: product.productTitle,
                    image: product.image?.url,
                    price:
                      product.prices?.[0]?.salePrice?.minPrice ??
                      product.prices?.[0]?.regularPrice?.minPrice ??
                      "N/A",
                    webID: product.webID,
                    colors: product.availableColor ?? [],
                    rating: product.rating?.avgRating ?? 0,
                    reviews: product.rating?.count ?? 0,
                    otherImgs: product.swatchImages ?? [],
                  }}
                />
              </div>
            ))}
          </div>

          <Link to="/store" className="mt-2 sm:mt-4">
            <CustomBotton text={`View More`} />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Suggestions;
