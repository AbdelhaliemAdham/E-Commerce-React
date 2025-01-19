import React, { useContext, useEffect } from "react";
import { CartContext } from "../store/CartContext";
import classes from "../Modules/cart.module.css";
import { AnimatePresence, motion } from "motion/react";
import { Card } from "react-bootstrap";
import { ThemeContext } from "../store/ThemeContext";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
    }
  }, [darkMode]);

  let totalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  let priceAfterDiscount = totalPrice - (totalPrice * 10) / 100;

  return (
    <div className={classes.Grid}>
      <h2>Shopping Bag</h2>
      <p className={classes.itemNumber}>
        <span>{cartItems.length}</span> items in Your Bag
      </p>
      <p className={classes.totalPrice}>
        <ul>
          <li>TotalPrice: $ {totalPrice}</li>
          <li>Discount: 10 %</li>
          <li>Price After Discount: $ {priceAfterDiscount.toFixed(2)}</li>
          <li>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Enter Promo Code"
            />
            <button type="button">Apply</button>
            <button type="button">Check-out</button>
          </li>
        </ul>
      </p>
      <div className={classes.CartPage}>
        <div className={classes.cart}>
          {cartItems.length === 0 ? (
            <>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Your cart is empty.
              </p>
            </>
          ) : (
            <AnimatePresence>
              <ul>
                {cartItems.map((item) => (
                  <motion.li exit={{ opacity: 1 }} layout key={item.id}>
                    <Card>
                      <img src={item.image} alt="cartImage" />
                    </Card>
                    <h3 className={classes.itemTitle}>{item.title}</h3>
                    {/* <p>{item.size}</p> */}
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <span className={classes.priceSpan}>
                      ${item.price} x {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>
          )}
        </div>
      </div>
      {cartItems.length > 0 && (
        <button className={classes.clearButton} onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
