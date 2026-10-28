import { FaCheck } from "react-icons/fa";

export default function ProductFeature({ title, description }) {
  return (
    <div className="d-flex align-items-start h-100 p-2 rounded-2 ">
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
          {title}
        </h6>

        <p
          className="text-secondary mb-0"
          style={{
            fontSize: "0.8rem",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}