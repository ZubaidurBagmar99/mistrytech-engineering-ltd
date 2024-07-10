import newsImage1 from "../../assets/images/breaking-news.jpg"; // Replace with actual image paths
import newsImage2 from "../../assets/images/breaking-news.jpg";
import newsImage3 from "../../assets/images/breaking-news.jpg";
import newsImage4 from "../../assets/images/breaking-news.jpg";

const NewsCard = ({ image, title, date, summary }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt={title}
      className="h-48 w-full object-cover rounded-lg mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{date}</p>
    <p className="text-gray-600 mt-2">{summary}</p>
  </div>
);

const News = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">News</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Stay updated with the latest news from our company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          <NewsCard
            image={newsImage1}
            title="Exciting News Title 1"
            date="July 1, 2024"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat orci ut erat interdum, et malesuada sapien malesuada."
          />
          <NewsCard
            image={newsImage2}
            title="Exciting News Title 2"
            date="June 25, 2024"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat orci ut erat interdum, et malesuada sapien malesuada."
          />
          <NewsCard
            image={newsImage3}
            title="Exciting News Title 3"
            date="June 15, 2024"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat orci ut erat interdum, et malesuada sapien malesuada."
          />
          <NewsCard
            image={newsImage4}
            title="Exciting News Title 4"
            date="June 5, 2024"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat orci ut erat interdum, et malesuada sapien malesuada."
          />
        </div>
      </div>
    </section>
  );
};

export default News;
