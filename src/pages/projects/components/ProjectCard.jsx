import React from "react";

export default function ProjectCard({ project }) {
  const { name, logo_path } = project;

  return (
    <div className="card service-card border rounded-4 shadow-sm h-100 p-2">
      <div className="card-body d-flex flex-column align-items-center justify-content-center p-2">
        {/* Logo */}
        <div className="rounded-4 p-2" style={{
          width: "120px",
          height: "120px",
          overflow: "hidden"
        }}>
          <img
            src={logo_path}
            alt={`${name} logo`}
            title={name}
            className="img-fluid d-block"
            style={{
              width: "100%",
              maxWidth: "120px",
              height: "100%",
              aspectRatio: "1 / 1",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Project Name */}
        <p className="fw-semibold text-center text-secondary mt-3 mb-0" style={{ fontSize: "14px" }}>
          {name}
        </p>
      </div>
    </div>
  );
}