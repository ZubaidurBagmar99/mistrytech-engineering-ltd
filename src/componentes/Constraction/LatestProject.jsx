import  { useState } from "react";

const LatestProject = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const images = [
    {
      id: 1,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      category: "house",
    },
    {
      id: 2,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      category: "building",
    },
    {
      id: 3,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      category: "office",
    },
    {
      id: 4,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      category: "interior",
    },
    {
      id: 5,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      category: "house",
    },
    {
      id: 6,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      category: "building",
    },
    {
      id: 7,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      category: "office",
    },
    {
      id: 8,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      category: "interior",
    },
    {
      id: 9,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      category: "house",
    },
    {
      id: 10,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      category: "building",
    },
    {
      id: 11,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      category: "office",
    },
    {
      id: 12,
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      category: "interior",
    },
  ];

  const filterImages = () => {
    if (activeCategory === "all") {
      return images;
    } else {
      return images.filter((image) => image.category === activeCategory);
    }
  };
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className={` hover:text-white border  bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 text-black dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${
            activeCategory === "all"
              ? "bg-blue-700 text-black"
              : "text-blue-700"
          }`}
          onClick={() => handleCategoryClick("all")}
        >
          All Projects
        </button>
        <button
          type="button"
          className={` border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-black dark:text-white dark:focus:ring-gray-800 ${
            activeCategory === "house"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("house")}
        >
          House
        </button>
        <button
          type="button"
          className={` border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white text-black dark:focus:ring-gray-800 ${
            activeCategory === "building"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("building")}
        >
          Building
        </button>
        <button
          type="button"
          className={` border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white text-black dark:focus:ring-gray-800 ${
            activeCategory === "office"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("office")}
        >
          Office
        </button>
        <button
          type="button"
          className={` border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white text-black dark:focus:ring-gray-800 ${
            activeCategory === "interior"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("interior")}
        >
          Interior
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filterImages().map((image) => (
          <div key={image.id}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.url}
              alt={`Image ${image.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
