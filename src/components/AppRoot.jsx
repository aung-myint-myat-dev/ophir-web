import { assets } from '../constants';

const img1 = assets.APP_LOGO;

export default function AppRoot() {
  return (
    <footer className="w-100 shadow-lg py-3 border-top" style={{ background: "#11300B" }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

        {/* Logo + Name */}
        <div className="d-flex align-items-center gap-2">
          <img
            src={img1}
            alt="Company Logo"
            style={{ height: "55px", width: "70px" }}
          />
          <span className="fw-bold fs-5 text-light">
            Ophir IT Solutions
          </span>
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

    </footer>
  );
}
