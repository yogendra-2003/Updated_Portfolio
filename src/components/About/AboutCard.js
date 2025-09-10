import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyadharshini N </span>
            from <span className="purple"> Thottiyam, Trichy, India.</span>
            <br />
            I am currently pursuing my final year of Bachelor of Engineering in Computer Science and Engineering at
            <span className="purple"> Kongunadu College of Engineering and Technology, Trichy.</span>
            <br />
            I have completed my HSC with 73% in Amala Girls Higher Secondary School, Musiri and my SSLC with 90.8% in St.Mary's High School, Thottiyam
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Priyadharshini N</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
