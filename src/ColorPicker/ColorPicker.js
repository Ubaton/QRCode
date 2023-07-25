import React from "react";

function ColorPicker({ setColor }) {
  const colors = [
    { name: "black", hex: "#000000" },
    { name: "red", hex: "#FF0000" },
    { name: "blue", hex: "#0000FF" },
    { name: "green", hex: "#00FF00" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "purple", hex: "#800080" },
    { name: "orange", hex: "#FFA500" },
  ];

  return (
    <div>
      <p className="mb-2 ">
        <strong className="p-2">Select QR code color:</strong>
      </p>
      <div className="grid grid-cols-7 gap-1 ">
        {colors.map((color) => (
          <div
            key={color.name}
            className="w-8 h-8 m-2 rounded-md cursor-pointer"
            style={{
              backgroundColor: color.hex,
              border: color.name === "white" ? "1px solid black" : "none",
            }}
            onClick={() => setColor(color.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
