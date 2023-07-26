import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../src/assets/images/cmg.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function SideBar({ darkMode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className=" ">
      <div
        className={`h-[calc(105vh-2rem)] w-full max-w-[15rem] shadow-xl shadow-gray-900/6 ${
          showMobileMenu ? "block" : "hidden md:block"
        } md:block h-screen rounded-r-lg ${
          darkMode ? "bg-DarkMode-cards" : "bg-slate-100"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <img
            src={Logo}
            alt="Creative Minds Graphics"
            width="157"
            height="29"
            className=" "
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            showMobileMenu ? "block" : "hidden md:block"
          } md:block flex items-center justify-center mt-10`}
        >
          <nav className="flex flex-col space-y-2 p-1 text-center">
            <NavLink
              exact
              to="/"
              activeClassName="bg-blue-500 text-white"
              className="block px-20 py-2 text-gray-500 hover:text-blue-500 hover:bg-gradient-to-r from-gray-100 to-gray-200 hover:bg-gray-200"
            >
              Home
            </NavLink>
            <div className="border border-spacing-2 border-gray-200" />
            <NavLink
              to="/about"
              activeClassName="bg-blue-500 text-white"
              className="block px-20 py-2 text-gray-500 hover:text-blue-500 hover:bg-gradient-to-r from-gray-100 to-gray-200 hover:bg-gray-200"
            >
              About
            </NavLink>
            <div className="border border-spacing-2 border-gray-200" />
            <NavLink
              to="/contact"
              activeClassName="bg-blue-500 text-white"
              className="block px-20 py-2 text-gray-500 hover:text-blue-500 hover:bg-gradient-to-r from-gray-100 to-gray-200 hover:bg-gray-200"
            >
              Contact
            </NavLink>
            <div className="border border-spacing-2 border-gray-200" />
            {/* Add more navigation links as needed */}
          </nav>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden fixed top-0 right-0 p-2 m-2 bg-gray-500 rounded-md"
        >
          <span className="sr-only">Toggle Menu</span>
          {showMobileMenu ? (
            <CloseIcon className="text-white" />
          ) : (
            <MenuIcon className="text-white" />
          )}
        </button>

        {/* Footer */}
        <div className="flex flex-col w-52 h-16 items-center justify-center fixed bottom-0 ml-4 mb-2 text-xs">
          <a
            href="https://www.facebook.com/CreativeMindsGraphic/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 text-gray-500 hover:text-sky-500"
          >
            <span className="flex text-gray-500 text-center justify-center m-1">
              Powered By<br></br>Creative Minds Graphics (Pty) Ltd
            </span>
          </a>
          <div className="text-gray-500">v1.0.1</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
