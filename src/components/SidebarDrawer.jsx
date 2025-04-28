import React, { useEffect, useState } from "react";
import { useGSAPAnimations } from "../utils/useGSAPAnimation";
import { Link, NavLink, useLocation } from "react-router-dom";

const menu = [
  { title: "home", link: "/" },
  { title: "about us", link: "/about-us" },
  { title: "contact us", link: "/contact-us" },
];

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useGSAPAnimations("sidebar-link", "slideUp", {
    duration: 2,
  });

  return (
    <div className="relative p-4">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-0 right-0 left-0 p-4 z-50 flex flex-col items-center justify-center space-y-1"
      >
        <div
          className={`w-8 h-0.5 bg-Charcoal-Gray transition-transform duration-300 ${
            isOpen ? "rotate-45 absolute" : ""
          }`}
          style={{ transformOrigin: "center", top: "50%" }}
        ></div>

        <div
          className={`w-8 h-0.5 bg-Charcoal-Gray transition-transform duration-300 ${
            isOpen ? "-rotate-45 absolute" : ""
          }`}
          style={{ transformOrigin: "center" }}
        ></div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
        style={{
          backgroundImage: `url("/assets/sidebar-white-silk-bg.webp")`,
        }}
      >
        <div className="flex flex-col justify-center h-full pl-12 text-Charcoal-Gray gilda uppercase space-y-8">
          {menu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`${item.link}`}
                className="sidebar-link text-8xl hover:italic mobile:text-5xl"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;
