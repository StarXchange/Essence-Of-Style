import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import Star from "../assets/star.png";

const Product = () => {
  const { id } = useParams();
  const { currency } = useContext(ProductContext); // Access currency from ProductContext
  const { addToCart } = useContext(CartContext); // Access addToCart from CartContext
  const [productData, setProductData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Fetch product data based on product ID
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/single/${id}`);
        const data = await response.json();
        if (data) {
          setProductData(data);
          setImageUrl(data.images?.[0] || "");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [id]);

  // Loading state if productData is not yet available
  if (!productData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t bg-gradient-to-r from-blue-50 to-blue-400">
      {/* Left Side (Images) */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px] p-6 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row">
          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3">
            {Array.isArray(productData.images) &&
              productData.images.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Thumbnail ${index + 1}`}
                  className={`cursor-pointer p-2 rounded-lg transition-all transform hover:scale-105 ${
                    imageUrl === item
                      ? "border-2 border-blue-400"
                      : "border border-gray-300"
                  }`}
                  onClick={() => setImageUrl(item)}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <img
              src={imageUrl || "fallback-image-url.png"}
              alt={productData.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Details) */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px] p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-700">
          {productData.name}
        </h1>
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={Star} alt={`Star ${i + 1}`} className="w-4" />
          ))}
          <span className="text-gray-500">(122 reviews)</span>
        </div>
        <p className="text-3xl font-medium text-blue-500">
          {currency}
          {productData.price}
        </p>
        <p className="text-gray-600">{productData.description}</p>

        <button
          onClick={() => addToCart(productData._id || productData.id)}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transform hover:scale-105 transition-transform"
        >
          ADD TO CART
        </button>

        <hr className="border-gray-300" />

        <div className="text-sm text-gray-500">
          <p>100% Original Product</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
