// src/components/Product.jsx

import React from "react";

const Product = ({ product, CardItems }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <button
          onClick={() => {
            CardItems(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
