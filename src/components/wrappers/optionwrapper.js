import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const OptionWrapper = (props) => {
  return (
    <Row>
      <Col xs={4} style={{ textAlign: "right" }} className="mt-2">
      {props.label}
      </Col>
      <Col xs={8}>
      {props.options.map((option) => (
            <Form.Group key={option}>
              <Form.Check
                type="radio"
                label={option}
                name="options"
                style={{ textAlign: "left" }}
                value={option}
                selected={option === props.value}
                onChange={(e) => props.selectOption(e.target.value)}
              />
            </Form.Group>
          ))}
      </Col>
    </Row>
  );
};

export default OptionWrapper;
