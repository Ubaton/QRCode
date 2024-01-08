import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/cmg.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import { auth } from "../../data/firebase";
import { signOut } from "firebase/auth";
//Page imports
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import ProPlanPopup from "../../pages/ProPlanPopup";
import SocialsPage from "../Socials/SocialsPage";

const settingsOptions = [
  { nameC: "File Convert", link: "/fileconvert", isNewC: false },
  { name: "Compress Image", link: "/compressimage", isNew: false },
  { nameC: "Compress Video", link: "/compressvideo", isNewC: true },
];

function SideBar({ darkMode }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showSwitchSettingsMenu, setShowSwitchSettingsMenu] = useState(false);
  const navigate = useNavigate();

  const versionUpdate = {
    version: "v1.2.2",
  };

  const handleNavLinkClick = (page) => {
    setCurrentPage(page);
    toggleMobileMenu();
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const toggleSettingsMenu = () => {
    setShowSettingsMenu((prev) => !prev);

    if (showSwitchSettingsMenu) {
      setShowSwitchSettingsMenu(false);
    }
  };

  const toggleSwitchSettingsMenu = () => {
    setShowSwitchSettingsMenu((prev) => !prev);

    if (showSettingsMenu) {
      setShowSettingsMenu(false);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-0 m-0 left-0 p-2 z-10  rounded-md"
      >
        <span className="text-gray-500">
          {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </span>
      </button>
      <div
        className={`h-[calc(105vh-2rem)] w-full max-w-[15rem] shadow-xl shadow-gray-900/6 ${
          showMobileMenu ? "block" : "hidden md:block"
        } md:block h-screen rounded-r-lg ${
          darkMode ? "bg-DarkMode-cards" : "bg-slate-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center py-6">
          <NavLink to="/home">
            <img
              src={Logo}
              alt="Creative Minds Graphics (PTy) Ltd"
              width="157"
              height="29"
            />
          </NavLink>
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
              to="/home"
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
            >
              Home
            </NavLink>
            <div className="border border-spacing-1 border-gray-200" />
            <NavLink
              onClick={() => handleNavLinkClick("about")}
              to="/about"
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
            >
              About
            </NavLink>
            <div className="border border-spacing-1 border-gray-200" />
            <NavLink
              onClick={() => handleNavLinkClick("contact")}
              to="/contact"
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
            >
              Contact
            </NavLink>
            <div className="border border-spacing-1 border-gray-200" />

            {/* Switching Options */}
            <button
              onClick={toggleSwitchSettingsMenu}
              className="block px-20 py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200 focus:outline-none"
            >
              Switch to
            </button>
            {showSwitchSettingsMenu && (
              <div className="border border-spacing-1 border-gray-200 rounded-md">
                {settingsOptions.map((option) => (
                  <NavLink
                    key={option.link}
                    to={option.link}
                    className="block py-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200 relative"
                  >
                    {option.name}
                    {option.isNew && (
                      <span className="absolute top-0 right-0 inline-block whitespace-nowrap rounded-[0.27rem] bg-gradient-to-r from-cyan-500 to-blue-500 px-[0.35em] pb-[0.15em] pt-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-50">
                        <span>soon</span>
                      </span>
                    )}
                    {option.nameC}
                    {option.isNewC && (
                      <span className="absolute top-0 right-0 inline-block whitespace-nowrap rounded-[0.27rem] bg-gradient-to-r from-cyan-500 to-blue-500 px-[0.35em] pb-[0.15em] pt-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-50">
                        <span>Building</span>
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>
            )}
          </nav>
        </div>

        {/* Settings Icon */}
        <div className="fixed block bottom-20 left-4">
          <div className="flex flex-row items-center space-x-2">
            <button
              onClick={toggleSettingsMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <SettingsIcon />
            </button>
          </div>
          {showSettingsMenu && (
            <div
              className={`absolute h-38 bottom-8 text-gray-500 border border-gray-100 border-spacing-1 left-0 mt-2 w-48 p-2 rounded-md shadow-lg items-center justify-center ${
                darkMode ? "dark bg-DarkMode-border" : "bg-slate-50"
              }`}
            >
              <div className="grid grid-flow-row items-left justify-left  ">
                <NavLink
                  to="/profilepage"
                  className="flex items-center justify-center "
                >
                  <Button variant="text">
                    <p className="normal-case px-14 text-gray-500">Profile</p>
                  </Button>
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="mt-2 px-3 py-1.5 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-md hover:from-red-600 hover:to-red-400 focus:outline-none focus:ring focus:ring-red-300"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ProPlanPopup */}
        <div>
          <ProPlanPopup />
        </div>
        {/* ProPlanPopup */}

        <div className="flex items-center justify-center p-2">
          <SocialsPage />
        </div>

        {/* Footer */}
        <div className="flex flex-col w-52 h-16 items-center justify-center fixed bottom-0 ml-4 mb-2 text-xs">
          <Link
            to="https://www.facebook.com/CreativeMindsGraphic/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 text-gray-500 hover:text--500"
          >
            <span className="flex text-center justify-center m-1">
              Powered By<br></br>Creative Minds Graphics (Pty) Ltd
            </span>
          </Link>
          <div className="text-gray-500">{versionUpdate.version}</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
