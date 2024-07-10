
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPencilRuler,
  faHammer,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const HowDoWeWork = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Do We Work?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our process ensures that you receive the highest quality furniture,
            crafted to perfection.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-blue-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faComments}
                className="text-white text-3xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Consultation
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              We start with a consultation to understand your needs and
              preferences, ensuring a tailored approach to every project.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-green-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faPencilRuler}
                className="text-white text-3xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">Design</h3>
            <p className="mt-3 text-gray-600 text-center">
              Our designers create bespoke furniture designs that blend
              aesthetics with functionality, tailored to your specifications.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-red-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon
                icon={faHammer}
                className="text-white text-3xl"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Production
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              Our skilled craftsmen bring the designs to life, using
              high-quality materials and techniques to ensure exceptional
              durability.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="bg-yellow-500 p-5 rounded-full shadow-lg">
              <FontAwesomeIcon icon={faTruck} className="text-white text-3xl" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">
              Delivery & Installation
            </h3>
            <p className="mt-3 text-gray-600 text-center">
              We ensure timely delivery and professional installation of your
              furniture, taking care of every detail to guarantee satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowDoWeWork;
