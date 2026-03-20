import { useLocation } from "react-router-dom";

import { AppRoutes } from "./routes";
import { AppRoot, AppNavBar } from "./components";

export default function AppWrapper() {
  const location = useLocation();

  const hideNavBarPaths = ["/star-grade", "/pos-page"];
  const showNavBar = !hideNavBarPaths.includes(location.pathname);

  return (
    <div className="App">
      {showNavBar && <AppNavBar />}

      <AppRoutes />

      <AppRoot />
    </div>
  );
}
