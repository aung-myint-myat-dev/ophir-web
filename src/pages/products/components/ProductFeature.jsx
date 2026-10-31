import { FaCheck } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";

export default function ProductFeature({ title, description, items = [] }) {
  return (
    <div className="h-100 p-4 border rounded-4 bg-white">
      {/* TITLE AND DESCRIPTION*/}
      <div>
        <h6 className="fw-bold text-success d-flex align-items-center gap-2">
          <FaLayerGroup style={{ color: "gold", fontSize: "18px" }} />
          {title}
        </h6>
        <p className="text-secondary py-md-4 py-2" style={{ fontSize: "13px" }}>{description}</p>
      </div>

      {/* FEATURE ITEMS */}
      <ul className="list-unstyled mb-0 d-flex flex-column gap-3 px-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="d-flex align-items-start gap-2 text-secondary"
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.6",
            }}
          >
            <FaCheck
              className="flex-shrink-0 mt-1"
              style={{
                color: "#27ae60",
                fontSize: "11px",
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}