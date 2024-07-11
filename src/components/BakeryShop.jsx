// src/components/BakeryShop.jsx

import React, { useState } from "react";

import Products from "./Products";
import croissant from "../assets/croissant.jpg";

const BakeryShop = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Croissant",
      price: 2.5,
      image: { croissant },
      description: "Freshly baked croissant",
    },
    {
      id: 2,
      name: "Baguette",
      price: 3.0,
      // image: "./assets/baguette.jpg",
      description: "Traditional French baguette",
    },
    // Add more products as needed
  ];
  const [productsList, setProductsList] = useState(products);
  return (
    <div className="bakery-shop">
      <h2>Our Products</h2>
      <div className="products">
        {productsList.map(
          (product) => (
            <img src={product.image} alt="" />
          )
          // <Products key={product.id} product={product}></Products>
        )}
      </div>
    </div>
  );
};

export default BakeryShop;
