// SpecialDeal.js
import React from "react";

const SpecialDeal = ({ item }) => {
  return (
    <div className="container my-5">
      <h3 className="m-2">THIS WEEKS SPECIAL'S</h3>
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-text">{item.description}</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-tag me-2"></i>
                  <strong>Special Price:</strong> {item.specialPrice}
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-gift me-2"></i>
                  <strong>Bundle Offer:</strong> {item.bundleOffer}
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-calendar me-2"></i>
                  <strong>Availability:</strong> {item.availability}
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-credit-card me-2"></i>
                  <strong>How to Redeem:</strong> {item.redeemInstructions}
                </li>
              </ul>
              <a
                href={item.orderLink}
                className="btn btn-danger mt-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
              <div className="mt-4">
                <h4>Customer Reviews:</h4>
                {item.reviews.map((review, index) => (
                  <div key={index} className="border-top pt-2 mt-2">
                    <p>
                      <strong>{review.name}:</strong> {review.text}
                    </p>
                    <p>Rating: {review.rating} stars</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDeal;
