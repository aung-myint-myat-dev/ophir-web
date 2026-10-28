import { useEffect } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import { assets } from '../../../constants';

const img1 = assets.slider_images[0];
const img2 = assets.slider_images[1];
const img3 = assets.slider_images[2];
const img4 = assets.slider_images[3];

export default function HomeSlider() {
   useEffect(() => {
    const carouselElement = document.getElementById("carouselExampleFade");
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,  
      ride: "carousel", 
      wrap: true,      
      pause: false    
    });
  }, []);

  return (
    <section id="home">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade position-relative"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={img2} className="d-block w-100 slider-img" alt="Mobile App" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">Mobile App Development</h1>
              <p>High-performance Android & iOS apps with elegant UI/UX.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 slider-img" alt="Custom Website" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">Custom Website Development</h1>
              <p>Fast, modern, responsive & SEO-optimized websites
                <span className="d-block">for your business.</span></p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 slider-img" alt="Ecommerce" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">Ecommerce Development</h1>
              <p>Secure online platforms with product, 
                <span className="d-lock"> payment & delivery management.</span>
              </p>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <img src={img1} className="d-block w-100 slider-img" alt="POS System" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">POS for Restaurant & Bar</h1>
              <p>Simple and efficient POS system for managing daily operations smoothly.</p>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </section>
  );
}
