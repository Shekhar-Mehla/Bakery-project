// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BakeryShop from "./components/BakeryShop";
import Cart from "./components/Cart";
import About from "./components/About";
import Products from "./components/Products";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BakeryShop />} />
          <Route path="/products" element={<BakeryShop />} />
          {/* Use the Products component */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
