// src/components/Cart.jsx

import React from "react";

const Cart = () => {
  // Example cart items
  const cartItems = [
    { id: 1, name: "Croissant", price: 2.5, quantity: 2 },
    { id: 2, name: "Baguette", price: 3.0, quantity: 1 },
    // Add more items as needed
  ];

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
