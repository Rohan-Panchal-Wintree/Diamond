import React, { Fragment } from "react";
import "../styles/HeaderNavigation.css";
import SidebarDrawer from "./SidebarDrawer";
import useDeviceType from "../utils/useDeviceType";
import { Link } from "react-router-dom";

const menu = [
  { title: "about us", link: "/about-us" },
  { title: "shop", link: "/shop" },
  { title: "contact us", link: "/contact-us" },
];

const HeaderNavigation = () => {
  const deviceType = useDeviceType();

  return (
    <Fragment>
      <nav className="flex justify-between items-center p-6 px-10 text-Medium-Gray">
        <div className="text-2xl gilda text-Charcoal-Gray capitalize">
          <Link href="/">
            {/* APG diamonds */}
            <img
              className="w-48 mobile:w-36"
              // src="/assets/APG_DIAMONDS_LOGO_BLACK.webp"
              src="/assets/apgdiamonds-logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div>
          {" "}
          <SidebarDrawer />{" "}
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderNavigation;
