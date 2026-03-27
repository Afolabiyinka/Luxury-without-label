import { Outlet } from "react-router-dom";
import Footer from "./nav/FooterNav.tsx";
import NavLayout from "./nav/NavLayout.tsx";

const MainLayout = () => {
  return (
    <div>
      <NavLayout />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
