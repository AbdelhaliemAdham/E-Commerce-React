import React, { useContext, useState } from "react";

const SearchContext = React.createContext({
  searchProduct: "",
  setSearchProducts: (searchText) => {},
});
export const useSearch = () => {
  return useContext(SearchContext);
};
export function SearchProvider({ children }) {
  const [searchProduct, setSearchProducts] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchProduct,
        setSearchProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
