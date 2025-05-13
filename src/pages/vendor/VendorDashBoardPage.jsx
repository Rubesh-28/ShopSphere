import React from "react";
import { useNavigate } from "react-router-dom";
import "./VendorDashBoardPage.css";

export default function VendorDashboardPage() {
  const navigate = useNavigate();
  const recentOrders = [
    { id: "#1234", customer: "John Doe", product: "Bluetooth Headphones", date: "Oct 15, 2023", amount: "₹2,299", status: "pending" },
    { id: "#1235", customer: "Jane Smith", product: "Smart Watch", date: "Oct 14, 2023", amount: "₹1,500", status: "shipped" }
  ];

  return (
    <div className="container vendor-dashboard">
      <div className="dashboard-header">
        <h1>Vendor Dashboard</h1>
        <p className="welcome-message">Welcome back! Here's your store overview</p>
      </div>

      <div className="stats-grid">
        {[
          { title: "Total Products", value: "42", change: "↑ 5 from last month" },
          { title: "Total Orders", value: "120", change: "↑ 12 from last month" },
          { title: "Pending Orders", value: "15", change: "↓ 3 from yesterday" },
          { title: "Total Revenue", value: "₹85,420", change: "↑ 18% from last month" }
        ].map(({ title, value, change }, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-content">
              <h3>{title}</h3>
              <p className="stat-value">{value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-orders">
        <div className="section-header">
          <h2>Recent Orders</h2>
        </div>
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(({ id, customer, product, date, amount, status }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{customer}</td>
                  <td>{product}</td>
                  <td>{date}</td>
                  <td>{amount}</td>
                  <td>
                    <span className={`status-badge ${status}`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      {status === "pending" ? "Process" : "Track"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons button-group">
          <button className="btn btn-primary" onClick={() => navigate("/productmanage")}>
            <i className="icon">+</i> Manage Products
          </button>
          <button className="btn btn-outline">
            <i className="icon">📊</i> View Analytics
          </button>
          <button className="btn btn-outline">
            <i className="icon">✉️</i> Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}