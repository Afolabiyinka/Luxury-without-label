import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col gap-11">
      <NavBar />
      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
