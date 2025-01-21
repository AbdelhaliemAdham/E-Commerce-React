import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, Outlet, useLocation, Navigate } from "react-router-dom";
import { useSearch } from "../store/SearchContext";
import ProductItem from "../components/ProductItem";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import classes from "../Modules/AllProducts.module.css";
import { ThemeContext } from "../store/ThemeContext";
import { AuthContext } from "../store/AuthContext";
export default function AllProducts() {
  const { setSearchProducts } = useSearch();
  const products = useLoaderData();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loader, setLoader] = useState(true);
  const { darkMode } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsAuthenticated(false);
      return;
    }
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search") || "";
    setSearchProducts(searchQuery);

    if (products) {
      setLoader(false);
      const filtered = products.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [products, location.search, setSearchProducts]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (loader) {
    return (
      <div
        className="spinner-border text-dark position-absolute top-50 start-50"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return <p>Sorry, there are no products matching your search.</p>;
  }
  const cssClass = darkMode ? `dark` : `light`;
  return (
    <div className={classes[cssClass]}>
      <Helmet>
        <title>All Products</title>
      </Helmet>
      <NavBar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <Outlet /> {/* Add this line to render nested routes */}
    </div>
  );
}

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw Error("failed to fetch product");
  }

  const data = await response.json();

  return data;
}
