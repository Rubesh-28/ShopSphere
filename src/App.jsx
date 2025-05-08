import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import AddProductPage from "./pages/AddProductPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">ShopSphere</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="dropdown">
              <span className="dropdown-toggle">Account</span>
              <ul className="dropdown-menu">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/vendor/add-product" element={<AddProductPage />} />
          <Route path="/dashboard" element={<CustomerDashboardPage />} />
          <Route path="/orders/:id" element={<OrderDetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
