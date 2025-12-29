import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Footer from "./nav/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
