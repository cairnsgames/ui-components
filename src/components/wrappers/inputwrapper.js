import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

const InputWrapper = (props) => {
  const { label, value, onChange, type="text", style, className } = props;
  return (
    <Row style={{...style}} className={className}>
      <Col xs={4} style={{textAlign:"right"}} className="mt-2">
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col xs={8}>
        <InputGroup className="mb-1">
          <Form.Control
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            aria-label={label}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default InputWrapper;
