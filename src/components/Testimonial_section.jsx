import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import React from "react";
import Testimonal from "./Testimonal";

const Testimonial_section = () => {
  return (
    <div>
      <Carousel className="">
        <Carousel.Item>
          <Testimonal />
          <Testimonal />
          <Testimonal />
        </Carousel.Item>
        <Carousel.Item>
          <Testimonal />
        </Carousel.Item>
        <Carousel.Item>
          <Testimonal />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Testimonial_section;
