import { useLocation } from "react-router-dom";
import { AppRoot, AppNavBar } from "./components";
import AppRoutes from "./routes/AppRoutes";

export default function AppWrapper() {
  const location = useLocation();

  const hideNavBarPaths = ["/products/*", "/projects/*"];
  const showNavBar = !hideNavBarPaths.includes(location.pathname);

  return (
    <div className="App">
      {showNavBar && <AppNavBar />}

      <AppRoutes />
      <AppRoot />
    </div>
  );
}
