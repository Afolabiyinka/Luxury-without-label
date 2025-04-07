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

  return (
    <div className="py-2 bg-[#F5DEB3]">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/luxury-collections" element={<Collections />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<Store />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
