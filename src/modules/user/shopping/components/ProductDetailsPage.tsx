import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StarRating from "./Ratings";
import { Truck, Calendar, Box, ArrowLeft, BadgePercent } from "lucide-react";
import AddToBag from "../../bag/components/AddtoBag";
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
import { useBagItems } from "../../bag/store/useBag";
import { Button } from "@/components/ui/button";

// ✅ moved outside component
const shippingOptions = (formattedDate: string) => [
  { name: "Discount", desc: "Disc 50%", icon: BadgePercent },
  { name: "Package", desc: "Regular Package", icon: Box },
  { name: "Delivery Time", desc: "3-4 Working Days", icon: Calendar },
  { name: "Estimation Arrive", desc: formattedDate, icon: Truck },
];

const ProductDetailsCard = () => {
  const { products, loading } = useProducts();
  const { isInBag, addToBag, removeFromBag } = useBagItems();
  const { id } = useParams();
  const navigate = useNavigate();

  const product: ApiProduct | undefined = products.find(
    (p: ApiProduct) => p.webID === id
  );

  if (loading || !products.length) return <ProductDetailsSkeleton />;

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <p className="text-lg mb-4">Product not found</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  document.title = `${product.productTitle}`

  const cartItem = isInBag(product.webID);

  const onCartClick = () => {
    cartItem ? removeFromBag(product.webID) : addToBag(product);
  };

  const formattedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 px-4 md:px-8 py-8 max-w-7xl mx-auto"
    >
      {/* Back Button */}
      <Button variant="outline" size={`lg`} className="border-0 shadow-none w-fit" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to store
      </Button>

      {/* Breadcrumb */}
      <Breadcrumb className="text-sm text-muted-foreground">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/store">Store</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.productTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT: IMAGE */}
        <div className="lg:w-1/2 flex flex-col gap-5">
          <div className="rounded-2xl p-6 flex items-center justify-center">
            <img
              src={product.image?.url}
              alt={product.productTitle}
              className="max-h-[400px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto scrollbar-none p-3">
            {product.swatchImages?.map((img, i) => (
              <Tooltip key={i}>
                <TooltipContent>{img.URL}</TooltipContent>
                <TooltipTrigger>
                  <Avatar className="cursor-pointer w-12 h-12 border hover:scale-105 transition">
                    <AvatarImage src={img.URL} />
                  </Avatar>
                </TooltipTrigger>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Product Info */}
          <div className="pb-6">
            <h1 className="text-2xl font-semibold mb-2">
              {product.productTitle}
            </h1>

            <StarRating rating={product.rating?.avgRating ?? 0} />

            <p className="text-gray-500 text-sm mt-1">
              {product.rating?.count} units sold
            </p>

            <p className="text-4xl font-bold tracking-tight mt-3">
              <span className="text-lg mr-1 text-gray-500">$</span>
              {product.prices?.[0]?.salePrice?.minPrice ??
                product.prices?.[0]?.regularPrice?.minPrice ??
                "N/A"}
            </p>
          </div>


          {/* Actions */}
          <div className="flex gap-3 items-center">
            <button onClick={onCartClick}>
              <AddToBag
                text={cartItem ? "Remove From Bag" : "Add to Bag"}
              />
            </button>
          </div>

          {/* Shipping */}
          <div className="bg-white border rounded-2xl p-6">
            <p className="font-semibold mb-4">Shipping</p>

            <div className="grid md:grid-cols-2 gap-5">
              {shippingOptions(formattedDate).map(
                ({ name, desc, icon: Icon }) => (
                  <div key={name} className="flex gap-3 items-center">
                    <Icon className="w-10 h-10 p-2 bg-gray-100 rounded-xl text-gray-700" />
                    <div>
                      <p className="text-gray-500 text-xs">{name}</p>
                      <p className="text-sm">{desc}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="flex gap-2 items-center text-sm mt-6 border rounded-xl p-3 bg-gray-50">
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