import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const CookieConsent = ({ acceptCookies, rejectCookies, closePopup }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleClosePopup = () => {
    setIsVisible(false);
    if (closePopup) {
      closePopup();
    }
  };

  return (
    <div className="fixed bottom-1 right-4">
      {isVisible && (
        <div
          className={`flex items-center justify-center bg-gray-200 text-gray-500 rounded-md shadow-lg w-96 z-50 transition-opacity ease-in-out duration-300`}
        >
          <CloseRoundedIcon
            className="absolute top-1 right-1 cursor-pointer text-gray-500"
            onClick={handleClosePopup}
          />
          <div className="relative">
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-center p-2 text-center">
                <div className="flex flex-row space-x-4">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={acceptCookies}
                    className="focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-blod text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
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
              <p className="text-xs md:text-md mb-2 px-4">
                This website uses cookies to improve your experience.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieConsent;
