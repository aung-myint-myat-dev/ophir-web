import { useEffect } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { assets } from "../../constants";

const img1 = assets.APP_LOGO[0];
const img2 = assets.background[1];

function StarGradePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      document
        .getElementById("project")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const slides = [{ img: img1 }, { img: img2 }];

  return (
    <div
      className="py-2 min-vh-100"
      style={{
        background:
          "linear-gradient(120deg, #d4f8e8 0%, #c7f4dd 25%, #b1eed1 55%, #9ee8c7 100%)",
      }}
    >
      <Container>
        <Row className="align-items-center mb-3 mt-4 text-center text-md-start">
          {/* Back button */}
          <Col xs={12} md="auto" className="mb-2 mb-md-0">
            <Button
              variant="outline-success"
              onClick={handleBack}
              className="w-100 w-md-auto"
            >
              ← Back
            </Button>
          </Col>
          <Col>
            <h2 className="fw-bold mb-0 text-center">
              Star Grade Education App
            </h2>
          </Col>
        </Row>

        <p className="text-center text-muted mb-5">
          A modern education platform designed to enhance student performance
          and learning experience.
        </p>

        {/* Carousel */}
        <Card className="border-0 shadow-sm rounded-4 mb-4 pos-carousel-wrapper">
          <Carousel fade interval={3000} pause="hover">
            {slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <img
                  src={slide.img}
                  className="d-block pos-carousel-img"
                  alt="Slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card>

        {/* Project Details */}
        <Row className="g-4 mb-5 pos-card mt-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Body>
                <h5 className="fw-bold mb-3">📌 Project Overview</h5>
                <p className="text-muted">
                  Star Grade is an education-focused web application that helps
                  institutions manage student grades, courses, and performance
                  analytics efficiently through an intuitive and responsive
                  interface.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 rounded-4 pos-card">
              <Card.Body>
                <h5 className="fw-bold mb-3">🛠 Tech Stack</h5>
                <ul className="text-muted mb-0">
                  <li>React.js</li>
                  <li>React Bootstrap</li>
                  <li>React Router</li>
                  <li>Responsive UI Design</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StarGradePage;
