import img1 from "../img/pos&restaurant.jpg";
import img2 from "../img/mobile.jpg";
import img3 from "../img/webdevelopment.jpg";
import img4 from "../img/customweb.jpg";

export default function HomePageSlider() {
  return (
    <section id="home">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade position-relative"
        data-bs-interval="3000"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 slider-img" alt="POS System" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">POS for Restaurant & Bar</h1>
              <p>Simple and efficient POS system for managing daily operations smoothly.</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 slider-img" alt="Mobile App" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">Mobile App Development</h1>
              <p>High-performance Android & iOS apps with elegant UI/UX.</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 slider-img" alt="Ecommerce" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">Ecommerce Development</h1>
              <p>Secure online platforms with product, payment & delivery management.</p>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <img src={img4} className="d-block w-100 slider-img" alt="Custom Website" />
            <div className="dark-overlay"></div>

            <div className="carousel-caption fade-text d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="fw-bold">Custom Website Development</h1>
              <p>Fast, modern, responsive & SEO-optimized websites for your business.</p>
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
