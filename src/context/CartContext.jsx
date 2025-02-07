import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [localCart, setLocalCart] = useState([]); // Local cart for unauthenticated users

  // Fetch cart items from the backend if token is present
  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) return; // Do not fetch if no token

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/items`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const responseData = await response.json();
      const cartData = responseData?.data || {};

      setCartItems(cartData.items || []);
      setCartTotal(cartData.total || 0);
      return cartData;
    } catch (error) {
      console.error("Error fetching cart:", error.message);
      return null;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        setProducts(productsData.products || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // Update cartData whenever cartItems or products changes
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

  // Add to cart function
  const addToCart = async (productID, quantity = 1) => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productID, quantity }),
        });

        if (!response.ok) {
          throw new Error("Failed to add item to cart");
        }

        const data = await response.json();
        setCartItems(data.items || []);
        setCartTotal(data.total || 0);
        await fetchCart();
      } catch (error) {
        console.error("Error adding item to cart:", error.message);
      }
    } else {
      // Local cart management for unauthenticated users
      const existingItem = localCart.find(item => item.productID === productID);
      if (existingItem) {
        setLocalCart(localCart.map(item =>
          item.productID === productID ? { ...item, quantity: item.quantity + quantity } : item
        ));
      } else {
        setLocalCart([...localCart, { productID, quantity }]);
      }
    }
  };

  // Remove from cart function
  const removeFromCart = async (productID) => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/remove`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productID }),
        });

        if (!response.ok) {
          throw new Error("Failed to remove item from cart");
        }

        const data = await response.json();
        setCartItems(data.items || []);
        setCartTotal(data.total || 0);
        await fetchCart();
      } catch (error) {
        console.error("Error removing item from cart:", error.message);
      }
    } else {
      setLocalCart(localCart.filter(item => item.productID !== productID));
    }
  };

  // Update cart item quantity
  const updateCartItem = async (productID, quantity) => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Optimistically update the UI
        const updatedItems = cartItems.map(item => 
          item.productID === productID ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productID, quantity }),
        });

        if (!response.ok) {
          throw new Error("Failed to update cart item");
        }

        const data = await response.json();
        setCartItems(data.items || []);
        setCartTotal(data.total || 0);
        await fetchCart();
      } catch (error) {
        console.error("Error updating cart item:", error.message);
        // Revert optimistic update on error
        await fetchCart();
      }
    } else {
      // Local cart management for unauthenticated users
      setLocalCart(localCart.map(item =>
        item.productID === productID ? { ...item, quantity } : item
      ));
    }
  };

  // Clear cart function
  const clearCart = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Optimistically clear the cart
        setCartItems([]);
        setCartTotal(0);

        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cart/clear`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to clear cart");
        }

        const data = await response.json();
        setCartItems(data.items || []);
        setCartTotal(data.total || 0);
      } catch (error) {
        console.error("Error clearing cart:", error.message);
        // Revert optimistic update on error
        await fetchCart();
      }
    } else {
      // Clear local cart for unauthenticated users
      setLocalCart([]);
    }
  };

  // Get cart count
  const getCartCount = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return cartItems.length;
    } else {
      return localCart.length;
    }
  };

  // Sync local cart with server when user logs in
  const syncLocalCart = async () => {
    const token = localStorage.getItem("token");
    if (token && localCart.length > 0) {
      try {
        await Promise.all(localCart.map(item => addToCart(item.productID, item.quantity)));
        setLocalCart([]); // Clear local cart after syncing
      } catch (error) {
        console.error("Error syncing local cart:", error.message);
      }
    }
  };

  useEffect(() => {
    syncLocalCart();
  }, [localStorage.getItem("token")]);

  const value = {
    cartItems: localStorage.getItem("token") ? cartItems : localCart,
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
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;