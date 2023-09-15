import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

const StylesSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  const [isFrameOpen, setIsFrameOpen] = useState(false);
  // const [isApiOpen, setIsApiOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleLogoDropdown = (e) => {
    e.stopPropagation();
    setIsLogoOpen((prevIsLogoOpen) => !prevIsLogoOpen);
  };

  const toggleFrameDropdown = (e) => {
    e.stopPropagation();
    setIsFrameOpen((prevIsFrameOpen) => !prevIsFrameOpen);
  };

  return (
    <div className="fixed top-[11.5rem] right-96 ">
      <button
        className=" relative rounded-full h-10 w-10 flex items-center justify-center bg-blue-500 text-white shadow-inner shadow-zinc-600"
        onClick={toggleDropdown}
      >
        <ArrowRight className={`absolute ${isOpen ? "rotate-90" : ""}`} />
        <div
          id="dropdownRightEnd"
          className={`z-10 ${
            isOpen ? "" : "hidden"
          } ml-96 mt-32 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-100 text-gray-500`}
        >
          <ul
            className="py-2 text-left text-sm w-80 text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRightEndButton"
          >
            <li>
              <span className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                <div className="text-center font-bold text-md">Options</div>
              </span>
            </li>
            <li>
              <span
                className={`block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800 ${
                  isLogoOpen ? "bg-blue-100 text-blue-600" : ""
                }`}
                onClick={toggleLogoDropdown}
              >
                <div className="grid grid-cols-2 gap-60 justify-between">
                  Logo
                  <AddIcon className={` ${isLogoOpen ? "rotate-45" : ""}`} />
                </div>
              </span>
              {isLogoOpen && (
                <div className="ml-4 text-gray-50 ">
                  <ul className="flex items-center justify-center gap-4 mr-4 p-2 text-center  ">
                    <li className="w-20 h-20 bg-blue-500 rounded-md"></li>
                    <li className="w-20 h-20 bg-blue-500 rounded-md"></li>
                    <li className="w-20 h-20 bg-blue-500 rounded-md"></li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <span
                className={`block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800 ${
                  isFrameOpen ? "bg-blue-100 text-blue-600" : ""
                }`}
                onClick={toggleFrameDropdown}
              >
                <div className="grid grid-cols-2 gap-60 justify-between">
                  Frame
                  <AddIcon className={` ${isFrameOpen ? "rotate-45" : ""}`} />
                </div>
              </span>
              {isFrameOpen && (
                <div className="ml-4 text-gray-50 ">
                  <ul className="flex items-center justify-center gap-4 mr-4 p-2 text-center  ">
                    <li className="w-20 h-20 bg-blue-500 rounded-md"></li>
                    <li className="w-20 h-20 bg-blue-500 rounded-md"></li>
                    <li className="w-20 h-20 bg-blue-500 rounded-md"></li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <span className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                <div className="grid grid-cols-2 gap-60 justify-between">
                  API
                  <AddIcon />
                </div>
              </span>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default StylesSettings;
