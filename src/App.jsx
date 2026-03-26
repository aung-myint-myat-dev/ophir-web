import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/fonts/fonts.css';
import { BrowserRouter } from "react-router-dom";

import "./app.module.css";
import AppWrapper  from "./AppWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
