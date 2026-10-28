import { Card } from "react-bootstrap";

export default function ServiceCard({ img, index, title, text}) {
  return (
    <Card
      className="pricing-card h-100 border-0 shadow-sm rounded-4 bg-white overflow-hidden"
      style={{
        borderLeft: "5px solid #5bb450",
      }}
    >
      <Card.Body className="p-4 d-flex flex-column">
        <div className="d-flex align-items-center mb-3">
          <div
            className="bg-light rounded-3 d-flex align-items-center justify-content-center me-3"
            style={{ width: "50px", height: "50px", flexShrink: 0 }}
          >
            <img
              className="animated-icon"
              src={img}
              alt=""
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 small fw-bold">
            Service 0{index + 1}
          </div>
        </div>

        {/* Text Content */}
        <h5 className="fw-bold text-dark mb-2 mt-2 hero-section">
          {title}
        </h5>

        <p
          className="flex-grow-1"
          style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
        >
          {text}
        </p>
      </Card.Body>
    </Card>
  )
}