import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am interested in programming and stuffs and have been exploring ever since 🚀
  <br />
  <br />
  I'm passionate about building digital products that solve real-world problems, especially in the field of modern web development.
  <br />
  <br />
  My field of Interest's are building new&nbsp;
  <i>
    <b className="purple">Web Technologies and Products</b> and
    also in areas related to{" "}
    <b className="purple">Artificial Intelligence.</b>
  </i>
  <br />
  <br />
  I am proficient in programming languages like{" "}
  <b className="purple">Python</b>,{" "}
  <b className="purple">HTML</b>, and{" "}
  <b className="purple">CSS</b>.
  <br />
  <br />
  Whenever possible, I also apply my passion for developing applications using{" "}
  <i>
    <b className="purple">React.js</b>
  </i>{" "}
  and exploring the latest trends in{" "}
  <i>
    <b className="purple">web development frameworks</b>
  </i>
  .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yogendra-2003/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yogendra2k3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__._yogendra_.__/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
