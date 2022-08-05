import React, {useState} from "react";
import UserIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@mui/icons-material/Checkroom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false)
  // const [inputValue, setInputValue] = useState('')

  const loginClick = () => {
    if (user) {
      navigate("/");
      setUser((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen)
  }

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
        <div onClick={toggleMenu}>
          <IconButton size="small" sx={{ mt: 2 }}>
            <MenuIcon />
          </IconButton>
        </div>

        <div onClick={loginClick}>
          <IconButton size="small" sx={{ mt: 2 }}>
            <UserIcon /> {user ? "LOGOUT" : "LOGIN"}
          </IconButton>
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
          <input
            type="text"
            placeholder="search for"
            onKeyDown={onSearch}
            // value={inputValue}
            // onChange={(e) => {
            //   setInputValue(e.target.value)
            //   setSearchResult(e.target.value)
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
