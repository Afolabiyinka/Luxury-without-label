import React from "react";
import NavBar from "./nav/NavBar";
import { Outlet } from "react-router-dom";
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
