import React from "react";
import QRCode from "qrcode.react";

function QRCodeGenerator({ image, color, url }) {
  return (
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
  );
}

export default QRCodeGenerator;
