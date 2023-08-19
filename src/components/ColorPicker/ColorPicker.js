import React, { useRef, useEffect, useCallback } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function ColorPicker({ setColor }) {
  const colors = [
    { name: "black", hex: "#000000" },
    { name: "red", hex: "#FF0000" },
    { name: "blue", hex: "#0000FF" },
    { name: "green", hex: "#00FF00" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "purple", hex: "#800080" },
    { name: "orange", hex: "#FFA500" },
    { name: "pink", hex: "#FFC0CB" },
    { name: "brown", hex: "#A52A2A" },
    { name: "teal", hex: "#008080" },
    { name: "gold", hex: "#FFD700" },
    { name: "silver", hex: "#C0C0C0" },
    { name: "maroon", hex: "#800000" },
    { name: "navy", hex: "#000080" },
    { name: "gray", hex: "#808080" },
  ];

  const colorPickerRef = useRef(null);

  const handleScroll = useCallback((scrollOffset) => {
    const scrollStep = 10;
    const scrollTarget = colorPickerRef.current.scrollLeft + scrollOffset;
    smoothScrollTo(colorPickerRef.current, scrollTarget, scrollStep);
  }, []);

  const smoothScrollTo = (element, target, step) => {
    let currentScroll = element.scrollLeft;
    const scrollTowards = target > currentScroll ? 1 : -1;

    const scrollInterval = setInterval(() => {
      currentScroll += step * scrollTowards;

      if (
        (scrollTowards === 1 && currentScroll >= target) ||
        (scrollTowards === -1 && currentScroll <= target)
      ) {
        clearInterval(scrollInterval);
        currentScroll = target;
      }

      element.scrollLeft = currentScroll;
    }, 10);
  };

  useEffect(() => {
    const refCurrent = colorPickerRef.current;
    const handleMouseWheel = (event) => {
      event.preventDefault();
      const scrollOffset = event.deltaY;
      handleScroll(scrollOffset);
    };

    refCurrent.addEventListener("wheel", handleMouseWheel);

    return () => {
      refCurrent.removeEventListener("wheel", handleMouseWheel);
    };
  }, [handleScroll]);

  return (
    <div>
      <p className="mb-2">
        <strong className="p-2 text-gray-500">Select QR code color:</strong>
      </p>
      <div className="flex items-center">
        <button
          className="px-1 text-gray-500"
          onClick={() => handleScroll(-100)}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <div
          ref={colorPickerRef}
          className="flex overflow-x-hidden w-72"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex">
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
        <button
          className="px-1 text-gray-500"
          onClick={() => handleScroll(100)}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
      <div className="flex justify-center mt-2"></div>
    </div>
  );
}

export default ColorPicker;
