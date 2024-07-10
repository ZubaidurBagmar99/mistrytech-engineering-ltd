import Img from "../../assets/images/products.jpg";

const Products = () => {
  return (
    <div className="py-10 bg-gray-500">
      <h1 className="text-2xl font-bold text-center py-6 text-white">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 justify-center items-center">

        <div className="relative max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <img
            width={350}
            height={275}
            className="w-full h-[275px] rounded-lg object-cover"
            src={Img}
            alt="Product"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md outline outline-white outline-2">
            <h1 className="text-lg font-semibold">Product Name</h1>
          </div>
        </div>

        <div className="relative max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <img
            width={350}
            height={275}
            className="w-full h-[275px] rounded-lg object-cover"
            src={Img}
            alt="Product"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md outline outline-white outline-2">
            <h1 className="text-lg font-semibold">Product Name</h1>
          </div>
        </div>

        <div className="relative max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <img
            width={350}
            height={275}
            className="w-full h-[275px] rounded-lg object-cover"
            src={Img}
            alt="Product"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md outline outline-white outline-2">
            <h1 className="text-lg font-semibold">Product Name</h1>
          </div>
        </div>

        <div className="relative max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <img
            width={350}
            height={275}
            className="w-full h-[275px] rounded-lg object-cover"
            src={Img}
            alt="Product"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md outline outline-white outline-2">
            <h1 className="text-lg font-semibold">Product Name</h1>
          </div>
        </div>

        <div className="relative max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
          <img
            width={350}
            height={275}
            className="w-full h-[275px] rounded-lg object-cover"
            src={Img}
            alt="Product"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md outline outline-white outline-2">
            <h1 className="text-lg font-semibold">Product Name</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
