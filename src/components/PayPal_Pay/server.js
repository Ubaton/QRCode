const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;

const { CLIENT_ID, APP_SECRET } = process.env;
const baseURL = {
  sandbox: "https://api-m.sandbox.paypal.com",
  production: "https://api-m.paypal.com",
};

app.use(bodyParser.json());

app.post("/my-server/create-paypal-order", async (req, res) => {
  const order = await createOrder();
  res.json(order);
});

app.post("/my-server/capture-paypal-order", async (req, res) => {
  const { orderID } = req.body;
  const captureData = await capturePayment(orderID);
  res.json(captureData);
});

// PayPal API helpers
async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${baseURL.sandbox}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}

async function createOrder() {
  const accessToken = await generateAccessToken();
  const url = `${baseURL.sandbox}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "100.00",
          },
        },
      ],
    }),
  });
  const data = await response.json();
  return data;
}

async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const url = `${baseURL.sandbox}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
