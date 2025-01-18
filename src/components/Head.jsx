import React from "react";
import classes from "./head.module.css";
import img from "../assets/react.svg";
export default function Head({ children }) {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <header className={classes.top}>
        <img src={img} alt="image" />
        <div className={classes.inputDiv}>
          <input
            title="Search Products"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Products"
          />
          <img src={img} alt="i" />
        </div>
        <div className={classes.cartDiv}>
          <img src={img} alt="icon" />
          <p>Cart</p>
          <p className={classes.cartNumber}>2</p>
        </div>
      </header>

      {children}
    </>
  );
}
