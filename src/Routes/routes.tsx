import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "@/modules/user/shopping/Store.tsx";
import Home from "@/modules/user/Home";
import Collections from "@/modules/user/collections/Collections.tsx";
import NotFound from "@/modules/user/NotFound";
import Exclusives from "@/modules/user/exclusives/Exclusives.tsx";
import CollectionsLayout from "@/modules/user/CollectionsLayout";
import ProductDetailsCard from "@/modules/user/shopping/components/ProductDetailsPage.tsx";
import MainLayout from "@/modules/user/others/MainLayout";
import Checkout from "@/modules/user/checkout/pages/Checkout.tsx";
import Bag from "@/modules/user/cart/Bag.tsx";
import random from "@/random.tsx";
import FAQs from "@/modules/user/others/FAQs";
import Wishlist from "@/modules/user/shopping/Wishlist";

const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/product/:id",
        Component: ProductDetailsCard,
      },
      {
        path: "*",

        Component: NotFound,
      },
      {
        path: "store",
        Component: Store,
      },

      {
        path: "bag",
        Component: Bag,
      },
      {
        path: "bag",
        Component: Wishlist,
      },
      {
        path: "faqs",
        Component: FAQs,
      },
      {
        path: "luxury-collections",
        Component: Collections,
      },

      {
        path: "exclusives",
        Component: Exclusives,
      },
      {
        path: "random",
        Component: random,
      },
      {
        path: "checkout",
        Component: Checkout,
      },
      {
        path: "collections",
        Component: CollectionsLayout,
      },
    ],
  },
];
const RoutesConfig: React.FC = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;
