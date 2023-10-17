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
      className={`fixed inset-0 flex items-center justify-center bg-gray-200 text-gray-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity ease-in-out duration-300`}
    >
      <div className="flex flex-row items-center p-4 bg-white rounded-md shadow-md text-center">
        <p className="text-sm md:text-md mb-2">
          This website uses cookies to improve your experience.
        </p>
        <div className="space-x-4">
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
            onClick={rejectCookies}
            className="focus:outline-none"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
