import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]); // State to hold bestseller products
  const navigate = useNavigate(); // Hook for navigation

  // Fetch bestseller products from backend
  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bestselling`); // Adjust URL to match your backend route
        if (!response.ok) {
          throw new Error("Failed to fetch bestseller products");
        }
        const data = await response.json();
        setBestSeller(data.products.slice(0, 5)); // Limit to top 5 products
      } catch (error) {
        console.error("Error fetching bestseller products:", error.message);
      }
    }

    fetchBestSellers();
  }, []);

  const singlePage = (productId) => {
    navigate(`/product/${productId}`); // Navigate to single product page
  };

  return (
    <div className="flex flex-col gap-6 pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Title Section */}
      <div className="text-center py-8 px-4 bg-white rounded-lg shadow-md">
        <Title text1="BEST" text2="SELLER" />
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Discover our best-selling products loved by our customers! These handpicked items are must-haves for your collection.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {bestSeller.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No best sellers available.
          </p>
        ) : (
          bestSeller.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.images}
              func={() => singlePage(product._id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
