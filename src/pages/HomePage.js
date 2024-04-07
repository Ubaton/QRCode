import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { Button, Radio } from "@mui/material";
import { NavLink } from "react-router-dom";
import { auth } from "../data/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { IoPersonCircleOutline } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import StylesSettings from "../components/Styles/StylesSettings";
import CookieConsent from "../pages/utils/CookieConsent";
import BackgroundHexagon from "./pattens/BackgroundHexagon";

function HomePage({ darkMode, toggleDarkMode }) {
  const qrCodeRef = useRef(null);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("black");
  const [url, setUrl] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [styleIndex, setStyleIndex] = useState(0);
  const StyledButton = styled(Button)`
    &.bg-gradient-button {
      background: linear-gradient(to right, #00bcd4, #006dc0);
      color: white;
      font-size: 14px;
      padding: 6px 16px;
      text-align: center;
      margin-right: 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s, transform 0.3s;

      &:hover {
        background: linear-gradient(to bottom left, #00bcd4, #2196f3);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(79, 196, 255, 0.6);
      }
    }
  `;

  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setShowCookieConsent(false);
    }

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

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowCookieConsent(false);
    toast.error("Cookies have been rejected.");
  };

  const generateQRCode = async () => {
    const canvas = await html2canvas(qrCodeRef.current);

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
        className={`flex flex-col  items-center justify-center ${
          darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
        }`}
      >
        <BackgroundHexagon />
        <div className="items-center justify-center h-screen grid-cols-2 z-10">
          <div className="fixed top-0 right-0 sm:p-1 sm:m-1 space-x-4">
            <div className="flex pt-0.5 pr-3 w-62 items-center justify-center gap-2">
              {authUser ? (
                <>
                  {profilePictureUrl ? (
                    <img
                      src={profilePictureUrl}
                      alt="qrcode Profile"
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
                <Button
                  variant="outlined"
                  className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]"
                >
                  <p className="upper-case text-gray-500 ">Login</p>
                </Button>
              </NavLink>

              <NavLink to="/signup">
                <div>
                  <StyledButton className="bg-gradient-button">
                    Sign Up
                  </StyledButton>
                </div>
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

          <div className="fixed left-0 z-10">
            <SideBar darkMode={darkMode} />
          </div>

          <div className="p-4 pt-12">
            <div className="container flex flex-row mx-auto">
              <div
                className={`container mr-1 shadow-lg  gap-2 mx-auto p-2 ${
                  darkMode ? "bg-DarkMode-cards dark" : "bg-slate-100"
                } rounded-md`}
              >
                <ImageUpload setImage={setImage} />

                <div className="flex items-center justify-center p-1">
                  <ColorPicker setColor={setColor} />
                </div>
                <div className=" flex items-center justify-center ">
                  <div
                    className="w-200 h-200 p-1 rounded-md overflow-hidden"
                    ref={qrCodeRef}
                  >
                    <QRCodeGenerator
                      image={image}
                      color={color}
                      url={url}
                      styleIndex={styleIndex}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="gap-2 p-2">
                    <div className="flex items-center justify-center">
                      {qrCodeStyles.map((style, index) => (
                        <label
                          className="flex items-center justify-center"
                          key={index}
                        >
                          <Radio
                            size="small"
                            type="radio"
                            value={index}
                            checked={styleIndex === index}
                            onChange={handleStyleChange}
                            className="mr-1 z-0 border-gray-500"
                          />
                          <span className="text-gray-500 m-1">
                            {style.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <input
                    name="Link_QRCode"
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL or text"
                    className="w-50% rounded-md p-2 m-2 border border-spacing-2 border-blue-500"
                  />

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
              <div className="flex justify-end mt-32">
                <span className="hidden sm:flex">
                  <StylesSettings />
                </span>
              </div>
            </div>
          </div>

          <div className="fixed bottom-1 right-4">
            <div
              className="relative"
              onMouseEnter={() => setShowBubble(true)}
              onMouseLeave={() => setShowBubble(false)}
            >
              <button className="text-gray-500 hover:text-amber-900 focus:outline-none pl-36">
                <NavLink
                  to="https://www.paypal.com/donate/?hosted_button_id=FBWXAGZU3AHLA"
                  target="blank"
                >
                  <CoffeeIcon />
                </NavLink>
              </button>
              {showBubble && (
                <div className="absolute bottom-[1.75rem] left-1/2 transform -translate-x-1/4 bg-amber-900 text-white px-2 py-1 rounded-md text-center text-sm">
                  Buy Me Coffee
                </div>
              )}
            </div>
          </div>
          <div>
            {showCookieConsent && (
              <CookieConsent
                acceptCookies={acceptCookies}
                rejectCookies={rejectCookies}
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default HomePage;
