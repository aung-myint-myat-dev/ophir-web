import { useEffect } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { TbTargetArrow } from "react-icons/tb";
import { FaUserGraduate, FaCheck } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";

import { assets } from "../../constants";

function SayaZawPage() {
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
    <div className="py-5 min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5">
          <Button
            variant="white"
            onClick={handleBack}
            className="shadow-sm border rounded-pill px-4 mb-3 mb-md-0"
          >
            ← Back to Projects
          </Button>
          <div className="text-center text-md-end">
            <h1 className="fw-bold text-dark display-6 mb-0">
              Saya Zaw Maths Learning
            </h1>
          </div>
        </div>

        <Row className="g-4 d-flex align-items-stretch">
          <Col lg={7}>
            <Card className="border-0 shadow-sm overflow-hidden rounded-4 h-100">
              <Carousel fade interval={3000} pause="hover" className="h-100">
                {[...assets.sayazaw_dashboard].map((slide, index) => (
                  <Carousel.Item key={index} className="h-100">
                    <img
                      src={slide}
                      className="d-block w-100 object-fit-cover"
                      style={{ height: "100%", minHeight: "450px" }}
                      alt={`Preview ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="border-0 shadow-sm rounded-4 h-100 p-4 p-lg-5">
              <div className="ps-lg-2">
                <h3 className="fw-bold mb-3" style={{ color: "#3498db" }}>
                  Empowering Education
                </h3>
                <p className="text-muted">
                  A specialized E-learning platform designed for math students. 
                  It enables students to access video lessons, download materials, 
                  and track their progress through a structured curriculum tailored 
                  by Saya Zaw.
                </p>
                <hr className="my-4 opacity-10" />
                <div className="mb-4">
                  <h6 className="fw-bold text-uppercase text-muted small mb-3">
                    Technologies Used
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      "Laravel",
                      "PHP",
                      "Flutter",
                      "REST API",
                      "Vue.js",
                      "Bootstrap",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-white text-dark border shadow-sm px-4 py-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-3 text-center">
              <Card.Body>
                <div className="fs-1 mb-3 text-danger">
                  <TbTargetArrow />
                </div>
                <h5 className="fw-bold">Objective</h5>
                <p className="text-muted small">
                  Providing a high-quality digital classroom for students to learn 
                  mathematics efficiently from anywhere.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-3 text-center">
              <Card.Body>
                <div className="fs-1 mb-3 text-info">
                  <FaUserGraduate />
                </div>
                <h5 className="fw-bold">Engagement</h5>
                <p className="text-muted small">
                  Integrated quizzes and progress tracking to keep students 
                  motivated and accountable throughout their learning journey.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm rounded-4 p-3 text-center">
              <Card.Body>
                <div className="fs-1 mb-3 text-primary">
                  <VscBook />
                </div>
                <h5 className="fw-bold">Resources</h5>
                <p className="text-muted small">
                  Comprehensive library of PDF notes, recorded lectures, and 
                  step-by-step math problem solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="mt-5 border-0 shadow-lg rounded-4 overflow-hidden">
          <Row className="g-0">
            <Col
              md={4}
              className="d-flex align-items-center justify-content-center p-5 position-relative"
              style={{
                background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
              }}
            >
              <div className="text-center text-white">
                <div className="mb-3">
                  <div
                    className="bg-white bg-opacity-25 rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <FaCheck size={24} />
                  </div>
                </div>
                <h2 className="fw-bold mb-2">Key Features</h2>
                <p className="mb-0 opacity-75 small">
                  Everything a math student <br /> needs to excel.
                </p>
              </div>
            </Col>

            <Col md={8} className="bg-white">
              <Card.Body className="p-5">
                <Row className="gy-4">
                  {[
                    {
                      title: "Video Lectures",
                      desc: "High-definition math tutorials",
                    },
                    {
                      title: "E-Books & PDFs",
                      desc: "Downloadable study materials",
                    },
                    {
                      title: "Online Quizzes",
                      desc: "Test knowledge after every lesson",
                    },
                    {
                      title: "Student Dashboard",
                      desc: "Personalized learning progress",
                    },
                    {
                      title: "Announcements",
                      desc: "Updates on classes and exams",
                    },
                    {
                      title: "Admin Portal",
                      desc: "Manage students and content easily",
                    },
                  ].map((feature, index) => (
                    <Col sm={6} key={index}>
                      <div className="d-flex align-items-start">
                        <div
                          className="rounded-3 d-flex align-items-center justify-content-center me-3 mt-1"
                          style={{
                            backgroundColor: "#ebf5fb",
                            minWidth: "32px",
                            height: "32px",
                          }}
                        >
                          <FaCheck
                            style={{ color: "#3498db", fontSize: "12px" }}
                          />
                        </div>
                        <div>
                          <h6
                            className="fw-bold mb-1"
                            style={{ color: "#2d3436" }}
                          >
                            {feature.title}
                          </h6>
                          <p className="text-muted small mb-0">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default SayaZawPage;