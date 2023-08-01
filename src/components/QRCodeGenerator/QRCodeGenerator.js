import React, { useState } from "react";
import QRCode from "qrcode.react";
import ProPlanPopup from "../../pages/ProPlanPopup";

function QRCodeGenerator({ image, color, url }) {
  const [qrCodeCount, setQrCodeCount] = useState(0);
  const maxQrCodeCount = 2; // Set the maximum number of QR codes allowed

  const handleGenerateQRCode = () => {
    if (qrCodeCount < maxQrCodeCount) {
      setQrCodeCount((prevCount) => prevCount + 1);
    } else {
      // Show the ProPlanPopup when the user tries to generate more than two QR codes
      // Implement the logic to show the popup here (e.g., by setting a state variable to control the visibility of the popup)
      // For simplicity, we can just console.log a message here
      console.log("You have reached the maximum limit of QR codes.");
    }
  };

  return (
    <div>
      {/* Display QRCodeGenerator content */}
      <div
        className="m-1 p-2 border-4 border-black rounded-md "
        style={{ borderColor: color }}
      >
        <QRCode
          value={url}
          size={250}
          bgColor="#ffffff"
          fgColor={color}
          imageSettings={{
            src: image,
            height: 60,
            width: 60,
            excavate: true,
          }}
        />
      </div>

      {/* Display ProPlanPopup when the maximum limit of QR codes is reached */}
      {qrCodeCount >= maxQrCodeCount && <ProPlanPopup />}

      {/* Add a button to generate QR code */}
      <button
        onClick={handleGenerateQRCode}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
      >
        Generate QR Code
      </button>
    </div>
  );
}

export default QRCodeGenerator;
