import React from "react";
import { Outlet } from "react-router-dom";

const CollectionsLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CollectionsLayout;
