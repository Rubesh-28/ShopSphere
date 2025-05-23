import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import AddProductPage from "./pages/AddProductPage";
import CustomerDashboardPage from "./pages/CustomerDashBoardPage";
import AdminPanelPage from "./pages/admin/AdminPanelPage";
import VendorDashboardPage from "./pages/vendor/VendorDashBoardPage";
import ProductManagerPage from "./pages/vendor/ProductManagerPage";
import "./App.css";
export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="/vendordash" element={<VendorDashboardPage />} />
          <Route path="/productmanage" element={<ProductManagerPage />} />
          <Route path="/vendor/add-product" element={<AddProductPage />} />

          <Route
            path="*"
            element={
              <>
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
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/dashboard" element={<CustomerDashboardPage />} />
                </Routes>
                <footer className="footer">
                  <div className="footer-links">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                  </div>
                </footer>
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}
