
import mapImage from "../../assets/images/googleMap.png"; 

const WhereCanYouFindUs = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Where Can You Find Us?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We have offices located in various cities to serve you better. Visit
            us at any of our locations or get in touch through our contact
            details below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={mapImage}
              alt="Our Locations"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600">Phone: +8801999 099 000</p>
              <p className="text-gray-600">Email: info@mistrytech.com.bd</p>
              <p className="text-gray-600">
                Address: House 25,Road 3/E, Sector -9, Dhaka, Bangladesh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Offices
              </h3>
              <ul className="text-gray-600">
                <li className="mb-2">
                  <strong>New York:</strong> 456 Park Avenue, New York, NY
                </li>
                <li className="mb-2">
                  <strong>Los Angeles:</strong> 789 Sunset Blvd, Los Angeles, CA
                </li>
                <li className="mb-2">
                  <strong>Chicago:</strong> 123 Lake Shore Drive, Chicago, IL
                </li>
                <li className="mb-2">
                  <strong>San Francisco:</strong> 456 Market Street, San
                  Francisco, CA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereCanYouFindUs;
