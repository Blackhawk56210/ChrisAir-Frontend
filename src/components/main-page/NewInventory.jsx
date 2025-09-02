import { useState, useEffect, useRef } from 'react';
import Jet1 from '../../assets/images/showoff/jet1.png';
import Heli1 from '../../assets/images/showoff/heli1.png';
import Plane1 from '../../assets/images/showoff/plane1.png';

const images = [Jet1, Heli1, Plane1];

export default function New() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToSlide = (index) => setActiveIndex(index);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full max-w-xl mx-auto px-2 sm:px-8">
      {/* Carousel wrapper */}
      <div
        className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-3 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Controls (hidden on mobile, visible on md+) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute top-0 left-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute top-0 right-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}