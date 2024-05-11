import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PathIcon from "../assets/path.png";
import SpinningGeometric from "./pattens/SpinningGeometric";

const LandingPage = ({ darkMode }) => {
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigate("/home");
    }, 1200);
  };

  return (
    <div
      className={`flex flex-col  items-center justify-center min-h-screen ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <SpinningGeometric />
      <div className="fixed top-46">
        <div className="hidden lg:block fixed left-20 top-0">
          <img src={PathIcon} alt="" width={430} />
        </div>
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05] p-2 mb-2">
          <h1 className="text-4xl md:text-7xl text-center font-extrabold mb-6 text-gray-50">
            <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 bg-clip-text text-transparent ">
              Generate
            </span>{" "}
            <span className=" text-gray-500">
              Your <br /> Designed QR Code
            </span>
          </h1>
        </div>
        <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]">
          <p className="text-lg text-gray-400 mb-8 text-center">
            Tailor-Made Connectivity for Your Distinct Identity.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-lg px-8 py-3 text-white rounded-md"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
          {showLoader && <div className="loader"></div>}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
