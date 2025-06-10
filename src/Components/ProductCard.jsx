import { Card, Typography, IconButton, Button } from "@material-tailwind/react";
import { useCartContext } from "../Contexts/CartContext";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { isCart, addToCart, removeFromCart } = useCartContext();
  const cartItem = isCart(product.id);

  function onCartClick(e) {
    e.preventDefault();

    if (cartItem) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  }

  // Format price consistently
  const formattedPrice =
    typeof product.price === "number"
      ? product.price.toFixed(2)
      : parseFloat(product.price || 0).toFixed(2);

  return (
    <Card className="p-0 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Cart Status Badge */}
        {cartItem && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
            In Cart
          </div>
        )}
      </div>

      <div className="flex-1 p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>

          {product.webId && (
            <p className="text-xs text-gray-500">SKU: {product.webId}</p>
          )}
        </div>

        <div className="text-xl font-bold text-amber-600">
          ${formattedPrice}
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center p-4">
        <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
          View Product
        </button>

        <button
          onClick={onCartClick}
          className={`
            p-3 rounded-lg transition-all duration-300 hover:scale-105
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
          {cartItem ? <FaTrash size={18} /> : <FaShoppingCart size={18} />}
        </button>
      </div>
    </Card>
  );
}
