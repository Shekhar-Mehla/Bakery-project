import React from "react";
import TotalPrice from "./TotalPrice";

const Cart = ({ cartItems }) => {
  return (
    <>
      {cartItems.map((item) => {
        return (
          <div
            key={item.id}
            className="card mb-3"
            style={{
              maxWidth: "540px",
            }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  alt="..."
                  className="img-fluid rounded-start"
                  src={item.image}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price:$ {item.price}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {item.description}
                    </small>
                  </p>
                  <button className="btn btn-danger">Remove</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <TotalPrice cartItems={cartItems}></TotalPrice>
    </>
  );
};
export default Cart;
