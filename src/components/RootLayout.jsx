import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";

const RootLayout = () => {
  return (
    <main>
      <HeaderNavigation />
      <Outlet />
    </main>
  );
};

export default RootLayout;
