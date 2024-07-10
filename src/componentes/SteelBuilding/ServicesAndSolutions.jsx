

const services = [
  {
    title: "Consulting",
    description: "Expert advice to guide your business to success.",
    icon: "https://via.placeholder.com/100", // Replace with actual icon
  },
  {
    title: "Development",
    description: "Custom software solutions tailored to your needs.",
    icon: "https://via.placeholder.com/100", // Replace with actual icon
  },
  {
    title: "Design",
    description: "Creative and unique designs to make your brand stand out.",
    icon: "https://via.placeholder.com/100", // Replace with actual icon
  },
  {
    title: "Marketing",
    description: "Strategies to boost your business and reach new heights.",
    icon: "https://via.placeholder.com/100", // Replace with actual icon
  },
];

const ServicesAndSolutions = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Services & Solutions
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We offer a wide range of services and solutions to meet your
            business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndSolutions;
