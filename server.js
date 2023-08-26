const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Simulate a simple order fulfillment function
const fulfillOrder = (orderID) => {
  // Simulate successful order fulfillment
  return {
    success: true,
    message: "Order fulfilled successfully.",
  };
};

// Route to handle order fulfillment
app.post("/fulfill-order", (req, res) => {
  const { orderID } = req.body;

  if (!orderID) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid order ID." });
  }

  const fulfillmentResult = fulfillOrder(orderID);

  if (fulfillmentResult.success) {
    return res.json(fulfillmentResult);
  } else {
    return res.status(500).json(fulfillmentResult);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
