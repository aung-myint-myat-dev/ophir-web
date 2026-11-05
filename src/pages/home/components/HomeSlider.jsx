// import { useEffect } from "react";
// import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

// import { assets } from '../../../constants';

// const img1 = assets.home_banner_images[0];
// const img2 = assets.home_banner_images[1];

// export default function HomeSlider() {
//   useEffect(() => {
//     const carouselElement = document.getElementById("carouselExampleFade");
//     new bootstrap.Carousel(carouselElement, {
//       interval: 5000,
//       ride: "carousel",
//       wrap: true,
//       pause: false
//     });
//   }, []);

//   return (
//     <section id="home" style={{
//       paddingTop: "60px",
//       maxHeight: 600,
//       overflow: "hidden"
//     }}>
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade position-relative h-100"
//       >
//         <div className="carousel-inner">
//           {/* Slider 1 */}
//           <div className="carousel-item active">
//             <img src={img1} className="d-block w-100 slider-img" alt="POS System" />
//           </div>


//           <div className="carousel-item">
//             <img src={img2} className="d-block w-100 slider-img" alt="Mobile App" />
//           </div>


//         </div>

//         {/* Controls */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon"></span>
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon"></span>
//         </button>

//       </div>
//     </section>
//   );
// }


import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.page.css"
import { assets } from "../../../constants";

const slides = [
  {
    id: 1,
    image: assets.home_banner_images[0],
    alt: "Mobile App",
  },
  {
    id: 2,
    image: assets.home_banner_images[1],
    alt: "POS System",
  },
];

export default function HomeSlider() {
  return (
    <section id="home" className="home-slider">
      <Carousel
        fade
        interval={3000}
        pause={false}
        indicators={true}
        controls={true}
        wrap
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="home-slider-image"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}