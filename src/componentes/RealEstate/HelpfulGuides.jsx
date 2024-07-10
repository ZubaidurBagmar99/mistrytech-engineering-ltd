
import Slider from "react-slick";

// Sample images
import BlogImage1 from "../../assets/images/sampleImg3.jpg";
import BlogImage2 from "../../assets/images/sampleImg2.jpg";
import BlogImage3 from "../../assets/images/sampleImg1.jpg";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    id: 1,
    image: BlogImage1,
    date: "JANUARY 28, 2024",
    category: "Furniture",
    author: "Esther",
    title: "Building Gains Into Housing Stocks And How To Trade The Sector",
    description:
      "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
  },
  {
    id: 2,
    image: BlogImage2,
    date: "JANUARY 31, 2024",
    category: "Interior",
    author: "Angel",
    title:
      "92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans",
    description:
      "Mortgage applications to purchase a home, however, dropped 4% last week compared...",
  },
  {
    id: 3,
    image: BlogImage3,
    date: "JANUARY 28, 2024",
    category: "Architecture",
    author: "Colleen",
    title: "We Are Hiring 'Moderately,' Says Compass CEO",
    description:
      "New listings were down 20% year over year in March, according to Realtor.com, and total inventory...",
  },
];

const HelpfulGuides = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <p className="text-center text-sm text-red-600 uppercase mb-3">
        Latest New
      </p>
      <h3 className="text-center text-3xl font-semibold mb-8">
        Helpful Us Guides
      </h3>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="p-3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={`${post.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="block text-xs text-gray-500 mb-2">
                  {post.date}
                </span>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{post.author}</span>
                  <span>{post.category}</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
                <p className="text-gray-700">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HelpfulGuides;
