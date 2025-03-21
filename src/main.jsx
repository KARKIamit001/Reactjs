import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ContactPage from "./pages/ContactPage.jsx";
import About from "./pages/About.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import BottomNavbar from "./components/BottomNavbar.jsx";
import Footer from "./components/footer.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <TopNavbar/>
    <BottomNavbar/>
      <Routes>

        {/* pagesbody */}
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
