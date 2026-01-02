import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StarRating from "./Ratings";
import { Truck, Calendar, Box, ArrowLeft, BadgePercent } from "lucide-react";
import AddToBag from "../../cart/components/AddtoBag";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import type { ApiProduct } from "../types/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useProducts } from "../hooks/useProducts";
import { useBagItems } from "../../cart/store/useBag";
import { Button } from "@/components/ui/button";

const ProductDetailsCard = () => {
  const { products, loading } = useProducts();
  const { isInBag, addToBag, removeFromBag } = useBagItems();
  const { id } = useParams();
  const navigate = useNavigate();

  const product: ApiProduct = products.find((p: ApiProduct) => p.webID === id);

  if (loading || !products.length) return <ProductDetailsSkeleton />;

  if (products.length < 0) {
    return (
      <div className="flex justify-center items-center h-screen">
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

  const cartItem = isInBag(product.webID);

  const onCartClick = () => {
    cartItem ? removeFromBag(product.webID) : addToBag(product);
  };

  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const shippingOptions = [
    { name: "Discount", desc: "Disc 50%", icon: BadgePercent },
    { name: "Package", desc: "Regular Package", icon: Box },
    { name: "Delivery Time", desc: "3-4 Working Days", icon: Calendar },
    { name: "Estimation Arrive", desc: formattedDate, icon: Truck },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 px-4 md:px-8 py-8 max-w-7xl mx-auto"
    >
      {/* Back Button */}
      <Button
        variant={`outline`}
        className={`border-0`}
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} />
        Back to store
      </Button>

      {/* Breadcrumb */}
      <Breadcrumb className="text-sm text-muted-foreground mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Store</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Images */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <img
            src={product.image?.url}
            alt={product.productTitle}
            className="w-full object-contain rounded-md"
          />
          <div className="flex gap-4 justify-center mt-5 p-4 overflow-x-scroll">
            {product.swatchImages?.map((img, i) => (
              <Tooltip key={i}>
                <TooltipContent>{img.URL}</TooltipContent>
                <TooltipTrigger>
                  <Avatar className="cursor-pointer w-10 h-10">
                    <AvatarImage src={img.URL} />
                  </Avatar>
                </TooltipTrigger>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              {product.productTitle}
            </h1>
            <StarRating rating={product.rating?.avgRating ?? 0} />
            <p className="text-gray-500 text-sm">
              {product.rating?.count} units sold
            </p>
            <p className="text-3xl font-semibold tracking-tight font-[Bodoni Moda]">
              $
              {product.prices?.[0]?.salePrice?.minPrice ??
                product.prices?.[0]?.regularPrice?.minPrice ??
                "N/A"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 items-center">
            <button onClick={onCartClick}>
              <AddToBag text={cartItem ? "Remove From Bag" : "Add to Bag"} />
            </button>
          </div>

          {/* Shipping */}
          <div className="border p-4 w-full rounded-2xl">
            <p className="font-semibold mb-3">Shipping</p>
            <div className="grid md:grid-cols-2 gap-6">
              {shippingOptions.map(({ name, desc, icon: Icon }) => (
                <div key={name} className="flex gap-3 items-center">
                  <Icon size={40} className="text-black p-2 rounded-xl" />
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
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsCard;
