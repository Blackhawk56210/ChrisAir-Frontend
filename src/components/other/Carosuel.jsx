import { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ images, showHover, interval = 9000 }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(autoSlide);
  }, [current, interval]);

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden rounded-lg shadow-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className={`w-full ${isMobile ? 'h-48' : 'h-100'} object-cover ${showHover ? "hover:blur-xs" : ""}`}
      />
      {/* Show arrows on all screens for mobile */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 opacity-25 text-white px-3 py-4 rounded-full cursor-pointer ${isMobile ? '' : 'hidden sm:block'}`}
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 opacity-25 text-white px-3 py-4 rounded-full cursor-pointer ${isMobile ? '' : 'hidden sm:block'}`}
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full cursor-pointer transition-all duration-200 ${current === index ? 'bg-white' : 'bg-gray-400'} ${isMobile ? 'w-3 h-3' : 'w-2 h-2'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;