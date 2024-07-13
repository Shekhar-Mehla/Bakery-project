// src/components/BakeryShop.jsx

import React from "react";
import Products from "./Products";
import Layout from "./Layout";

const BakeryShop = ({ productsList, CardItems }) => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          {productsList && productsList.length > 0 ? (
            productsList.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <Products product={product} CardItems={CardItems} />
              </div>
            ))
          ) : (
            <div className="col-md-12 text-center">
              <p>No products available</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BakeryShop;
