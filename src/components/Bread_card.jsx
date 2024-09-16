import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Bread_card_image from "../assets/Bread_card.jpg";
const Bread_card = () => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Bread_card_image} />
        <Card.Body>
          <Card.Title>Bread_title</Card.Title>
          <Card.Text>$4.00</Card.Text>
          <Button className="" variant="primary">
            Buy Now!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Bread_card;
