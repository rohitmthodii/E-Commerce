import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const CartContext = createContext();

// 2️⃣ Create provider to wrap the app
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);      // cart items

// Add item to cart
  const addItem = (item) => {
  setItems((prev) => {
    const exists = prev.find((i) => i.id === item.id);

      // item already in cart → do nothing
      if (exists) {
        return prev;
      }

      // add item for the first time
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove item by id
  const removeItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  // ✅ ADD: check if item already exists in cart
const isInCart = (id) => items.some(item => item.id === id);

//cart icon - badge
const cartCount = items.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <CartContext.Provider value={{ addItem, removeItem, items, isInCart, cartCount, }}>
      {children}
    </CartContext.Provider>
  );
};

// 3️⃣ Hook for easier access
export const useCart = () => useContext(CartContext);
