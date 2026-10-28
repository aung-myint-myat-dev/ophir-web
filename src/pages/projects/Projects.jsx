import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

function Projects() {
  return (
    <div className="py-5">
      <Container className="py-5">
        {/* Header */}
        <div className="py-3">
          <h2 className="fw-bold display-5 text-center mb-2 text-dark">
            Finished Projects
          </h2>

          <p className="text-muted text-center mb-5 mx-auto">
            Explore the custom web applications and mobile solutions we have
            delivered for our clients.
          </p>
        </div>

        {/* Responsive Grid */}
        <Row className="g-3">
          {projects.map((project, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={3}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        {/* Contact CTA Section */}
        <div
          className="text-center rounded-4 px-4 py-5 mt-5"
          style={{
            background: "linear-gradient(135deg, #f4fff1, #ffffff)",
            border: "1px solid #e2f5dc",
          }}
        >
          <h3 className="fw-bold mb-3">
            Want to Build Your Own Software?
          </h3>

          <p
            className="text-muted mx-auto mb-4"
            style={{ maxWidth: "600px", lineHeight: 1.8 }}
          >
            Have an idea for a website, mobile app, or custom software solution?
            Let's turn your vision into reality with innovative technology
            tailored to your business needs.
          </p>

          <Button
            as={Link}
            to="/contact-us"
            className="border-0 rounded-pill btn px-4 btn-success fw-semibold d-inline-flex align-items-center gap-2"
          >
            Contact Us
            <FaArrowRight />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Projects;