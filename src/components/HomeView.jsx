import React from "react";
import classes from "../Modules/home-view.module.css";
import { useNavigate } from "react-router-dom";

export default function HomeView() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/allProducts");
  }
  return (
    <section className={classes["home-view"]}>
      <div className={classes.textInfo}>
        <h3>Welcome To Our Store</h3>
        <h1>
          Browse All Products,
          <br /> select between <br />
          different categories{" "}
        </h1>
        <button onClick={handleClick}> Browse All Products</button>
      </div>
    </section>
  );
}
