export default function NotFound() {
  return (
    <div className="min-height-100vh" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="text-center">
        <h2 style={{ fontSize: "48px" }} >
          404 Not Found
        </h2>

        <a href="/">Back to Home</a>
      </div>
    </div>
  )
}