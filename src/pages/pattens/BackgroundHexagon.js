import React from "react";

const BackgroundHexagon = () => {
  return (
    <div>
      <svg
        id="patternId"
        width="full"
        height="100vh"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: 0,
          opacity: 0.2,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="a"
            patternUnits="userSpaceOnUse"
            width="29"
            height="50.115"
            patternTransform="scale(1) rotate(0)"
          >
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="hsla(240, 7%, 18%, 0)"
            />
            <path
              d="M14.499 11.82L4.36 5.968l.002-11.706 10.14-5.855L24.638-5.74l-.001 11.707zm0 50.06L4.36 56.029l.002-11.706 10.14-5.855 10.137 5.852-.001 11.707zm14.498-25.117L18.858 30.91l.002-11.707L29 13.349l10.137 5.853-.001 11.706zm-29 0l-10.139-5.852.002-11.707L0 13.349l10.138 5.853-.002 11.706zm14.501-19.905L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z"
              stroke-linecap="square"
              stroke-width="0.5"
              stroke="hsla(199, 98%, 48%, 1)"
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="800%"
          height="800%"
          transform="translate(-2,-13.23)"
          fill="url(#a)"
        />
      </svg>
    </div>
  );
};

export default BackgroundHexagon;
