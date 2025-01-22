import React from "react";
import "../Modules/ProductNotFound.module.css"; // Optional: for styling
import { Link } from "react-router-dom";

const ProductNotFound = ({ searchQuery }) => {
  return (
    <div className="product-not-found">
      <h2>Oops! No Products Found</h2>
      <p>We couldn't find any products matching.</p>
      <p>Please try a different search term or check out our other products.</p>
      <button>
        <Link to={"/allProducts"}> Browse All Products</Link>
      </button>
    </div>
  );
};

export default ProductNotFound;
