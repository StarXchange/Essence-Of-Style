import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Accessing products from context
  const [latestProducts, setLatestProducts] = useState([]); // State for latest products
  const navigate = useNavigate();

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10)); // Safely slicing the products array
    }
  }, [products]); // Add products as a dependency

  const singlePage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col gap-6 pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400">
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
        {latestProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={[product.imageUrl]} // Pass directly if `imageUrl` is a string
            name={product.name}
            price={product.price}
            func={() => singlePage(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
