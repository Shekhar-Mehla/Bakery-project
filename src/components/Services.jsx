// src/components/Services.jsx

import React from "react";
import Layout from "./Layout";

const Services = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Custom Cakes</h5>
                <p className="card-text">
                  We create custom cakes for all occasions, including weddings,
                  birthdays, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Catering Services</h5>
                <p className="card-text">
                  Our catering services offer a variety of delicious treats for
                  your events, big or small.
                </p>
              </div>
            </div>
          </div>
          {/* Add more service cards as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
