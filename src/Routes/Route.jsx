import { Routes, Route } from "react-router-dom";

//Importing out Pages
import Store from "../Pages/Store";
import Blogs from "../Pages/Subpages/Blogs";
import Cart from "../Pages/Cart";
import CreateBlog from "../Pages/Subpages/CreateBlog";
import Home from "../Pages/Home";
import Collections from "../Pages/Subpages/Collections";
import NotFound from "../Pages/NotFound";
import FAQs from "../Pages/Subpages/FAQs";
import ModeToggle from "../Components/ModeToggle";
import NewCart from "../Pages/NewCart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/luxury-collections" element={<Collections />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/store" element={<Store />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/cart" element={<NewCart />} />
      <Route path="/blog" element={<CreateBlog />} />
      <Route path="/FAQS" element={<FAQs />} />
      <Route path="theme" element={<ModeToggle />} />
    </Routes>
  );
};

export default Router;
