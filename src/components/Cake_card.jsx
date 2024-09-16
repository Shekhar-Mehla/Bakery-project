import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cake_card_img from "../assets/cake_card_img.jpg";
const Cake_card = () => {
  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Cake_card_img} />
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
export default Cake_card;
