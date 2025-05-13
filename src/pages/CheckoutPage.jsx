import React from "react";
const InputField = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} required className="input-field" />
);

export default function CheckoutPage() {
  return (
    <div className="container checkout-page">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <h3>Shipping Information</h3>
        <InputField placeholder="Full Name" />
        <InputField placeholder="Address" />
        <InputField placeholder="City" />
        <InputField placeholder="Postal Code" />
        <InputField placeholder="Phone Number" />
        <h3>Payment</h3>
        <button className="btn" type="submit">Place Order</button>
      </form>
    </div>
  );
}
