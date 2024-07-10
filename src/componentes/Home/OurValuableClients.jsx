
import Marquee from "react-marquee-slider";
import client1 from "../../assets/images/akij-group-logo.png";
import client2 from "../../assets/images/akij-group-logo.png";
import client3 from "../../assets/images/akij-group-logo.png";
import client4 from "../../assets/images/akij-group-logo.png";
import client5 from "../../assets/images/Abulkhayer logo.jpg";

const OurValuableClients = () => {
  const clients = [client1, client2, client3, client4, client5];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Valuable Clients
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We are proud to have worked with these reputable organizations.
          </p>
        </div>

        <div className="overflow-hidden">
          <Marquee velocity={20} resetAfterTries={200}>
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center mx-4"
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-16 sm:h-20"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurValuableClients;
