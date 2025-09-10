import { Card, IconButton, Button, Typography } from "@material-tailwind/react";
import StarRating from "./Ratings";
import { Heart, Truck, Sparkle, Calendar, Box, X } from "lucide-react";

const ProductDetailsCard = ({ isOpen, isClose, product }) => {
  const clothSizes = ["S", "M", "L", "XL", "XXL"];

  const shippingOptions = [
    { name: "Discount", desc: "Disc 50%", icon: Sparkle },
    { name: "Package", desc: "Regular Package", icon: Box },
    { name: "Delivery Time", desc: "3-4 Working Days", icon: Calendar },
    { name: "Estimation Arrive", desc: "10-12 October 2024", icon: Truck },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  flex justify-center items-center z-50 h-screen w-screen"
          onClick={isClose}
        >
          <div
            // role="dialog"
            aria-modal="true"
            className="relative flex h-fit w-[90%] max-w-4xl flex-col gap-1 p-4 lg:flex-row transition-all duration-500 border-none shadow-lg bg-white rounded-xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              size="sm"
              className="absolute top-3 right-3 rounded-full"
              onClick={isClose}
            >
              <X size={18} />
            </button>

            {/* Left: Image */}
            <div className="w-full lg:w-1/2 p-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover rounded-md"
              />
            </div>

            {/* Right: Details */}
            <div className="h-fit w-full lg:w-1/2 flex flex-col justify-between p-2">
              <div>
                <Typography
                  variant="h1"
                  className="text-2xl mb-3 font-semibold"
                >
                  {product.name}
                </Typography>
                <StarRating rating={product.rating} />
                <Typography className="mb-6 mt-2 text-3xl tracking-wide font-bold font-serif">
                  ${product.price || "N/A"}
                </Typography>

                {/* Sizes */}
                <div className="p-1 flex flex-col gap-3 mb-5">
                  <Typography className="tracking-wider text-gray-500 font-serif">
                    Select Size
                  </Typography>
                  <span className="flex gap-3">
                    {clothSizes.map((size) => (
                      <button
                        key={size}
                        variant="outlined" // ✅ valid variant
                        size="sm"
                        className="rounded-full"
                      >
                        {size}
                      </button>
                    ))}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    fullWidth
                    size="lg"
                    className="bg-black rounded-full hover:bg-opacity-90"
                  >
                    Add to Cart
                  </Button>
                  <button
                    variant="outlined" // ✅ valid
                    size="sm"
                    className="rounded-full border-gray-400"
                  >
                    <Heart className="text-black" />
                  </button>
                </div>
              </div>

              {/* Shipping */}
              <div className="p-2 rounded-lg mb-5">
                <p className="font-semibold">Shipping</p>
                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  {shippingOptions.map(({ name, desc, icon: Icon }) => (
                    <span key={name} className="flex gap-3 p-1 items-center">
                      <Icon
                        size={18}
                        className="text-amber-600 flex-shrink-0"
                      />
                      <span>
                        <p className="text-gray-600 text-sm">{name}</p>
                        <p>{desc}</p>
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex gap-2 items-center text-sm text-gray-600">
                <Truck size={16} />
                <p>Free Delivery on orders above $30.00</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsCard;
