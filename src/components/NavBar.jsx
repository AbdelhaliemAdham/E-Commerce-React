import React, { useContext, useState } from "react";
import img from "../assets/react.svg";
import { Link } from "react-router-dom";
import Input from "./Input";
import { ThemeContext } from "../store/ThemeContext";
import { IconButton, Switch } from "@mui/material";
import { CartContext } from "../store/CartContext";
import { motion } from "motion/react";
import IconButtonWithBadge from "./IconButtonWithBadge";
import Logout from "@mui/icons-material/Logout";
import { logout } from "../auth/auth";

export default function NavBar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);
  const [activeBar, setActiveBar] = useState(1);

  const navbarClass = darkMode
    ? "navbar navbar-expand-lg bg-dark border-bottom border-body"
    : "navbar navbar-expand-lg bg-body-tertiary";

  const dataTheme = darkMode ? "dark" : "light";

  return (
    <nav className={navbarClass} data-bs-theme={dataTheme}>
      <div className="container-fluid">
        <img src={img} alt="logo" />
        <a className="navbar-brand m-1" href="/">
          <span
            className={`badge ${!darkMode ? "text-dark" : "text-light"} p-2`}
          >
            E-Commerce
          </span>
        </a>
        <div
          className="collapse navbar-collapse mt-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className="nav-link active bg-blue"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AllProducts">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
            <motion.li className="nav-item">
              <Link className="nav-link" to="/cart">
                <IconButtonWithBadge numberOfItems={cartItems.length} />
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
            <IconButton onClick={logout}>
              {" "}
              <Logout color="primary" />{" "}
            </IconButton>
          </p>
        </div>
      </div>
    </nav>
  );
}
