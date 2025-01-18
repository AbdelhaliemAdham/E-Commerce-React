import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import classes from "../Modules/cart.module.css";
import { AnimatePresence, motion } from "motion/react";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  let totalPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <div className={classes.Grid}>
      <h2>Cart</h2>
      <p className={classes.totalPrice}> TotalPrice: $ {totalPrice}</p>
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
                    <img src={item.image} alt="cartImage" />

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
