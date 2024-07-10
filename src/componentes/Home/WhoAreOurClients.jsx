import corporateImage from "../../assets/images/sampleImg3.jpg"; // Replace with actual image path
import homeownerImage from "../../assets/images/sampleImg3.jpg"; // Replace with actual image path
import educationImage from "../../assets/images/sampleImg3.jpg"; // Replace with actual image path
import retailImage from "../../assets/images/sampleImg3.jpg"; // Replace with actual image path

const WhoAreOurClients = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who Are Our Clients?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We proudly serve a diverse range of clients, providing customized
            furniture solutions to meet their unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={corporateImage}
              alt="Corporate Clients"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Corporations
              </h3>
              <p className="mt-3 text-gray-600 text-center">
                We provide high-quality furniture solutions to corporate
                offices, enhancing productivity and style.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={homeownerImage}
              alt="Homeowners"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Homeowners
              </h3>
              <p className="mt-3 text-gray-600 text-center">
                Our customized furniture brings comfort and elegance to
                residential spaces, creating a perfect home.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={educationImage}
              alt="Educational Institutions"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Educational Institutions
              </h3>
              <p className="mt-3 text-gray-600 text-center">
                We cater to schools and universities, providing durable and
                functional furniture for educational environments.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img
              src={retailImage}
              alt="Retail Stores"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                Retail Stores
              </h3>
              <p className="mt-3 text-gray-600 text-center">
                Our stylish and practical furniture solutions help retail stores
                create an inviting shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreOurClients;
