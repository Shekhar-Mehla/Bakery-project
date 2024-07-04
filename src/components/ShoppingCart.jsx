import React from "react";
import "../App.css";

const ShoppingCart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
