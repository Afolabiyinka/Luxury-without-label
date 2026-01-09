import { type RouteObject } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "@/modules/user/others/MainLayout";

// lazy pages
const Home = lazy(() => import("@/modules/user/Home"));
const Store = lazy(() => import("@/modules/user/shopping/Store"));
const Collections = lazy(
  () => import("@/modules/user/collections/Collections")
);
const Exclusives = lazy(() => import("@/modules/user/exclusives/Exclusives"));
const CollectionsLayout = lazy(
  () => import("@/modules/user/CollectionsLayout")
);
const ProductDetailsCard = lazy(
  () => import("@/modules/user/shopping/components/ProductDetailsPage")
);
const Checkout = lazy(() => import("@/modules/user/checkout/pages/Checkout"));
const Bag = lazy(() => import("@/modules/user/cart/Bag"));
const Wishlist = lazy(() => import("@/modules/user/wishlist/Wishlist"));
const FAQs = lazy(() => import("@/modules/user/others/FAQs"));
const NotFound = lazy(() => import("@/modules/user/NotFound"));
const Random = lazy(() => import("@/random"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "bag", element: <Bag /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "faqs", element: <FAQs /> },
      { path: "luxury-collections", element: <Collections /> },
      { path: "collections", element: <CollectionsLayout /> },
      { path: "exclusives", element: <Exclusives /> },
      { path: "checkout", element: <Checkout /> },
      { path: "product/:id", element: <ProductDetailsCard /> },
      { path: "random", element: <Random /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
