// src/components/BakeryShop.jsx

import Products from "./Products";

import { useActionData } from "react-router-dom";
import { useEffect } from "react";
const BakeryShop = ({ productsLiist,CardItems }) => {
  // Example product data

  return (
    <div className="bakery-shop">
      <h2>Our Products</h2>
      <div className="products">
        {productsLiist.map((product) => {
        return <Products CardItems = {CardItems} key={product.id} product={product}></Products>;
        })}
      </div>
    </div>
  );
};

export default BakeryShop;
