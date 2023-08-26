import React from "react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PayPalpay from "../components/PayPal_Pay/PayPalpay";

function PaymentMethod({ darkMode }) {
  const product = {
    descriptio:
      "Pro Plan Your premium features on our Pro Plan. Feature 1: Unlimited downloads Feature 2: Priority customer support Feature 3: Advanced analytics Price: R 75 per month",
    price: 4,
  };

  const handleNavLinkClick = (page) => {};

  return (
    <div
      className={`flex items-center justify-center h-screen ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
      }`}
    >
      <div className="fixed top-0 left-0">
        <Button>
          <NavLink
            onClick={() => handleNavLinkClick("home")}
            exact
            to="/"
            activeClassName="bg-blue-500 text-white"
            className="  rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
          >
            <ArrowBackIcon />
          </NavLink>
        </Button>
      </div>
      <div
        className={`w-full p-3 md:w-auto m-4 md:m-32 rounded-md shadow-lg text-gray-500 ${
          darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
        <div className=" sm:grid grid-cols-2">
          <div className="flex items-center justify-center">
            <PayPalpay product={product} />
          </div>
          <div
            className={`rounded-md ${
              darkMode ? "dark bg-DarkMode-border" : "bg-slate-100"
            }`}
          >
            <h3 className="text-2xl mb-4 p-2">Payment Summary</h3>
            <div className="p-6">
              <h4 className="text-2xl mb-4">Pro Plan</h4>
              <p className="text-gray-500 mb-4">
                Your premium features on our Pro Plan.
              </p>
              <ul className="list-disc pl-6 text-gray-500 mb-4">
                <li>Feature 1: Unlimited downloads</li>
                <li>Feature 2: Priority customer support</li>
                <li>Feature 3: Advanced analytics</li>
              </ul>
              <p className="text-gray-500 mb-4">
                Price: <span className="text-green-500 font-bold">$ 4.00</span>{" "}
                once off
              </p>
              <p className="text-gray-500">
                Enjoy all the benefits of our Pro Plan!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
