// src/components/BakeryItem.js

import React from "react";
import "../App.css";
import croissantImage from "../assets/croissant.jpg";
import baguetteImage from "../assets/baguette.jpg";
import macaronImage from "../assets/macaron.jpg";
import muffinImage from "../assets/muffin.jpg";

const BakeryItem = ({ item, addToCart }) => {
  let imageSrc;
  switch (item.name.toLowerCase()) {
    case "croissant":
      imageSrc = croissantImage;
      break;
    case "baguette":
      imageSrc = baguetteImage;
      break;
    case "macaron":
      imageSrc = macaronImage;
      break;
    case "muffin":
      imageSrc = muffinImage;
      break;
    default:
      imageSrc = "";
  }

  return (
    <div className="item-card">
      <img src={imageSrc} alt={item.name} className="item-image" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default BakeryItem;
