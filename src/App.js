import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "../src/Css/NProgress.css";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Collections from "./Pages/Subpages/Collections";
import NotFound from "./Pages/NotFound";
import ScrollToTopButton from "./Components/ScrollBtn";
import Footer from "./Pages/Footer";
import Store from "./Pages/Store";
import Blogs from "./Pages/Subpages/Blogs";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Contexts/CartContext";
function App() {
  const location = useLocation();
  useEffect(() => {
    NProgress.start();

    const handleLoad = () => {
      NProgress.done();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [location]);

  useEffect(() => {}, []);
  return (
    <CartProvider>
      <div className="py-2 bg-[#F5DEB3]">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/luxury-collections" element={<Collections />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/products" element={<Store />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
        <ScrollToTopButton />
      </div>
    </CartProvider>
  );
}

export default App;
