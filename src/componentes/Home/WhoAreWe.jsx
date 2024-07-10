import Img from "../../assets/images/FullTeam.jpg";

const WhoAreWe = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Who Are We?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover our story, mission, and the dedicated team behind our
            success.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2">
            <img
              src={Img}
              alt="Our Team"
              className="rounded-lg shadow-lg w-full mt-10"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our journey began with a simple idea: to create products that
              bring comfort and joy to your home. Over the years, we&apos;ve
              grown into a dedicated team of professionals committed to
              excellence in everything we do. Our mission is to enhance your
              living spaces with high-quality, beautifully designed furniture
              that reflects your style and personality.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We strive to deliver exceptional products and services that exceed
              your expectations. Our commitment to quality, innovation, and
              customer satisfaction drives us to continuously improve and
              innovate.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-gray-800">
              Meet the Team
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our team is a diverse group of talented individuals who are
              passionate about what they do. From designers and craftsmen to
              customer support, everyone plays a crucial role in bringing our
              vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
