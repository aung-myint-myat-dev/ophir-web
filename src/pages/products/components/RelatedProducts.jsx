import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../style/RelatedProducts.css"
const RelatedProjects = ({ products = [], currentProductId }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const isAnimating = useRef(false);

  const [visibleCount, setVisibleCount] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const relatedProducts = products.filter(
    (item) => item.id !== currentProductId
  );

  const total = relatedProducts.length;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 576) {
        setVisibleCount(2);
      } else if (window.innerWidth < 768) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setTransitionEnabled(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });
  }, [visibleCount, total]);

  if (total === 0) return null;

  // Duplicate items on both sides to create a circular effect.
  const cloneCount = Math.min(visibleCount, total);

  const slides = [
    ...relatedProducts.slice(-cloneCount),
    ...relatedProducts,
    ...relatedProducts.slice(0, cloneCount),
  ];

  const baseIndex = cloneCount;
  const canSlide = total > visibleCount;

  const moveTo = (index) => {
    if (!canSlide || isAnimating.current) return;

    isAnimating.current = true;
    setTransitionEnabled(true);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    moveTo(currentIndex + 1);
  };

  const handlePrev = () => {
    moveTo(currentIndex - 1);
  };

  const handleTransitionEnd = (event) => {
    if (event.target !== trackRef.current) return;

    let nextIndex = currentIndex;

    if (currentIndex >= total + cloneCount) {
      nextIndex = baseIndex;
    } else if (currentIndex < cloneCount) {
      nextIndex = total + cloneCount - 1;
    } else {
      isAnimating.current = false;
      return;
    }

    setTransitionEnabled(false);
    setCurrentIndex(nextIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
        isAnimating.current = false;
      });
    });
  };

  return (
    <section className="related-projects">
      <div className="related-projects-header">
        <div>
          <h4 className="related-projects-title">Related Products</h4>
          <p className="related-projects-description">
            Explore more products you might be interested in.
          </p>
        </div>

        {canSlide && (
          <div className="related-projects-navigation">
            <button
              type="button"
              className="related-nav-button"
              onClick={handlePrev}
              aria-label="Previous projects"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className="related-nav-button"
              onClick={handleNext}
              aria-label="Next projects"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      <div className="related-projects-viewport" ref={containerRef}>
        <div
          ref={trackRef}
          className={`related-projects-track ${transitionEnabled ? "has-transition" : ""
            }`}
          style={{
            transform: `translateX(-${((currentIndex + cloneCount) * 100) / visibleCount
              }%)`,
            "--visible-count": visibleCount,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((item, index) => (
            <div
              className="related-project-slide"
              key={`${item.id}-${index}`}
            >
              <a
                href={`/products/${item.slug}`}
                className="related-project-link"
                aria-label={`View ${item.name}`}
                tabIndex={
                  index >= currentIndex + cloneCount &&
                    index < currentIndex + cloneCount + visibleCount
                    ? 0
                    : -1
                }
              >
                <div className="related-project-card">
                  <div className="related-project-logo">
                    <img
                      src={item.logo_path}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>

                  <h6 className="related-project-name">
                    {item.name}
                  </h6>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;