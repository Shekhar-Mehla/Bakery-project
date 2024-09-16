// src/App.jsx

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Cake_section from "./components/Cake_section";
import Bread_card_section from "./components/Bread_card_section";
import Pastry_card_section from "./components/Pastry_card_section";
import Cookies_card_section from "./components/Cookies_card_section";
import Muffin_section from "./components/Muffin_section";
import ProductForm from "./components/ProductForm";
import Home from "./pages/Home";
import Services from "./pages/Services.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import { useContext } from "react";
import { shopProduct } from "./context/context.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // this data is coming from the use costext api
  const { products } = useContext(shopProduct);

  // Function to add items to cart
  const CardItems = (id) => {
    const selectedItem = productsList.find((item) => item.id === id);
    if (selectedItem) {
      setCartItems([...cartItems, selectedItem]);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cakes" element={<Cake_section />} />
        <Route path="/breads" element={<Bread_card_section />} />
        <Route path="/pastries" element={<Pastry_card_section />} />
        <Route path="/cookies" element={<Cookies_card_section />} />
        <Route path="/muffins" element={<Muffin_section />} />
        <Route path="/insertProduct" element={<ProductForm />} />
      </Routes>
    </div>
  );
};

export default App;
