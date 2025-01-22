import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import { Helmet } from "react-helmet";
import { AuthContext } from "../store/AuthContext";
import { Navigate } from "react-router-dom";

function CartPage() {
  const { user } = useContext(AuthContext);
  if (user === null) {
    return <Navigate to={"/login"} />;
  }
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
