import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./pages/ProductAll";
import LoginPage from "./pages/Loginpage";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
