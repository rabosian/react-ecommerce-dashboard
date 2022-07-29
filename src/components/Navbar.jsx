import React from "react";
import UserIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@mui/icons-material/Checkroom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import { Navigate } from 'react-router-dom'

const Navbar = () => {
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
      <div className="login-btn">
        <IconButton>
          <UserIcon />
          LOGIN
        </IconButton>
      </div>
      <div className="logo">
          <LogoIcon fontSize="large" />
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
