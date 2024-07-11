// src/components/BakeryShop.jsx

import React, { useState } from "react";

import Products from "./Products";
import croissant from "../assets/croissant.jpg";
import baguette from "../assets/baguette.jpg";
import macaron from "../assets/macaron.jpg";
import Cinnamon_Roll from "../assets/Cinnamon_Roll.jpg";
import blueberry_muffin from "../assets/blueberryMuffin.jpg";
const BakeryShop = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Croissant",
      price: 2.5,
      image: croissant,
      description: "Freshly baked croissant",
    },
    {
      id: 2,
      name: "Baguette",
      price: 3.0,
      image: baguette,
      description: "Traditional French bread with a crispy crust",
    },
    {
      id: 3,
      name: "Cinnamon Roll",
      price: 2.75,
      image: Cinnamon_Roll,
      description: "Sweet pastry with cinnamon and icing",
    },
    {
      id: 4,
      name: "Blueberry Muffin",
      price: 2.0,
      image: blueberry_muffin,
      description: "Moist muffin with fresh blueberries",
    },
    {
      id: 5,
      name: "Macaron",
      price: 1.5,
      image: macaron,
      description:
        "Delicate French pastry made with almond flour, filled with ganache or buttercream",
    },
  ];

  const [productsList, setProductsList] = useState(products);
  return (
    <div className="bakery-shop">
      <h2>Our Products</h2>
      <div className="products">
        {productsList.map((product) => {
          return <Products key={product.id} product={product}></Products>;
        })}
      </div>
    </div>
  );
};

export default BakeryShop;
