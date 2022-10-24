import React, { useState } from "react";
import UserIcon from "@mui/icons-material/PersonOutline";
import LogoIcon from "@mui/icons-material/Checkroom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);
  const role = useSelector((state) => state.auth.role);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setSidebarOpen(open);
  };

  const adminSidebar = [
    "See Products",
    "Register Product",
    "Manage Users",
    "Manage Orders",
  ];

  const userSidebar = ["go to Cart", "orders","my account"]

  const sidebarComp = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {role === "admin" ? 
          adminSidebar.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={text.toLowerCase().replace(' ','-')}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))
        :
          userSidebar.map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box>
  );

  const loginClick = () => {
    if (auth) {
      dispatch(authAction.logout());
      navigate("/");
    } else {
      navigate("/login");
    }
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
        <div className="menu-bar" onClick={toggleDrawer}>
          <React.Fragment>
            <IconButton
              onClick={toggleDrawer(true)}
              size="small"
              sx={{ mt: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={sidebarOpen} onClose={toggleDrawer(false)}>
              {sidebarComp}
            </Drawer>
          </React.Fragment>
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
