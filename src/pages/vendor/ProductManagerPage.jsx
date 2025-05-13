import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductManagerPage.css";

export default function ProductManagerPage() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      name: "Wireless Mouse",
      category: "Electronics",
      price: "₹599",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      name: "Running Shoes",
      category: "Footwear",
      price: "₹1,499",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/80",
      name: "Bluetooth Headphones",
      category: "Electronics",
      price: "₹2,299",
    }
  ];

  return (
    <div className="product-manager-container">
      <header className="product-manager-header">
        <h1>Manage Products</h1>
        <button
          className="add-product-button"
          onClick={() => navigate("/vendor/add-product")}
        >
          <i className="ri-add-line"></i> Add Product
        </button>
      </header>

      <div className="product-manager-filters">
        <div className="search-input-group">
          <input type="text" className="search-input" placeholder="Search products..." />
          <button className="search-button">
            <i className="ri-search-line"></i>
          </button>
        </div>
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          {/* Add more categories dynamically if needed */}
        </select>
      </div>

      <div className="product-list-wrapper">
        <table className="product-list-table">
          <thead>
            <tr>
              <th></th> {/* For Image */}
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="product-image-cell">
                  <img src={product.image} alt={product.name} className="product-thumbnail" />
                </td>
                <td>
                  <h3 className="product-name">{product.name}</h3>
                </td>
                <td className="product-category">{product.category}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-actions">
                  <button className="action-button edit">
                    <i className="ri-pencil-line"></i>
                  </button>
                  <button className="action-button delete">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="product-list-pagination">
        <button className="pagination-button" disabled>
          <i className="ri-arrow-left-s-line"></i> Previous
        </button>
        <span className="page-number current">1</span>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">
          Next <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
}