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

const Router = () => {
  return (
    <div className="h-[100%] w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/luxury-collections" element={<Collections />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/newBlog" element={<CreateBlog />} />
        <Route path="/FAQS" element={<FAQs />} />
      </Routes>
    </div>
  );
};

export default Router;
