
import Img from "../../assets/images/about-pic4.jpg";
import { BiBuilding, BiRocket, BiWrench, BiCog } from "react-icons/bi"; // Added new icons

const AboutCompany = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-4">About Company</h2>
      <p className="text-center px-5 mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
        perferendis magni, dolorum ullam libero cum aperiam rem asperiores,
        dicta possimus suscipit. Quibusdam sunt deserunt illo impedit eius illum
        similique saepe.
      </p>
      <div className="flex flex-row mt-10 mx-10">
        <div className="w-2/5">
          <img
            className="w-full object-cover rounded-lg shadow-lg border border-gray-200 h-[410px]"
            src={Img}
            alt="Company Image"
          />
        </div>
        <div className="w-3/5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-center p-4 border rounded-lg shadow-lg">
              <BiBuilding className="text-5xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Building</h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                eaque!
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg shadow-lg">
              <BiRocket className="text-5xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Renovation</h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                eaque!
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg shadow-lg">
              <BiWrench className="text-5xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Digging</h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                eaque!
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg shadow-lg">
              <BiCog className="text-5xl text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Interior</h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                eaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
