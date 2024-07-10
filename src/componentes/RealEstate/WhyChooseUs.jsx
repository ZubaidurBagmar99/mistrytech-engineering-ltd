import { FaAward, FaPencilRuler, FaHandshake } from "react-icons/fa"; // Example icons from FontAwesome

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <p className="text-red-600 uppercase text-sm mb-3">Our Benefit</p>
      <h3 className="text-3xl font-semibold mb-12">Why Choose Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Proven Expertise */}
        <div className="flex flex-col items-center">
          <FaAward className="text-6xl mb-4" />
          <h4 className="text-xl font-semibold mb-2">Proven Expertise</h4>
          <p className="text-gray-700 max-w-xs">
            Our seasoned team excels in real estate with years of successful
            market navigation, offering informed decisions and optimal results.
          </p>
        </div>
        {/* Customized Solutions */}
        <div className="flex flex-col items-center">
          <FaPencilRuler className="text-6xl mb-4" />
          <h4 className="text-xl font-semibold mb-2">Customized Solutions</h4>
          <p className="text-gray-700 max-w-xs">
            We pride ourselves on crafting personalized strategies to match your
            unique goals, ensuring a seamless real estate journey.
          </p>
        </div>
        {/* Transparent Partnerships */}
        <div className="flex flex-col items-center">
          <FaHandshake className="text-6xl mb-4" />
          <h4 className="text-xl font-semibold mb-2">
            Transparent Partnerships
          </h4>
          <p className="text-gray-700 max-w-xs">
            Transparency is key in our client relationships. We prioritize clear
            communication and ethical practices, fostering trust and reliability
            throughout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
