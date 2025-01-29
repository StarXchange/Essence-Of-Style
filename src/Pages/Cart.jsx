// import React, { useContext, useState, useEffect } from "react";
// import { ProductContext } from "../context/ProductContext";
// import { CartContext } from "../context/CartContext";
// import Title from "../components/Title";
// import bin_icon from "../assets/bin_icon.png";
// import CartTotal from "../components/CartTotal";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { products, currency } = useContext(ProductContext);
//   const { cartItems, clearCart, updateCartItem, removeFromCart } =
//     useContext(CartContext);
//   const navigate = useNavigate();

//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = cartItems
//       .map((cartItem) => {
//         const productId =
//           typeof cartItem.productID === "object"
//             ? cartItem.productID._id
//             : cartItem.productID;

//         const product = products.find((product) => product._id === productId);

//         return product ? { ...product, quantity: cartItem.quantity } : null;
//       })
//       .filter(Boolean);

//     setCartData(tempData);
//   }, [cartItems, products]);

//   return (
//     <div className="pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400 border-t">
//       <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-6">
//         {/* Cart Items Section */}
//         <div className="w-full sm:w-3/5 p-6 rounded-lg shadow-lg bg-white">
//           <div className="text-2xl mb-6">
//             <Title text1={"YOUR"} text2={"CART"} />
//           </div>

//           <div>
//             {cartData.map((item, index) => (
//               <div
//                 key={index}
//                 className="py-6 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr] sm:grid-cols-[4fr_2fr_1fr] items-center gap-6"
//               >
//                 {/* Product Image and Details */}
//                 <div className="flex items-start gap-6">
//                   <img
//                     className="w-16 sm:w-20"
//                     src={item.images?.[0] || "placeholder.png"}
//                     alt={item.name || "Product"}
//                   />
//                   <div>
//                     <p className="text-xs sm:text-lg font-medium text-gray-800">
//                       {item.name || "Unknown Product"}
//                     </p>
//                     <div className="flex items-center gap-5 mt-2">
//                       <p className="text-xl text-black">
//                         {currency}
//                         {item.price}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quantity Input */}
//                 <input
//                   className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="number"
//                   min={1}
//                   value={item.quantity}
//                   onChange={(e) =>
//                     updateCartItem(item._id, Number(e.target.value))
//                   }
//                 />

//                 {/* Delete Icon */}
//                 <img
//                   onClick={() => removeFromCart(item._id)}
//                   className="w-5 cursor-pointer hover:scale-110 transition-transform"
//                   src={bin_icon}
//                   alt="Delete"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Cart Total Section */}
//         <div className="w-full sm:w-2/5 p-6 rounded-lg shadow-lg bg-white">
//           <CartTotal />
//           <div className="w-full text-right mt-6">
//             <button
//               onClick={() => navigate("/place-order")}
//               className="bg-black px-8 py-3 text-white text-lg rounded-md hover:bg-gray-800 transition-colors"
//             >
//               PROCEED TO CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import Title from "../components/Title";
import bin_icon from "../assets/bin_icon.png";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency } = useContext(ProductContext);
  const { cartItems, clearCart, updateCartItem, removeFromCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = cartItems
      .map((cartItem) => {
        const productId =
          typeof cartItem.productID === "object"
            ? cartItem.productID._id
            : cartItem.productID;

        const product = products.find((product) => product._id === productId);

        return product ? { ...product, quantity: cartItem.quantity } : null;
      })
      .filter(Boolean);

    setCartData(tempData);
  }, [cartItems, products]);

  const handleProceedToCheckout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page if not authenticated
      navigate("/login");
    } else {
      // Proceed to checkout if authenticated
      navigate("/place-order");
    }
  };

  return (
    <div className="pt-10 sm:pt-14 min-h-[80vh] bg-gradient-to-r from-blue-50 to-blue-400 border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-6">
        {/* Cart Items Section */}
        <div className="w-full sm:w-3/5 p-6 rounded-lg shadow-lg bg-white">
          <div className="text-2xl mb-6">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>

          <div>
            {cartData.map((item, index) => (
              <div
                key={index}
                className="py-6 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr] sm:grid-cols-[4fr_2fr_1fr] items-center gap-6"
              >
                {/* Product Image and Details */}
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={item.images?.[0] || "placeholder.png"}
                    alt={item.name || "Product"}
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium text-gray-800">
                      {item.name || "Unknown Product"}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="text-xl text-black">
                        {currency}
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quantity Input */}
                <input
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItem(item._id, Number(e.target.value))
                  }
                />

                {/* Delete Icon */}
                <img
                  onClick={() => removeFromCart(item._id)}
                  className="w-5 cursor-pointer hover:scale-110 transition-transform"
                  src={bin_icon}
                  alt="Delete"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="w-full sm:w-2/5 p-6 rounded-lg shadow-lg bg-white">
          <CartTotal />
          <div className="w-full text-right mt-6">
            <button
              onClick={handleProceedToCheckout}
              className="bg-black px-8 py-3 text-white text-lg rounded-md hover:bg-gray-800 transition-colors"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;