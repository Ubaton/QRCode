import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/cmg.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//Page imports
import AboutPage from "../../pages/AboutPage"; // Fixed import
import ContactPage from "../../pages/ContactPage"; // Fixed import

const settingsOptions = [
  { name: "File Convert", link: "/fileconvert", isNew: true },
  { name: "Compress Image", link: "/compressimage", isNew: true },
  { name: "Compress Video", link: "/compressvideo", isNew: true },
];

function SideBar({ darkMode }) {
  const [currentPage, setCurrentPage] = useState("home");

  // Function to handle navigation clicks and update the currentPage state
  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    toggleMobileMenu(); // Close the mobile menu after clicking a link
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // Function to toggle the settings menu
  const toggleSettingsMenu = () => {
    setShowSettingsMenu((prev) => !prev);
  };

  return (
    <div className="">
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
            className=""
          />
        </div>
        {currentPage === "home" && <div></div>}

        {currentPage === "about" && <AboutPage />}

        {currentPage === "contact" && <ContactPage />}

        {/* Navigation Links */}
        <div
          className={`${
            showMobileMenu ? "block" : "hidden md:block"
          } md:block flex items-center justify-center mt-10`}
        >
          <nav className="flex flex-col space-y-2 p-1 text-center">
            <NavLink
              onClick={() => handleNavLinkClick("home")}
              exact
              to="/"
              activeClassName="bg-blue-500 text-white"
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
            >
              Home
            </NavLink>
            <div className="border border-spacing-1 border-gray-200" />
            <NavLink
              onClick={() => handleNavLinkClick("about")}
              to="/about"
              activeClassName="bg-blue-500 text-white"
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
            >
              About
            </NavLink>
            <div className="border border-spacing-1 border-gray-200" />
            <NavLink
              onClick={() => handleNavLinkClick("contact")}
              to="/contact"
              activeClassName="bg-blue-500 text-white"
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
            >
              Contact
            </NavLink>
            <div className="border border-spacing-1 border-gray-200" />

            {/* Switching Options */}
            <button
              onClick={toggleSettingsMenu}
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200 focus:outline-none"
            >
              Switch to
            </button>
            {showSettingsMenu && (
              <div className="border border-spacing-1 border-gray-200 rounded-md">
                {settingsOptions.map((option) => (
                  <NavLink
                    key={option.link}
                    to={option.link}
                    activeClassName="bg-blue-500 text-white"
                    className="block py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200 relative"
                  >
                    {option.name}
                    {option.isNew && (
                      <span className="absolute top-0 right-0 inline-block whitespace-nowrap rounded-[0.27rem] bg-gradient-to-r from-cyan-500 to-blue-500 px-[0.35em] pb-[0.15em] pt-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-grag-50">
                        <span>soon</span>
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </nav>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden fixed top-0 right-0 p-2 m-2 bg-gray-300 rounded-md"
        >
          <span className="sr-only">Toggle Menu</span>
          {showMobileMenu ? <MenuIcon /> : <CloseIcon />}
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
          <div className="text-gray-500">v1.0.2</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
