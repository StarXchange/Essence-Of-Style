import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import bin_icon from "../assets/bin_icon.png";
import CartTotal from "../components/CartTotal";


const Cart = () => {
  const { products, currency, cartItems, updateCartItem } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  // Update cartData whenever cartItems changes
  useEffect(() => {
    const tempData = Object.entries(cartItems).map(([id, quantity]) => {
      const product = products.find((product) => product.id === Number(id));
      return product ? { ...product, quantity } : null;
    }).filter(Boolean); // Remove null entries
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr] sm:grid-cols-[4fr_2fr_1fr] items-center gap-4"
          >
            {/* Product Image and Details */}
            <div className="flex items-start gap-6">
              <img
                className="w-16 sm:w-20"
                src={[item.image]}
                alt={item.name}
              />
              <div>
                <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity Input */}
            <input
             onChangeCapture={(e) => e.target.value ==='' || e.target.value === '0' ? null : updateQuantity (item.id, Number(e.target.value)) }
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) =>
                updateCartItem(item.id, Number(e.target.value))
              }
            />
            <img
  onClick={() => updateCartItem(item.id, 0)} // Set quantity to 0
  className="w-4 mr-4 sm:w-5 cursor-pointer"
  src={bin_icon}
  alt="Delete"
/>
  </div>
        ))}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button className='bg-black px-8 py-3 text-white '>PROCEED TO CHECKOUT</button>

          </div>
          </div>

      </div>
    </div>
  );
};

export default Cart;
