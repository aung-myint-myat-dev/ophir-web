import { Container, Row, Col, Card } from "react-bootstrap";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: "linear-gradient(to bottom, #cececeff, #ffffff)",
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5 fade-up">
            Contact Information
        </h2>


        {/* ROW 1 */}
        <Row className="g-4 fade-up">
          <Col xs={12} sm={6} md={6}>
            <Card className="contact-card p-4 rounded-4 bg-white">
              <h4 className="card-title-custom">
                <span className="animated-icon">📞</span> Phone
              </h4>
              <p className="contact-text">09 456 335 110</p>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <Card className="contact-card p-4 rounded-4 bg-white">
              <h4 className="card-title-custom">
                <span className="animated-icon">📍</span> Address
              </h4>
              <p className="text-sm">36th street Anawrahta Road, Kyauktada Township, Yangon, Myanmar</p>
            </Card>
          </Col>
        </Row>


        {/* ROW 2 */}
        <Row className="g-4 mt-2 fade-up">
          <Col xs={12} sm={6} md={6}>
            <Card className="contact-card p-4 rounded-4 bg-white">
              <h4 className="card-title-custom">
                <span className="animated-icon">✉️</span> Email
              </h4>
              <p className="contact-text">ogsgoldenstar@gmail.com</p>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <Card className="contact-card p-3 rounded-4 bg-white">
              <h4 className="card-title-custom">
                <span className="animated-icon">📝</span> Quotation
              </h4>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScOdgdWC-QP8n_NwHSu_Ir35swQ8NbtNk54LD7iffNdcOdSFA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success contact-btn d-flex justify-content-center align-items-center gap-2"
              >
                Fill Quotation
              </a>
            </Card>
          </Col>
        </Row>

        {/* MAP */}
        <Row className="justify-content-center mt-4 fade-up">
          <Col xs={12}>
            <Card className="contact-card rounded-4 overflow-hidden bg-white">
              <iframe
                title="company-location"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.99405890056372!2d96.16088777901224!3d16.776943544029553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec863acad1d7%3A0xadea0f61d4a73827!2sSP%20Bakery!5e0!3m2!1sen!2smm!4v1765429434669!5m2!1sen!2smm"
              ></iframe>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
