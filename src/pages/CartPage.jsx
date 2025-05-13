import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
export default function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return <div className="container"><h2>Your cart is empty.</h2></div>;
  }

  return (
    <div className="container cart-page">
      
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p><strong>Total Items:</strong> {totalItems}</p>
        <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p>
        <button className="btn btn-primary" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>

      <div className="cart-items">
        
        <ul className="cart-list">
          <h2>Your Cart</h2>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <div className="quantity-controls">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
