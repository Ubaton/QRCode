// HomePage.js
import React, { useState, useRef } from "react";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import ColorPicker from "../components/ColorPicker/ColorPicker";
import QRCodeGenerator from "../components/QRCodeGenerator/QRCodeGenerator";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SideBar from "../components/SideBar/SideBar";

function HomePage({ darkMode, toggleDarkMode }) {
  const qrCodeRef = useRef(null);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("black");
  const [url, setUrl] = useState("");

  return (
    <div className="">
      <div
        className={`flex items-center justify-center ${
          darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
        }`}
      >
        <div className="items-center justify-center h-screen grid-cols-2">
          <div className="fixed left-0">
            <SideBar darkMode={darkMode} />
          </div>
          <div className="p-2 pt-2">
            <div
              className={`containergrid mr-1 shadow-md grid-cols-2 gap-4 mx-auto p-4 ${
                darkMode ? "bg-DarkMode-cards dark" : "bg-slate-200"
              } rounded-md`}
            >
              <ImageUpload className="" setImage={setImage} />

              <div className="flex items-center justify-center p-1">
                <ColorPicker setColor={setColor} />
              </div>
              <div className="flex items-center justify-center ">
                <div
                  className="w-250 h-250 p-1 rounded-md overflow-hidden"
                  ref={qrCodeRef}
                >
                  <QRCodeGenerator image={image} color={color} url={url} />
                </div>
              </div>

              {/* Add input field for URL and button to trigger QR code generation */}
              <div className="grid grid-cols-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter URL or text"
                  className="w-50% rounded-md p-2 m-2 border border-spacing-2 border-blue-500"
                />
                {/* Add button to generate the QR code */}
                <button
                  onClick={async () => {
                    const canvas = await html2canvas(qrCodeRef.current);

                    // Convert the canvas to an image file and save it
                    canvas.toBlob((blob) => {
                      saveAs(blob, "qr_code.png");
                    });
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                >
                  Generate QR Code
                </button>
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
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`fixed top-0 right-0 p-2  sm:p-1 sm:m-1 ${
            darkMode
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600"
              : "bg-gradient-to-r from-gray-200 to-gray-500 hover:bg-gray-700"
          } text-white rounded-md`}
        >
          {darkMode ? <LightModeOutlinedIcon /> : <ModeNightOutlinedIcon />}
        </button>
      </div>
    </div>
  );
}

export default HomePage;
