import React from "react";
import { Col, Container } from "react-bootstrap";
import lift from "../assets/projects/lift.png";
import Particle from "../components/Particle";
import ProjectCard from "../components/Projects/ProjectCard";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <div className="project-newres" style={{
          justifyContent: "center", paddingBottom: "10px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)"

        }}>
          <Col style={{ width: "100%" }} md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Lift-Buddy"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col style={{ width: "100%" }} md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Lift-Buddy"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col style={{ width: "100%" }} md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Lift-Buddy"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>
        </div>
      </Container>
    </Container>
  )
}

export default Projects