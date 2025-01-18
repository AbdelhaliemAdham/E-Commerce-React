import React, { useContext } from "react";
import classes from "../Modules/product-item.module.css";
import { CartContext } from "../store/CartContext";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import { motion } from "motion/react";
import RatingComponent from "./Rating";
const ProductItem = ({ image, title, price, id }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  function handleCart(event) {
    event.stopPropagation();
    console.log("Adding to cart:", id);
    addToCart({ image, title, price, id });
  }

  function handleOpenDetailsPage() {
    navigate(`/allProducts/${id}`);
  }

  return (
    <motion.div onClick={handleOpenDetailsPage} className={classes.card}>
      <motion.img
        drag
        whileDrag={{ rotate: 360 }}
        src={image}
        className={classes.cardImg}
        alt={title}
      />
      <p className={classes.cardPrice}>${price}</p>
      <div className={classes.cardBody}>
        <h5 className={classes.cardTitle}>{title}</h5>
        <RatingComponent />
        <button onClick={handleCart} className={classes.cardButton}>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductItem;
