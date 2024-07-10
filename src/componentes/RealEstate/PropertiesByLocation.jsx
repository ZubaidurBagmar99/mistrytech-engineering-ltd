

// Sample images
import SampleImage1 from "../../assets/images/sampleImg1.jpg";
import SampleImage2 from "../../assets/images/sampleImg2.jpg";
import SampleImage3 from "../../assets/images/sampleImg3.jpg";

const properties = [
  {
    id: 1,
    image: SampleImage1,
    location: "New York",
    area: "Pacific Heights Area",
    propertiesCount: 5,
  },
  {
    id: 2,
    image: SampleImage2,
    location: "San Francisco",
    area: "Mission District Area",
    propertiesCount: 2,
  },
  {
    id: 3,
    image: SampleImage3,
    location: "New York",
    area: "Pacific Heights Area",
    propertiesCount: 5,
  },
];

const PropertiesByLocation = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <p className="text-center text-sm text-red-600 uppercase mb-3">
        Area Properties
      </p>
      <h3 className="text-center text-3xl font-semibold mb-8">
        Properties By Location
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={`${property.area}`}
                className="w-full h-64 object-cover"
              />
              <span className="absolute top-4 left-4 bg-white text-gray-700 px-3 py-1 rounded-full text-sm shadow">
                {property.propertiesCount} PROPERTIES
              </span>
            </div>
            <div className="p-5">
              <p className="text-gray-500 mb-1">{property.location}</p>
              <h4 className="text-xl font-semibold mb-3">{property.area}</h4>
              <a
                href="#"
                className="text-orange-500 font-medium hover:text-orange-700"
              >
                View Property →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesByLocation;
