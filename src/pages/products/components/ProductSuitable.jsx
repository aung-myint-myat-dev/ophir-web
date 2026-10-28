import { DynamicFaIcon } from "../../../components/DynamicFaIcon";

export default function ProductSuitable({ iconName, label, description }) {
  return (
    <div className="d-flex align-items-start gap-3">
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
        <DynamicFaIcon iconName={iconName} />
      </div>

      <div>
        <h5
          className="fw-bold text-dark mb-1"
          style={{ fontSize: "1.15rem" }}
        >
          {label}
        </h5>

        <p
          className="text-secondary mb-0"
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            maxWidth: "850px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}