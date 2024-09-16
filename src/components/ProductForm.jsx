import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const fields = [
  {
    type: "text",
    placeholder: "enter product name",
    name: "name",
    label: "Poroduct Name",
  },

  {
    type: "textarea",
    placeholder: "enter the product description",
    name: "description",
    label: "Poroduct description ",
  },

  {
    type: "number",
    placeholder: "enter the product price",
    name: "price",
    label: "Price ",
    min: "0",
  },

  {
    type: "text",
    placeholder: "enter the product weight",
    name: "size_weight",
    label: "Product Weight",
  },
  {
    type: "number",
    placeholder: "enter the product stock quantity",
    name: "stock_quantity",
    label: "Products in Stock",
    min: "0",
  },
];
const ProductForm = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    return setForm({ ...form, [name]: value });
  };
  const onSubmitHnadle = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center align-items-center gap-2">
        <Col md={5}>image coming soon...</Col>
        <Col className="border rounded-3 p-3 border-dark shadow" md={5}>
          <h3 className="text-center">Product Detail Form!</h3>
          <Form
            onSubmit={(e) => {
              onSubmitHnadle(e);
            }}
          >
            {fields.map((field) => {
              const { type, placeholder, name, label, min } = field;

              return (
                <Form.Group key={label}>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      handleOnChange(e);
                    }}
                    required
                    name={name}
                    type={type}
                    min={type === "number" ? min : undefined}
                    placeholder={placeholder}
                  ></Form.Control>
                </Form.Group>
              );
            })}

            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                onChange={(e) => {
                  handleOnChange(e);
                }}
                as="select"
                name="category_id"
                required
              >
                <option></option>
                <option>Bread</option>
                <option>Cake</option>
                <option>Pastries</option>
                <option>Cookies</option>
                <option>Muffin</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
