import React, { useState } from "react";
import UserIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@mui/icons-material/Checkroom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductAll from "../pages/ProductAll";

const Navbar = () => {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate("/login");
  };

  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "Home",
    "Sale",
    "Sustainability",
  ];

  return (
    <div>
      <div className="login-btn" onClick={loginClick}>
        <IconButton>
          <UserIcon />
          LOGIN
        </IconButton>
      </div>
      <div className="logo">
        <LogoIcon fontSize="large" sx={{cursor: 'pointer'}} onClick={() => navigate('/')} />
      </div>
      <div className="menu-section">
        <ul className="menu-list">
          {menuList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div className="search-bar">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="search for" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
