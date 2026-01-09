import { useState } from "react";
import React, { createContext,  useEffect, useContext } from 'react';

const Cartcontext = createContext();
export const useCart = () => useContext(Cartcontext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const exist = cartItems.find(i => i.id === item.id);
    if (exist) {
      setCartItems(prev =>
        prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      );
    } else {
      setCartItems(prev => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter(Boolean)
    );
  };
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleAddToWishlist = (item) => {
  
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyInWishlist = existingWishlist.find((i) => i.id === item.id);
    if (!isAlreadyInWishlist) {
        const updated = [...existingWishlist, item];
        localStorage.setItem("wishlist", JSON.stringify(updated));
        alert("Added to wishlist");
    } else {
        alert("Already in wishlist");
    }
};


  

  return (
    <Cartcontext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        decreaseQuantity,
        getCartCount,
        getTotalPrice,
        increaseQuantity,
      handleAddToWishlist
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

