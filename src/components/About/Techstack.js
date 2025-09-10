import React from "react";
import { Col, Row } from "react-bootstrap";
// import { SiHtml5, SiCss3 } from 'react-icons/si';
import { DiJavascript1, DiNodejs, DiReact, DiPython, DiJava } from 'react-icons/di';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
