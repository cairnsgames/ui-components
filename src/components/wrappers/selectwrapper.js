import React from "react";
import { Form, Row, Col, FormGroup, Button } from "react-bootstrap";

const SelectWrapper = ({ label, value, options, onSubmit }) => {
  return (
    <Row>
      <Col xs={4}  style={{textAlign:"right"}} className="mt-2">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col xs={8}>
        <FormGroup className="mb-3">
          <Form.Select value={value} onChange={(e) => onSubmit(e.target.value)}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default SelectWrapper;
