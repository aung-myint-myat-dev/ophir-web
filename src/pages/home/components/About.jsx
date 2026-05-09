import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { assets } from "../../../constants";

// const project_logos = assets.project_logos;
const images = [
  ...assets.lovecar_previews,
  ...assets.sayazaw_previews,
  ...assets.foodburma_previews,
  ...assets.frame,
];

function AppAbout() {
  return (
    <section id="about" className="bg-light overflow-hidden">
      <Container className="py-lg-5">
        <Row className="pt-5 align-items-center g-5">
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
                {/* THE IPHONE FRAME */}
                <img
                  src={assets.frame}
                  alt="Phone Frame"
                  className="img-fluid position-relative"
                  style={{ zIndex: 2, pointerEvents: "none" }}
                />

                {/* THE SCREEN CONTENT (CAROUSEL) */}
                <div
                  className="position-absolute"
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
                      ...assets.sayazaw_previews,
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
    </section>
  );
}

export default AppAbout;
