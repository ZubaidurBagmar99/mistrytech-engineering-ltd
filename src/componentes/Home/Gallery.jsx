import { useState } from "react";
import Residential1 from '../../assets/images/Residential/rsz_1rsz_03.png'
import Residential2 from '../../assets/images/Residential/rsz_1rsz_26.png'
import Residential3 from '../../assets/images/Residential/rsz_1rsz_4.png'
import Residential4 from '../../assets/images/Residential/rsz_1rsz_drawing_3.png'

import Commercial1 from '../../assets/images/Commercial/Conference Room 1.png'
import Commercial2 from '../../assets/images/Commercial/Lobby Space.png'
import Commercial3 from '../../assets/images/Commercial/Reception 2.png'
import Commercial4 from '../../assets/images/Commercial/Workstation A 01.png'
import Commercial5 from '../../assets/images/Commercial/Workstation B 02.png'

import Industrial1 from '../../assets/images/Industrial/BuyingHouse.jpg'
import Industrial2 from '../../assets/images/Industrial/ConstructionImg.jpg'
import Industrial3 from '../../assets/images/Industrial/ConstructionImg.jpg'
import Industrial4 from '../../assets/images/Industrial/construction.jpg'

import Furniture1 from '../../assets/images/Furniture/ceodesk.jpg'
import Furniture2 from '../../assets/images/Furniture/chair.jpg'
import Furniture3 from '../../assets/images/Furniture/office.jpg'
import Furniture4 from '../../assets/images/Furniture/officeFurniture.jpg'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const images = [
    {
      id: 1,
      url: Residential1,
      category: "residential",
    },
    {
      id: 2,
      url: Commercial1,
      category: "commercial",
    },
    {
      id: 3,
      url: Industrial1,
      category: "industrial",
    },
    {
      id: 4,
      url: Industrial2,
      category: "industrial",
    },
    {
      id: 5,
      url: Residential2,
      category: "residential",
    },
    {
      id: 6,
      url: Commercial2,
      category: "commercial",
    },
    {
      id: 7,
      url: Industrial3,
      category: "industrial",
    },
    {
      id: 8,
      url: Residential3,
      category: "residential",
    },
    {
      id: 9,
      url: Residential4,
      category: "residential",
    },
    {
      id: 10,
      url: Commercial3,
      category: "commercial",
    },
    {
      id: 11,
      url: Industrial4,
      category: "industrial",
    },
    {
      id: 12,
      url: Commercial4,
      category: "commercial",
    },
    {
      id: 13,
      url: Commercial5,
      category: "commercial",
    },
    {
      id: 14,
      url: Furniture1,
      category: "furniture",
    },
    {
      id: 15,
      url: Furniture2,
      category: "furniture",
    },
    {
      id: 16,
      url: Furniture3,
      category: "furniture",
    },
    {
      id: 17,
      url: Furniture4,
      category: "furniture",
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
    <div className="container mx-auto ">
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
          className={` border border-white hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-black dark:text-white dark:focus:ring-gray-800 ${
            activeCategory === "residential"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("residential")}
        >
          Residential
        </button>
        <button
          type="button"
          className={` border border-white hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-black dark:text-white dark:focus:ring-gray-800 ${
            activeCategory === "commercial"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("commercial")}
        >
          Commercial
        </button>
        <button
          type="button"
          className={` border border-white hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-black dark:text-white dark:focus:ring-gray-800 ${
            activeCategory === "industrial"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("industrial")}
        >
          Industrial
        </button>
        <button
          type="button"
          className={` border border-white hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 text-black dark:text-white dark:focus:ring-gray-800 ${
            activeCategory === "furniture"
              ? "bg-gray-900 text-black"
              : "text-gray-900"
          }`}
          onClick={() => handleCategoryClick("furniture")}
        >
          Furniture
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

export default Gallery;
///////////////////////