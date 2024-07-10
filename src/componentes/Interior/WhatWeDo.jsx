import {
  FaPencilRuler,
  FaHammer,
  FaWrench,
  FaArrowRight,
} from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-5xl font-bold mb-10 text-center">
        What <span className="text-sky-500">We Do</span> For You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-start space-y-4 p-5 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
          <div className="text-4xl text-sky-800">
            <FaPencilRuler />
          </div>
          <h4 className="text-2xl font-bold">Design</h4>
          <p>
            We are a leading architecture firm dedicated to creating visionary
            designs that transcend expectations.
          </p>
          <div className="text-2xl text-sky-800 mt-auto">
            <FaArrowRight />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4 p-5 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
          <div className="text-4xl text-sky-800">
            <FaHammer />
          </div>
          <h4 className="text-2xl font-bold">Construction</h4>
          <p>
            We provide top-notch construction services ensuring quality and
            safety in every project we undertake.
          </p>
          <div className="text-2xl text-sky-800 mt-auto">
            <FaArrowRight />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4 p-5 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg">
          <div className="text-4xl text-sky-800">
            <FaWrench />
          </div>
          <h4 className="text-2xl font-bold">Engineering</h4>
          <p>
            Our engineering team leverages the latest technologies to deliver
            innovative solutions.
          </p>
          <div className="text-2xl text-sky-800 mt-auto">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
