import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Layout from "./Layout";
import Cookies_card from "./Cookies_card";

const Cookies_card_section = () => {
  return (
    <Layout>
      <Row xs={1} md={2} className="g-5">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Cookies_card></Cookies_card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Cookies_card_section;
