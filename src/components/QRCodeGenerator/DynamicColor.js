import React, { useState } from "react";

const DynamicColor = ({ initialColor, onColorChange }) => {
  const [borderColor, setBorderColor] = useState(initialColor);

  const updateBorderColor = (newColor) => {
    setBorderColor(newColor);
    // onColorChange(newColor); // Notify the parent component of the color change
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-center space-x-2">
        <label className="block">Choose Dynamic Color:</label>
        <input
          type="color"
          value={borderColor}
          onChange={(e) => updateBorderColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DynamicColor;
