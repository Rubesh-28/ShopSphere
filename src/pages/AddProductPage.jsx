import React, { useState } from "react";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    stock: "",
    description: "",
    specifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product to submit:", formData);
    alert("Product submitted (simulated). Check console for data.");
  };

  return (
    <div className="container add-product-form fade-in-up">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="stock" type="number" placeholder="Stock Quantity" value={formData.stock} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <textarea name="description" placeholder="Product Description" value={formData.description} onChange={handleChange} required />
        <textarea name="specifications" placeholder="Specifications (comma-separated)" value={formData.specifications} onChange={handleChange} required />
        <button className="btn" type="submit">Add Product</button>
      </form>
    </div>
  );
}
