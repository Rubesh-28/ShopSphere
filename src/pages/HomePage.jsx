import React, { useState } from "react";
import { Link } from "react-router-dom";
import sampleProducts from "../data/Data";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(sampleProducts.map(product => product.category))];

  const filteredProducts = selectedCategory === "All" 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container">
      <h1 className="title">Welcome to ShopSphere</h1>
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <p className="product-category">{product.category}</p>
            <Link to={`/product/${product.id}`} className="btn">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}