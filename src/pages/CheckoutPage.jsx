import React from "react";

const InputField = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} required />
);

export default function CheckoutPage() {
  return (
    <div className="container add-product-form fade-in-up">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <h2>Shipping Information</h2>
        <InputField placeholder="Full Name" />
        <InputField placeholder="Address" />
        <InputField placeholder="City" />
        <InputField placeholder="Postal Code" />
        <InputField placeholder="Phone Number" />
        <h2>Payment</h2>
        <button className="btn" type="submit">Place Order</button>
      </form>
    </div>
  );
}