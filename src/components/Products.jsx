// src/components/Product.jsx

import React from "react";

const Products = ({ product,CardItems }) => {
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => {
          CardItems(product.id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
