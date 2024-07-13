import Img from "../../assets/images/20230218_JCX-EKRAM-3D-PRESENTATION_Page_13-1.webp";

const projects = [
  {
    image:
      Img,
    orientation: "South",
    address: "Plot: 360 & 361, Road: 5, Block: I, Bashundhara R/A",
    landSize: "6 Katha",
    apartmentSize: "2700 sq. ft (approx.)",
    units: 8,
    parking: 8,
    floors: "G+8",
  },
  {
    image:
      Img,
    orientation: "South",
    address: "Plot: 360 & 361, Road: 5, Block: I, Bashundhara R/A",
    landSize: "6 Katha",
    apartmentSize: "2700 sq. ft (approx.)",
    units: 8,
    parking: 8,
    floors: "G+8",
  },
  {
    image:
      Img,
    orientation: "South",
    address: "Plot: 360 & 361, Road: 5, Block: I, Bashundhara R/A",
    landSize: "6 Katha",
    apartmentSize: "2700 sq. ft (approx.)",
    units: 8,
    parking: 8,
    floors: "G+8",
  },
  // Add more projects as needed
];

const PerfectionCarousel = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-semibold text-center mb-12">
        OUR PERFECTIONS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            <img
              className="w-full h-full object-cover"
              src={project.image}
              alt="Project"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ul className="text-white space-y-2">
                <li>
                  <strong>Orientation :</strong> {project.orientation}
                </li>
                <li>
                  <strong>Address :</strong> {project.address}
                </li>
                <li>
                  <strong>Land Size :</strong> {project.landSize}
                </li>
                <li>
                  <strong>Apartment Size :</strong> {project.apartmentSize}
                </li>
                <li>
                  <strong>Number of Units :</strong> {project.units}
                </li>
                <li>
                  <strong>Number of Parking :</strong> {project.parking}
                </li>
                <li>
                  <strong>Number of Floors :</strong> {project.floors}
                </li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-white text-black font-semibold">
                EXPLORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfectionCarousel;
