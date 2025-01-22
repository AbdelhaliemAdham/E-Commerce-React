import React, { useContext } from "react";
import { useLoaderData, useNavigation, Link, Navigate } from "react-router-dom";
import classes from "../Modules/product-details.module.css";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import { ThemeContext } from "../store/ThemeContext";
import { AuthContext } from "../store/AuthContext";

export default function ProductDetails() {
  const product = useLoaderData();
  const navigation = useNavigation();
  const { darkMode } = useContext(ThemeContext);
  const imageUrl = new URL(product.image, window.location.origin).href;

  const { user } = useContext(AuthContext);
  if (user === null) {
    return <Navigate to={"/login"} />;
  }
  if (navigation.state === "loading") {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <p>Sorry, this product is not available</p>;
  }

  return (
    <div className={classes[darkMode ? "dark" : "light"]}>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={`${product.description}`} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <NavBar />
      <div className={classes.page}>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p className={classes.description}>{product.description}</p>
        <p className={classes.price}>${product.price}</p>
        <div>
          <button className={classes.backButton}>
            {" "}
            <Link to={"/allProducts"}>Back</Link>
          </button>
          <button className={classes.buttonContainer}>
            Proceed to Check-out
          </button>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const { productId } = params;
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Couldn't fetch this product");
  }
  const product = await response.json();
  return product;
}
