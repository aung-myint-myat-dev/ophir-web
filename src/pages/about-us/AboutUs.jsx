import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { assets } from "../../constants";

export default function AboutUs() {

  return (
    <div className="py-5">
      {/* OUR STORY */}
      <Container className="py-5 border-bottom mt-md-5">
        <Row className="align-items-center g-5">
          {/* LEFT SIDE - TEXT CONTENT */}
          <Col lg={7} md={12}>
            <div className="ps-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  className="bg-success rounded-pill"
                  style={{ width: "40px", height: "3px" }}
                ></div>
                <span className="text-success fw-bold text-uppercase small tracking-wider">
                  Our Story
                </span>
              </div>

              <h2 className="display-5 fw-bold text-dark mb-4">
                Innovating IT Solutions <br />
                <span className="opacity-80" style={{ color: "#5bb450" }}>
                  for your Business.
                </span>
              </h2>

              <p
                className="fs-6 mb-4 lh-base"
                style={{ fontSize: "1.1rem" }}
              >
                Ophir IT Solutions is a branch of our mother company{" "}
                <strong className="text-dark">
                  Call2Clean Janitorial Services Company Limited
                </strong>
                . We are dedicated to providing quality IT services that support
                and enhance SME business owners.
              </p>

              <p className="mb-5 shadow-sm p-4 rounded-4 border-start border-success border-4 bg-white">
                We believe every business owner deserves a professional website
                or app. With the rapid growth of e-commerce in Myanmar,
                transforming your business to an online platform isn't just an
                option—it's a necessity for growth.
              </p>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={5} md={12}>
            <div className="position-relative d-flex align-items-center justify-content-center">
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle opacity-25 bg-success"
                style={{
                  width: "200px",
                  height: "200px",
                  filter: "blur(80px)",
                  zIndex: 0,
                }}
              ></div>

              {/* Phone Wrapper */}
              <div
                className="position-relative"
                style={{ width: "200px", zIndex: 1 }}
              >
                {/* THE SCREEN CONTENT (CAROUSEL) */}
                <div
                  className=""
                  style={{
                    top: "2%",
                    left: "5%",
                    right: "5%",
                    bottom: "2%",
                    overflow: "hidden",
                    borderRadius: "35px",
                    zIndex: 1,
                  }}
                >
                  <Carousel
                    interval={2500}
                    pause={false}
                    fade
                    indicators={false}
                    controls={false}
                    className="h-100"
                  >
                    {[
                      ...assets.lovecar_previews,
                      ...assets.foodburma_previews,
                    ].map((img, index) => (
                      <Carousel.Item key={index} className="h-100">
                        <img
                          src={img}
                          alt={`Screenshot ${index + 1}`}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* WHOE WE ARE */}
      <Container className="py-5 border-bottom">
        <Row className="align-items-center g-5">
          {/* LEFT SIDE - TEXT CONTENT */}
          <Col lg={5} md={12}>
            {/* Image */}
            <div className="w-10 h-12 overflow-hidden rounded-3">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="banner image" className="w-100 h-100" />
            </div>
          </Col>

          {/* Right Side */}
          <Col lg={7} md={12}>
            <div className="ps-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  className="bg-success rounded-pill"
                  style={{ width: "40px", height: "3px" }}
                ></div>
                <span className="text-success fw-bold text-uppercase small tracking-wider">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="display-5 fw-bold text-dark mb-4">
                Empowering Businesses with  <br />
                <span className="opacity-80" style={{ color: "#5bb450" }}>
                  Reliable Digital Solutions.
                </span>
              </h2>

              <p
                className="fs-6 mb-4 lh-base"
                style={{ fontSize: "1.1rem" }}
              >
                We are a team of dedicated developers, designers, and tech strategists who believe every business owner deserves a professional web application or mobile experience. With the rapid growth of e-commerce, transforming your business online is a necessity for long-term survival and scale.
              </p>

              <p className="mb-5 shadow-sm p-4 rounded-4 border-start border-success border-4 bg-white">
                Client-Centric Partner: We don't just deliver code; we partner with you to achieve your business goals.

                Quality & Performance: High-quality UI/UX design combined with scalable, performant architectures.

                Accessibility for All: Making modern software technology accessible, affordable, and actionable for all businesses.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* WHAT WE DO */}
      <Container className="py-5">
        <Row className="align-items-center g-5">
          {/* LEFT SIDE - TEXT CONTENT */}
          <Col lg={7} md={12}>
            <div className="ps-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div
                  className="bg-success rounded-pill"
                  style={{ width: "40px", height: "3px" }}
                ></div>
                <span className="text-success fw-bold text-uppercase small tracking-wider">
                  WHAT WE DO
                </span>
              </div>

              <h2 className="display-5 fw-bold text-dark mb-4">
                End-to-End Software Services   <br />
                <span className="opacity-80" style={{ color: "#5bb450" }}>
                  Tailored to Your Needs.
                </span>
              </h2>

              <p
                className="fs-6 mb-4 lh-base"
                style={{ fontSize: "1.1rem" }}
              >
                From custom web applications and mobile apps (iOS & Android) to fully integrated point-of-sale (POS) systems, we provide comprehensive technical solutions designed to streamline operations and boost sales.
              </p>

              <p className="mb-5 shadow-sm p-4 rounded-4 border-start border-success border-4 bg-white">
                Custom Web & App Development: Scalable single-page and multi-platform applications designed for optimal user experience.

                Business Automation & POS: Modern management and POS systems tailored to retail, service, and restaurant businesses.

                Maintenance & Continuous Support: Continuous support and optimization to ensure your digital products remain secure and active.
              </p>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={5} md={12}>
            <div className="w-10 h-12 overflow-hidden rounded-3">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="banner image" className="w-100 h-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}