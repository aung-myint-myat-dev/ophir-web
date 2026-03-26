import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-5 bg-light"
      style={
        {
          // backgroundColor: "#ffffff",
          // background: "linear-gradient(90deg, #fdfdfd 50%, #ffffff 50%)"
        }
      }
    >
      <Container className="px-lg-5 py-lg-3">
        <Row className="g-5 align-items-center">
          {/* LEFT SIDE: Contact Info */}
          <Col xs={12} md={5}>
            <div className="pe-lg-5">
              <h2 className="fw-bold mb-2 text-dark">Get in Touch</h2>
              <p className="text-muted mb-5">
                Have a project in mind? Reach out and let's build something
                great together.
              </p>

              <div className="vstack gap-4">
                <div className="d-flex align-items-center">
                  <FaPhoneAlt className="me-3" style={{ color: "#5bb450" }} />
                  <div>
                    <a className="text-decoration-none text-dark fw-medium">
                      09 456 335 110
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <FaEnvelope className="me-3" style={{ color: "#5bb450" }} />
                  <div>
                    <a
                      href="mailto:ogsgoldenstar@gmail.com"
                      className="text-decoration-none text-dark fw-medium"
                    >
                      ogsgoldenstar@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <FaMapMarkerAlt
                    className="me-3 mt-1"
                    style={{ color: "#5bb450" }}
                  />
                  <div>
                    <address
                      className="text-dark fw-medium mb-0"
                      style={{ maxWidth: "300px" }}
                    >
                      Room No. A-301, Building No. 136/140 Taw Win Myanmar Condo
                      36th street Anawrahta Road, Kyauktada Township, Yangon,
                      Myanmar
                    </address>
                  </div>
                </div>

                <div className="pt-3 text-center animated-icon">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScOdgdWC-QP8n_NwHSu_Ir35swQ8NbtNk54LD7iffNdcOdSFA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center text-decoration-none fw-bold p-0 transition-link"
                    style={{ color: "#5bb450" }}
                  >
                    <span className="me-2">Fill out our Quotation form</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Map */}
          <Col xs={12} md={7}>
            <div
              className="rounded-5 overflow-hidden shadow-lg border"
              style={{ height: "450px", transform: "rotate(1deg)" }}
            >
              <iframe
                title="company-location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1)" }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.897463566115!2d96.1601007!3d16.78166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec88916d16f3%3A0xc6657c79374025d!2s36th%20St%2C%20Yangon!5e0!3m2!1sen!2smm!4v1710000000000!5m2!1sen!2smm"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-3">
            <a
              href="https://www.call2cleanservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none shadow-sm border border-success rounded-pill px-2 py-1 bg-white d-inline-flex align-items-center transition-all"
              style={{ transition: "all 0.3s ease" }}
            >
              <div
                className="me-2 bg-success rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "10px", height: "10px" }}
              >
                <span className="visually-hidden">Active</span>
              </div>
              <span className="fs-6 fw-bold text-success">
                For your Cleaning Service Needs CHECK HERE
                <i className="bi bi-arrow-right-short ms-1"></i>
              </span>
            </a>
          </div>
      {/* Optional CSS for the link hover */}
      <style>{`
        .transition-link {
          transition: transform 0.2s ease;
        }
        .transition-link:hover {
          transform: translateX(5px);
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}
