import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export default function Pricings() {
  return (
    <div className="py-5">
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center my-3">
          <h2 className="fw-bold display-5">Choose Your Plan</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
            From high-converting landing pages to complex enterprise platforms,
            select the perfect architecture for your digital presence.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Plan 1: Pro */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-4 pricing-card">
              <div className="card-body">
                <span
                  className="badge mb-3 px-3 py-2"
                  style={{ backgroundColor: "#5bb450" }}
                >
                  Basic
                </span>
                <p className="small text-muted">
                  Perfect for startups. A high-converting
                  <strong> Single-Page Website</strong> to get you online fast.
                </p>
                <h2 className="fw-bold mb-4">400,000 MMK</h2>
                <hr className="text-muted opacity-25" />
                <ul className="list-unstyled mt-4">
                  <PricingFeature text="Single Page (Business Info)" />
                  <PricingFeature text="Mobile-Responsive Design" />
                  <PricingFeature text="Pre-designed Layout" />
                  <PricingFeature text="Basic Contact Form" />
                  <PricingFeature text="Standard Deployment" />
                  <PricingFeature text="One Year Maintenance" />
                  <PricingFeature text="Up to 2 Time Info Updates" />
                </ul>
              </div>
            </div>
          </div>

          {/* Plan 2: Pro Plus */}
          <div className="col-12 col-lg-4">
            <div
              className="card h-100 border-2 shadow-sm p-4 rounded-4 pricing-card"
              style={{ borderColor: "#5bb450" }}
            >
              <div className="card-body">
                <span
                  className="badge mb-3 px-3 py-2"
                  style={{ backgroundColor: "#5bb450" }}
                >
                  Pro
                </span>
                <p className="small text-muted">
                  Ideal for growing businesses. A comprehensive
                  <strong> Multi-Page Website</strong> with advanced navigation.
                </p>
                <h2 className="fw-bold mb-4">900,000 MMK</h2>
                <hr className="text-muted opacity-25" />
                <ul className="list-unstyled mt-4">
                  <PricingFeature text="Up to 5 Pages" />
                  <PricingFeature text="Custom UI/UX Design" />
                  <PricingFeature text="Basic SEO Setup" />
                  <PricingFeature text="Blog/News Integration" />
                  <PricingFeature text="Email Integration" />
                  <PricingFeature text="Contact Form with Email" />
                  <PricingFeature text="One Year Maintenance" />
                  <PricingFeature text="Up to 2 Time Info Updates" />
                </ul>
              </div>
            </div>
          </div>

          {/* Plan 3: Custom */}
          <div className="col-12 col-lg-4">
            <div
              className="card h-100 border-0 shadow-sm p-4 rounded-4 pricing-card"
              style={{
                background: "linear-gradient(180deg, #EBF7ED 0%, #ffffff 100%)",
              }}
            >
              <div className="card-body">
                <span
                  className="badge bg-white mb-3 px-3 py-2 border"
                  style={{ color: "#5bb450" }}
                >
                  Customize
                </span>
                <p className="small text-muted">
                  For complex requirements. <strong>Full customization </strong>
                  tailored to your specific software or IT needs.
                </p>
                <h2 className="fw-bold mb-4">Negotiable</h2>
                <hr className="text-muted opacity-25" />
                <ul className="list-unstyled mt-4">
                  <PricingFeature text="Advanced UI/UX Design" />
                  <PricingFeature text="Full Source Code Access" />
                  <PricingFeature text="Database Architecture" />
                  <PricingFeature text="Third-party API Integrations" />
                  <PricingFeature text="CRM Development" />
                  <PricingFeature text="CMS Development" />
                  <PricingFeature text="Priority Maintenance" />
                  <PricingFeature text="One Year Maintenance" />
                  <PricingFeature text="Up to 2 Time Info Updates" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

function PricingFeature({ text, isMissing = false }) {
  return (
    <li
      className={`mb-3 d-flex align-items-start ${isMissing ? "text-muted opacity-50" : ""}`}
    >
      {isMissing ? (
        <FaXmark
          className="me-2 mt-1 flex-shrink-0"
          style={{ color: "#dc3545", fontSize: "14px" }}
        />
      ) : (
        <FaCheck
          className="me-2 mt-1 flex-shrink-0"
          style={{ color: "#5bb450", fontSize: "14px" }}
        />
      )}
      <span
        className="small"
        style={{ textDecoration: isMissing ? "line-through" : "none" }}
      >
        {text}
      </span>
    </li>
  );
}