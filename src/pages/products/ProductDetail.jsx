import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import {
  FaArrowLeft,
} from "react-icons/fa";
import { products } from "../../database/index"
import RelatedProjects from "./components/RelatedProducts";
import ProductFeature from "./components/ProductFeature";
import ProductSuitable from "./components/ProductSuitable";
import Loading from "../../components/Loading";

export default function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true)
    setProduct(null)

    const timer = setTimeout(() => {
      const foundProduct = products.find(
        (p) =>
          p.slug === slug && p.is_active === true
      );

      setProduct(foundProduct)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer);
  }, [slug])

  // LOADING PRODUCT
  if (loading) {
    return <Loading />
  }

  // PRODUCT NOT FOUND
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

        {/* BENEFITS SECTION */}
        <section className="bg-white mt-5 p-4 p-md-5 rounded-4 shadow-sm border mb-4">
          <div className="mb-4">
            <h3 className="fw-bold text-dark mb-2" style={{ fontSize: "1.75rem" }}>
              Benefits
            </h3>
          </div>
          <p style={{
            textAlign: "justify"
          }}>{product.benefits}</p>
        </section>

        {/* SUTABLE FOR SECTION */}
        <section className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4">
          <div className="mb-4">
            <h3
              className="fw-bold text-dark mb-2"
              style={{ fontSize: "1.75rem" }}
            >
              Suitable For
            </h3>
          </div>

          <div className="d-flex flex-column gap-4">
            {product?.for?.map((item, index) => (
              <ProductSuitable
                key={index}
                iconName={item.icon}
                label={item.label}
                description={item.description} />
            ))}
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="mb-4">
          <div className="bg-white rounded-4 border shadow-sm p-4 p-md-5">
            {/* HEADING */}
            <div className="mb-4">
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
                    <ProductFeature
                      title={feature.title}
                      description={feature.description}
                      items={feature.items} />
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