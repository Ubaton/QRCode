import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const CookieConsent = ({ acceptCookies }) => {
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
      className={`fixed bottom-4 p-2 bg-gray-200 text-gray-500 rounded-md ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity ease-in-out duration-300`}
    >
      <div className="flex flex-row items-center">
        <p className="text-xs md:text-md mr-2">
          This website uses cookies to improve your experience.
        </p>
        <Button
          variant="outlined"
          onClick={acceptCookies}
          className="underline text-blue-500 focus:outline-none"
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
