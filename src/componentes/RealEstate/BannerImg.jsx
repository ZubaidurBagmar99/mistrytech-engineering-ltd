
import Img from "../../assets/images/13.jpg";
const BannerImg = () => {
    return (
      <div>
        <div className="relative w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src={Img}
            alt="Steel Building"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
            <h2 className="text-5xl font-bold">Find Your Dream House By Us </h2>
            <p className="mt-4 text-lg text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              maxime <br />
              recusandae amet labore sed enim odio accusamus esse vero dolorem?
            </p>
            <button className="mt-6 py-4 bg-orange-500 px-6 font-semibold rounded-md hover:bg-white hover:text-black">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
};

export default BannerImg;