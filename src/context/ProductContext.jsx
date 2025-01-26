import React, { createContext, useState, useEffect } from "react";

// Create a context for products
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const currency = "₦"; // Default currency
  const [products, setProducts] = useState([]); // Available products
  const [search, setSearch] = useState(""); // Search term

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/list");
        const data = await response.json();
        setProducts(data.products); // Set products in state
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // Context value to provide
  const value = {
    products,
    currency,
    search,
    setSearch,
  };

  return (
    <ProductContext.Provider value={value}>
      {children} {/* Render all children components wrapped by this provider */}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
