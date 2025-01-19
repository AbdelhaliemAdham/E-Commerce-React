import React from "react";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import { Helmet } from "react-helmet";

function CartPage() {
  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <NavBar />
      <Cart />
    </>
  );
}

export default CartPage;
