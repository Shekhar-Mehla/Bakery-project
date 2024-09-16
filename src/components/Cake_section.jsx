import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Cake_card from "./Cake_card";
import Layout from "./Layout";

const Cake_section = () => {
  return (
    <Layout>
      <Row xs={1} md={2} className="g-5">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col key={idx}>
            <Cake_card></Cake_card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Cake_section;
