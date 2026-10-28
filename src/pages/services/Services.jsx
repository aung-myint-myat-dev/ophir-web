import { Container, Row, Col } from "react-bootstrap";
import ServicesSlider from "./components/ServicesSlider";
import { assets } from "../../constants";
import { DEVELOPMENT_PHASES, SERVICES } from "./constants";
import ServiceCard from "./components/ServiceCard";
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
          <Row className="g-4">
            {SERVICES.map((service, i) => (
              <Col xs={12} md={6} lg={6} key={i}> 
                <ServiceCard img={service.img} index={i} title={service.title} text={service.text}/>
              </Col>
            ))}
          </Row>

          <div className="mt-2 pt-5">
            <h3 className="text-center text-white fw-bold mb-4">
              Our Management Process
            </h3>

            <Row className="g-3 justify-content-center align-items-center">
              {DEVELOPMENT_PHASES.map((item, idx) => (
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
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}