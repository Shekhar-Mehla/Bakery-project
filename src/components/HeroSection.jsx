import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import muffin from "../assets/muffin.jpg";
import croissant from "../assets/croissant.jpg";
import cinnamon_rool from "../assets/Cinnamon_Roll.jpg";

const HeroSection = () => {
  return (
    <section className="hero mb-3 d-flex align-items-center justify-content-center text-center text-white">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="hero-content">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cinnamon_rool}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 className="display-4 animate__animated animate__fadeIn animate__delay-1s">
                      Welcome to Our Bakery
                    </h3>
                    <p className="lead animate__animated animate__fadeIn animate__delay-2s">
                      Freshly baked goods delivered daily. Discover our
                      delightful range of products.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      className="animate__animated animate__fadeIn animate__delay-3s"
                    >
                      Order Now
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={muffin}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className="display-4 animate__animated animate__fadeIn animate__delay-1s">
                      Delicious Treats Await
                    </h3>
                    <p className="lead animate__animated animate__fadeIn animate__delay-2s">
                      Explore our variety of pastries and cakes made just for
                      you.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      className="animate__animated animate__fadeIn animate__delay-3s"
                    >
                      Discover More
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={croissant}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3 className="display-4 animate__animated animate__fadeIn animate__delay-1s">
                      Experience the Best
                    </h3>
                    <p className="lead animate__animated animate__fadeIn animate__delay-2s">
                      Taste the quality and freshness in every bite.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      className="animate__animated animate__fadeIn animate__delay-3s"
                    >
                      Shop Now
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
