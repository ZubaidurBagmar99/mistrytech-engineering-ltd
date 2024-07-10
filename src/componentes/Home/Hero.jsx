import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BGImg from "../../assets/images/bg.jpg"; // Background image

import Interior from "../../assets/images/InteriorImg.jpg";
import Furniture from "../../assets/images/FurnitureSlider.jpg";
import SteelBuilding from "../../assets/images/steelbuildingSliderImg.jpg";
import Construction from "../../assets/images/Construction-1200x328.jpeg";
// import Building1 from "../../assets/images/carousel/building.png";
// import Building2 from "../../assets/images/carousel/building-2.png";
import Building3 from "../../assets/images/carousel/building-3.png";

import "./Hero.css"; // Import custom styles

const Hero = () => {
  return (
    <div
      className="relative h-[75vh] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3)), url(${BGImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative  flex items-center justify-center h-full w-full">
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Interior */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Interior} alt="Building 3" className=" interior" />
            </div>
          </SwiperSlide>

          {/* Furniture */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Furniture} alt="Building 2" className="interior" />
            </div>
          </SwiperSlide>

          {/* Steel Building */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={SteelBuilding} alt="Building 3" className=" interior" />
            </div>
          </SwiperSlide>

          {/* Construction */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Construction} alt="Building 2" className="interior" />
            </div>
          </SwiperSlide>

          {/* Real estate */}
          {/* <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img
                src={Building1}
                alt="Building 1"
                className="carousel-img carousel-img1"
              />
            </div>
          </SwiperSlide> */}

          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Building3} alt="Building 3" className="carousel-img" />
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Building2} alt="Building 2" className="carousel-img" />
            </div>
          </SwiperSlide> */}

          {/* Add more slides as needed */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
