import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yogendra R </span>
            from <span className="purple"> Madurai, TamilNadu, India.</span>
            <br />
            I am recently completed my under graduate of Bachelor of Engineering in Computer Science and Engineering at
            <span className="purple"> Mepco Schlenk Engineering College , Sivakasi.</span>
            <br />
            I have completed my HSC with 92.4% in CEOA Matriculation Higher Secondary School, Madurai and my SSLC with 91.2% in CEOA Matriculation Higher Secondary School, Madurai
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Research
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yogendra R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
