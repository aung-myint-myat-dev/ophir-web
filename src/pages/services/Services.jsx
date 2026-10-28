import { Container, Row, Card, Col } from "react-bootstrap";
import ServicesSlider from "./components/ServicesSlider";
import { assets } from "../../constants";

const icon1 = assets.icon[0];
const icon2 = assets.icon[1];
const icon3 = assets.icon[2];
const icon4 = assets.icon[3];
const background = assets.background;
export default function Services() {
  return (
    <>
      <ServicesSlider />
      <section
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
            <h2 className="display-4 fw-bold text-white mb-3 hero-section">Our Services</h2>
            <p
              className="lead text-white-50 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Professional website and mobile app solutions designed to boost your
              business growth.
            </p>
          </div>

          {/* Service Cards */}
          <Row className="g-4"> {/* g-5 ဖြင့် အတန်းနှင့် ကော်လံကြား နေရာလွတ်ပိုပေးထားသည် */}
            {[
              {
                img: icon2,
                title: "Mobile App Development",
                text: "High-performance Android & iOS apps with elegant UI/UX.",
              },
              {
                img: icon1,
                title: "Website Development",
                text: "Fast, modern, responsive & SEO-optimized websites.",
              },
              {
                img: icon3,
                title: "Ecommerce Development",
                text: "Secure online platforms with product & payment management.",
              },
              {
                img: icon4,
                title: "POS for Restaurant & Bar",
                text: "Simple and efficient POS system for managing daily operations.",
              },
            ].map((service, i) => (
              <Col xs={12} md={6} lg={6} key={i}> {/* lg={6} ဖြင့် Desktop တွင် တစ်တန်းလျှင် 2 ခု (2 columns 2 rows) ပေါ်စေရန် */}
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
                    <h5 className="fw-bold text-dark mb-2 mt-2 hero-section">
                      {service.title}
                    </h5>

                    <p
                      className="flex-grow-1"
                      style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
                    >
                      {service.text}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-2 pt-5">
            <h3 className="text-center text-white fw-bold mb-4">
              Our Management Process
            </h3>
            {/* <Row className="g-3 justify-content-center">
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
            </Row> */}

            <Row className="g-3 justify-content-center align-items-center">
              {[
                { phase: "01", title: "Analysis", border: "border-primary", badgeBg: "bg-primary" },
                { phase: "02", title: "Proposal", border: "border-success", badgeBg: "bg-success" },
                { phase: "03", title: "Planning", border: "border-warning", badgeBg: "bg-warning" },
                { phase: "04", title: "Development", border: "border-info", badgeBg: "bg-info" },
                { phase: "05", title: "Testing", border: "border-danger", badgeBg: "bg-danger" },
                { phase: "06", title: "Support", border: "border-secondary", badgeBg: "bg-secondary" },
              ].map((item, idx, array) => (
                <Col xs={6} md={4} lg={2} key={idx} className="position-relative">
                  <div
                    className={`text-center p-3 h-100 border-top border-4 bg-dark bg-opacity-50 rounded-bottom-3 position-relative ${item.border}`}
                  >
                    <div className="small text-uppercase fw-bold text-white-50 mb-1">
                      Phase
                    </div>
                    <div className="h3 fw-bold text-white mb-2">{item.phase}</div>
                    <h6 className="text-white small mb-0">{item.title}</h6>
                  </div>

                  {/* Step Connector Arrow (Roadmap Connector Link) */}
                  {idx < array.length - 1 && (
                    <div
                      className="d-none d-lg-flex position-absolute top-50 start-100 translate-middle align-items-center justify-content-center text-white-50 fw-bold"
                      style={{ zIndex: 5, width: "24px", height: "24px" }}
                    >
                      ➔
                    </div>
                  )}
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}