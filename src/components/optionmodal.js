import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const OptionModal = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = () => {
    props.onSubmit(selectedOption);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {props.label}
          {props.options.map((option) => (
            <Form.Group key={option}>
              <Form.Check
                type="radio"
                label={option}
                name="options"
                value={option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OptionModal;
