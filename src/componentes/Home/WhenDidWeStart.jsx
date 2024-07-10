

const WhenDidWeStart = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            When Did We Start?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            A brief journey of our milestones and achievements over the years.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="relative bg-gray-100 rounded-lg p-6 shadow-lg w-full md:w-2/3">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-full">
              2010
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-10">
              Our Humble Beginnings
            </h3>
            <p className="mt-4 text-gray-600">
              We started as a small workshop with a passion for crafting
              high-quality furniture. Over the years, our dedication to
              excellence and customer satisfaction has helped us grow into a
              trusted name in the industry.
            </p>
          </div>

          <div className="relative bg-gray-100 rounded-lg p-6 shadow-lg w-full md:w-2/3 mt-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-green-500 text-white text-xl font-semibold py-2 px-4 rounded-full">
              2015
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-10">
              Expansion and Growth
            </h3>
            <p className="mt-4 text-gray-600">
              By 2015, we expanded our operations and opened multiple showrooms
              across the country. Our commitment to quality and innovation
              continued to drive our success, allowing us to reach a wider
              audience.
            </p>
          </div>

          <div className="relative bg-gray-100 rounded-lg p-6 shadow-lg w-full md:w-2/3 mt-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-red-500 text-white text-xl font-semibold py-2 px-4 rounded-full">
              2020
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-10">
              Going Global
            </h3>
            <p className="mt-4 text-gray-600">
              In 2020, we took our brand to the global stage, offering our
              unique designs and superior craftsmanship to customers worldwide.
              Our online presence and international shipping capabilities made
              us a global brand.
            </p>
          </div>

          <div className="relative bg-gray-100 rounded-lg p-6 shadow-lg w-full md:w-2/3 mt-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-purple-500 text-white text-xl font-semibold py-2 px-4 rounded-full">
              2023
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mt-10">
              Innovating for the Future
            </h3>
            <p className="mt-4 text-gray-600">
              Today, we continue to innovate and push the boundaries of
              furniture design. Our commitment to sustainability and customer
              satisfaction remains at the heart of everything we do as we look
              towards a bright future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenDidWeStart;
