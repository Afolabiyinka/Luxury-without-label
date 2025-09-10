import { Typography } from "@material-tailwind/react";
import StarRating from "./Ratings";
import { Heart, Truck, Sparkle, Calendar, Box, X } from "lucide-react";
import { useCartContext } from "../Contexts/CartContext";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useState } from "react";

const ProductDetailsCard = ({ isOpen, isClose, product }) => {
  const { isCart, addToCart, removeFromCart } = useCartContext();
  const cartItem = isCart(product.id);
  const [selectedColor, setSelectedColor] = useState("");

  function onCartClick(e) {
    e.preventDefault();
    e.stopPropagation();
    cartItem ? removeFromCart(product.id) : addToCart(product);
  }

  const clothSizes = ["S", "M", "L", "XL", "XXL"];

  const shippingOptions = [
    { name: "Discount", desc: "Disc 50%", icon: Sparkle },
    { name: "Package", desc: "Regular Package", icon: Box },
    { name: "Delivery Time", desc: "3-4 Working Days", icon: Calendar },
    { name: "Estimation Arrive", desc: "10-12 October 2024", icon: Truck },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={isClose}
    >
      <div
        className="relative flex flex-col lg:flex-row bg-white rounded-xl shadow-lg w-[95%] max-w-6xl p-4 overflow-y-auto max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
          onClick={isClose}
        >
          <X size={18} />
        </button>

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 p-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-[400px] w-full object-contain rounded-md border"
          />
          <div className="flex gap-4 mt-3 justify-center">
            {product.otherImgs?.map((img, idx) => (
              <div key={idx} className="h-24 w-20 border rounded">
                <img
                  src={img.URL}
                  alt={img.color}
                  className="h-full w-full object-cover rounded"
                />
                <p className="text-xs text-center">{img.color}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between p-2">
          <div>
            <Typography variant="h1" className="text-2xl mb-2 font-semibold">
              {product.name}
            </Typography>
            <StarRating rating={product.rating} />
            <p className="text-gray-500 text-sm">{product.reviews} reviews</p>

            <Typography className="mt-3 mb-6 text-3xl font-bold font-serif">
              ${product.price || "N/A"}
            </Typography>

            {/* Sizes */}
            <div className="mb-6">
              <Typography className="text-gray-500 font-medium mb-2">
                Select Size
              </Typography>
              <div className="flex gap-3 flex-wrap">
                {clothSizes.map((size) => (
                  <button
                    key={size}
                    variant="outlined"
                    size="sm"
                    className="rounded-full"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={onCartClick}
                className={`p-2 rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-300 hover:scale-105
                  ${
                    cartItem
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-gray-100 hover:bg-amber-100 text-amber-600 border border-amber-300 hover:border-amber-400"
                  }`}
                aria-label={
                  cartItem
                    ? `Remove ${product.name} from cart`
                    : `Add ${product.name} to cart`
                }
              >
                {cartItem ? (
                  <FaTrash size={16} />
                ) : (
                  <FaShoppingCart size={16} />
                )}
              </button>

              <button
                variant="outlined"
                size="sm"
                className="rounded-full border-gray-400"
              >
                <Heart className="text-black" />
              </button>
            </div>
          </div>

          {/* Shipping */}
          <div>
            <p className="font-semibold">Shipping</p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              {shippingOptions.map(({ name, desc, icon: Icon }) => (
                <div key={name} className="flex gap-3 items-center">
                  <Icon size={18} className="text-amber-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">{name}</p>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center text-sm text-gray-600 mt-3">
              <Truck size={16} />
              <p>Free Delivery on orders above $30.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
