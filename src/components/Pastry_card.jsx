import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pastery_card from "../assets/pastery_card.jpg";
const Pastry_card = () => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pastery_card} />
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
export default Pastry_card;
