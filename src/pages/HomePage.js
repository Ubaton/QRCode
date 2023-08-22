import React, { useState, useEffect, useRef } from "react";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import QRCodeGenerator from "../components/QRCodeGenerator/QRCodeGenerator";
import qrCodeStyles from "../components/QRCodeGenerator/QRCodeStyles";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SideBar from "../components/SideBar/SideBar";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { auth } from "../data/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { IoPersonCircleOutline } from "react-icons/io5";

function HomePage({ darkMode, toggleDarkMode }) {
  const qrCodeRef = useRef(null);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("black");
  const [url, setUrl] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setProfilePictureUrl(
          `https://www.google.com/s2/photos/profile/${user.email}`
        );
      } else {
        setAuthUser(null);
        setProfilePictureUrl("");
      }
    });

    return () => {
      listen();
    };
  }, []);

  const generateQRCode = async () => {
    const canvas = await html2canvas(qrCodeRef.current);

    // Convert the canvas to an image file and save it
    canvas.toBlob((blob) => {
      saveAs(blob, "qr_code.png");
    });
  };

  const handleStyleChange = (event) => {
    const newIndex = parseInt(event.target.value);

    if (!isNaN(newIndex) && newIndex >= 0 && newIndex < qrCodeStyles.length) {
      setStyleIndex(newIndex);
    }
  };

  return (
    <div className="">
      <div
        className={`flex items-center justify-center ${
          darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
        }`}
      >
        <div className="items-center justify-center h-screen grid-cols-2">
          <div className="fixed top-0 right-0   sm:p-1 sm:m-1 space-x-4">
            <div className="flex pt-0.5 pr-3 w-62 items-center justify-center gap-2">
              {authUser ? (
                <>
                  {profilePictureUrl ? (
                    <img
                      src={profilePictureUrl}
                      alt="Profile"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  ) : (
                    <IoPersonCircleOutline className="text-4xl text-gray-500 mr-2" />
                  )}
                </>
              ) : (
                <></>
              )}
              <NavLink to="/login" className="px-2">
                <Button variant="outlined">
                  <p className="normal-case text-gray-500">Login</p>
                </Button>
              </NavLink>

              <NavLink to="/signup">
                <Button variant="outlined">
                  <p className="normal-case text-gray-500">Sign Up</p>
                </Button>
              </NavLink>
              <div>
                <button
                  onClick={toggleDarkMode}
                  className={`p-[0.4em]  ${
                    darkMode
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600"
                      : "bg-gradient-to-r from-gray-200 to-gray-500 hover:bg-gray-700"
                  } text-white rounded-md`}
                >
                  {darkMode ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <ModeNightOutlinedIcon />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="fixed left-0">
            <SideBar darkMode={darkMode} />
          </div>
          <div className="p-2 pt-12">
            <div className="container mx-auto">
              {/* The Card Component */}
              <div
                className={`containergrid mr-1 shadow-lg grid-cols-2 gap-4 mx-auto p-4 ${
                  darkMode ? "bg-DarkMode-cards dark" : "bg-slate-100"
                } rounded-md`}
              >
                <ImageUpload setImage={setImage} />

                <div className="flex items-center justify-center p-1">
                  <ColorPicker setColor={setColor} />
                </div>
                <div className="flex items-center justify-center ">
                  <div
                    className="w-250 h-250 p-1 rounded-md overflow-hidden"
                    ref={qrCodeRef}
                  >
                    <QRCodeGenerator
                      image={image}
                      color={color}
                      url={url}
                      styleIndex={styleIndex}
                    />
                    <div className="flex items-center justify-center">
                      <div className="p-2">
                        <select
                          value={styleIndex}
                          onChange={handleStyleChange}
                          id="small"
                          className="w-full p-2 text-sm text-gray-50 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-center"
                        >
                          {qrCodeStyles.map((style, index) => (
                            <option
                              className="bg-gray-600 rounded-md"
                              key={index}
                              value={index}
                            >
                              {style.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* This is input field for URL and button to trigger QR code generation */}
                <div className="grid grid-cols-2">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL or text"
                    className="w-50% rounded-md p-2 m-2 border border-spacing-2 border-blue-500"
                  />
                  {/* Conditionally render the QR code generation button */}
                  {authUser ? (
                    <button
                      onClick={generateQRCode}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                    >
                      Generate QR Code
                    </button>
                  ) : (
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2">
                      <NavLink to="/signup">
                        <p className="text-gray-50 text-center3">
                          Create an Account
                        </p>
                      </NavLink>
                    </button>
                  )}
                </div>

                <div className="text-center">
                  <p>
                    <strong className="text-gray-500">Try Use</strong>{" "}
                    <span className="text-sky-500">
                      Black Logo.png for Better Results
                    </span>
                  </p>
                </div>
              </div>
              {/* The Card Component */}
            </div>
          </div>

          <div className="fixed bottom-1 right-4">
            <div
              className="relative"
              onMouseEnter={() => setShowBubble(true)}
              onMouseLeave={() => setShowBubble(false)}
            >
              <button className="text-gray-500 hover:text-amber-900 focus:outline-none pl-36">
                <CoffeeIcon />
              </button>
              {showBubble && (
                <div className="absolute bottom-[1.75rem] left-1/2 transform -translate-x-1/4 bg-amber-900 text-white px-2 py-1 rounded-md text-center text-sm">
                  Buy Me Coffee
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
