import { useEffect } from "react";
import { Typography, Tooltip } from "@material-tailwind/react";
import StarRating from "./Ratings";
import { Heart, Truck, Sparkle, Calendar, Box, X } from "lucide-react";
import { useCart } from "../../cart/hooks/CartContext";
import AddToCart from "../../cart/components/Add ToCart";
import { useWishList } from "../../../hooks/WishListContext";
import { useProducts } from "../hooks/ProductsContext";

import { motion } from "framer-motion";

import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const ProductDetailsCard = ({ isOpen, isClose, product }) => {
  const { getReviews, reviews } = useProducts();
  const { isCart, addToCart, removeFromCart } = useCart();
  const { inWishlist, addToWishList, removeFromWishList } = useWishList();

  useEffect(() => {
    if (product?.id) {
      getReviews(product.id);
    }
  }, [product?.id, getReviews]);

  const cartItem = isCart(product.id);
  const navigate = useNavigate();

  const onCartClick = (e) => {
    e.preventDefault();
    cartItem ? removeFromCart(product.id) : addToCart(product);
  };

  const onWishListClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    inWishlist ? removeFromWishList(product.id) : addToWishList(product);
  };

  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const shippingOptions = [
    { name: "Discount", desc: "Disc 50%", icon: Sparkle },
    { name: "Package", desc: "Regular Package", icon: Box },
    { name: "Delivery Time", desc: "3-4 Working Days", icon: Calendar },
    { name: "Estimation Arrive", desc: formattedDate, icon: Truck },
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-3xl flex justify-center items-center z-50"
      onClick={isClose}
    >
      <div
        className="relative flex flex-col lg:flex-row bg-white rounded-xl shadow-lg p-4 h-screen w-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="fixed top-5 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          onClick={isClose}
        >
          <X size={20} />
        </button>

        {/* Left: Image */}
        <div className="lg:w-1/2 flex flex-col items-center p-4">
          <img
          
            src={product.image}
            alt={product.name}
            className="h-[400px] w-full object-contain rounded-md"
          />
          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto p-9 w-full">
            {product.otherImgs?.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 h-20 w-20 p-2 border rounded cursor-pointer hover:border-black transition"
              >
                <img
                  src={img.URL}
                  alt={img.color}
                  className="h-full w-full object-cover rounded-md"
                />
                <p className="text-xs text-center mt-2 text-gray-600">
                  {img.color.split("-")[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 flex flex-col gap-6 p-4">
          {/* Breadcrumb */}
          <Breadcrumb className="border p-2 bg-gray-200 rounded-xl">
            <BreadcrumbLink>
              <Link onClick={() => navigate(-1)}> Home</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink>Store</BreadcrumbLink>
          </Breadcrumb>

          {/* Product Info */}
          <div>
            <Typography variant="h1" className="text-2xl font-semibold mb-2">
              {product.name}
            </Typography>
            <StarRating rating={product.rating} />
            <p className="text-gray-500 text-sm">
              {product.reviews} units sold
            </p>
            <Typography className="mt-3 text-3xl font-bold font-serif">
              ${product.price || "N/A"}
            </Typography>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={onCartClick}>
              <AddToCart
                text={cartItem ? "Remove From Cart" : " Add to cart"}
              />
            </button>

            <Tooltip content="Add to Wishlist">
              <button
                className={`rounded-full border h-12 w-12 flex justify-center items-center transition ${
                  inWishlist
                    ? "bg-red-500 text-white"
                    : "hover:bg-red-100 hover:text-red-500"
                }`}
                onClick={onWishListClick}
              >
                <Heart />
              </button>
            </Tooltip>
          </div>

          {/* Shipping */}
          <div className="border p-4 rounded-2xl">
            <p className="font-semibold mb-3">Shipping</p>
            <div className="grid md:grid-cols-2 gap-6">
              {shippingOptions.map(({ name, desc, icon: Icon }) => (
                <div key={name} className="flex gap-3 items-center">
                  <Icon
                    size={40}
                    className="text-black flex-shrink-0 bg-gray-200 p-2 rounded-xl"
                  />
                  <div>
                    <p className="text-gray-600 text-sm">{name}</p>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center text-sm mt-6 border rounded-xl p-3 bg-gray-100">
              <Truck size={16} />
              <p>Free Delivery on orders above $30.00</p>
            </div>
          </div>
          <div>
            {reviews.map((review) => {
              <div>{review.userNickname}</div>;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsCard;
