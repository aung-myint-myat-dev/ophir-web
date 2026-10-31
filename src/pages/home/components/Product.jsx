import { Container, Row, Col } from "react-bootstrap";
import { products } from "../../../database/index";
import ProductCard from "../../products/components/ProductCard";

function Product() {
  return (
    <div
      className="py-5 bg-light-subtle"
    >
      <section id="project">
        <Container>
          <div>
            <h2 className="fw-bold display-5 text-center mb-5">Our Products</h2>
          </div>

          <Row className="g-md-4 g-2  ">
            {products.map((product) => (
              <Col key={product.id} lg={4} md={6} sm={12}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Product;
