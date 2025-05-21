import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "../src/Css/NProgress.css";
import ScrollToTopButton from "./Components/ScrollBtn";

//Importing the navigation
import NavBar from "./Pages/NavBar";
import Router from "./Routes/Route";
import Footer from "./Pages/Footer";

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
    <>
      <NavBar />
      <Router />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
