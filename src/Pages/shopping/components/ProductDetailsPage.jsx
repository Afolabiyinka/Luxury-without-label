import { useEffect } from "react";
import { Typography, Tooltip } from "@material-tailwind/react";
import StarRating from "./Ratings";
import { Heart, Truck, Sparkle, Calendar, Box, ArrowLeft } from "lucide-react";
import { useCart } from "../../cart/hooks/CartContext";
import AddToCart from "../../cart/components/Add ToCart";
import { useWishList } from "../../../hooks/WishListContext";
import { useProducts } from "../hooks/ProductsContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@material-tailwind/react";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

const ProductDetailsCard = () => {
  const { products, getReviews, reviews, loading } = useProducts();
  const { isCart, addToCart, removeFromCart } = useCart();
  const { inWishlist, addToWishList, removeFromWishList } = useWishList();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.webID === id);

  // Fetch reviews when product is found
  useEffect(() => {
    if (product?.webID) {
      getReviews(product.webID);
    }
  }, [product?.webID, getReviews]);

  // Show skeleton while loading
  if (loading || !products.length) {
    return <ProductDetailsSkeleton />;
  }

  // Show error if product not found
  if (!product) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-3xl flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-lg mb-4">Product not found</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const cartItem = isCart(product.webID);

  const onCartClick = (e) => {
    e.preventDefault();
    cartItem ? removeFromCart(product.webID) : addToCart(product);
  };

  const onWishListClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    inWishlist(product.webID)
      ? removeFromWishList(product.webID)
      : addToWishList(product);
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

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-3xl flex flex-col justify-center items-center z-50"
      onClick={() => navigate(-1)}
    >
      {/* Back Button */}
      <button
        className="p-3 border bg-white hover:bg-gray-100 transition flex gap-3 items-center w-full"
        onClick={() => navigate(-1)}
        aria-label="Go back to store"
      >
        <ArrowLeft size={30} className="stroke-[1px]" />
        <p>Back to store</p>
      </button>

      <div
        className="relative flex flex-col lg:flex-row bg-white shadow-lg p-4 h-screen w-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image */}
        <div className="lg:w-1/2 flex flex-col items-center p-4">
          <img
            src={product.image.url}
            alt={product.productTitle}
            className="h-[400px] w-full object-contain rounded-md"
          />
          <div className="flex gap-4 mt-4 overflow-x-auto p-9 w-full">
            {product.swatchImages?.map((img, idx) => (
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
              <Link to="/">Home</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbLink>Store</BreadcrumbLink>
          </Breadcrumb>

          {/* Product Info */}
          <div>
            <Typography variant="h1" className="text-2xl font-semibold mb-2">
              {product.productTitle}
            </Typography>
            <StarRating rating={product.rating.avgRating} />
            <p className="text-gray-500 text-sm">
              {product.rating.count} units sold
            </p>
            <Typography className="mt-3 text-3xl font-bold font-serif">
              $
              {product.prices?.[0]?.salePrice?.minPrice ??
                product.prices?.[0]?.regularPrice?.minPrice ??
                "N/A"}
            </Typography>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button onClick={onCartClick}>
              <AddToCart text={cartItem ? "Remove From Cart" : "Add to cart"} />
            </button>
            <Tooltip content="Add to Wishlist">
              <button
                className={`rounded-full border h-12 w-12 flex justify-center items-center transition ${
                  inWishlist(product.webID)
                    ? "bg-red-500 text-white"
                    : "hover:bg-red-100 hover:text-red-500"
                }`}
                onClick={onWishListClick}
                aria-label="Add to wishlist"
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

          {/* Reviews */}
          <div>
            <p className="font-semibold mt-4 mb-2">Reviews</p>
            {reviews.length ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b py-2">
                  <p className="font-medium">{review.userNickname}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsCard;
