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
import CustomerDashboardPage from "./pages/CustomerDashBoardPage";
import AdminPanelPage from "./pages/admin/AdminPanelPage";
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
            <li><Link to="/login">Account</Link></li>
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
          <Route path="/admin" element={<AdminPanelPage />} />
        </Routes>

        <footer className="footer">
  <div className="footer-links">
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/admin">Admin</Link>
  </div>
</footer>

      </Router>
    </CartProvider>
  );
}
