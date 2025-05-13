import React from "react";
import { useParams } from "react-router-dom";
import sampleProducts from "../data/Data";
import { useCart } from "../context/CartContext";
export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="container fade-in-up">
      <div className="product-detail">
        <img src={product.image} alt={product.name} className="product-image-large" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
