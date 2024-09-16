// src/components/Home.jsx

import React from "react";
import Products from "../components/Products";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ProducstByCatogries from "../components/ProducstByCatogries";
import SpecialDeal from "../components/SpecialDeal";
import Testimonial_section from "../components/Testimonial_section";
import About_us from "../components/About_us";
import { shopProduct } from "../context/context.jsx";
import { useContext } from "react";

const Home = ({ CardItems }) => {
  const { products, specialDealData } = useContext(shopProduct);
  return (
    <Layout>
      <HeroSection></HeroSection>
      <ProducstByCatogries></ProducstByCatogries>
      <SpecialDeal item={specialDealData}></SpecialDeal>

      <div className="container">
        <h3>TOP PICKS</h3>
        <div className="row">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <Products product={product} CardItems={CardItems} />
              </div>
            ))
          ) : (
            <div className="col-md-12 text-center">
              <p>No products available </p>
            </div>
          )}
        </div>
      </div>

      <About_us />

      <Testimonial_section />
    </Layout>
  );
};

export default Home;
