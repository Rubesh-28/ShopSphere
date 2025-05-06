import React from "react";

export default function AboutPage() {
  return (
    <div className="container about-page">
      <section className="category-section">
          <h2>Our Mission</h2>
          <p>
            We're committed to providing high-quality products at affordable prices, with a seamless shopping 
            experience from browsing to checkout. Our team works tirelessly to ensure every customer finds exactly 
            what they're looking for.
          </p>
      </section>
      <h1>Our Product Categories</h1>
      <div className="about-content">
        <section className="category-section">
          <h2>Electronics</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">💻</div>
              <h3>Computers & Laptops</h3>
              <p>High-performance devices for work and entertainment</p>
            </div>
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h3>Mobile Phones</h3>
              <p>Latest smartphones from top brands</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎧</div>
              <h3>Audio Devices</h3>
              <p>Headphones, speakers, and audio accessories</p>
            </div>
          </div>
        </section>

        <section className="category-section">
          <h2>Men's Clothing</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">👕</div>
              <h3>T-Shirts & Polos</h3>
              <p>Casual and formal tops for every occasion</p>
            </div>
            <div className="category-card">
              <div className="category-icon">👖</div>
              <h3>Jeans & Pants</h3>
              <p>Comfortable and stylish bottoms</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🧥</div>
              <h3>Outerwear</h3>
              <p>Jackets and coats for all seasons</p>
            </div>
          </div>
        </section>

        <section className="category-section">
          <h2>Women's Clothing</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">👗</div>
              <h3>Dresses</h3>
              <p>From casual sundresses to formal evening wear</p>
            </div>
            <div className="category-card">
              <div className="category-icon">👚</div>
              <h3>Tops & Blouses</h3>
              <p>Trendy and comfortable upper wear</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🩳</div>
              <h3>Bottoms</h3>
              <p>Skirts, pants, and shorts for every style</p>
            </div>
          </div>
        </section>

        <section className="category-section">
          <h2>Accessories</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">⌚</div>
              <h3>Watches</h3>
              <p>Smart and traditional timepieces</p>
            </div>
            <div className="category-card">
              <div className="category-icon">👜</div>
              <h3>Bags</h3>
              <p>Handbags, backpacks, and luggage</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🧣</div>
              <h3>Jewelry</h3>
              <p>Necklaces, bracelets, and earrings</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}