import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/HACK $DAY.jpg";
import emotion from "../../Assets/cmr.jpg";
import editor from "../../Assets/vit.jpg";
import chatify from "../../Assets/bme hack.jpg";
import suicide from "../../Assets/tnwise.jpg";
import bitsOfCode from "../../Assets/Sih team.jpg";

function Hackathons() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Rural Healthcare"
              description="Developed a mobile application to improve rural healthcare by enabling document-based digital health records. The app allows doctors to update daily reports, ensuring accessible medical history for patients and continuity of care. Features include health status notifications, critical condition alerts to nearby doctors, and real-time access to records. Built with React and MongoDB for seamless data management and user experience."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Water Quality Monitoring System for Rural Areas"
              description="Designed an IoT and Machine Learning-based water monitoring and treatment system that measures key water quality parameters like temperature, turbidity, TDS, IR, and conductivity. Utilized ANN and SVM models for impurity prediction and automated treatment triggers. Developed a user-friendly web application for real-time monitoring, alerts, and data visualization."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ICU Patient Monitoring System"
              description="Developed a Wi-Fi-based ICU patient monitoring system for real-time, wireless tracking of vital signs like heart rate and temperature. The system enhances patient comfort by eliminating wired connections, ensures continuous monitoring, and enables timely alerts for critical conditions—improving overall healthcare efficiency in ICU settings."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Two-way Communication System for deaf and mute people"
              description="Developed an AI-based system enabling real-time speech-to-sign and sign-to-speech translation using deep learning and computer vision. Built with Python, OpenCV, TensorFlow, and Flask, it supports multilingual, scalable, and cloud-integrated communication for individuals with speech and hearing impairments."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI powerd Agriculture Platform for Farmers"
              description="Designed a smart Agri-tech solution featuring an Al marketplace, disease detection via CNN, crop recommendation, and a chatbot assistant. Empowered farmers with fair trade, expert guidance, and secure transactions using Al and ML. Empowered real-time interaction between hearing and speech-impaired individuals and others."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Creating Framework for StaticAnalysis of Vulnerabilities in Android Applications"
              description="Designed a security solution featuring an auxiliary rule engine for customizable project-specific checks. Integrated machine learning to detect advanced vulnerabilities, combining static and dynamic analysis for comprehensive coverage. Automated tool updates ensure ongoing accuracy, while a modular plugin system supports flexible expansion and scalability."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Hackathons;
