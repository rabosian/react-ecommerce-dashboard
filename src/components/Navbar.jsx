import React, { useState } from "react";
import UserIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@mui/icons-material/Checkroom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();

  const mobileWidth = 600;

  const loginClick = () => {
    if (auth) {
      dispatch(authAction.logout());
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const onSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
    }
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
      <div className="login-menu">
        <div className="menu-bar" onClick={toggleMenu}>
          <IconButton size="small" sx={{ mt: 2 }}>
            <MenuIcon />
          </IconButton>
        </div>

        <div className="login-cart">
          <div onClick={loginClick}>
            <IconButton size="small" sx={{ mt: 2 }}>
              <UserIcon /> {auth ? "LOGOUT" : "LOGIN"}
            </IconButton>
          </div>
          <div
            onClick={() => {
              navigate("/shopping-cart");
            }}
          >
            {auth && (
              <IconButton size="small" sx={{ mt: 2 }}>
                <ShoppingCartIcon /> Cart
              </IconButton>
            )}
          </div>
        </div>
      </div>

      <div className="logo">
        <LogoIcon
          fontSize="large"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="menu-section">
        <ul className="menu-list">
          {menuList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="search-bar">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="search for" onKeyDown={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
