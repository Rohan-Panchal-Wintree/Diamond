import React, { Fragment } from "react";
import "../styles/HeaderNavigation.css";
import SidebarDrawer from "./SidebarDrawer";
import useDeviceType from "../utils/useDeviceType";
import { NavLink } from "react-router-dom";

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
          <a href="/">
            {/* APG diamonds */}
            <img
              className="w-2/4"
              src="/assets/APG_DIAMONDS_LOGO_BLACK.png"
              alt="logo"
            />
          </a>
        </div>
        {deviceType === "mobile" ? (
          ""
        ) : (
          <ul className="flex">
            {menu.map((menuItem, index) => {
              return (
                <li
                  key={index}
                  className="px-6 uppercase font-thin hover:text-Charcoal-Gray"
                >
                  <NavLink
                    to={menuItem.link}
                    className={({ isActive }) =>
                      isActive ? "text-Charcoal-Gray" : ""
                    }
                  >
                    {menuItem.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
        <div>
          {" "}
          <SidebarDrawer />{" "}
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderNavigation;
