
// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const CartContextProvider = ({ children }) => {
//   const delivery_fee = 10;
//   const [cartItems, setCartItems] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [products, setProducts] = useState([]);
//   const [cartData, setCartData] = useState([]);

//   // Fetch cart items from the backend
//   const fetchCart = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/cart/items", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch cart items");
//       }

//       const responseData = await response.json();
//       const cartData = responseData?.data || {};

//       setCartItems(cartData.items || []);
//       setCartTotal(cartData.total || 0);
//       return cartData;
//     } catch (error) {
//       console.error("Error fetching cart:", error.message);
//       return null;
//     }
//   };


//   // Fetch products from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/list", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         const productsData = await response.json();
//         setProducts(productsData.products || []);
//       } catch (error) {
//         console.error("Error fetching products:", error.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Update cartData whenever cartItems or products changes
//   useEffect(() => {
//     const updatedCartData = cartItems
//       .map((cartItem) => {
//         const product = products.find(
//           (product) => product._id === cartItem.productID
//         );
//         return product ? { ...product, quantity: cartItem.quantity } : null;
//       })
//       .filter(Boolean);
    
//     setCartData(updatedCartData);
//   }, [cartItems, products]);

//   const addToCart = async (productID, quantity = 1) => {
//     try {
//       const response = await fetch("http://localhost:8080/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ productID, quantity }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add item to cart");
//       }

//       const data = await response.json();
      
//       // Immediately update local state
//       setCartItems(data.items || []);
//       setCartTotal(data.total || 0);
      
//       // Fetch fresh cart data
//       await fetchCart();
//     } catch (error) {
//       console.error("Error adding item to cart:", error.message);
//     }
//   };

//   const updateCartItem = async (productID, quantity) => {
//     try {
//       // Optimistically update the UI
//       const updatedItems = cartItems.map(item => 
//         item.productID === productID ? { ...item, quantity } : item
//       );
//       setCartItems(updatedItems);

//       const response = await fetch("http://localhost:8080/api/cart/update", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ productID, quantity }),
//       });

//       const data = await response.json();
      
//       // Update with server response
//       setCartItems(data.items || []);
//       setCartTotal(data.total || 0);
      
//       // Fetch fresh cart data
//       await fetchCart();
//     } catch (error) {
//       console.error("Error updating cart item:", error.message);
//       // Revert optimistic update on error
//       await fetchCart();
//     }
//   };

// const removeFromCart = async (productID) => {
//     try {
//       // Optimistically update the UI
//       const updatedItems = cartItems.filter(item => 
//         item.productID.toString() !== productID.toString()
//       );
//       setCartItems(updatedItems);

//       const response = await fetch("http://localhost:8080/api/cart/remove", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ productID }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to remove item from cart");
//       }

//       const data = await response.json();
      
//       if (data.success) {
//         setCartItems(data.data.items || []);
//         setCartTotal(data.data.total || 0);
//       } else {
//         throw new Error(data.message);
//       }
      
//       // Fetch fresh cart data
//       await fetchCart();
//     } catch (error) {
//       console.error("Error removing item from cart:", error.message);
//       // Revert optimistic update on error
//       await fetchCart();
//     }
//   };

//   const clearCart = async () => {
//     try {
//       // Optimistically clear the cart
//       setCartItems([]);
//       setCartTotal(0);

//       const response = await fetch("http://localhost:8080/api/cart/clear", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();
//       setCartItems(data.items || []);
//       setCartTotal(data.total || 0);
//     } catch (error) {
//       console.error("Error clearing cart:", error.message);
//       // Revert optimistic update on error
//       await fetchCart();
//     }
//   };

//   const getCartCount = () => {
//     // return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
//     return cartItems.length;
//   };

//   const value = {
//     cartItems,
//     cartData,
//     cartTotal,
//     delivery_fee,
//     addToCart,
//     removeFromCart,
//     updateCartItem,
//     clearCart,
//     getCartCount,
//   };

//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContextProvider;

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  // Fetch cart items from the backend
  const fetchCart = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        setProducts(productsData.products || []);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // Fetch cart data on component mount if token exists
  useEffect(() => {
    const initializeCart = async () => {
      if (localStorage.getItem("token")) {
        await fetchCart();
      }
    };
    initializeCart();
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

  const addToCart = async (productID, quantity = 1) => {
    try {
      const response = await fetch("http://localhost:8080/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  };

  const updateCartItem = async (productID, quantity) => {
    try {
      const updatedItems = cartItems.map(item => 
        item.productID === productID ? { ...item, quantity } : item
      );
      setCartItems(updatedItems);

      const response = await fetch("http://localhost:8080/api/cart/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ productID, quantity }),
      });

      const data = await response.json();
      setCartItems(data.items || []);
      setCartTotal(data.total || 0);

      await fetchCart();
    } catch (error) {
      console.error("Error updating cart item:", error.message);
      await fetchCart();
    }
  };

  const removeFromCart = async (productID) => {
    try {
      const updatedItems = cartItems.filter(item => 
        item.productID.toString() !== productID.toString()
      );
      setCartItems(updatedItems);

      const response = await fetch("http://localhost:8080/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ productID }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }

      const data = await response.json();
      if (data.success) {
        setCartItems(data.data.items || []);
        setCartTotal(data.data.total || 0);
      } else {
        throw new Error(data.message);
      }

      await fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
      await fetchCart();
    }
  };

  const clearCart = async () => {
    try {
      setCartItems([]);
      setCartTotal(0);

      const response = await fetch("http://localhost:8080/api/cart/clear", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      setCartItems(data.items || []);
      setCartTotal(data.total || 0);
    } catch (error) {
      console.error("Error clearing cart:", error.message);
      await fetchCart();
    }
  };

  const getCartCount = () => {
    return cartItems.length;
  };

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
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

