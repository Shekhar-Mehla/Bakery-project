import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Layout from "./Layout";
import Bread_card from "./Bread_card";

const Bread_card_section = () => {
  return (
    <Layout>
      <Row xs={1} md={2} className="g-5">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Bread_card></Bread_card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Bread_card_section;
