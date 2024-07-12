import React from "react";

const TotalPrice = ({ cartItems }) => {
  return (
    <div>
      Total price:$
      {cartItems.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0)}
    </div>
  );
};
export default TotalPrice;
