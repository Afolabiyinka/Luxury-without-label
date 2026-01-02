import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetailsSkeleton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-3xl flex flex-col justify-center items-center z-50"
    >
      {/* Back Button */}
      <button
        className="p-3 border hover:bg-gray-200 transition flex gap-3 items-center w-full bg-white"
        onClick={() => navigate(-1)}
        aria-label="Close modal"
      >
        <ArrowLeft size={30} className="stroke-[1px]" />
        <p>Back to store</p>
      </button>

      <div
        className="relative flex flex-col lg:flex-row bg-white shadow-lg p-4 h-screen w-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image Section */}
        <div className="lg:w-1/2 flex flex-col items-center p-4">
          {/* Main Image Skeleton */}
          <div className="h-[400px] w-full bg-gray-200 rounded-md animate-pulse" />

          {/* Thumbnail Images Skeleton */}
          <div className="flex gap-4 mt-4 overflow-x-auto p-9 w-full">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-20 w-20 p-2 border rounded"
              >
                <div className="h-full w-full bg-gray-200 rounded-md animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details Section */}
        <div className="lg:w-1/2 flex flex-col gap-6 p-4">
          {/* Breadcrumb Skeleton */}
          <div className="border p-2 bg-gray-200 rounded-xl h-10 animate-pulse" />

          {/* Product Info Skeleton */}
          <div>
            {/* Title */}
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />

            {/* Rating */}
            <div className="h-6 bg-gray-200 rounded w-32 mb-2 animate-pulse" />

            {/* Units Sold */}
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />

            {/* Price */}
            <div className="h-10 bg-gray-200 rounded w-32 mt-3 animate-pulse" />
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex gap-3">
            {/* Add to Cart Button */}
            <div className="h-12 bg-gray-200 rounded-lg w-40 animate-pulse" />

            {/* Wishlist Button */}
            <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
          </div>

          {/* Shipping Section Skeleton */}
          <div className="border p-4 rounded-2xl">
            {/* Shipping Title */}
            <div className="h-6 bg-gray-200 rounded w-24 mb-3 animate-pulse" />

            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  {/* Icon */}
                  <div className="h-10 w-10 bg-gray-200 rounded-xl flex-shrink-0 animate-pulse" />

                  <div className="flex-1">
                    {/* Label */}
                    <div className="h-4 bg-gray-200 rounded w-20 mb-1 animate-pulse" />
                    {/* Value */}
                    <div className="h-4 bg-gray-200 rounded w-28 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* Free Delivery Banner */}
            <div className="h-12 bg-gray-100 rounded-xl mt-6 animate-pulse" />
          </div>

          {/* Reviews Section Skeleton */}
          <div>
            {/* Reviews Title */}
            <div className="h-6 bg-gray-200 rounded w-20 mb-2 mt-4 animate-pulse" />

            {/* Review Items */}
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="border-b py-2">
                <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsSkeleton;
