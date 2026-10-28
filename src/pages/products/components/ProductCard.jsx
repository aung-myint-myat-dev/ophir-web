import { IconBase } from "react-icons"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  const { name, slug, logo_path, description, production_links } = product
  return (
    <div className="card border rounded-4 p-3 h-100">
      <div className="card-body d-flex flex-column justify-content-between">

        {/* Card Header & Logo Section */}
        <div>
          <div className="d-flex align-items-center gap-3 mb-3">
            {/* Logo */}
            <div
              className="rounded-circle overflow-hidden flex-shrink-0 bg-light d-flex align-items-center justify-content-center"
              style={{ width: "45px", height: "45px" }}
            >
              <img
                src={logo_path}
                alt={`${name}-logo`}
                className="w-100 h-100 object-fit-contain"
              />
            </div>

            {/* Header & Link */}
            <h5 className="card-title fw-bold mb-0 text-secondary-emphasis">{name}</h5>
          </div>

          {/* Descriptions */}
          <p className="card-text text-muted small mb-4 line-clamp-2">
            {description?.slice(0, 70) + ' . . .' || "No description available for this project."}
          </p>
        </div>

        {/* Production Links */}
        <div className="d-flex flex-wrap items-start justify-content-between gap-2 pt-4 border-top">
          <div className="d-flex gap-2">
            {production_links?.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="btn btn-outline-primary btn-sm rounded-pill px-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link className="align-self-end btn btn-success theme-success btn-sm rounded-pill px-3" to={`/products/${slug}`}>View More</Link>
        </div>

      </div>
    </div>
  )
}