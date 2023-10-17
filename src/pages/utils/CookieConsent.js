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
      className={`fixed bottom-4 left-4 p-2 w-40 bg-gray-800 text-white rounded-tl-md rounded-bl-md ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity ease-in-out duration-300`}
    >
      <div className="flex items-center">
        <p className="mr-2">
          This website uses cookies to improve your experience.
        </p>
        <button
          onClick={acceptCookies}
          className="underline text-blue-300 focus:outline-none"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
