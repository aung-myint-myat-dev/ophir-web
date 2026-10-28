import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Carousel, Card } from "react-bootstrap";
import {
  FaCheck,
  FaArrowLeft,
} from "react-icons/fa";
import { products } from "./data/products";
import { DynamicFaIcon } from "../../components/DynamicFaIcon";
import RelatedProjects from "./components/RelatedProducts";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = products.find(
    (p) => p.slug === slug || p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!product) {
    return (
      <Container className="text-center py-5" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <h3 className="text-danger fw-bold">Product Not Found</h3>
          <p className="text-muted">The product you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary rounded-pill px-4 d-flex justify-content-center align-items-center gap-2">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-light min-vh-100 py-5" style={{ paddingTop: "110px" }}>
      <Container className="py-5 position-relative">
        {/* Return Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="white"
          className="border mb-3 rounded-circle fw-semibold text-secondary bg-white"
        >
          <FaArrowLeft />
        </Button>

        {/* Hero Section: Product Main Info */}
        <section>
          <Container>
            <Row className="align-item-center g-5 px-lg-5">

              {/* LEFT SIDE - APP INFORMATION */}
              <Col lg={6} md={12} className=" max-h-max">
                <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                  {/* APP LOGO */}
                  <img
                    src={product.logo_path}
                    alt="App Logo"
                    className="img-fluid rounded-4 mb-4"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />

                  {/* APP NAME */}
                  <h1 className="fw-bold mb-3">
                    {product.name}
                  </h1>

                  {/* APP DESCRIPTION */}
                  <p className="text-secondary mb-4" style={{ maxWidth: "500px" }}>
                    {product.description}
                  </p>

                  {/* <p className="fs-6 text-secondary"><FaLink/> Links</p> */}

                  {/* DOWNLOAD LINKS */}
                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                    {product?.production_links?.map((link, index) => {
                      const isEvenLink = (index + 1) % 2 === 0;

                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn ${isEvenLink ? "btn-outline-success" : "btn-success"
                            } rounded-pill px-5 py-1`}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Col>

              {/* RIGHT SIDE - IMAGE CAROUSEL */}
              <Col lg={6} md={12}>
                <div className="mx-auto">
                  <Carousel
                    indicators={true}
                    controls={false}
                    interval={3000}
                    pause="hover"
                  >
                    {product.images?.map((image, index) => (
                      <Carousel.Item key={index}>
                        <div className="" style={{
                          width: "100%",
                          height: "350px",
                          maxWidth: "600px",
                          margin: "0 auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          <img
                            src={image}
                            alt="App Screenshot 1"
                            className="w-100 h-100 rounded-4 object-fit-contain"
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* ================= ROW 1: COMPACT KEY FEATURES ================= */}
        {/* BENEFITS SECTION */}
        <section className="bg-white mt-5 p-4 p-md-5 rounded-4 shadow-sm border mb-4">
          <div className="mb-4 pb-3">
            <h3 className="fw-bold text-dark mb-2" style={{ fontSize: "1.75rem" }}>
              Benefits
            </h3>
          </div>
          <p>{product.benefits}</p>
        </section>

        {/* SUTABLE FOR SECTION */}
        <section className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4">
          <div className="mb-5">
            <h3
              className="fw-bold text-dark mb-2"
              style={{ fontSize: "1.75rem" }}
            >
              Suitable For
            </h3>
          </div>

          <div className="d-flex flex-column gap-4">
            {product?.for?.map((item) => (
              <div key={item.id} className="d-flex align-items-start gap-3">
                <div
                  className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "#e8f5ee",
                    color: "#198754",
                    fontSize: "1.3rem",
                  }}
                >
                  <DynamicFaIcon iconName={item.icon} />
                </div>

                <div>
                  <h5
                    className="fw-bold text-dark mb-1"
                    style={{ fontSize: "1.15rem" }}
                  >
                    {item.label}
                  </h5>

                  <p
                    className="text-secondary mb-0"
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      maxWidth: "850px",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="mb-4">
          <div className="bg-white rounded-4 border shadow-sm p-3 p-md-4">
            {/* HEADING */}
            <div className="mb-3">
              <h4 className="fw-bold text-dark mb-1">Features</h4>
              <p className="text-secondary small mb-0">
                Explore the key features and capabilities of this product.
              </p>
            </div>

            {/* FEATURES GRID */}
            {product.features && product.features.length > 0 ? (
              <Row className="g-3">
                {product.features.map((feature, index) => (
                  <Col xs={12} sm={6} lg={4} key={index}>
                    <div className="d-flex align-items-center h-100 p-2 rounded-2 ">
                      {/* ICON */}
                      <div
                        className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-2 me-3"
                        style={{
                          width: "28px",
                          height: "28px",
                          backgroundColor: "#ebf5fb",
                        }}
                      >
                        <FaCheck
                          style={{
                            color: "#2980b9",
                            fontSize: "11px",
                          }}
                        />
                      </div>

                      {/* CONTENT */}
                      <div className="flex-grow-1">
                        <h6
                          className="fw-semibold text-dark mb-1"
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {feature.title}
                        </h6>

                        <p
                          className="text-secondary mb-0"
                          style={{
                            fontSize: "0.8rem",
                            lineHeight: "1.6",
                          }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-3">
                <p className="text-secondary small mb-0">
                  No features available yet.
                </p>
              </div>
            )}
          </div>
        </section>

        <RelatedProjects products={products} currentProductId={product.id} />
      </Container>
    </div>
  );
}