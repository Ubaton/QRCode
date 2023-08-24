import React, { useEffect } from "react";

const PayPalpay = () => {
  const createOrder = () => {
    return fetch("/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          {
            sku: "PRODUCT123",
            quantity: "1",
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };

  const onApprove = (data) => {
    return fetch("/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then((orderData) => {
        console.log(
          "Capture result",
          orderData,
          JSON.stringify(orderData, null, 2)
        );
        const transaction = orderData.purchase_units[0].payments.captures[0];
        alert(
          `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
        );
      });
  };

  useEffect(() => {
    const loadPaypalScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=test&currency=USD";
      script.async = true;
      script.onload = () => {
        // Directly use the global 'paypal' object from the SDK
        window.paypal
          .Buttons({
            createOrder,
            onApprove,
          })
          .render("paypal-button-container");
      };
      document.body.appendChild(script);
    };

    loadPaypalScript();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center App">
        <div id="paypal-button-container"></div>
      </div>
    </div>
  );
};

export default PayPalpay;
