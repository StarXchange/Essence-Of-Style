import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
// import products from "../products";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="hover:scale-110 transition ease-in-out">
        <div className="overflow-hidden">
          {image && image.length > 0 ? (
            <img
              src={image[0]} // Correctly access the first image
              alt={name || "Product Image"}
            />
          ) : (
            <div className="bg-gray-200 h-32 w-full flex items-center justify-center">
              <p className="text-gray-500 text-sm">Image Not Available</p>
            </div>
          )}
        </div>

        <p className="pt-3 pb-1 text-sm">{name || "Unnamed Product"}</p>
        <p className="text-sm font-medium">
          {currency || "$"}
          {price?.toFixed(2) || "0.00"}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;