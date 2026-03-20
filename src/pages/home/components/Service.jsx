import { Container, Row, Col, Card } from "react-bootstrap";

import { assets } from '../../../constants';

const service1 = assets.call2clean_logo;
const service2 = assets.ophirpos_logo;
const service3 = assets.lovecar_logo;
const service4 = assets.sayazawmaths_logo;
const background = assets.background;

function AppService() {
  return (
    <section
      id="services"
      className="py-5 position-relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>

      <Container className="position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white mb-3">Our Services</h2>
          <p
            className="lead text-white-50 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Professional website and mobile app solutions designed to boost your
            business growth.
          </p>
        </div>

        {/* Service Cards */}
        <Row className="g-4">
          {[
            {
              img: service2,
              title: "Mobile App Development",
              text: "High-performance Android & iOS apps with elegant UI/UX.",
            },
            {
              img: service1,
              title: "Custom Website Development",
              text: "Fast, modern, responsive & SEO-optimized websites.",
            },
            {
              img: service4,
              title: "Ecommerce Development",
              text: "Secure online platforms with product & payment management.",
            },
            {
              img: service3,
              title: "POS for Restaurant & Bar",
              text: "Simple and efficient POS system for managing daily operations.",
            },
          ].map((service, i) => (
            <Col xs={12} md={6} lg={3} key={i}>
              <Card
                className="pricing-card h-100 border-0 shadow-sm rounded-4 bg-white overflow-hidden"
                style={{
                  borderLeft: "5px solid #5bb450",
                }}
              >
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="bg-light rounded-3 d-flex align-items-center justify-content-center me-3"
                      style={{ width: "50px", height: "50px", flexShrink: 0 }}
                    >
                      <img
                      className="animated-icon"
                        src={service.img}
                        alt=""
                        style={{
                          width: "28px",
                          height: "28px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <div className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 small fw-bold">
                      Service 0{i + 1}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h5 className="fw-bold text-dark mb-2 mt-2">
                    {service.title}
                  </h5>

                  <p
                    className="text-secondary flex-grow-1"
                    style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
                  >
                    {service.text}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Phase Boxes */}
        <div className="mt-2 pt-5">
          <h3 className="text-center text-white fw-bold mb-5">
            Our Management Process
          </h3>
          <Row className="g-3 justify-content-center">
            {[
              { phase: "01", title: "Analysis", border: "border-primary" },
              { phase: "02", title: "Proposal", border: "border-success" },
              { phase: "03", title: "Planning", border: "border-warning" },
              { phase: "04", title: "Development", border: "border-info" },
              { phase: "05", title: "Testing", border: "border-danger" },
              { phase: "06", title: "Support", border: "border-light" },
            ].map((item, idx) => (
              <Col xs={6} md={4} lg={2} key={idx}>
                <div
                  className={`text-center p-3 h-100 border-top border-4 bg-dark bg-opacity-50 rounded-bottom-3 ${item.border}`}
                >
                  <div className="small text-uppercase fw-bold text-white-50 mb-1">
                    Phase
                  </div>
                  <div className="h3 fw-bold text-white mb-2">{item.phase}</div>
                  <h6 className="text-white small mb-0">{item.title}</h6>
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
