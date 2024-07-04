import React, { useState } from "react";
import BakeryItem from "./BakeryItem";
import ShoppingCart from "./ShoppingCart";
import "../App.css";

// Sample data for bakery items with image URLs
const bakeryItems = [
  {
    id: 1,
    name: "Croissant",
    description: "Flaky and buttery",
    price: 2.5,
    image: "https://example.com/images/croissant.jpg",
  },
  {
    id: 2,
    name: "Baguette",
    description: "Crispy and chewy",
    price: 3.0,
    image: "https://example.com/images/baguette.jpg",
  },
  {
    id: 3,
    name: "Macaron",
    description: "Sweet and delicate",
    price: 1.5,
    image: "https://example.com/images/macaron.jpg",
  },
  {
    id: 4,
    name: "Muffin",
    description: "Soft and moist",
    price: 2.0,
    image: "https://example.com/images/muffin.jpg",
  },
];

const BakeryShop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container">
      <h1>Bakery Shop</h1>
      <div className="items-container">
        {bakeryItems.map((item) => (
          <BakeryItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default BakeryShop;
