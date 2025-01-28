import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency } = useContext(ProductContext); // Access currency from ProductContext
  const { delivery_fee, getCartCount, cartTotal } = useContext(CartContext); // Access delivery fee, cart total, and cart count from CartContext

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {cartTotal}.00
          </p>
        </div>
        <hr />

        {/* Delivery Fee */}
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>
            {currency}
            {cartTotal === 0 ? 0 : delivery_fee}
          </p>
        </div>
        <hr />

        {/* Total */}
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {cartTotal === 0 ? 0 : cartTotal + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
