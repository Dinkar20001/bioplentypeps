import React, { useState, useEffect } from "react";

const Carouselslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? 4 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 4 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  // Sample image URLs for each slide
  const slideImages = [
    "https://cdn-dlljg.nitrocdn.com/INruTzluBszouCJGoaRlMhbsFSihfEHc/assets/images/optimized/rev-3d68be5/www.peptides.org/wp-content/uploads/2023/07/best-peptides-companies-3-1-1024x389.jpeg",
    "https://peakbody.co.uk/media/magefan_blog/web-banner-peptides-in-stock-now2.jpeg",

    "https://peakbody.co.uk/media/magefan_blog/web-banner-peptides-in-stock-now2.jpeg",

    "https://cdn-dlljg.nitrocdn.com/INruTzluBszouCJGoaRlMhbsFSihfEHc/assets/images/optimized/rev-3d68be5/www.peptides.org/wp-content/uploads/2023/07/best-peptides-companies-3-1-1024x389.jpeg",
    "https://peakbody.co.uk/media/magefan_blog/web-banner-peptides-in-stock-now2.jpeg",
  ];

  return (
    <div
      id="default-carousel"
      className="relative w-full -z-50"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Iterate over slides */}
        {slideImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`duration-900 ease-in-out ${
              index === currentSlide ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={imageUrl}
              className="absolute block w-full bg-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute w-full bottom-10 text-center">
      <div className="cursor-pointer">
      <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Shop now</button>
      </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carouselslider;
