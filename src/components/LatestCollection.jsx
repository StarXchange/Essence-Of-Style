import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Accessing products from context

  const [latestProducts, setLatestProducts] = useState([]); // State for latest products

  useEffect(() => {
    if (products && products.length > 0) {
      // Safely slicing the products array
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]); // Add products as a dependency

  return (
    <div className="my-10">
      {/*Title*/}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          maiores debitis amet blanditiis aliquid earum ad ducimus enim minima
          sunt. Aperiam quo totam rerum ratione quam dolores ab, tempore quod.
        </p>
      </div>

      {/*Rendering Products*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            image={[products.imageUrl]} // Pass as an array to match expected `image` format
            name={products.name}
            price={products.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
