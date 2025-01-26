import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/ProductContext"; // Use ProductContext for search and setSearch
import Search from "../assets/search.png";
import Close from "../assets/close.png";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ProductContext); // Use ProductContext
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 py-3 px-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
          aria-label="Search products"
        />
        <img src={Search} alt="Search icon" className="w-3 h-3" />
      </div>

      {/* Close Button */}
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={Close}
        alt="Close search bar"
      />
    </div>
  ) : null;
};

export default SearchBar;
