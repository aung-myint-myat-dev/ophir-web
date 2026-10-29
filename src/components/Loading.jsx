import { APP_LOGO } from "../constants/assets";

export default function Loading() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div className="text-center">
        <img style={{
          width: "100px",
          height: "auto",
        }} src={APP_LOGO} alt="ophir-it-solution-logo" />
        <p className="text-secondary mt-2">Loading...</p>
      </div>
    </div>
  )
}