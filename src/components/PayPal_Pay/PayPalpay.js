// import React, { useEffect } from "react";

// const PayPalpay = () => {
//   const createOrder = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/my-server/create-paypal-order",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             cart: [
//               {
//                 sku: "PRODUCT123",
//                 quantity: "1",
//               },
//             ],
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to create order");
//       }

//       const order = await response.json();
//       return order.id;
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   const onApprove = async (data) => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/my-server/capture-paypal-order",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             orderID: data.orderID,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to capture order");
//       }

//       const orderData = await response.json();
//       console.log(
//         "Capture result",
//         orderData,
//         JSON.stringify(orderData, null, 2)
//       );
//       const transaction = orderData.purchase_units[0].payments.captures[0];
//       alert(
//         `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
//       );
//     } catch (error) {
//       console.error("Error capturing order:", error);
//     }
//   };

//   const loadPaypalScript = () => {
//     const script = document.createElement("script");
//     script.src = "https://www.paypal.com/sdk/js?client-id=test&currency=USD";
//     script.async = true;
//     script.onload = () => {
//       if (window.paypal) {
//         window.paypal
//           .Buttons({
//             createOrder,
//             onApprove,
//           })
//           .render("#paypal-button-container");
//       }
//     };
//     document.body.appendChild(script);
//   };

//   useEffect(() => {
//     loadPaypalScript();
//   }, []);

//   return (
//     <div className="flex items-center justify-center pt-4 App">
//       <div id="paypal-button-container"></div>
//     </div>
//   );
// };

// export default PayPalpay;
