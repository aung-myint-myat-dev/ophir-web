import { Container, Row, Col, Card } from "react-bootstrap";
import service1 from "../img/icon1.png";
import service2 from "../img/icon2.png";
import service3 from "../img/icon3.png";
import service4 from "../img/icon4.png";
import background from "../img/bg-service.jpg";

function AppService() {
  return (
    <section
      id="services"
      className="py-5 position-relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="service-overlay"></div>

      <Container className="position-relative z-2">
        
        <h2 className="text-center fw-bold mb-1 text-light service-text">
          Our Services
        </h2>

        <p className="text-light text-center service-desc mx-auto mb-4">
          We provide professional website and mobile app solutions designed to boost your business growth.
        </p>

        {/* Service Cards */}
        <Row className="g-4">
          {[
            {
              img: service3,
              title: "POS for Restaurant & Bar",
              text: "Simple and efficient POS system for managing daily operations smoothly.",
            },
            {
              img: service1,
              title: "Custom Website Development",
              text: "Fast, modern, responsive & SEO-optimized websites for your business.",
            },
            {
              img: service2,
              title: "Mobile App Development",
              text: "High-performance Android & iOS apps with elegant UI/UX.",
            },
            {
              img: service4,
              title: "Ecommerce Development",
              text: "Secure online platforms with product, payment & delivery management.",
            },
          ].map((service, i) => (
            <Col xs={12} md={6} key={i}>
              <Card className="service-card text-center h-100 border-0 rounded-4">
                <Card.Body>
                  <img src={service.img} alt="" className="service-icon" />
                  <h4 className="fw-bold mt-3">{service.title}</h4>
                  <p>{service.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Phase Boxes */}
        <div className="mt-2 pt-4">
          <h3 className="text-center text-white fw-bold mb-4">
            Our Services Management Process
          </h3>

          <Row className="g-4 justify-content-center">
            {[
              { phase: "Phase 1", title: "Requirement Analysis", color: "grad-blue" },
              { phase: "Phase 2", title: "Meeting & Proposal", color: "grad-green" },
              { phase: "Phase 3", title: "Planning & Design", color: "grad-yellow" },
              { phase: "Phase 4", title: "Development", color: "grad-orange" },
              { phase: "Phase 5", title: "Testing & QA", color: "grad-purple" },
              { phase: "Phase 6", title: "Maintenance & Support", color: "grad-gray" },
            ].map((item, idx) => (
              <Col xs={8} sm={6} md={4} lg={2} key={idx}>
                <div className={`phase-box ${item.color}`}>
                  <span className="phase-badge">{item.phase}</span>
                  <h6 className="fw-bold mt-2 title">{item.title}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default AppService;
