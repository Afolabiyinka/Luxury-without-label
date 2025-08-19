import React from "react";
import { useNavigate } from "react-router-dom";
import ProductDetailsCard from "./ProductDetailsCard";
import {
  Breadcrumb,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@material-tailwind/react";

const ProductDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* <Breadcrumb className="bg-gray-300 p-2">
        <BreadcrumbLink onClick={() => navigate(-1)}>Home</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbLink >Clothing</BreadcrumbLink>
        <BreadcrumbSeparator />
        <BreadcrumbLink>Men</BreadcrumbLink>
      </Breadcrumb> */}
      <ProductDetailsCard />
    </div>
  );
};

export default ProductDetails;
