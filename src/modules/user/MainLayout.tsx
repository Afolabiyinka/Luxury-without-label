import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar.tsx";
import Footer from "./nav/FooterNav.tsx";

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
