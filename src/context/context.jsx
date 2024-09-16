import React, { createContext } from "react";
export const shopProduct = createContext();
import { imageurl } from "../assets/assets.js";
export const ShopProductprovider = (props) => {
  const products = [
    {
      id: 1,
      name: "Croissant",
      price: 2.5,
      image: imageurl.croissant,
      description: "Freshly baked croissant",
    },
    {
      id: 2,
      name: "Baguette",
      price: 3.0,
      image: imageurl.baguette,
      description: "Traditional French bread with a crispy crust",
    },
    {
      id: 3,
      name: "Cinnamon Roll",
      price: 2.75,
      image: imageurl.Cinnamon_Roll,
      description: "Sweet pastry with cinnamon and icing",
    },
    {
      id: 4,
      name: "Blueberry Muffin",
      price: 2.0,
      image: imageurl.blueberry_muffin,
      description: "Moist muffin with fresh blueberries",
    },
    {
      id: 5,
      name: "Macaron",
      price: 1.5,
      image: imageurl.macaron,
      description:
        "Delicate French pastry made with almond flour, filled with ganache or buttercream",
    },
    {
      id: 6,
      name: "Croissant",
      price: 2.5,
      image: imageurl.croissant,
      description: "Freshly baked croissant",
    },

    // Add more products as needed
  ];
  const specialDealData = {
    name: "Triple Berry Cheesecake",
    image: imageurl.cheesecake,
    description:
      "Indulge in our delectable Triple Berry Cheesecake, made with a creamy, velvety filling and topped with a luscious blend of fresh strawberries, blueberries, and raspberries.",
    specialPrice: "$5.99 per slice (Regularly $7.99)",
    bundleOffer: "Buy 3 slices for just $15.00!",
    availability: "August 1st - August 7th",
    redeemInstructions:
      "In-Store: Mention this special at checkout. Online: Use promo code BERRYDELIGHT at checkout.",
    orderLink: "https://your-bakery-shop.com/order",
    reviews: [
      {
        name: "Jane D.",
        text: "The best cheesecake I've ever had! The berry topping is fantastic.",
        rating: 5,
      },
      {
        name: "Mark T.",
        text: "Perfect blend of sweetness and tartness. Will definitely order again.",
        rating: 4,
      },
    ],
  };
  const value = { products, specialDealData };

  return (
    <shopProduct.Provider value={value}>{props.children}</shopProduct.Provider>
  );
};
