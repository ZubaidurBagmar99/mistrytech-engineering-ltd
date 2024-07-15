const BestSelling = () => {
  return (
    <div className="container mx-auto py-10">
      <h4 className="text-center text-2xl mb-6">Best Selling</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product */}
        {[1, 2, 3, 4].map((product, index) => (
          <div
            key={index}
            className="max-w-full space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]"
          >
            <img
              width={200}
              height={200}
              className="h-[275px] w-full rounded-lg object-cover"
              src="https://via.placeholder.com/200"
              alt={`Product ${index + 1}`}
            />
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold">Product Name</h1>
              <p className="text-sm text-gray-500 dark:text-white/60">
                This is a brief description of the product. It highlights the
                key features and benefits.
              </p>
              <div className="text-lg font-semibold">$99.99</div>
            </div>
            <div className="flex gap-4">
              <button className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 dark:border-white dark:hover:bg-white dark:hover:text-slate-800">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
