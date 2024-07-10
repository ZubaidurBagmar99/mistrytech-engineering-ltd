import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar
            key={index}
            className={index < rating ? "text-yellow-400" : "text-gray-400"}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hear what our clients have to say about us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Client 1"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Client Name 1
                </h3>
                <p className="text-sm text-gray-600">Position, Company</p>
                {renderStars(5)}
              </div>
            </div>
            <p className="text-gray-600">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat orci ut erat interdum, et malesuada sapien
              malesuada.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Client 2"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Client Name 2
                </h3>
                <p className="text-sm text-gray-600">Position, Company</p>
                {renderStars(4)}
              </div>
            </div>
            <p className="text-gray-600">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat orci ut erat interdum, et malesuada sapien
              malesuada.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Client 3"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Client Name 3
                </h3>
                <p className="text-sm text-gray-600">Position, Company</p>
                {renderStars(5)}
              </div>
            </div>
            <p className="text-gray-600">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat orci ut erat interdum, et malesuada sapien
              malesuada.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
