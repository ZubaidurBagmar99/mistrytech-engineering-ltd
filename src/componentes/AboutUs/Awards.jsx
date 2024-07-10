import award1 from "../../assets/images/Nobel_Prize.png"; // Replace with actual image paths
import award2 from "../../assets/images/Nobel_Prize.png";
import award3 from "../../assets/images/Nobel_Prize.png";
import award4 from "../../assets/images/Nobel_Prize.png";

const Awards = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Awards
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Recognizing our achievements and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative">
            <img
              src={award1}
              alt="Best Innovative Company"
              className="h-96 w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
              <h3 className="text-2xl font-semibold">
                Best Innovative Company
              </h3>
              <p className="text-lg">2023</p>
              <p className="mt-2 text-center">
                Awarded for our groundbreaking innovations and solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative">
              <img
                src={award2}
                alt="Top Industry Leader"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
                <h3 className="text-xl font-semibold">Top Industry Leader</h3>
                <p className="text-md">2022</p>
                <p className="mt-2 text-center">
                  Recognized for our leadership and impact in the industry.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={award3}
                alt="Excellence in Service"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
                <h3 className="text-xl font-semibold">Excellence in Service</h3>
                <p className="text-md">2021</p>
                <p className="mt-2 text-center">
                  Honored for our exceptional customer service and support.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={award4}
                alt="Outstanding Growth"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
                <h3 className="text-xl font-semibold">Outstanding Growth</h3>
                <p className="text-md">2020</p>
                <p className="mt-2 text-center">
                  Celebrated for our rapid growth and market expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
