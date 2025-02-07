import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext"; // Import the new ProductContext
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const LatestCollection = () => {
 

  const { products } = useContext(ProductContext); // Get products from ProductContext
  const navigate = useNavigate();

  // Function to navigate to single product page
  const singlePage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col gap-6 pt-10 sm:pt-14 min-h-[80vh]">
      {/* Title Section */}
      <div className="text-center py-8 px-4 bg-white rounded-lg shadow-md">
        <Link to="/collection">
          <Title text1="LATEST" text2="COLLECTIONS" />
        </Link>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Explore our latest arrivals! These handpicked selections feature
          timeless designs and exquisite craftsmanship. Don’t miss out on
          adding these beautiful pieces to your collection.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product._id} // Use _id as the key, assuming that's the unique identifier
              id={product._id}
              image={product.images ? [product.images] : []} // Ensure this is an array
              name={product.name}
              price={product.price}
              func={() => singlePage(product._id)} // Navigate to the product page
            />
          ))
        ) : (
          <p>No products found.</p> // Display message when no products are fetched
        )}
      </div>
    </div>
  );
};

export default LatestCollection;
