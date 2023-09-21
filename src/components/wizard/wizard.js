import React, { useState, Children } from "react";
import { Button, Row, Col, ButtonGroup } from "react-bootstrap";
import "./wizard.scss";

const Wizard = ({ children }) => {
  const [active, setActive] = useState(-1);
  const arrayChildren = Children.toArray(children);

  const nextStep = () => {
    if (active < arrayChildren.length - 1) setActive(active + 1);
    if (active === -1) setActive(1);
  };
  const prevStep = () => {
    if (active > 0) setActive(active - 1);
  };

  const getClassName = (index) => {
    let classname = "";
    if (index === arrayChildren.length - 1) {
      classname += "laststep";
    } else {
      classname += "step";
    }
    if (index === active || (active === -1 && index === 0)) {
      classname += " active";
    }
    return classname;
  };

  if (active === -1) {
    Children.forEach(children, (child, index) => {
      if (child.props.active) {
        setActive(index);
      }
    });
  }
  return (
    <div className="wizard">
      <Row className="wizard-steps pb-3">
        {Children.map(children, (child, index) => {
          if (React.isValidElement(child))
            return (
              <Col className="text-center">
                <div className={getClassName(index)} onClick={()=>setActive(index)}>
                  {child.props.icon ? <>{child.props.icon}</> : null}{" "}
                  <span className={`${child.props.icon ? "d-none d-md-inline" : ""}`}>{child.props.title}</span>
                </div>
              </Col>
            );
        })}
      </Row>
        <div className="wizard-body">
      {Children.map(children, (child, index) => {
        if (React.isValidElement(child))
          return (
            <>
              {index === active || (active === -1 && index === 0) ? (
                <>{child.props.children}</>
              ) : null}
            </>
          );
      })}
      </div>
      <div className="wizard-footer">
        <div style={{ float: "left" }}>
          <Button variant="outline-secondary" onClick={() => prevStep()} className="px-2 px-md-3">
            Back
          </Button>
        </div>
        <div style={{ float: "right" }}>
          <ButtonGroup>
            <Button variant="outline-primary" onClick={() => prevStep()} className="px-2 px-md-3">
              Back
            </Button>
            <Button onClick={() => nextStep()} className="px-2 px-md-3">Next</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Wizard;
