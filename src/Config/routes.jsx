import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Store from "../Pages/shopping/Store";
import Blogs from "../Pages/blogs/Blogs";
import Home from "../Pages/Home";
import CreateBlog from "../Pages/blogs/CreateBlog";
import Collections from "../Pages/collections/Collections";
import FAQs from "../Pages/Subpages/FAQs";
import Wishlist from "../Pages/shopping/Wishlist";
import NotFound from "../Pages/NotFound";
import NewCart from "../Pages/cart/NewCart";
import Exclusives from "../Pages/exclusives/Exclusives";
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
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "create-blog",
        Component: CreateBlog,
      },
      {
        path: "exclusives",
        Component: Exclusives,
      },
      // {
      //   path: "wishlist",
      //   Component: Wishlist,
      // },
    ],
  },
];
const RoutesConfig = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;
