import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log("Products from context:", products); // Debugging
    if (Array.isArray(products)) {
      const bestProducts = products.filter((products) => products.bestseller);
      setBestSeller(bestProducts.slice(0, 5));
    }
  }, [products]); // Update when products changes

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our best-selling products loved by our customers!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.length === 0 ? (
          <p className="text-center text-gray-500">
            No best sellers available.
          </p>
        ) : (
          bestSeller.map((products, index) => (
            <ProductItem
              key={index}
              id={products.id}
              name={products.name}
              price={products.price}
              image={[products.imageUrl]}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
