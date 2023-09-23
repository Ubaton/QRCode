import React, { useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import GitHub_Frame from "../../assets/icons/GitHub_Frame.svg";
import TwitterX_Frame from "../../assets/icons/TwitterX_Frame.svg";
import Instagram_Frame from "../../assets/icons/Instagram_Frame.svg";
import Facebook_Frame from "../../assets/icons/Facebook_Frame.svg";
import WhatsApp_Frame from "../../assets/icons/WhatsApp_Frame.svg";
import NewFrame from "../../assets/icons/NewFrame.svg";

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
                  <AddIcon
                    className={`transform ${
                      isLogoOpen
                        ? "rotate-45 delay-1000"
                        : "rotate-0 delay-1000"
                    } transition-transform duration-1000 ease-in-out`}
                  />
                </div>
              </span>
              {isLogoOpen && (
                <div className="ml-4 text-gray-50 transition duration-150 ease-in-out ">
                  <ul className="flex items-center justify-center gap-4 mr-4 p-2 text-center  ">
                    <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <FaGithub className="w-20 h-20" />
                    </li>
                    <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <FaInstagram className="w-20 h-20" />
                    </li>
                    <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <FaXTwitter className="w-20 h-20" />
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <span
                className={`block px-4 py-2 hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800 ${
                  isFrameOpen ? "bg-blue-100 text-blue-600 " : ""
                }`}
                onClick={toggleFrameDropdown}
              >
                <div className="grid grid-cols-2 gap-60 justify-between">
                  Frame
                  <AddIcon
                    className={`transform ${
                      isFrameOpen
                        ? "rotate-45 delay-1000"
                        : "rotate-0 delay-1000"
                    } transition-transform duration-1000 ease-in-out`}
                  />
                </div>
              </span>
              {isFrameOpen && (
                <div className="ml-4 text-gray-50 ">
                  <div
                    className="max-w-full"
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      scrollbarWidth: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    <ul
                      className="flex items-center gap-4 p-2 text-center"
                      style={{
                        flexWrap: "nowrap",
                        marginRight: "-8px", // Add negative margin to counteract the padding of the last item
                      }}
                    >
                      <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img
                          src={GitHub_Frame}
                          alt="GitHub Frame"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </li>
                      <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img
                          src={Instagram_Frame}
                          alt="Instagram Frame"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </li>
                      <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img
                          src={TwitterX_Frame}
                          alt="TwitterX Frame"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </li>
                      <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img
                          src={Facebook_Frame}
                          alt="TwitterX Frame"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </li>
                      <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img
                          src={WhatsApp_Frame}
                          alt="TwitterX Frame"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </li>
                      <li className="w-20 h-20 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img
                          src={NewFrame}
                          alt="TwitterX Frame"
                          style={{ width: "80px", height: "80px" }}
                        />
                      </li>
                      {/* Add more items here */}
                    </ul>
                  </div>
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
