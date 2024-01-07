import React from "react";
import { NavLink } from "react-router-dom";
// import AssetLogo from "../assets/Drop Shadow.png";
// import ClickIcon from "../assets/Click.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-DarkMode-background text-white">
      {/* <div className="fixed left-0 top-0 ">
        <img src={AssetLogo} alt="" width={305} />
      </div>
      <div className="fixed right-0 top-0 ">
        <img src={ClickIcon} alt="" width={305} />
      </div> */}
      <h1 className="text-7xl text-center font-extrabold mb-6 text-gray-50">
        <span className="text-blue-500">Generate</span> Your <br /> Designed QR
        Code
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Tailor-Made Connectivity for Your Distinct Identity.
      </p>
      <NavLink to="/signup">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-lg px-8 py-3 text-white rounded-md">
          Get Started
        </button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
