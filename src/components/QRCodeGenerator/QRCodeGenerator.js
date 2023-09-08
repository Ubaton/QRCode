import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import qrCodeStyles from "./QRCodeStyles";

function QRCodeGenerator({ image, color, url, styleIndex }) {
  const [selectedStyle, setSelectedStyle] = useState(qrCodeStyles[styleIndex]);

  useEffect(() => {
    setSelectedStyle(qrCodeStyles[styleIndex]);
  }, [styleIndex]);

  const qrCodeStyle = {
    borderColor: color,
  };

  return (
    <div
      className="m-1 p-2 border-4 border-black rounded-md"
      style={qrCodeStyle}
    >
      <QRCode
        value={url}
        size={selectedStyle.size}
        fgColor={color}
        imageSettings={{
          src: image,
          height: 60,
          width: 60,
          excavate: true,
        }}
      />
    </div>
  );
}

export default QRCodeGenerator;
