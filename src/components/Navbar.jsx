import React, { useState, useEffect } from "react";
import UserIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@mui/icons-material/Checkroom";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({user, setUser, setSearchResult}) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('')
  

  const loginClick = () => {
    navigate("/login")
    setUser(prev => !prev)
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
        <IconButton size='small' sx={{mt: 2}}>
          <UserIcon />
          {user ? 'LOGOUT' : 'LOGIN'}
        </IconButton>
      </div>
      <div className="logo">
        <LogoIcon fontSize="large" sx={{cursor: 'pointer'}} onClick={() => navigate('/')} />
      </div>
      <div className="menu-section">
        <ul className="menu-list">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="search-bar">
          <SearchIcon fontSize="small" />
          <input 
            type="text" 
            placeholder="search for"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setSearchResult(e.target.value)
            }}
           />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
