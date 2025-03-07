import paypal, { configure } from "@paypal/paypal-server-sdk";

configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET_ID,
});

export default paypal;