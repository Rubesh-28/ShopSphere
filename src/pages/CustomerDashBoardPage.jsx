import React, { useState } from "react";
export default function CustomerDashboardPage() {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  return (
    <div className="container dashboard-page">
      <h1 className="dashboard-title">My Dashboard</h1>

      <section className="dashboard-section profile-section">
        <h2 className="section-title">Profile Information</h2>
        <form className="profile-form">
          <div className="form-grid">
            <input className="input-field" type="text" placeholder="Full Name" />
            <input className="input-field" type="email" placeholder="Email" />
            <input className="input-field" type="tel" placeholder="Phone" />
            <input className="input-field" type="text" placeholder="Address" />
          </div>
          <button className="btn update-btn" type="submit">Update Profile</button>
        </form>
      </section>
      
      <section className="dashboard-section orders-section">
        <h2 className="section-title">Recent Orders</h2>
        <ul className="order-list">
          <li className="order-card">
            <div className="order-summary">
              <p><strong>Order ID:</strong> #ORDER_ID</p>
              <p><strong>Status:</strong> STATUS</p>
              <p><strong>Total:</strong> ₹TOTAL</p>
            </div>
            <button className="btn view-details-btn" onClick={() => setSelectedOrderId("ORDER_ID")}>View Details</button>
          </li>
        </ul>

        {selectedOrderId && (
          <div className="order-details fade-in-up">
            <h3 className="order-details-title">Order Details</h3>
            <p><strong>Order ID:</strong> {selectedOrderId}</p>
            <p><strong>Date:</strong> DATE</p>
            <p><strong>Status:</strong> STATUS</p>
            <h4>Shipping Info</h4>
            <p>NAME</p>
            <p>ADDRESS</p>
            <p>PHONE</p>
            <h4>Items</h4>
            <ul className="item-list">
              <li>Product Name — Qty: QTY — ₹PRICE</li>
            </ul>
            <p><strong>Total:</strong> ₹TOTAL</p>

            <button className="btn close-btn" onClick={() => setSelectedOrderId(null)}>Close</button>
          </div>
        )}
      </section>
    </div>
  );
}
