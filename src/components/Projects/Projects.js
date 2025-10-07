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
              title="Helping Hands"
              description="The purpose of Helping hands for people is giving what we can to support people who are in need. Helping needy people through donations is like extending a helping hand to those who are facing tough times and don't have enough to meet their basic needs. Helping hands  shall have three users, Helper, Needy, Admin. The Needy should be able to convey their need in form of a post and can manage the post made by them. The Helper should be able to contribute for the need based on their choice. The admin manages the user and the posts made by the needy."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Fertilizer Management System"
              description="Developed a highly practical and efficient Fertilizer Management System designed to centralize inventory tracking and optimize resource utilization for agricultural operations. This web-based application allows users to precisely log fertilizer stock levels, monitor usage rates, and generate actionable reports, directly contributing to cost reduction and improved yield planning. The backend logic was engineered using Python Flask for rapid development and secure handling of critical farm data, which is stored and managed within a robust MySQL database. This integration ensures reliable data persistence and seamless access to historical usage patterns."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Light Detection Technique Using Arduino"
              description="Engineered an automated Light Detection and Environmental Control System utilizing the Arduino Uno platform. The project successfully implemented a sensor-based automation technique to monitor ambient light conditions in real-time and trigger corresponding actions—such as dynamically adjusting LED lighting or controlling external relays—to maintain optimal illumination and energy efficiency. The microcontroller was meticulously programmed using the Arduino IDE to handle sensor calibration, implement state machine logic, and ensure instantaneous, reliable response to changing environmental inputs. This foundation is essential for developing smart home and energy-saving solutions."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Prediction of Landslide Deformation using Temporal Fusion Transformer and Multivariate Time-Series Clustering with Python and R. "
              description="The Landslide Deformation Prediction System was developed to forecast ground movement with high precision, a capability that significantly enhances early warning and infrastructure protection strategies. The core architecture leverages the advanced Temporal Fusion Transformer (TFT), a cutting-edge deep learning model designed to process complex, multivariate time-series data gathered from geological and environmental sensors. To optimize model performance, Multivariate Time-Series Clustering was first applied to segment historical deformation patterns, a critical step that improved predictive accuracy by identifying distinct failure modes. The entire data science pipeline, from data ingestion to validation, was meticulously executed in a hybrid environment, combining the deep learning capabilities of Python with the robust statistical analysis tools of R."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="RMP Jewellers ChatBot"
              description="Engineered a dedicated AI Chatbot for RMP Jewellers, designed to transform online customer engagement and provide 24/7 sales support. The system is built using a Python-based framework with advanced Natural Language Processing (NLP) capabilities to accurately interpret complex customer queries regarding product specifications, real-time availability, and store services. Seamlessly integrated with the brand's e-commerce platform and inventory database, the chatbot instantly delivers personalized product recommendations based on user style and purchase history. This solution successfully scaled customer support operations, reduced response times, and drove an observable increase in online conversion rates by streamlining the product discovery and purchasing journey."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart and Effective Real Time Management Of Street Parking"
              description="Developed a Smart Street Parking Management System designed to drastically reduce urban congestion and driver frustration by providing accurate, real-time occupancy data. The core of the system utilizes a network of IoT sensors integrated with an efficient real-time data processing backend to monitor the status of parking spots across defined city zones. This instant data is consumed by a mobile application, allowing users to quickly locate, navigate to, and potentially reserve available spaces, thereby eliminating wasted cruising time and fuel consumption. This effective management solution optimizes urban space utilization, improves the citizen experience, and provides municipal authorities with valuable analytical insights into traffic flow and peak usage patterns."
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
