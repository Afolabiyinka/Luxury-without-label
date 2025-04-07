import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../src/Css/NProgress.css";
import NavBar from "./Pages/NavBar";
import HomePage from "./Pages/Subpages/HomePage";
import Home from "./Pages/Home";
import Collections from "./Pages/Subpages/Collections";
import NotFound from "./Pages/NotFound";
import ScrollToTopButton from "./Components/ScrollBtn";
import Footer from "./Pages/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 1000);

    return () => {
      clearTimeout(timer);
      NProgress.done(); // Ensure progress is done when component unmounts
    };
  }, [location]); // Only depend on location changes

  return (
    <div className="py-2 bg-[#F5DEB3]">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/luxury collections" element={<Collections />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
