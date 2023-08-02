import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Button, CircularProgress } from "@mui/material";

const settingsOptions = [{ isNew: true }];

function ProPlanPopup({ darkMode }) {
  const [showProPlanPopup, setShowProPlanPopup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // Function to handle the button click with a loading delay
  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };

  // Function to toggle the "Pro Plan" popup
  const toggleProPlanPopup = () => {
    setShowProPlanPopup((prev) => !prev);
  };

  // Function to check window size and set showMobileMenu state accordingly
  const checkWindowSize = () => {
    if (window.innerWidth < 768) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", checkWindowSize);

    // Call checkWindowSize initially to set the initial state
    checkWindowSize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="">
      {/* Pro Plan */}
      <div>
        <div
          className={`${
            showMobileMenu ? "block" : "hidden md:block"
          } md:block flex items-center justify-center mt-2 `}
        >
          <nav className="flex flex-col space-y-2 p-1 text-center">
            {settingsOptions.map((option) => (
              <Button
                key="pro-plan-button"
                variant="contained"
                onClick={toggleProPlanPopup}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
              >
                Pro Plan
                {option.isNew && (
                  <span className="absolute top-0 right-0 inline-block whitespace-nowrap rounded-[0.27rem] bg-white px-[0.35em] pb-[0.15em] pt-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-500">
                    <span>new</span>
                  </span>
                )}
              </Button>
            ))}
          </nav>
        </div>

        {/* Pro Plan Popup */}
        {showProPlanPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-background-border bg-opacity-20 flex items-center justify-center">
            <div
              className={`p-8 rounded-md shadow-lg relative text-gray-500 ${
                darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
              }`}
            >
              <CloseIcon
                onClick={toggleProPlanPopup}
                className="absolute top-2 right-2 cursor-pointer"
              />

              <h2 className="text-2xl font-semibold mb-4">Pro Plan</h2>
              <p className="text-gray-500 mb-4">
                Unlock premium features with our Pro Plan.
              </p>
              <ul className="list-disc pl-6 text-gray-500 mb-4">
                <li>Feature 1: Unlimited downloads</li>
                <li>Feature 2: Priority customer support</li>
                <li>Feature 3: Advanced analytics</li>
              </ul>
              <p className="text-gray-500 mb-4">
                Price: <span className="text-green-500 font-bold">R 75</span>{" "}
                per month
              </p>
              <p className="text-gray-500">
                Subscribe now to enjoy all the benefits of our Pro Plan!
              </p>
              <Link to="/paymentmethod">
                <Button
                  variant="contained"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
                  onClick={handleButtonClick}
                  disabled={isLoading} // Disable the button while loading
                >
                  {isLoading ? (
                    <CircularProgress
                      size={20}
                      color="inherit"
                      style={{ marginRight: "8px", color: "#4caf50" }} // Customize the color to green
                    />
                  ) : (
                    "Continue"
                  )}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* Pro Plan */}
    </div>
  );
}

export default ProPlanPopup;