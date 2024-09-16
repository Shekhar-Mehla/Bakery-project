import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Layout from "./Layout";
import Pastry_card from "./Pastry_card";

const Pastry_card_section = () => {
  return (
    <Layout>
      <Row xs={1} md={2} className="g-5">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Pastry_card></Pastry_card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Pastry_card_section;
