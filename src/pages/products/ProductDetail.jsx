import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

import { products } from "../../database/index";
import RelatedProjects from "./components/RelatedProducts";
import ProductFeature from "./components/ProductFeature";
import ProductSuitable from "./components/ProductSuitable";
import Loading from "../../components/Loading";
import "./style/ProductDetail.css"
import { getRandomNumber } from "../../utils/index";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    setProduct(null);

    const timer = setTimeout(() => {
      const foundProduct = products.find(
        (p) => p.slug === slug && p.is_active === true
      );

      setProduct(foundProduct);
      setLoading(false);
    }, getRandomNumber(100, 400));

    return () => clearTimeout(timer);
  }, [slug]);

  // LOADING
  if (loading) {
    return <Loading />;
  }

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <Container className="text-center min-vh-100 d-flex justify-content-center align-items-center">
        <div>
          <h3 className="text-danger fw-bold">
            Product Not Found
          </h3>

          <p className="text-muted">
            The product you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="btn btn-primary rounded-pill px-4 d-flex justify-content-center align-items-center gap-2"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div
      className="bg-light min-vh-100"
      style={{ paddingTop: "110px" }}
    >

      {/* HERO SECTION */}
      <section className="py-4 py-md-5 border-bottom">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">

            {/* LEFT SIDE */}
            <Col lg={6} md={12}>
              <div className="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">

                {/* APP LOGO */}
                <img
                  src={product.logo_path}
                  alt={`${product.name} Logo`}
                  className="img-fluid rounded-4 mb-3"
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "contain",
                  }}
                />

                {/* APP NAME */}
                <h1 className="fw-bold mb-3">
                  {product.name}
                </h1>

                {/* DESCRIPTION */}
                <p
                  className="text-secondary mb-4"
                  style={{ maxWidth: "500px" }}
                >
                  {product.description}
                </p>

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
                        className={`btn ${isEvenLink
                          ? "btn-outline-success"
                          : "btn-success"
                          } rounded-pill px-4 py-2`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Col>

            {/* RIGHT SIDE */}
            <Col lg={6} md={12}>
              <Carousel
                indicators
                controls={false}
                interval={3000}
                pause="hover"
                className="product-detail-carousel"
              >
                {product.images?.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div
                      style={{
                        width: "100%",
                        height: "350px",
                        maxWidth: "600px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={image}
                        alt={`${product.name} Screenshot ${index + 1}`}
                        className="w-100 h-100 rounded-4 object-fit-contain"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

          </Row>
        </Container>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-5 border-bottom">
        <Container className="py-md-3">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold text-dark mb-3">
              Benefits
            </h2>

            <p className="text-secondary mb-0">
              Discover the benefits and advantages of using this product.
            </p>
          </div>

          <p
            className="text-secondary mb-0 mx-auto"
            style={{
              lineHeight: "1.8",
              textAlign: "justify",
              maxWidth: "850px",
            }}
          >
            {product.benefits}
          </p>
        </Container>
      </section>

      {/* SUITABLE FOR SECTION */}
      <section className="py-5 border-bottom">
        <Container className="py-md-3">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold text-dark mb-3">
              Suitable For
            </h2>

            <p className="text-secondary mb-0">
              Explore who can benefit the most from this product.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {product?.for?.map((item, index) => (
              <Col
                xs={6}
                sm={4}
                md={3}
                lg={3}
                key={index}
              >
                <ProductSuitable
                  iconName={item.icon}
                  label={item.label}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5 border-bottom">
        <Container className="py-md-3">

          {/* HEADING */}
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold text-dark mb-3">
              Features
            </h2>

            <p
              className="text-secondary mx-auto mb-0"
              style={{ maxWidth: "700px" }}
            >
              Explore the key features and capabilities
              of this product.
            </p>
          </div>

          {/* FEATURES GRID */}
          {product.features && product.features.length > 0 ? (
            <Row className="g-3 g-md-4">
              {product.features.map((feature, index) => (
                <Col sm={12} lg={6} xl={4} key={index}>
                  <ProductFeature
                    title={feature.title}
                    description={feature.description}
                    items={feature.items}
                  />
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

        </Container>
      </section>

      {/* RELATED PRODUCTS SECTION */}
      <Container>
        <RelatedProjects
          products={products}
          currentProductId={product.id}
        />
      </Container>
    </div >
  );
}