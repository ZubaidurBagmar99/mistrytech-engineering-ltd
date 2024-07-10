
import partner1 from "../../assets/images/Abulkhayer logo.jpg"; // Replace with actual partner logo image path
import partner2 from "../../assets/images/Abulkhayer logo.jpg"; // Replace with actual partner logo image path
import partner3 from "../../assets/images/Abulkhayer logo.jpg"; // Replace with actual partner logo image path
import partner4 from "../../assets/images/Abulkhayer logo.jpg"; // Replace with actual partner logo image path

const OurBusinessPartners = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Business Partners
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We are honored to collaborate with these esteemed business partners.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <img
              src={partner1}
              alt="Partner 1"
              className="h-16 sm:h-20 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <img
              src={partner2}
              alt="Partner 2"
              className="h-16 sm:h-20 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <img
              src={partner3}
              alt="Partner 3"
              className="h-16 sm:h-20 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <img
              src={partner4}
              alt="Partner 4"
              className="h-16 sm:h-20 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {/* Add more partner logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default OurBusinessPartners;
