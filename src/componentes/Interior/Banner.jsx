import InteriorBG from "../../assets/images/interiorbg.jpg";
import InteriorInner from "../../assets/images/interior.png";
import "./Banner.css"; // Import custom CSS for the marquee effect

const Banner = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${InteriorBG})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="marquee">
          <div className="marquee-inner">
            <img src={InteriorInner} alt="Interior" className="inner-image" />
            <img src={InteriorInner} alt="Interior" className="inner-image" />
            <img src={InteriorInner} alt="Interior" className="inner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
