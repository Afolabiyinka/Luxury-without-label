import { useNavigate } from "react-router-dom";
import type { ApiProduct } from "../types/types";
export default function ProductCard({ product }: { product: ApiProduct }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${product.webID}`)}>
      <div className="flex flex-col rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer active:opacity-80 w-full">
        {/* Product Image */}
        <div className="relative overflow-hidden group">
          <img
            src={product.image?.url}
            alt={product.productTitle}
            className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-300 border-b"
          />
        </div>

        <div className="flex flex-col justify-between p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 font-[Lato]">
            {product.productTitle}
          </h3>

          <span className="flex justify-between p-2 items-center">
            <p className="text-lg font-bold font-[Bodoni Moda]">
              $
              {product.prices?.[0]?.salePrice?.minPrice ??
                product.prices?.[0]?.regularPrice?.minPrice ??
                "N/A"}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
