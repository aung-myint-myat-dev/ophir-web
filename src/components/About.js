import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../img/stargrade.png";
// import img2 from "../img/foodburma.png";
import img3 from "../img/4-removebg-preview.png";
import img4 from "../img/1-removebg-preview.png";
import img5 from "../img/2-removebg-preview (1).png";
import img6 from "../img/3-removebg-preview.png";
import img7 from "../img/5-removebg-preview.png";

const images = [img1, img3, img4, img5, img6, img7];

function AppAbout() {
  return (
    <section
      id="about"
      className="block about-block py-5"
      style={{
        background:
          "linear-gradient(120deg, #d4f8e8 0%, #c7f4dd 25%, #b1eed1 55%, #9ee8c7 100%)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE - TEXT CONTENT */}
          <Col xs={12} md={8} className="px-4 about-text">
            <h2 className="text-center fw-bold mb-4 fade-up text-secondary">
              ABOUT US
            </h2>

            <p className="fs-6 about-anim">
              Ophir IT Solutions in branch of our mother company Call2Clean
              Janitorial Service Company Limited, and we are dedicated to
              provide the quality service in IT field to support and enhance the
              SME business owners.
            </p>

            <p className="fs-6 about-anim">
              We realize to help every business owner should have a website or
              app to enhance the appearance of their business or organization.
              We know that the rapidly growing e-commerce is not only in
              developed countries but also in Myanmar. The growth of internet
              users in Myanmar makes e-commerce alive and makes buying and
              selling online necessary for many people who want to transform
              their business to online.
            </p>
          </Col>

          {/* RIGHT SIDE - SLIDESHOW */}
          <Col xs={12} md={4} className="text-center">
            <Carousel interval={2000} pause={false} fade indicators={false}>
              {images.map((img, index) => (
                <Carousel.Item key={index}>
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      style={{
                        maxWidth: "90%",
                        maxHeight: "200px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
