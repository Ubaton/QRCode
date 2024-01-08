import React from "react";
import { NavLink } from "react-router-dom";
import PathIcon from "../assets/path.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-DarkMode-background text-white">
      <div className="hidden lg:block fixed left-20 top-0">
        <img src={PathIcon} alt="" width={430} />
      </div>
      <h1 className="text-4xl md:text-7xl text-center font-extrabold mb-6 text-gray-50">
        <span className="text-blue-500">Generate</span> Your <br /> Designed QR
        Code
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
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
