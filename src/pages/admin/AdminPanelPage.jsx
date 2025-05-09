// src/pages/AdminPanelPage.jsx
import React, { useState } from "react";

export default function AdminPanelPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderSection = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="admin-section">
            <h2>Admin Dashboard</h2>
            <p>Overview of users, vendors, orders, and products.</p>
            <div className="admin-stats-grid">
              <div className="admin-card">Total Users: 1200</div>
              <div className="admin-card">Products: 340</div>
              <div className="admin-card">Orders: 890</div>
              <div className="admin-card">Revenue: ₹1.2M</div>
            </div>
          </div>
        );
      case "users":
        return (
          <div className="admin-section">
            <h2>Manage Users</h2>
            <p>View and control access for customers and vendors.</p>
            {/* Placeholder table */}
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#001</td>
                  <td>John Doe</td>
                  <td>Customer</td>
                  <td>Active</td>
                  <td><button className="btn">Block</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "products":
        return (
          <div className="admin-section">
            <h2>Moderate Products</h2>
            <p>Review product listings, flag, or remove inappropriate items.</p>
            {/* Product list sample */}
            <div className="admin-product-list">
              <div className="admin-product-item">
                <p><strong>Product:</strong> Smartphone</p>
                <p><strong>Status:</strong> Active</p>
                <button className="btn">Remove</button>
              </div>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="admin-section">
            <h2>View Orders</h2>
            <p>Track all orders and filter by status.</p>
            {/* Sample order row */}
            <div className="admin-order-row">
              <p><strong>Order #2034</strong> by Alice - ₹8,000 - <em>Delivered</em></p>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="admin-section">
            <h2>Reports</h2>
            <p>Download and review sales or traffic reports.</p>
            <button className="btn">Download Monthly Report</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container admin-panel-page">
      <h1>Admin Panel</h1>
      <div className="admin-tabs">
        <button className="btn" onClick={() => setActiveTab("dashboard")}>Dashboard</button>
        <button className="btn" onClick={() => setActiveTab("users")}>Manage Users</button>
        <button className="btn" onClick={() => setActiveTab("products")}>Moderate Products</button>
        <button className="btn" onClick={() => setActiveTab("orders")}>Orders</button>
        <button className="btn" onClick={() => setActiveTab("reports")}>Reports</button>
      </div>

      <div className="admin-content">
        {renderSection()}
      </div>
    </div>
  );
}
