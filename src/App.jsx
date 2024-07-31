// src/App.jsx

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BakeryShop from "./components/BakeryShop";
import Cart from "./components/Cart";
import About from "./components/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";
import croissant from "./assets/croissant.jpg";
import baguette from "./assets/baguette.jpg";
import macaron from "./assets/macaron.jpg";
import Cinnamon_Roll from "./assets/Cinnamon_Roll.jpg";
import blueberry_muffin from "./assets/blueberryMuffin.jpg";
import cheesecake from "./assets/cheesecake.jpg";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // fetch data from api

  // Define your products array with additional items
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
    {
      id: 1,
      name: "Croissant",
      price: 2.5,
      image: croissant,
      description: "Freshly baked croissant",
    },

    // Add more products as needed
  ];
  const specialDealData = {
    name: "Triple Berry Cheesecake",
    image: cheesecake,
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

  const [productsList, setProductList] = useState(products);
  const [specialDeals, setSpecialDeals] = useState(specialDealData);

  // Function to add items to cart
  const CardItems = (id) => {
    const selectedItem = productsList.find((item) => item.id === id);
    if (selectedItem) {
      setCartItems([...cartItems, selectedItem]);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BakeryShop
              productsList={productsList}
              specialDeals={specialDeals}
              CardItems={CardItems}
            />
          }
        />
        <Route
          path="/products"
          element={
            <BakeryShop productsList={productsList} CardItems={CardItems} />
          }
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
