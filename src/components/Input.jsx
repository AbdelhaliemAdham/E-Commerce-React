import React from "react";
import { useSearch } from "../store/SearchContext";
import { useNavigate } from "react-router-dom";

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
      className="d-flex m-2"
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        value={searchProduct}
        onChange={handleChange}
        aria-label="Search"
      />
      <button
        onClick={handleSearch}
        className="btn btn-outline-primary"
        type="button"
      >
        Search
      </button>
    </form>
  );
}

export default Input;
