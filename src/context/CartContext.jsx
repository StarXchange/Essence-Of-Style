import React, { createContext, useState, useEffect } from "react";

// Create a context for the cart
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const delivery_fee = 10; // Flat delivery fee
  const [cartItems, setCartItems] = useState([]); // Cart items array
  const [cartTotal, setCartTotal] = useState(0); // Cart total amount
  const [products, setProducts] = useState([]); // Products list
  const [cartData, setCartData] = useState([]); // Merged cart data with product details

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/cart/items", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Fix string interpolation
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const responseData = await response.json();
        const cartData = responseData?.data || {};

        setCartItems(cartData.items || []); // Default to empty array
        setCartTotal(cartData.total || 0); // Default to 0
      } catch (error) {
        console.error("Error fetching cart:", error.message);
      }
    };

    fetchCart();
  }, []);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/list", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        setProducts(productsData.products || []); // Default to empty array
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // Update cartData whenever cartItems or products changes
  useEffect(() => {
    setCartData(
      (cartItems || []) // Ensure cartItems is at least an empty array
        .map((cartItem) => {
          const product = (products || []).find(
            (product) => product._id === cartItem.productID
          );
          return product ? { ...product, quantity: cartItem.quantity } : null;
        })
        .filter(Boolean) // Remove null values
    );
  }, [cartItems, products]);

  const addToCart = async (productID, quantity = 1) => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Fix string interpolation
        },
        body: JSON.stringify({ productID, quantity }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      setCartItems(data.items || []); // Default to empty array
      setCartTotal(data.total || 0); // Default to 0
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productID) => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Fix string interpolation
        },
        body: JSON.stringify({ productID }),
      });

      const data = await response.json();
      setCartItems(data.items || []); // Default to empty array
      setCartTotal(data.total || 0); // Default to 0
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
    }
  };

  // Update item quantity in cart
  const updateCartItem = async (productID, quantity) => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Fix string interpolation
        },
        body: JSON.stringify({ productID, quantity }),
      });

      const data = await response.json();
      setCartItems(data.items || []); // Default to empty array
      setCartTotal(data.total || 0); // Default to 0
    } catch (error) {
      console.error("Error updating cart item:", error.message);
    }
  };

  // Clear cart
  const clearCart = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/clear", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Fix string interpolation
        },
      });

      const data = await response.json();
      setCartItems(data.items || []); // Default to empty array
      setCartTotal(data.total || 0); // Default to 0
    } catch (error) {
      console.error("Error clearing cart:", error.message);
    }
  };

  // Get the total number of items in the cart
  const getCartCount = () => {
    return (cartItems || []).reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
  };

  // Context value to provide
  const value = {
    cartItems,
    cartData,
    cartTotal,
    delivery_fee,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    getCartCount,
};

return (
    <CartContext.Provider value={value}>
      {children} {/* Render all children components wrapped by this provider */}
    </CartContext.Provider>
);
};

export default CartContextProvider;

