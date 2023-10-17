import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const CookieConsent = ({ acceptCookies, rejectCookies }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Delay the display by 3 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`fixed w-full bottom-0 z-50 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md shadow-md ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity ease-in-out duration-300`}
    >
      <div className="flex flex-col">
        <p className="text-xs md:text-md mt-2 px-4">
          This website uses cookies to improve your experience.
        </p>
        <div className="flex flex-row items-center justify-center p-2 text-center">
          <div className="flex flex-row space-x-4">
            <Button
              variant="contained"
              color="primary"
              onClick={acceptCookies}
              className="focus:outline-none"
            >
              Accept
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={rejectCookies}
              className="focus:outline-none"
            >
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
