import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./BannerImg.css"; // Ensure Tailwind CSS is imported

import Img1 from "../../assets/images/13.jpg"; // Replace with your image path
import Img2 from "../../assets/images/09.webp"; // Add more images as needed
import Img3 from "../../assets/images/10.webp"; // Add more images as needed
import Img4 from "../../assets/images/Website-4-1.jpg"; // Add more images as needed
import Img5 from "../../assets/images/2-1.jpg"; // Add more images as needed

const Carousel = () => {
  const [pause, setPause] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    duration: 1000, // Adjust this value to control the sliding duration
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 1, spacing: 15 },
      },
    },
    created: (s) => {
      s.container.addEventListener("mouseover", () => setPause(true));
      s.container.addEventListener("mouseout", () => setPause(false));
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause && instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); // Change slide every 5 seconds for a slower transition

    return () => {
      clearInterval(interval);
    };
  }, [pause, instanceRef]);

  const handlePrevious = () => {
    if (instanceRef.current) instanceRef.current.prev();
  };

  const handleNext = () => {
    if (instanceRef.current) instanceRef.current.next();
  };

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <BannerImg src={Img1} title="Interior" />
        </div>
        <div className="keen-slider__slide">
          <BannerImg src={Img2} title="Elegance" />
        </div>
        <div className="keen-slider__slide">
          <BannerImg src={Img3} title="Perfection" />
        </div>
        <div className="keen-slider__slide">
          <BannerImg src={Img4} title="Eco-Friendly" />
        </div>
        <div className="keen-slider__slide">
          <BannerImg src={Img5} title="Architecture" />
        </div>
        {/* Add more slides as needed */}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={handlePrevious} className="carousel-button">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button onClick={handleNext} className="carousel-button">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const BannerImg = ({ src, title }) => {
  return (
    <div className="relative w-full md:h-[90vh]">
      <img className="w-full h-full object-cover" src={src} alt={title} />
      <div className="absolute inset-0 flex flex-col items-baseline justify-end text-white bg-black bg-opacity-10 p-4 bottom-8">
        <h2 className="text-5xl md:text-9xl uppercase font-thin tracking-widest ml-20">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Carousel;
