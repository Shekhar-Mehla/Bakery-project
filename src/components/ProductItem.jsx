import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";

const ProductItem = ({ name, price, image }) => {
  return (
    <>
      <Card>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>Price ${price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
