import {
  TooltipContent,
  TooltipTrigger,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import StarRating from "./Ratings";
import { Heart, Truck, Sparkle, Calendar, Box, X } from "lucide-react";
import { useCartContext } from "../hooks/CartContext";
import { useState } from "react";
import AddToCart from "./Add ToCart";

const ProductDetailsCard = ({ isOpen, isClose, product }) => {
  const { isCart, addToCart, removeFromCart } = useCartContext();
  const cartItem = isCart(product.id);
  const [selectedColor, setSelectedColor] = useState("");

  function onCartClick(e) {
    e.preventDefault();

    cartItem ? removeFromCart(product.id) : addToCart(product);
  }

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
        className="relative flex flex-col lg:flex-row bg-white rounded-xl shadow-lg w-[95%] max-w-6xl p-4 overflow-y-scroll max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-1 p-4 bg-gray-100 rounded-full hover:bg-gray-200"
          onClick={isClose}
        >
          <X size={18} />
        </button>

        {/* Left: Image */}
        <div className="w-fit h-fit lg:w-1/2 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="h-[400px] w-full object-contain rounded-md"
          />
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-3 justify-start items-start p-5 h-full w-fit ">
            {product.otherImgs?.map((img, idx) => (
              <div
                key={idx}
                className="h-30 w-20 p-4 border rounded flex flex-col justify-center items-center cursor-pointer"
              >
                <img
                  src={img.URL}
                  className="h-[60%] w-full object-cover rounded border"
                />
                <p className="text-xs text-center">{img.color.split("-")[0]}</p>
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
            <p className="text-gray-500 text-sm">
              {product.reviews} units sold
            </p>

            <Typography className="mt-3 mb-6 text-3xl font-bold font-serif">
              ${product.price || "N/A"}
            </Typography>

            {/* Actions */}
            <div className="flex gap-2 justify-start mb-6 p-1">
              <button onClick={onCartClick}>
                <AddToCart
                  text={cartItem ? "Remove From Cart" : " Add to cart"}
                />
              </button>

              <Tooltip>
                <TooltipTrigger>
                  <button className="rounded-full border h-12 w-12 flex justify-center items-center">
                    <Heart className="text-black" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Add to wishList</TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Shipping */}
          <div className="border p-4 rounded-2xl">
            <p className="font-semibold">Shipping</p>
            <div className="grid md:grid-cols-2 gap-6 mt-2">
              {shippingOptions.map(({ name, desc, icon: Icon }) => (
                <div key={name} className="flex gap-3 items-center">
                  <Icon size={18} className="text-black flex-shrink-0" />
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
