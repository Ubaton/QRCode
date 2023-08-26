import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalpay = (props) => {
  const { product, hasAlreadyBoughtPlan } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  const handleApprove = async (orderID) => {
    try {
      const response = await fetch("/fulfill-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderID }),
      });

      const result = await response.json();

      if (result.success) {
        setPaidFor(true);
        // Refresh the user's account or subscription status
        // ...
      } else {
        setError("An error occurred while processing your order.");
      }
    } catch (error) {
      setError("An error occurred while processing your order.");
    }
  };

  return (
    <div>
      {paidFor ? (
        <p>Thank you for your purchase!</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <PayPalButtons
          onClick={async (data, actions) => {
            // Validate this onClick or from the client or the server side

            if (hasAlreadyBoughtPlan) {
              setError(
                "You already have a ProPlan, check your profile to view"
              );
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    currency_code: "USD",
                    value: product.price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log("order", order);

            handleApprove(data.orderID);
          }}
          onCancel={() => {
            // Display cancel message or handle cancellation
            console.log("Payment was canceled.");
          }}
          onError={(err) => {
            setError("An error occurred during payment. Please try again.");
            console.log("PayPal checkout onError", err);
          }}
          // Pass your PayPal client ID here
          options={{ "client-id": PAYPAL_CLIENT_ID }}
        />
      )}
    </div>
  );
};

export default PayPalpay;
