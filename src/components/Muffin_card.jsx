import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import muffin_card from "../assets/muffin_card.jpg";
const Muffin_card = () => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={muffin_card} />
        <Card.Body>
          <Card.Title>Cake_title</Card.Title>
          <Card.Text>$4.00</Card.Text>
          <Button className="" variant="primary">
            Buy Now!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Muffin_card;
