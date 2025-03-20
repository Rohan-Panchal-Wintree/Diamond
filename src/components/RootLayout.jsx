import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <main>
      <HeaderNavigation />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
