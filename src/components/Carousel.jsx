import React from "react";

  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.imageUrl}
            alt={item.altText}
          />
          <Carousel.Caption>
            <h3>{item.captionTitle}</h3>
            <p>{item.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
