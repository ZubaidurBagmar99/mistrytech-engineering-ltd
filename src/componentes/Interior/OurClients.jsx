import ReviewImg1 from "../../assets/images/products.jpg";
import ReviewImg2 from "../../assets/images/products.jpg";
import ReviewImg3 from "../../assets/images/products.jpg";

const OurClients = () => {
  return (
    <div>
      <div className="flex flex-wrap mx-4 ">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0"></div>
        <div className="w-full md:w-2/3 px-4 mb-8 md:mb-0">
          <div className="flex flex-col py-10">
            <div className="vertical-text tracking-wide">
              <p>REVIEWS</p>
            </div>
            <p className=" text-3xl font-semibold tracking-wider ml-8 mt-[-80px]">
              Our Clients Talk About Us & Believe <br /> In Our Work
            </p>
          </div>
        </div>
        {/* review */}
        <div>
          <div className="container mx-auto py-10 px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={ReviewImg1}
                  alt="Reviewer 1"
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold text-center mt-4">
                  John Doe
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  &quot;Amazing service and quality products. Highly
                  recommend!&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={ReviewImg2}
                  alt="Reviewer 2"
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold text-center mt-4">
                  Jane Smith
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  &quot;A great experience from start to finish. Excellent
                  customer support!&quot;
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={ReviewImg3}
                  alt="Reviewer 3"
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="text-xl font-semibold text-center mt-4">
                  Sam Wilson
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  &quot;High-quality products and fast delivery. Will shop
                  again!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
