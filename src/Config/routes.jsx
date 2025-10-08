import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout";
import Store from "../Pages/Store";
import Blogs from "../Pages/Subpages/Blogs";
import Home from "../Pages/Home";
import CreateBlog from "../Pages/Subpages/CreateBlog";
import Collections from "../Pages/Subpages/Collections";
import FAQs from "../Pages/Subpages/FAQs";
import Wishlist from "../Pages/Wishlist";
import NotFound from "../Pages/NotFound";
import NewCart from "../Pages/NewCart";
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
        path: "FAQs",
        Component: FAQs,
      },
      {
        path: "wishlist",
        Component: Wishlist,
      },
    ],
  },
];
const RoutesConfig = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;
