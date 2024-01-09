import React from "react";
import { NavLink } from "react-router-dom";
import PathIcon from "../assets/path.png";

const LandingPage = ({ darkMode }) => {
  return (
    <div
      className={`flex flex-col  items-center justify-center min-h-screen ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div className="hidden lg:block fixed left-20 top-0">
        <img src={PathIcon} alt="" width={430} />
      </div>
      <h1 className="text-4xl md:text-7xl text-center font-extrabold mb-6 text-gray-50">
        <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent">
          Generate
        </span>{" "}
        <span className=" text-gray-500">
          Your <br /> Designed QR Code
        </span>
      </h1>
      <p className="text-lg text-gray-400 mb-8 text-center">
        Tailor-Made Connectivity for Your Distinct Identity.
      </p>
      <div className="flex flex-col items-center gap-4">
        <NavLink to="/home">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-lg px-8 py-3 text-white rounded-md">
            Get Started
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
