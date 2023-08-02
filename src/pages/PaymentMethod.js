import React, { useState } from "react";
import { Button, Radio } from "@mui/material";
import MasterCard from "../../src/assets/icons/mastercard-32.png";
import VISA from "../../src/assets/icons/visa-32.png";
import PayPal from "../../src/assets/icons/paypal-32.png";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PaymentMethod() {
  // State to store payment information
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardType, setCardType] = useState("");
  const [email, setEmail] = useState(""); // Add email state

  // Function to handle form submission for payment processing
  const handleSubmit = (e) => {
    e.preventDefault();
    // To Implement payment processing logic
    // I will use payment gateway APIs or any backend service to handle the payment processing
    // After successful payment, you can redirect the user to a success page
    // Navigate("/payment/success")page;
  };

  // Function to detect the card type based on the card number
  const detectCardType = (number) => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern =
      /^(5[1-5][0-9]{14}|2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9]{2}|7(?:[01][0-9]|20))\d{12})$/;

    if (visaPattern.test(number)) {
      setCardType("Visa Card");
    } else if (mastercardPattern.test(number)) {
      setCardType("MasterCard");
    } else {
      setCardType("Unknown");
    }
  };

  // Function to handle card number input and detect card type
  const handleCardNumberChange = (e) => {
    const inputNumber = e.target.value.replace(/\s/g, ""); // Remove any spaces from the input
    setCardNumber(inputNumber);
    detectCardType(inputNumber);
  };

  // Function to handle radio button change and show/hide email input
  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
    // Reset the email input when VISA or MasterCard is selected
    if (selectedMethod === "VISA Card" || selectedMethod === "MasterCard") {
      setEmail("");
    }
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNavLinkClick = (page) => {};

  return (
    <div className="flex items-center justify-center h-screen">
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
      <div className="w-full md:w-auto m-4 md:m-32 p-4 bg-slate-100 rounded-md shadow-lg text-gray-500">
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>

        <div className="grid md:grid-cols-2 gap-4 ">
          <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
            <div className="p-4 pb-0">
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="w-full border border-gray-300 rounded-md"
              />
              {cardType && (
                <p className="text-gray-500 mt-1">Card Type: {cardType}</p>
              )}
            </div>
            <div className="p-4 pb-0">
              <TextField
                id="outlined-basic"
                label="Card Holder Name"
                variant="outlined"
                type="text"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                className="w-full  border border-gray-300 rounded-md"
              />
            </div>
            <div className="p-4 pb-0">
              <TextField
                id="outlined-basic"
                label="Expiry Date"
                variant="outlined"
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder=""
                className="border border-gray-300 rounded-md"
              />
            </div>
            <div className="p-4 pb-0">
              <TextField
                id="outlined-basic"
                label="CVV"
                variant="outlined"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="***"
                className="w-20 border border-gray-300 rounded-md"
              />
            </div>

            <div className=" Select p-4 mb-4">
              <label className="block mb-1">Select Payment Method</label>
              <div className=" grid grid-cols-2 p-2 gap-4 text-sm">
                <div>
                  <label className="inline-flex items-center">
                    <Radio
                      type="radio"
                      value="VISA Card"
                      checked={paymentMethod === "VISA Card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio h-3 w-3 text-blue-600"
                    />
                    <span className="flex gap-1 ml-2">
                      VISA
                      <img src={VISA} alt="MasterCard" width="22" height="22" />
                    </span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <Radio
                      type="radio"
                      value="PayPal"
                      checked={paymentMethod === "PayPal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio h-3 w-3 text-blue-600"
                    />
                    <span className="flex gap-1 ml-2">
                      PayPal
                      <img
                        src={PayPal}
                        alt="MasterCard"
                        width="18"
                        height="18"
                      />
                    </span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center ">
                    <Radio
                      type="radio"
                      value="MasterCard"
                      checked={paymentMethod === "MasterCard"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="form-radio h-3 w-3 text-blue-600"
                    />
                    <span className="flex gap-1 ml-2">
                      MasterCard{" "}
                      <img
                        src={MasterCard}
                        alt="MasterCard"
                        width="18"
                        height="18"
                      />
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className=" pb-0 ">
              <div className="p-4">
                {paymentMethod === "PayPal" && (
                  <div className="pb-5">
                    <TextField
                      id="outlined-basic"
                      label="PayPal email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="w-full border border-gray-300 rounded-md"
                    />
                    <span className="font-sm font-xs font-thin  ">
                      <p className="p-1 text-gray-500">
                        Use you PayPal Email Only
                      </p>
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <button>
                  <Button
                    onClick={handlePaymentMethodChange}
                    type="submit"
                    className="m-2 rounded-md "
                    variant="contained"
                    color="success"
                  >
                    Make Payment
                  </Button>
                </button>
              </div>
            </div>
          </form>
          <div className="bg-slate-200 rounded-md">
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
                Price: <span className="text-green-500 font-bold">R 75</span>{" "}
                per month
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
