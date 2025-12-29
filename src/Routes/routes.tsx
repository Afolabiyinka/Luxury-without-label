import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Store from "../modules/shopping/Store.tsx";
import Home from "../modules/Home.tsx";
import Collections from "../modules/collections/Collections.tsx";
import NotFound from "../modules/NotFound.tsx";
import NewCart from "../modules/cart/NewCart.tsx";
import Exclusives from "../modules/exclusives/Exclusives.tsx";
import CollectionsLayout from "../modules/CollectionsLayout.tsx";
import Watches from "../modules/Subpages/Watches.tsx";
import ProductDetailsCard from "../modules/shopping/components/ProductDetailsPage.tsx";
import MainLayout from "../modules/MainLayout.tsx";
import random from "@/random.tsx";
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
        path: "cart",
        Component: NewCart,
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
        path: "collections",
        Component: CollectionsLayout,
        children: [
          {
            path: "watches",
            Component: Watches,
          },
        ],
      },
    ],
  },
];
const RoutesConfig: React.FC = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;
