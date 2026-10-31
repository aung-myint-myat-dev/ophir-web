import { DynamicFaIcon } from "../../../components/DynamicFaIcon";

export default function ProductSuitable({ iconName, label }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center h-100">
      {/* ICON */}
      <div
        className="d-flex align-items-center justify-content-center rounded-circle mb-3"
        style={{
          width: "72px",
          height: "72px",
          backgroundColor: "#e8f5ee",
          color: "#198754",
          fontSize: "2rem",
        }}
      >
        <DynamicFaIcon iconName={iconName} />
      </div>

      {/* LABEL */}
      <h6
        className="fw-semibold text-dark mb-0"
        style={{
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        {label}
      </h6>

    </div>
  );
}