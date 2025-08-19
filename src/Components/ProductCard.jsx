import { Card } from "@material-tailwind/react";
import { useCartContext } from "../Contexts/CartContext";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { isCart, addToCart, removeFromCart } = useCartContext();
  const cartItem = isCart(product.id);

  function onCartClick(e) {
    e.preventDefault();
    cartItem ? removeFromCart(product.id) : addToCart(product);
  }

  return (
    <Card className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer active:opacity-80 w-[100%] ">
      {/* Product Image */}
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-300 border-b"
        />
        {/* Badge */}
        {cartItem && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            In Cart
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        <span className="flex justify-between p-2 items-center">
          <p className="text-lg font-bold text-amber-600">$120.00</p>
          <button
            onClick={onCartClick}
            className={`p-2 rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-300 hover:scale-105
              ${
                cartItem
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-gray-100 hover:bg-amber-100 text-amber-600 border border-amber-300 hover:border-amber-400"
              }
            `}
            aria-label={
              cartItem
                ? `Remove ${product.name} from cart`
                : `Add ${product.name} to cart`
            }
          >
            {cartItem ? <FaTrash size={16} /> : <FaShoppingCart size={16} />}
          </button>
        </span>
      </div>
    </Card>
  );
}
