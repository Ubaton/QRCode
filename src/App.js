import React, { useState, useRef } from "react";
import ImageUpload from "../src/ImageUpload/ImageUpload";
import ColorPicker from "../src/ColorPicker/ColorPicker";
import QRCodeGenerator from "../src/QRCodeGenerator/QRCodeGenerator";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function App() {
  const qrCodeRef = useRef(null);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("black");
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="containergrid grid-cols-2 gap-4 mx-auto p-4 bg-slate-100 rounded-md">
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
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-600 text-white rounded-md p-2 m-2 "
          >
            Generate QR Code
          </button>
        </div>
      </div>
      <div className="p-1">
        <p>
          <strong>Powered By</strong> Creative Minds Graphics (Pty) Ltd
        </p>
      </div>
    </div>
  );
}

export default App;
