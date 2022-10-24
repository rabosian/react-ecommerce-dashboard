import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./pages/ProductAll";
import LoginPage from "./pages/Loginpage";
import PrivateRoute from "./route/PrivateRoute";
import ProductDetail from "./pages/ProductDetail";
import RegisterProduct from "./pages/admin/RegisterProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shopping-cart" element={<LoginPage />} />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route path="/register-product" element={<RegisterProduct />} />
      </Routes>
    </div>
  );
}

export default App;
