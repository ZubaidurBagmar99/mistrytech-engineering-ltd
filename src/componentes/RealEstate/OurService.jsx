import BuyHome from "../../assets/images/homeIcon.png";
import RentHome from "../../assets/images/RentHomeIcon.png";
import SellHome from "../../assets/images/SellHomeIcom.png";

const OurService = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <p className="text-red-600 uppercase text-sm mb-3 text-center">
        Our Service
      </p>
      <h3 className="text-3xl font-semibold mb-5 text-center">What We Do?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* service */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={BuyHome}
            alt="Buy Home Service"
            className="h-32 mx-auto rounded-lg mb-5"
          />
          <h4 className="text-xl font-semibold mb-2">Buy A New Home</h4>
          <p className="text-gray-700 mb-4">
            Discover your dream home effortlessly. Explore diverse properties
            and expert guidance for a seamless buying experience.
          </p>
          <button className="text-white bg-orange-600 px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Learn More &rarr;
          </button>
        </div>
        {/* service */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={RentHome}
            alt="Rent Home Service"
            className="h-32 mx-auto rounded-lg mb-5"
          />
          <h4 className="text-xl font-semibold mb-2">Rent A Home</h4>
          <p className="text-gray-700 mb-4">
            Discover your perfect rental effortlessly. Explore a diverse variety
            of listings tailored precisely to suit your unique lifestyle needs.
          </p>
          <button className="text-white bg-orange-600 px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Learn More &rarr;
          </button>
        </div>
        {/* service */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={SellHome}
            alt="Sell Home Service"
            className="h-32 mx-auto rounded-lg mb-5"
          />
          <h4 className="text-xl font-semibold mb-2">Sell A Home</h4>
          <p className="text-gray-700 mb-4">
            Sell confidently with expert guidance and effective strategies,
            showcasing your property&apos;s best features for a successful sale.
          </p>
          <button className="text-white bg-orange-600 px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300">
            Learn More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurService;
