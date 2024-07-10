import "./ShowProject.css";
import Img from "../../assets/images/HouseInterior.jpg";
const ProjectsHeader = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col py-10">
        <div className="vertical-text tracking-wide">
          <p>PROJECTS</p>
        </div>
        <p className=" text-3xl font-semibold tracking-wider ml-8 mt-[-80px]">
          Selected Projects That We Really Want To Show <br /> You
        </p>
      </div>
      <div className="flex flex-wrap mx-4 ">
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <img src={Img} alt="" className="rounded-lg " />
          <p className="mt-4">
            {" "}
            <span className="text-2xl font-semibold mr-2">
              Tower House
            </span>{" "}
            <span className="text-gray-700 tracking-wider"> Architecture</span>
          </p>
          <p className="mt-2">
            Architecture We are specialized in the privates houses creation. Our
            architecture is an innovative and creative retranscription of the
            lifestyle and codes of the Arcachon basin.
          </p>
        </div>
        <div className="w-full md:w-2/3  px-4 mb-8 md:mb-0">
          <img src={Img} alt="" className="rounded-lg h-[560px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
