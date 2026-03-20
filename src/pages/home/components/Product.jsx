import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { assets } from '../../../constants';

const item1 = assets.lovecar_logo;
const item2 = assets.sayazawmaths_logo;
const item3 = assets.foodburma_logo;
const item4 = assets.stargrade_logo;
const item5 = assets.APP_LOGO;
const item6 = assets.zogenealogy_logo;
const item7 = assets.call2clean_logo;

function Product() {
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
      title: "Car Business Management",
      links: [{ label: "View More", url: "https://lovecarbusiness.com/" }],
    },
    {
      img: item6,
      title: "Zo Genealogy",
      links: [{ label: "View More", url: "https://zogenealogy.org/" }],
    },
    {
      img: item7,
      title: "Call2Clean Janitorial",
      links: [
        { label: "View More", url: "https://www.call2cleanservices.com" },
      ],
    },
    {
      img: item5,
      title: "Ophir Restaurant POS",
      links: [{ label: "View More", url: "/pos-page" }],
    },
  ];

  return (
    <div
      className=" py-5"
      style={{
        backgroundColor: "#fcfdfe",
        backgroundImage: "radial-gradient(#e1e5ea 0.8px, transparent 0.8px)",
        backgroundSize: "24px 24px",
      }}
    >
      <section id="project">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className="fw-bold display-5">Our Projects</h2>
            </div>
          </div>

          <Row className="g-4">
            {items.map((item, index) => (
              <Col lg={3} md={4} sm={6} key={index}>
                <div
                  className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden transition-all"
                  style={{ background: "#f8f9fa" }}
                >
                  <div
                    className="p-4 d-flex align-items-center justify-content-center"
                    style={{ height: "120px" }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        maxHeight: "50px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="card-body bg-white rounded-4 m-2 p-3 shadow-sm d-flex flex-column">
                    <h6 className="fw-bold text-dark mb-3 text-truncate">
                      {item.title}
                    </h6>

                    <div className="mt-auto d-flex gap-2">
                      {item.links.map((linkItem, idx) => {
                        const isExternal = linkItem.url.startsWith("http");
                        const isViewMore = linkItem.label
                          .toLowerCase()
                          .includes("view");

                        return (
                          <Link
                            key={idx}
                            {...(isExternal
                              ? {
                                  as: "a",
                                  href: linkItem.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : { to: linkItem.url })}
                            className={`text-decoration-none d-inline-flex align-items-center fw-bold ${
                              item.disabled
                                ? "pe-none opacity-50"
                                : "text-primary text-underline"
                            }`}
                            style={{ fontSize: "0.85rem", gap: "4px" }}
                          >
                            {linkItem.label}
                            {isViewMore && (
                              <MdKeyboardDoubleArrowRight
                                style={{ fontSize: "1.1rem" }}
                              />
                            )}
                            {isExternal && !isViewMore && (
                              <i
                                className="bi bi-box-arrow-up-right ms-1"
                                style={{ fontSize: "0.7rem" }}
                              ></i>
                            )}
                          </Link>
                        );
                      })}
                    </div>
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

export default Product;
