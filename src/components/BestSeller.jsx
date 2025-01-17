import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Array.isArray(products)) {
      const bestProducts = products.filter((product) => product.bestseller);
      setBestSeller(bestProducts.slice(0, 5));
    }
  }, [products]);

  const singlePage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col gap-6 pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Title Section */}
      <div className="text-center py-8 px-4 bg-white rounded-lg shadow-md">
        <Title text1="BEST" text2="SELLER" />
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Discover our best-selling products loved by our customers! These
          handpicked items are must-haves for your collection.
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
              id={product.id}
              name={product.name}
              price={product.price}
              image={[product.imageUrl]}
              func={() => singlePage(product.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
