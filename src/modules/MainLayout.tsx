import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Footer from "./nav/Footer";
import ProgressBar from "@/components/progress-bar/progress-bar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ProgressBar />
      <Footer />
    </div>
  );
};

export default MainLayout;
