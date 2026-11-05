import { assets } from "../constants";

const img1 = assets.APP_LOGO;
const icon5 = assets.cleaning_icon[0];

export default function AppRoot() {
  return (
    <footer
      className="shadow-lg py-3 border-top"
      style={{ background: "#11300B" }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        {/* Logo + Name */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={img1}
            alt="Company Logo"
            style={{ height: "38px", }}
          />
          <span className="fw-bold fs-5 text-light">Ophir IT Solutions</span>
        </div>

        <div className="py-1">
          <div className="py-1">
            <a
              href="https://www.call2cleanservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none animate-wrapper"
            >
              <div className="icon-only">
                <img
                  src={icon5}
                  alt="Cleaning Icon"
                  style={{
                    height: "80px",
                    width: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="text-only text-center">
                <span className="text-white fs-6">
                  For Office Cleaning Service
                  <br />
                  CLICK HERE
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center text-md-end">
          <small className="text-light">
            Latest news or private information policy <br />
            Copyright © 2022 Ophir IT Solutions Company. <br />
            All Rights Reserved.
          </small>
        </div>
      </div>

      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            10%, 40% { opacity: 1; transform: scale(1); }
            50% { opacity: 0; transform: scale(0.8); }
          }

          .animate-wrapper {
            display: grid;
            place-items: center;
            position: relative;
            height: 60px;
            min-width: 250px;
          }

          .icon-only, .text-only {
            position: absolute;
            opacity: 0;
            animation: zoomInOut 6s infinite ease-in-out; /* Slower 6s loop */
          }

          .text-only {
            animation-delay: 3s; /* Starts exactly when icon finishes its half */
          }
        `}
      </style>
    </footer>
  );
}
