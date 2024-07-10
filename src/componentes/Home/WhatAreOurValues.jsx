


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHandsHelping, faLightbulb, faGlobe } from "@fortawesome/free-solid-svg-icons";

const WhatAreOurValues = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Are Our Values?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our values guide us in every aspect of our business, ensuring we deliver the best to our customers and the community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center bg-red-500 w-12 h-12 rounded-full mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">Passion</h3>
            <p className="mt-3 text-gray-600 text-center">
              We are passionate about creating high-quality furniture that brings comfort and style to your home.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center bg-green-500 w-12 h-12 rounded-full mb-4">
              <FontAwesomeIcon icon={faHandsHelping} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">Integrity</h3>
            <p className="mt-3 text-gray-600 text-center">
              We believe in honesty and transparency, building trust with our customers through every interaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center bg-yellow-500 w-12 h-12 rounded-full mb-4">
              <FontAwesomeIcon icon={faLightbulb} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">Innovation</h3>
            <p className="mt-3 text-gray-600 text-center">
              We embrace creativity and innovation to deliver unique and stylish furniture solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center bg-blue-500 w-12 h-12 rounded-full mb-4">
              <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">Sustainability</h3>
            <p className="mt-3 text-gray-600 text-center">
              We are committed to sustainable practices, ensuring our products are environmentally friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreOurValues;
