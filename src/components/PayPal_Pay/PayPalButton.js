// import React, { useEffect } from "react";

// const PayPalSubscriptionButton = () => {
//   useEffect(() => {
//     const loadPayPalScript = () => {
//       const script = document.createElement("script");
//       script.src =
//         "https://www.paypal.com/sdk/js?client-id=sb&vault=true&intent=subscription";
//       script.setAttribute("data-sdk-integration-source", "button-factory");
//       script.async = true;
//       script.crossOrigin = "anonymous"; // Handle cross-origin issues
//       script.onload = initializePayPalButton;
//       script.onerror = handleScriptError; // Handle script loading error
//       document.body.appendChild(script);
//     };

//     const initializePayPalButton = () => {
//       if (!window.paypal) {
//         console.error("PayPal script failed to load.");
//         return;
//       }

//       window.paypal
//         .Buttons({
//           style: {
//             shape: "pill",
//             color: "silver",
//             layout: "vertical",
//             label: "paypal",
//           },
//           createSubscription: (data, actions) => {
//             return actions.subscription.create({
//               plan_id: "P-3KF9739420762882GMTU3FPY",
//               quantity: 1,
//             });
//           },
//           onApprove: (data, actions) => {
//             alert(data.subscriptionID);
//           },
//         })
//         .render("#paypal-button-container");
//     };

//     const handleScriptError = () => {
//       console.error("Error loading PayPal script");
//       // Implement your error handling logic here, such as showing a message to the user.
//     };

//     loadPayPalScript();

//     return () => {
//       const script = document.querySelector(
//         "script[src^='https://www.paypal.com/sdk/js']"
//       );
//       if (script) {
//         script.remove();
//       }
//     };
//   }, []);

//   if (!window.paypal) {
//     return <div>PayPal script failed to load. Please try again later.</div>;
//   }

//   return <div id="paypal-button-container"></div>;
// };

// export default PayPalSubscriptionButton;
