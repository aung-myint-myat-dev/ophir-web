import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import './App.css';


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AppNavbar from './components/Navbar';
import AppAbout from './components/About';
import AppService from './components/Service';
import AppProduct from './components/Project';
import AppContact from './components/Contact';
import AppRoot from './components/Root';
import HomePageSlider from './components/Home';

import StarGradePage from "./productpage/StarGradePage";
import POSPage from './productpage/POSPage';

function HomePage() {
  return (
    <>
      <HomePageSlider />
      <AppAbout />
      <AppService />
      <AppProduct />
      <AppContact />
    </>
  );
}


function AppWrapper() {
  const location = useLocation();
  const hideNavbarPaths = ["/star-grade", "/pos-page"];

  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="App">
      {showNavbar && <AppNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/star-grade" element={<StarGradePage />} />
        <Route path="/pos-page" element={<POSPage />} />
      </Routes>

      <AppRoot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
