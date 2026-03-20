import { useEffect } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { assets } from '../../constants';

// POS images
const pos_previews = assets.ophirpos_previews;

function POSPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      document.getElementById("project")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  
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
              className="w-100 w-md-20"
            >
              ← Back
            </Button>
          </Col>

          {/* Title */}
          <Col>
            <h2 className="fw-bold mb-0 text-center">
              Restaurant POS System
            </h2>
          </Col>
        </Row>


        {/* Subtitle */}
        <p className="text-center text-muted mb-3">
          A smart Point of Sale system designed for restaurant operations,
          employee management, and real-time sales tracking.
        </p>

        {/* Carousel */}
        <Card className="border-0 shadow-sm rounded-4 mb-4 pos-carousel-wrapper mx-auto">
          <Carousel fade interval={3000} pause="hover">
            {pos_previews.map((slide, index) => (
              <Carousel.Item key={index} className="pos-carousel-item">
                <img
                  src={slide.img}
                  className="d-block pos-carousel-img mx-auto"
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

      </Card>


      {/* Project Details */}
      <Row className="g-4 pos-card mt-4">
        <Col xs={12} md={6}>
          <Card className="h-100 shadow-sm border-0 rounded-4">
            <Card.Body>
              <h5 className="fw-bold mb-3">📌 Project Overview</h5>
              <p className="text-muted mb-0">
                This Restaurant POS System streamlines workflows including
                order processing, table tracking, employee role management,
                discounts, taxes, and comprehensive reporting. It supports
                offline usage and real restaurant environments.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="h-100 shadow-sm border-0 rounded-4">
            <Card.Body>
              <h5 className="fw-bold mb-3">🛠 Tech Stack</h5>
              <ul className="text-muted mb-0">
                <li>React.js</li>
                <li>React Bootstrap</li>
                <li>React Router</li>
                <li>REST API Integration</li>
                <li>Offline-capable POS UI</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      {/* Features */}
      <Row className="g-4 mt-3 mb-5 pos-card">
        <Col xs={12}>
          <Card className="shadow-sm border-0 rounded-4">
            <Card.Body>
              <h5 className="fw-bold mb-3">✨ Key Features</h5>
              <ul className="text-muted mb-0">
                <li>Cashier & Admin Access Levels</li>
                <li>Menu & Category Management</li>
                <li>Table & Order Tracking</li>
                <li>Discount, Tax & Service Configuration</li>
                <li>Daily Sales & Delivery Reports</li>
                <li>Offline Mode Support</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div >
  );
}

export default POSPage;
