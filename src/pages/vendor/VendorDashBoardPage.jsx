import React from "react";
import "../styles/VendorDashboardPage.css";

export default function VendorDashboardPage() {
  return (
    <div className="container vendor-dashboard">
      <h1>Vendor Dashboard</h1>
      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>42</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>15</p>
        </div>
      </section>

      <section className="orders-section">
        <h2>Recent Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1234</td>
              <td>John Doe</td>
              <td>Bluetooth Headphones</td>
              <td>Pending</td>
              <td><button className="btn">Mark as Shipped</button></td>
            </tr>
            <tr>
              <td>#1235</td>
              <td>Jane Smith</td>
              <td>Smart Watch</td>
              <td>Shipped</td>
              <td><button className="btn" disabled>Shipped</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
