import React, { createContext, useState } from "react";
import products from "../products";

// Create a context for the shop
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₦"; // Default currency
  const delivery_fee = 10; // Flat delivery fee

  // State variables
  const [search, setSearch] = useState(""); // Search term
  const [showSearch, setShowSearch] = useState(false); // Toggle for showing search bar
  const [cartItems, setCartItems] = useState([]); // Cart items as an object mapping product IDs to quantities

  /**
   * Adds an item to the cart. If the item already exists, increments its quantity.
   * @param {number} itemId - ID of the item to add.
   */
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems); // Create a deep copy of the cart state

    if (cartData[itemId]) {
      cartData[itemId] += 1; // Increment quantity
    } else {
      cartData[itemId] = 1; // Add new item with quantity 1
    }

    console.log("Adding to cart:", { itemId, cartData }); // Debugging log

    setCartItems(cartData); // Update cart state
  };

  /**
   * Calculates the total number of items in the cart.
   * @returns {number} Total item count.
   */
  const getCartCount = () => {
    console.log("Current cartItems state:", cartItems); // Debugging log

    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId];
    }

    console.log("Total cart count:", totalCount); // Debugging log
    return totalCount;
  };

  /**
   * Updates the quantity of a cart item or removes it if quantity is 0.
   * @param {number} id - ID of the cart item.
   * @param {number} quantity - New quantity of the item (set to 0 to remove).
   */
  const updateCartItem = (id, quantity) => {
    setCartItems((prevCartItems) => {
      console.log("Updating cart item:", { id, quantity }); // Debugging log
      console.log("Previous cart state:", prevCartItems); // Debugging log

      if (quantity === 0) {
        const { [id]: _, ...rest } = prevCartItems; // Remove item
        console.log("Updated cart state after removal:", rest); // Debugging log
        return rest;
      }

      const updatedCart = { ...prevCartItems, [id]: quantity };
      console.log("Updated cart state after modification:", updatedCart); // Debugging log
      return updatedCart;
    });
  };


  const getCartAmount = () => {
    let totalAmount = 0;
  
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product.id === parseInt(itemId));
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId];
      }
    }
  
    return totalAmount;
  };
  
  // Context value to be provided to components
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateCartItem,
    getCartAmount
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children} {/* Render all children components wrapped by this provider */}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
