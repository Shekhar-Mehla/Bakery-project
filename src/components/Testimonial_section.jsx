import React from "react";
import Testimonal from "./Testimonal";
import Layout from "./Layout";

import Carousel from "react-bootstrap/Carousel";
const Testimonial_section = () => {
  return (
    <>
      <div className="container mt-2 mb-2">
        <h3 className="text-center">Our Tesimonials</h3>

        <Carousel className="Testimonial_carasaul" data-bs-theme="light">
          <Carousel.Item className="d-flex">
            <Testimonal />
            <Testimonal />
            <Testimonal />
          </Carousel.Item>
          <Carousel.Item className="d-flex">
            <Testimonal />
            <Testimonal />
            <Testimonal />
          </Carousel.Item>
          <Carousel.Item className="d-flex">
            <Testimonal />
            <Testimonal />
            <Testimonal />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default Testimonial_section;
