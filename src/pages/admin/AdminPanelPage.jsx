import React, { useState } from "react";
import sampleProducts from "../../data/Data";
import "./AdminPanelPage.css";

export default function AdminPanelPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderSection = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="admin-section">
            <h2 className="section-title">Admin Dashboard</h2>
            <div className="admin-stats-grid">
              {[
                { title: "Total Products", value: sampleProducts.length, trend: "↑ 5%" },
                { title: "Categories", value: [...new Set(sampleProducts.map(p => p.category))].length, trend: "↑ 3%" }
              ].map(({ title, value, trend }, index) => (
                <div className={`stat-card ${index === 0 ? "primary" : "secondary"}`} key={index}>
                  <h3>{title}</h3>
                  <p>{value}</p>
                  <span className="stat-trend">{trend}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "users":
        return (
          <div className="admin-section">
            <div className="section-header">
              <h2 className="section-title">Manage Users</h2>
              <div className="search-filter">
                <select className="filter-select">
                  <option>All Roles</option>
                  <option>Admin</option>
                  <option>Vendor</option>
                  <option>Customer</option>
                </select>
              </div>
            </div>
            
            <div className="table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#001</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td><span className="role-badge customer">Customer</span></td>
                    <td><span className="status-badge active">Active</span></td>
                    <td>
                      <button className="btn btn-sm btn-outline">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "products":
        return (
          <div className="admin-section">
            <h2 className="section-title">Product Management</h2>
            <div className="product-filters">
              <div className="filter-group">
                <label>Status:</label>
                <select className="filter-select">
                  <option>All</option>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
            
            <div className="product-grid">
              {sampleProducts.map(({ id, image, name, price, category }) => (
                <div className="product-card" key={id}>
                  <div className="product-image-container">
                    <img src={image} alt={name} className="product-image" />
                  </div>
                  <div className="product-details">
                    <h3>{name}</h3>
                    <p className="product-price">₹{price}</p>
                    <p className="product-category">{category}</p>
                    <div className="product-actions button-group">
                      <button className="btn btn-sm btn-success">Approve</button>
                      <button className="btn btn-sm btn-outline">Edit</button>
                      <button className="btn btn-sm btn-danger">Reject</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="admin-section">
            <h2 className="section-title">Order Management</h2>
            <div className="order-filters">
              <div className="filter-group">
                <label>Status:</label>
                <select className="filter-select">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>
            
            <div className="order-list">
              <div className="order-card">
                <div className="order-header">
                  <span className="order-id">#2034</span>
                  <span className="order-date">Oct 12, 2023</span>
                  <span className="order-status shipped">Shipped</span>
                </div>
                <div className="order-details">
                  <div className="customer-info">
                    <p><strong>Customer:</strong> Alice Johnson</p>
                    <p><strong>Email:</strong> alice@example.com</p>
                  </div>
                  <div className="order-summary">
                    <p><strong>Amount:</strong> ₹8,000</p>
                    <p><strong>Items:</strong> 3</p>
                  </div>
                </div>
                <div className="order-actions">
                  <button className="btn btn-sm btn-primary">View Details</button>
                  <button className="btn btn-sm btn-outline">Update Status</button>
                </div>
              </div>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="admin-section">
            <h2 className="section-title">Reports & Analytics</h2>
            <div className="report-cards">
              <div className="report-card">
                <h3>Sales Overview</h3>
                <div className="chart-placeholder"></div>
                <button className="btn btn-outline">View Full Report</button>
              </div>
              <div className="report-card">
                <h3>Top Products</h3>
                <ul className="top-products">
                  <li>
                    <span>1. Wireless Earbuds</span>
                    <span>120 sold</span>
                  </li>
                  <li>
                    <span>2. Smart Watch</span>
                    <span>98 sold</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container admin-panel">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions button-group">
          <button className="btn btn-outline">
            <i className="icon">📊</i> View Analytics
          </button>
        </div>
      </div>
      
      <div className="admin-tabs">
        {["dashboard", "users", "products", "orders", "reports"].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {renderSection()}
      </div>
    </div>
  );
}