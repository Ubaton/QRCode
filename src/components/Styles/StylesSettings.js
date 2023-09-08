import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

const StylesSettings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-[11.5rem] right-96 ">
      <button
        className=" relative rounded-full h-10 w-10 flex items-center justify-center bg-blue-500 text-white shadow-inner shadow-zinc-600"
        onClick={toggleDropdown}
      >
        <ArrowRight className=" absolute " />
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
                <div className="grid grid-cols-2 gap-60 justify-between">
                  Options
                  <AddIcon />
                </div>
              </span>
            </li>
            <li>
              <span className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                <div className="grid grid-cols-2 gap-60 justify-between">
                  Logo
                  <AddIcon />
                </div>
              </span>
            </li>
            <li>
              <span className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800">
                <div className="grid grid-cols-2 gap-60 justify-between">
                  Frame
                  <AddIcon />
                </div>
              </span>
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
