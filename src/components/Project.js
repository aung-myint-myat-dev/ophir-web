import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import item1 from "../img/loveCar.webp";
import item2 from "../img/sayazaw.png";
import item3 from "../img/icon3.png";
import item4 from "../img/starGrade.webp";
import item5 from "../img/POS.jpg";
import item6 from "../img/call2Clean.jpg";
import item7 from "../img/logo.png";

function ProductPage() {
  const items = [
    {
      img: item1,
      title: "Love Car (App)",
      links: [
        {
          label: "Android",
          url: "https://play.google.com/store/search?q=lovecar&c=apps&hl=en",
        },
        {
          label: "iOS",
          url: "https://apps.apple.com/br/app/love-car/id6739915707?l=en-GB",
        },
      ],
    },

    {
      img: item2,
      title: "Saya Zaw (App)",
      links: [{ label: "View More", url: "#product2" }],
    },
    {
      img: item3,
      title: "Food Burma (App)",
      disabled: true,
      links: [{ label: "View More", url: "#food-burma" }],
    },

    {
      img: item4,
      title: "Star Grade Education (App)",
      disabled: true,
      links: [{ label: "View More", url: "/#star-grade" }],
    },

    {
      img: item1,
      title: "Car Business Management (CBM)",
      links: [{ label: "View More", url: "https://lovecarbusiness.com/" }],
    },
    {
      img: item7,
      title: "Zo Genealogy",
      links: [{ label: "View More", url: "https://zogenealogy.org/" }],
    },
    {
      img: item6,
      title: "Call2Clean Janitorial Website",
      links: [
        { label: "View More", url: "https://www.call2cleanservices.com" },
      ],
    },
    {
      img: item5,
      title: "POS Restaurant ( Desktop Website )",
      links: [{ label: "View More", url: "/pos-page" }],
    },
  ];

  return (
    <div className="product-page-bg">
      <section className="py-5" id="project">
        <h2 className="text-center fw-bold mb-5">Our Projects</h2>

        <Container>
          <Row className="g-4">
            {items.map((item, index) => (
              <Col lg={3} md={4} sm={6} xs={12} key={index}>
                <div className="product-box h-100 shadow-lg p-4 text-center rounded-4 bg-white d-flex flex-column">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="mb-3 mx-auto"
                    style={{
                      width: "150px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />

                  <h5 className="fw-bold text-dark mb-3">{item.title}</h5>

                  <div className="mt-auto d-flex justify-content-center gap-2">
                    {item.links.map((linkItem, idx) =>
                      linkItem.url.startsWith("http") ? (
                        <Button
                          key={idx}
                          href={linkItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="success"
                        >
                          <span className={item.disabled ? "opacity-50" : ""}>
                            {linkItem.label}
                          </span>
                        </Button>
                      ) : (
                        <Button
                          key={idx}
                          as={Link}
                          to={linkItem.url}
                          variant="success"
                        >
                          <span className={item.disabled ? "opacity-50" : ""}>
                            {linkItem.label}
                          </span>
                        </Button>
                      ),
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ProductPage;
