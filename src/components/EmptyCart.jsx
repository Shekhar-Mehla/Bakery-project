import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const EmptyCart = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center p-4 border rounded bg-light shadow">
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="4x"
            className="text-primary mb-3"
          />
          <h2 className="text-primary">Your Cart is Empty</h2>
          <p className="text-muted mb-4">
            Looks like you haven't added anything to your cart yet.
          </p>
          <a className="btn btn-primary btn-lg" href="/" role="button">
            Go Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
