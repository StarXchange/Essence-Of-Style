// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import Star from "../assets/star.png";
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");

//   const fetchProductData = () => {
//     const product = products.find((item) => item.id === Number(productId));

//     if (product) {
//       setProductData(product);
//       setImageUrl(Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl);
//  // Set the initial image
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId]);

//   return productData ? (
//     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* Product Data */}
//       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
//         {/* Product Image */}
//         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
//             {productData.imageUrl.map((item, index) => (
//               <img
//                 onClick={() => setImageUrl(item)}
//                 src={item}
//                 key={index}
//                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
//                 alt={`Thumbnail ${index + 1}`}
//               />
//             ))}
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className="w-full h-auto" src={imageUrl} alt={productData.name} />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="flex-1">
//           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(5)].map((_, i) => (
//               <img src={Star} alt={`Star ${i + 1}`} key={i} className="w-3.5" />
//             ))}
//             <p className="pl-2">(122)</p>
//           </div>
//           <p className="mt-5 text-3xl font-medium">
//             {currency}
//             {productData.price}
//           </p>
//           <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
//           <div className="flex flex-col gap-4 my-8"></div>
//           <button onClick={() => addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
//             ADD TO CART
//           </button>
//           <hr className="mt-8 sm:w-4/5" />
//           <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original Product</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* Product Review Section */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className="border px-5 py-3 text-sm">Description</b>
//           <p className="border px-5 py-3 text-sm">Reviews</p>
//         </div>
//         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
//           <p>
//             An e-commerce website is a digital platform enabling businesses to sell products or services online. It features user-friendly navigation, product listings with detailed descriptions, secure payment options, and a seamless checkout process. Customers can browse, compare, and purchase items anytime, enhancing convenience and accessibility for shopping from anywhere in the world.
//           </p>
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts category={productData.category} />
//     </div>
//   ) : (
//     <div className="opacity-0">Loading...</div>
//   );
// };

// export default Product;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Star from "../assets/star.png";
// import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item.id === Number(productId));
    if (product) {
      setProductData(product);
      setImageUrl(
        Array.isArray(product.imageUrl) ? product.imageUrl[0] : product.imageUrl
      ); // Set the initial image
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  if (!productData) return <div>Loading...</div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {Array.isArray(productData.imageUrl) &&
              productData.imageUrl.map((item, index) => (
                <img
                  onClick={() => setImageUrl(item)}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={imageUrl}
              alt={productData.name}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img src={Star} alt={`Star ${i + 1}`} key={i} className="w-3.5" />
            ))}
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8"></div>
          <button
            onClick={() => addToCart(productData.id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is a digital platform enabling businesses to
            sell products or services online. It features user-friendly
            navigation, product listings with detailed descriptions, secure
            payment options, and a seamless checkout process. Customers can
            browse, compare, and purchase items anytime, enhancing convenience
            and accessibility for shopping from anywhere in the world.
          </p>
        </div>
      </div>

      {/* Related Products */}
      {/* <RelatedProducts category={productData.category} /> */}
    </div>
  );
};

export default Product;
