import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BGImg from "../../assets/images/bg.jpg"; // Background image

import Interior from "../../assets/images/InteriorImgSlider.jpg";
import Furniture from "../../assets/images/FurnitureSlider.jpg";
import SteelBuilding from "../../assets/images/SteelbuildingSliderImg1.jpg";
import Construction from "../../assets/images/ConstructionSliderImg.jpg";
// import Building3 from "../../assets/images/carousel/building-3.png";

import "./Hero.css"; // Import custom styles

const Hero = () => {
  return (
    <div className="relative h-fit md:h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center hidden "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3)), url(${BGImg})`,
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="relative flex items-center justify-center h-full w-full">
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Interior */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Interior} alt="Interior" className="interior" />
            </div>
          </SwiperSlide>

          {/* Furniture */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Furniture} alt="Furniture" className="interior" />
            </div>
          </SwiperSlide>

          {/* Steel Building */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img
                src={SteelBuilding}
                alt="Steel Building"
                className="interior"
              />
            </div>
          </SwiperSlide>

          {/* Construction */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Construction} alt="Construction" className="interior" />
            </div>
          </SwiperSlide>

          {/* Building 3 */}
          {/* <SwiperSlide>
            <div className="flex justify-center items-center h-full">
              <img src={Building3} alt="Building 3" className="carousel-img" />
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
