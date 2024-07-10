
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faLeaf,
  faHeadset,
  faLightbulb,
  faCogs,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover the unique benefits of partnering with us for your
            furniture needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faHammer}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Expert Craftsmanship
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              Our furniture is crafted by skilled artisans using high-quality
              materials to ensure durability and elegance.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-green-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon icon={faLeaf} className="text-white text-2xl" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Sustainable Materials
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              We prioritize sustainability by sourcing eco-friendly materials
              and following environmentally responsible practices.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-red-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faHeadset}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Exceptional Support
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              Our dedicated support team is here to assist you with any
              inquiries or issues, ensuring a seamless experience.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Innovative Designs
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              We offer a wide range of innovative and stylish designs that cater
              to various tastes and preferences.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-purple-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon icon={faCogs} className="text-white text-2xl" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Personalized Solutions
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              We provide personalized furniture solutions tailored to your
              specific needs and preferences.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-teal-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Competitive Pricing
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              We offer high-quality furniture at competitive prices, providing
              excellent value for your money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
