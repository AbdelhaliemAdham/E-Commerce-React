import React from "react";
import { useSearch } from "../store/SearchContext";
import { useNavigate } from "react-router-dom";
import styles from "./Input.module.css";

function Input() {
  const { searchProduct, setSearchProducts } = useSearch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchProducts(value);
  };

  function handleSearch() {
    if (searchProduct.trim() !== "") {
      navigate(`/allProducts?search=${encodeURIComponent(searchProduct)}`);
    }
  }

  return (
    <form
      className={styles.form}
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={styles.input}
        type="search"
        placeholder="Search"
        value={searchProduct}
        onChange={handleChange}
        aria-label="Search"
      />
      <button onClick={handleSearch} className={styles.button} type="button">
        Search
      </button>
    </form>
  );
}

export default Input;
