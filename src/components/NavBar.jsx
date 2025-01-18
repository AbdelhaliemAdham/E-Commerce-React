import React, { useContext } from "react";
import img from "../assets/react.svg";
import { Link } from "react-router-dom";
import Input from "./Input";
import { ThemeContext } from "../store/ThemeContext";
import { SvgIcon, Switch } from "@mui/material";
import { CartContext } from "../store/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "motion/react";

export default function NavBar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);

  const navbarClass = darkMode
    ? "navbar navbar-expand-lg bg-dark border-bottom border-body"
    : "navbar navbar-expand-lg bg-body-tertiary";

  const dataTheme = darkMode ? "dark" : "light";

  return (
    <nav className={navbarClass} data-bs-theme={dataTheme}>
      <div className="container-fluid">
        <img src={img} alt="logo" />
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark p-2 m-1">Store App</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AllProducts">
                All Products
              </Link>
            </li>
            <motion.li className="nav-item">
              <Link className="nav-link" to="/cart">
                <SvgIcon component={ShoppingCartIcon}></SvgIcon>
                <p style={{ display: "inline", fontWeight: "bold" }}>
                  {cartItems.length}
                </p>
              </Link>
            </motion.li>
          </ul>
          <Input />
          <p
            style={{
              color: darkMode ? "white" : "black",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
              position: "relative",
              marginLeft: "10px",
              top: "8px",
              right: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {darkMode ? "Light" : "Dark"}
            <Switch
              onChange={toggleTheme}
              checked={darkMode}
              title="Theme"
              value={darkMode}
            />
          </p>
        </div>
      </div>
    </nav>
  );
}
