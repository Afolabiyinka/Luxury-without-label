import { useNavigate } from "react-router-dom";
import type { ApiProduct } from "../types/types";

export default function ProductCard({ product }: { product: ApiProduct }) {
  const navigate = useNavigate();

  const price =
    product.prices?.[0]?.salePrice?.minPrice ??
    product.prices?.[0]?.regularPrice?.minPrice;

  return (
    <div
      onClick={() => navigate(`/product/${product.webID}`)}
      className="cursor-pointer group"
    >
      <div className="flex flex-col rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition-all duration-300 active:scale-[0.98]">

        {/* Image */}
        <div className="relative  flex items-center justify-center p-4">
          <img
            src={product.image?.url}
            alt={product.productTitle}
            className="h-56 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
            {product.productTitle}
          </h3>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold tracking-tight">
              <span className="text-sm text-gray-500 mr-1">$</span>
              {price ?? "N/A"}
            </p>

            {/* Optional badge (future use) */}
            {product.prices?.[0]?.salePrice && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                Sale
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}