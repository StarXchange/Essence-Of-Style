import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for the shop
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₦"; // Default currency
  const navigate = useNavigate();

  // State variables
  const [search, setSearch] = useState(""); // Search term
  const [showSearch, setShowSearch] = useState(false); // Toggle for showing search bar
  const [products, setProducts] = useState([]); // Available products

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/list");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // Context value to be provided to components
  const value = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children} {/* Render all children components wrapped by this provider */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

