import { FaCheck } from "react-icons/fa6";

export default function Pricing() {
  return (
    <section
      className="py-5 bg-light"
      id="pricing"
      style={{ backgroundColor: "#f8f9ff" }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Choose your right plan!</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
            Select from best plans, ensuring a perfect match. Need more or less?
            Customize your subscription for a seamless fit!
          </p>
          <p>• Hosting Fees will be provided by Customer •</p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Plan 1: Pro */}
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-0 border-transparent shadow-sm p-4 rounded-4 pricing-card">
              <div className="card-body">
                <span
                  className="badge rounded-pill mb-3 px-3 py-2"
                  style={{ backgroundColor: "#5bb450" }}
                >
                  Pro
                </span>
                <p className="text-muted small">
                  Ideal for those who've already got their website up and
                  running and are seeking assistance.
                </p>
                <h2 className="fw-bold mb-4">300,000 MMK</h2>
                <hr className="text-muted opacity-25" />
                <ul className="list-unstyled mt-4">
                  <PricingFeature text="3-5 day turnaround" />
                  <PricingFeature text="Native Development" />
                  <PricingFeature text="Task delivered one-by-one" />
                  <PricingFeature text="Dedicated dashboard" />
                  <PricingFeature text="Updates via Dashboard & Slack" />
                </ul>
              </div>
            </div>
          </div>

          {/* Plan 2: Pro Plus */}
          <div className="col-12 col-lg-4">
            <div
              className="card h-100 border-2 border-transparent shadow-sm p-4 rounded-4 pricing-card"
              style={{ borderColor: "#5bb450" }}
            >
              <div className="card-body">
                <span
                  className="badge rounded-pill mb-3 px-3 py-2"
                  style={{ backgroundColor: "#5bb450" }}
                >
                  Pro Plus
                </span>
                <p className="text-muted small">
                  Ideal if you want to build or scale your website fast, with
                  the strategy calls included.
                </p>
                <h2 className="fw-bold mb-4">800,000 MMK</h2>
                <hr className="text-muted opacity-25" />
                <ul className="list-unstyled mt-4">
                  <PricingFeature text="1-3 day turnaround" />
                  <PricingFeature text="Monthly strategy call" />
                  <PricingFeature text="Commercial license" />
                  <PricingFeature text="Native Development" />
                  <PricingFeature text="Tasks delivered one-by-one" />
                  <PricingFeature text="Dedicated dashboard" />
                  <PricingFeature text="Updates via Dashboard & Slack" />
                </ul>
              </div>
            </div>
          </div>

          {/* Plan 3: Custom */}
          <div className="col-12 col-lg-4">
            <div
              className="card h-100 border-0 border-transparent shadow-sm p-4 rounded-4 pricing-card"
              style={{
                background: "linear-gradient(180deg, #EBF7ED 0%, #ffffff 100%)",
              }}
            >
              <div className="card-body">
                <span className="badge bg-white text-dark border rounded-pill mb-3 px-3 py-2">
                  Custom
                </span>
                <p className="text-muted small">
                  If these plans don't fit, let's create one that suits.
                  Customize your subscription for a perfect fit!
                </p>
                <h2 className="fw-bold mb-4">Let's Talks!</h2>
                <hr className="text-muted opacity-25" />
                <ul className="list-unstyled mt-4">
                  <PricingFeature text="Everything in design & development" />
                  <PricingFeature text="Strategy workshop" />
                  <PricingFeature text="Priority support" />
                  <PricingFeature text="Multiple tasks at once" />
                  <PricingFeature text="Ongoing autonomous A/B testing" />
                  <PricingFeature text="Advanced custom development" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for the checkmarks
function PricingFeature({ text }) {
  return (
    <li className="mb-3 d-flex align-items-start">
      <FaCheck
        className="me-2 mt-1 flex-shrink-0"
        style={{ color: "#5bb450", fontSize: "14px" }}
      />
      <span className="small">{text}</span>
    </li>
  );
}
