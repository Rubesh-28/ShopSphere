import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);


  if (cartItems.length === 0) {
    return <div className="container"><h2>Your cart is empty.</h2></div>;
  }

  return (
    <div className="container">
      <h2>Your Cart</h2>

      <div className="cart-summary">
        <p><strong>Total Items:</strong> {totalItems}</p>
        <p><strong>Total Price:</strong> ₹{totalPrice}</p>
      </div>

      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-img" />
            <div>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
              <button className="btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
