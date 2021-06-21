import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishAbleKey = "pk_test_51GahqbJskpehS550L2fwVjeA24SiK4fDpp02icNFneiTDBSc0oQ0WRedSeRxKBYm93Tuajzqkt7MnjU9O2KVl6Yz008VIvTaRE";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      name="Crown Clothing"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishAbleKey}
    />
  );
}
