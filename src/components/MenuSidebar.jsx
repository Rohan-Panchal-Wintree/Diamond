import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa"; // Importing icons

const MenuSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar starts closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar open/close
  };

  return (
    <div className="relative">
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 text-white text-3xl md:hidden"
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "sidebar-enter-active" : "sidebar-exit-active"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white text-3xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuSidebar;
