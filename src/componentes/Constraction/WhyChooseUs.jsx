import { useState } from "react";

const WhyChooseUs = () => {
  const [isOpen, setIsOpen] = useState(null);
 const dataArr = [
   {
     title: "We have 30 plus years in the building industry",
     description:
       "With over three decades of experience in the construction sector, we bring a wealth of knowledge and expertise to every project. Our commitment to quality craftsmanship and customer satisfaction sets us apart.",
   },
   {
     title: "Quality construction continues after the project",
     description:
       "At our core, we believe in delivering excellence that extends beyond project completion. Our dedication to post-project support ensures that your investment remains in optimal condition for years to come.",
   },
   {
     title: "We use technology to do the job more quickly",
     description:
       "Harnessing cutting-edge technology allows us to streamline processes and deliver results with efficiency and precision. Our innovative approach ensures timely project completion without compromising on quality.",
   },
   {
     title: "Employees are continually trained on safety issues",
     description:
       "Safety is our top priority. We prioritize ongoing training and education for our team members to uphold the highest standards of safety on every job site. Your well-being is our commitment.",
   },
 ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-5">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="w-full max-w-[500px] bg-inherit px-2 *:mix-blend-difference dark:bg-inherit">
            {dataArr.map((PerAccordion, idx) => (
              <div key={idx} className="border-b border-gray-500/50 py-3">
                <button
                  onClick={() => toggle(idx)}
                  className="flex h-full w-full justify-between font-medium outline-none text-white"
                >
                  <span>{PerAccordion.title}</span>
                  <span className="rounded-full p-2">
                    <svg
                      className="ml-8 size-3 shrink-0 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="5"
                        width="12"
                        height="2"
                        rx="1"
                        className={`origin-center transform transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="5"
                        width="12"
                        height="2"
                        rx="1"
                        className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
                    isOpen === idx
                      ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pr-4 text-sm">
                    {PerAccordion.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="http://themes247.net/html5/construction-template/demo/assets/img/gallery/4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
