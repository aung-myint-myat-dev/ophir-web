import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section
      className="py-5 bg-light d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <Container className="py-5">
        <Row className="g-4 g-lg-5 align-items-center mt-2 mt-md-0">
          {/* LEFT SIDE: Contact Info */}
          <Col xs={12} md={5}>
            <div className="pe-lg-4 pe-xl-5">
              <h2 className="fw-bold mb-2 text-dark fs-3 fs-md-2">
                Get in Touch
              </h2>
              <p className="text-muted mb-4 mb-md-5 fs-6">
                Have a project in mind? Reach out and let's build something
                great together.
              </p>

              <div className="vstack gap-3 gap-md-4">
                {/* Phone */}
                <div className="d-flex align-items-center">
                  <FaPhoneAlt
                    className="me-3 flex-shrink-0"
                    style={{ color: "#5bb450" }}
                  />
                  <div>
                    <a
                      href="tel:09456335110"
                      className="text-decoration-none text-dark fw-medium"
                    >
                      09 456 335 110
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center">
                  <FaEnvelope
                    className="me-3 flex-shrink-0"
                    style={{ color: "#5bb450" }}
                  />
                  <div className="text-break">
                    <a
                      href="mailto:ogsgoldenstar@gmail.com"
                      className="text-decoration-none text-dark fw-medium"
                    >
                      ogsgoldenstar@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="d-flex align-items-start">
                  <FaMapMarkerAlt
                    className="me-3 mt-1 flex-shrink-0"
                    style={{ color: "#5bb450" }}
                  />
                  <div>
                    <address
                      className="text-dark fw-medium mb-0"
                      style={{ maxWidth: "100%" }}
                    >
                      Room No. A-301, Building No. 136/140 Taw Win Myanmar Condo
                      36th street Anawrahta Road, Kyauktada Township, Yangon,
                      Myanmar
                    </address>
                  </div>
                </div>

                {/* Free Quotation Link */}
                <div className="pt-2 pt-md-3 animated-icon">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScOdgdWC-QP8n_NwHSu_Ir35swQ8NbtNk54LD7iffNdcOdSFA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center text-decoration-none fw-bold p-0 transition-link"
                    style={{ color: "#5bb450" }}
                  >
                    <span className="me-2">Request Free Quotation HERE</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: Map */}
          <Col xs={12} md={7}>
            <div
              className="rounded-4 rounded-md-5 overflow-hidden shadow-lg border"
              style={{
                height: "clamp(280px, 50vh, 450px)",
                transform: "rotate(0deg)",
              }}
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
    </section>
  )
}