import React, { Fragment } from "react";
import "../styles/HeaderNavigation.css";
import SidebarDrawer from "./SidebarDrawer";
import useDeviceType from "../utils/useDeviceType";

const HeaderNavigation = () => {
  const deviceType = useDeviceType();

  return (
    <Fragment>
      <nav className="flex justify-between items-center p-6 px-10 text-white">
        <div className="text-2xl gilda">Sapphire</div>
        {deviceType === "mobile" ? (
          ""
        ) : (
          <ul className="flex">
            <li className="px-6 uppercase font-thin">Brands</li>
            <li className="px-6 uppercase font-thin">Inspirations</li>
            <li className="px-6 uppercase font-thin">shop</li>
          </ul>
        )}
        <div>{/* <SidebarDrawer /> */}</div>
      </nav>
    </Fragment>
  );
};

export default HeaderNavigation;
