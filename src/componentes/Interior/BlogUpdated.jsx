import Blog from "../../../src/assets/images/blog4.jpg";

const BlogUpdated = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col py-10">
        <div className="vertical-text tracking-wide">
          <p>ARTICLES</p>
        </div>
        <p className="text-3xl font-semibold tracking-wider ml-8 mt-[-80px]">
          Read Our Latest Blog To Stay <br /> Updated Always
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="relative">
          <img src={Blog} alt="Blog" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center -ml-6 ">
            <div className="bg-black text-white p-5 opacity-100 w-2/3 text-center">
              <div className="tracking-wide vertical-text text-sm">
                <p>Jul 13, 2023</p>
              </div>
              <p className="text-2xl font-semibold tracking-wider ml-6 -mt-16">
                Architectural Delights: Uncovering Hidden Gems
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Blog} alt="Blog" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center -ml-6 ">
            <div className="bg-black text-white p-5 opacity-100 w-2/3 text-center">
              <div className="tracking-wide vertical-text text-sm">
                <p>Jul 15, 2023</p>
              </div>
              <p className="text-2xl font-semibold tracking-wider ml-6 -mt-20">
                How Traz Redefines the Built Environment
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Blog} alt="Blog" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center -ml-6 ">
            <div className="bg-black text-white p-5 opacity-100 w-2/3 text-center">
              <div className="tracking-wide vertical-text text-sm">
                <p>Jul 18, 2023</p>
              </div>
              <p className="text-2xl font-semibold tracking-wider ml-6 -mt-20">
                From Blueprint to Reality: The Journey of Architecture
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Blog} alt="Blog" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center -ml-6 ">
            <div className="bg-black text-white p-5 opacity-100 w-2/3 text-center">
              <div className="tracking-wide vertical-text text-sm">
                <p>Jul 25, 2023</p>
              </div>
              <p className="text-2xl font-semibold tracking-wider ml-6 -mt-20">
                The Art of Balancing form and Function in Design
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Blog} alt="Blog" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center -ml-6 ">
            <div className="bg-black text-white p-5 opacity-100 w-2/3 text-center">
              <div className="tracking-wide vertical-text text-sm">
                <p>Jul 25, 2023</p>
              </div>
              <p className="text-2xl font-semibold tracking-wider ml-6 -mt-20">
                Read Our Latest Blog To Stay <br /> Updated Always
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BlogUpdated;
