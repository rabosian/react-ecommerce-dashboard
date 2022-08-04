import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./pages/ProductAll";
import LoginPage from "./pages/Loginpage";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [user, setUser] = useState(false);


  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/products/:id" element={<PrivateRoute user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
