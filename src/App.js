import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./pages/ProductAll";
import LoginPage from "./pages/Loginpage";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [user, setUser] = useState(false);
  const [searchResult, setSearchResult] = useState('')

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} setSearchResult={setSearchResult} />
      <Routes>
        <Route path="/" element={<ProductAll searchResult={searchResult} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/products/:id" element={<PrivateRoute user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
