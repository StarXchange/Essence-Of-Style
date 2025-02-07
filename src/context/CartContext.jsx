import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const delivery_fee = 1000;
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch cart items from the backend
  const fetchCart = async () => {
    if (!token) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/items`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch cart items");

      const responseData = await response.json();
      const cartData = responseData?.data || {};

      setCartItems(cartData.items || []);
      setCartTotal(cartData.total || 0);
    } catch (error) {
      console.error("Error fetching cart:", error.message);
    }
  };

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URLL}/products`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to fetch products");

        const productsData = await response.json();
        setProducts(productsData.products || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // Fetch cart data on component mount if token exists
  useEffect(() => {
    if (token) fetchCart();
  }, []);

  // Update cartData whenever cartItems or products change
  useEffect(() => {
    const updatedCartData = cartItems
      .map((cartItem) => {
        const product = products.find(
          (product) => product._id === cartItem.productID
        );
        return product ? { ...product, quantity: cartItem.quantity } : null;
      })
      .filter(Boolean);

    setCartData(updatedCartData);
  }, [cartItems, products]);

  const addToCart = async (productID, quantity = 1) => {
    if (!token) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productID, quantity }),
      });

      if (!response.ok) throw new Error("Failed to add item to cart");

      await fetchCart();
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  };

  const updateCartItem = async (productID, quantity) => {
    if (!token) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productID, quantity }),
      });

      if (!response.ok) throw new Error("Failed to update cart item");

      await fetchCart();
    } catch (error) {
      console.error("Error updating cart item:", error.message);
      await fetchCart();
    }
  };

  const removeFromCart = async (productID) => {
    if (!token) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productID }),
      });

      if (!response.ok) throw new Error("Failed to remove item from cart");

      await fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
      await fetchCart();
    }
  };

  const clearCart = async () => {
    if (!token) return;

    try {
      setCartItems([]);
      setCartTotal(0);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/clear`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to clear cart");

      await fetchCart();
    } catch (error) {
      console.error("Error clearing cart:", error.message);
      await fetchCart();
    }
  };

  const getCartCount = () => cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartData,
        cartTotal,
        delivery_fee,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;


