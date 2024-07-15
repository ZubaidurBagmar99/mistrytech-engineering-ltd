

const NewArrivals = () => {
  return (
    <div className="container mx-auto py-10">
      <h4 className="text-2xl text-center mb-1">New Arrivals</h4>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
        Shop The New Selection Of New Arrivals At Our Store
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {/* product */}
        <div className="relative shadow-lg rounded-lg overflow-hidden group">
          <img
            src="https://via.placeholder.com/200"
            alt="Product"
            className="w-full h-full object-cover zoom-out-image"
          />
        </div>
        {/* product */}
        <div className="relative shadow-lg rounded-lg overflow-hidden group">
          <img
            src="https://via.placeholder.com/200"
            alt="Product"
            className="w-full h-full object-cover zoom-out-image"
          />
        </div>
        {/* product */}
        <div className="relative shadow-lg rounded-lg overflow-hidden group">
          <img
            src="https://via.placeholder.com/200"
            alt="Product"
            className="w-full h-full object-cover zoom-out-image"
          />
        </div>
        {/* product */}
        <div className="relative shadow-lg rounded-lg overflow-hidden group">
          <img
            src="https://via.placeholder.com/200"
            alt="Product"
            className="w-full h-full object-cover zoom-out-image"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
