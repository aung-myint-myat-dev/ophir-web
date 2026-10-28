import React from "react";
import { FaCheck, FaTimes, FaCrown, FaRegStar, FaTags } from "react-icons/fa";

export default function PricingSection({ product }) {
  const { features = [], pricings = [] } = product;

  return (
    <section className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-5">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
        <div>
          <h3 className="fw-bold text-dark mb-1 d-flex align-items-center gap-2">
            <FaTags className="text-success" /> Pricing Plans
          </h3>
          <p className="text-muted small mb-0">Choose the plan that best fits your needs.</p>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="row g-4 justify-content-center">
        {pricings.map((plan) => (
          <div key={plan.id} className="col-12 col-md-6 col-lg-5">
            <div
              className={`p-4 rounded-4 border h-100 d-flex flex-column justify-content-between ${plan.price !== "$0" ? "border-primary bg-light-subtle shadow" : "bg-light"
                }`}
            >
              <div>
                {/* Plan Title & Icon */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                    {plan.price !== "$0" ? <FaCrown className="text-warning" /> : <FaRegStar className="text-secondary" />}
                    {plan.plan_name}
                  </h4>
                  {plan.price !== "$0" && (
                    <span className="badge bg-primary rounded-pill px-3 py-1">Popular</span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span className="display-6 fw-bold text-dark">{plan.price}</span>
                  <span className="text-muted small"> / {plan.duration}</span>
                </div>

                <p className="text-muted small mb-4">{plan.description}</p>

                {/* Included / Excluded Features Check List */}
                <div className="border-top pt-3">
                  <h6 className="fw-bold text-dark small mb-3">Included Features:</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {features.map((feature) => {
                      const isIncluded = plan.feature_ids?.includes(feature.id);
                      return (
                        <li
                          key={feature.id}
                          className={`d-flex align-items-center gap-2 small ${isIncluded ? "text-dark fw-medium" : "text-muted opacity-50 text-decoration-line-through"
                            }`}
                        >
                          {isIncluded ? (
                            <FaCheck className="text-success flex-shrink-0" />
                          ) : (
                            <FaTimes className="text-danger flex-shrink-0" />
                          )}
                          <span>{feature.title}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-top">
                <button
                  className={`btn w-100 rounded-pill py-2 fw-bold ${plan.price !== "$0" ? "btn-primary" : "btn-outline-secondary"
                    }`}
                >
                  {plan.price === "$0" ? "Get Started" : "Upgrade to Pro"}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}