import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const currency = "₦";
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(""); // New state for category
  const [sort, setSort] = useState(""); // New state for sorting

  // Function to fetch products dynamically
  const fetchProducts = async () => {
    try {
      let url = `${import.meta.env.VITE_API_BASE_URL}/products`;

      // Append query params if needed
      const queryParams = [];
      if (category) queryParams.push(`category=${category}`);
      if (sort) queryParams.push(`sort=${sort}`);
      if (queryParams.length) url += `?${queryParams.join("&")}`;

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  // Fetch products whenever category or sorting changes
  useEffect(() => {
    fetchProducts();
  }, [category, sort]);

  const value = {
    products,
    currency,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
