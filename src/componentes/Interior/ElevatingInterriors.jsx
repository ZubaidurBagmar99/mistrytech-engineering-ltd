import InteriorImg from "../../assets/images/InteriorImg.jpg";
import ExteriorImg from "../../assets/images/ExteriorImg.jpg";
// import "./ElevatingInterriors.css"; // Import custom CSS

const ElevatingInterriors = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-semibold tracking-wider">
        Elevating Interiors:{" "}
      </h1>
      <h1 className="text-5xl font-semibold tracking-wider mb-3">
        Transforming
      </h1>
      <p className="text-2xl tracking-wider mb-10">
        Spaces with Mistrytech Design Magic
      </p>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
              src={InteriorImg}
              alt="Interior"
            />
            <p className="mt-6 mb-1">
              {" "}
              <span className="text-2xl font-semibold mr-2 tracking-wider">
                Exterior{" "}
              </span>{" "}
              <span className="text-gray-700 tracking-wider">Architecture</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-96 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
              src={ExteriorImg}
              alt="Exterior"
            />
            <p className="mt-6 mb-1">
              {" "}
              <span className="text-2xl font-semibold mr-2 tracking-wider">
                Interior{" "}
              </span>{" "}
              <span className="text-gray-700 tracking-wider">Home/Office</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatingInterriors;
