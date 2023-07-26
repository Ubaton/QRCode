import React, { useState, useRef, useEffect } from "react";
import ImageUpload from "../src/ImageUpload/ImageUpload";
import ColorPicker from "../src/ColorPicker/ColorPicker";
import QRCodeGenerator from "../src/QRCodeGenerator/QRCodeGenerator";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SideBar from "../src/SideBar/SideBar";

function App() {
  const qrCodeRef = useRef(null);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("black");
  const [url, setUrl] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark mode class to the root element based on the darkMode state
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <div
        className={`flex items-center justify-center  ${
          darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
        }`}
      >
        <div className=" items-center justify-center h-screen">
          <div className="fixed left-0">
            <SideBar darkMode={darkMode} />
          </div>
          <div className="p-5">
            <div
              className={`containergrid grid-cols-2 gap-4 mx-auto p-4 ${
                darkMode ? "bg-DarkMode-cards dark" : "bg-slate-200"
              } rounded-md`}
            >
              <ImageUpload className="" setImage={setImage} />

              <div className="flex items-center justify-center p-2">
                <ColorPicker setColor={setColor} />
              </div>
              <div className="flex items-center justify-center p-2">
                <div
                  className="w-250 h-250 p-2 rounded-md overflow-hidden"
                  ref={qrCodeRef}
                >
                  <QRCodeGenerator image={image} color={color} url={url} />
                </div>
              </div>

              {/* Add input field for URL and button to trigger QR code generation */}
              <div className="grid grid-cols-2 ">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter URL or text"
                  className="w-50% rounded-md p-2 m-2  border border-spacing-2 border-blue-500"
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
                  className="font-light bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600 text-white rounded-md p-2 m-2"
                >
                  Generate QR Code
                </button>
              </div>
              <div className="text-center">
                <p>
                  <strong className="text-gray-500">Try Use</strong>{" "}
                  <span className="text-sky-500">
                    Black Logo.png for Better Result
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`fixed top-0 right-0 p-2 m-2 ${
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

export default App;
