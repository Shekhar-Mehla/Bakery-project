import React, { useContext } from "react";
import { shopProduct } from "../context/context.jsx";
import ProductItem from "../components/ProductItem.jsx";
import Tittle from "../components/Tittle.jsx";
import { Container, Row, Col } from "react-bootstrap";
const ProductContainer = () => {
  const { products } = useContext(shopProduct);
  return (
    <div>
      <Container className="d-flex flex-column flex-wrap  ">
        <Row>
          <Col>
            <Tittle text1={"New"} text2={"Arrivals"}></Tittle>
          </Col>
        </Row>
        <Row>
          {" "}
          {products.map((product, index) => (
            <Col className="mt-3 shadow" md={4}>
              <ProductItem
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
              ></ProductItem>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductContainer;
