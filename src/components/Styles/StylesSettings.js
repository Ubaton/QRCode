import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";

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
          } ml-40 mt-32 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-100 text-gray-500`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRightEndButton"
          >
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
              >
                Options
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
              >
                Logo
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
              >
                Frame
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
              >
                API
              </a>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default StylesSettings;
