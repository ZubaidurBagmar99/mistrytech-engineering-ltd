
import Img1 from "../../assets/images/team1.webp";
import Img2 from "../../assets/images/person2.jpg";
import Img3 from "../../assets/images/Person3.jpg";
import Img4 from "../../assets/images/person4.jpg";
import {
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const agents = [
  {
    name: "Jack Halow",
    position: "CEO & Founder",
    imgSrc: Img1,
    contactIcon: <FaPhone />,
    socialMedia: [
      {
        platform: "facebook",
        icon: <FaFacebook />,
        link: "https://facebook.com",
      },
      {
        platform: "linkedin",
        icon: <FaLinkedin />,
        link: "https://linkedin.com",
      },
      {
        platform: "twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com",
      },
      {
        platform: "instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com",
      },
    ],
  },
  {
    name: "John Smith",
    position: "Property Manager",
    imgSrc: Img2, // Update with the actual path or import
    socialMedia: [
      {
        platform: "facebook",
        icon: <FaFacebook />,
        link: "https://facebook.com",
      },
      {
        platform: "linkedin",
        icon: <FaLinkedin />,
        link: "https://linkedin.com",
      },
      {
        platform: "twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com",
      },
      {
        platform: "instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com",
      },
    ],
    contactIcon: <FaPhone />,
  },
  {
    name: "Chris Patt",
    position: "Administrative Staff",
    imgSrc: Img3, // Update with the actual path or import
    contactIcon: <FaPhone />,
    socialMedia: [
      {
        platform: "facebook",
        icon: <FaFacebook />,
        link: "https://facebook.com",
      },
      {
        platform: "linkedin",
        icon: <FaLinkedin />,
        link: "https://linkedin.com",
      },
      {
        platform: "twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com",
      },
      {
        platform: "instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com",
      },
    ],
  },
  {
    name: "Jack Halow",
    position: "Real Estate Marketer",
    imgSrc: Img4, // Update with the actual path or import
    contactIcon: <FaPhone />,
    socialMedia: [
      {
        platform: "facebook",
        icon: <FaFacebook />,
        link: "https://facebook.com",
      },
      {
        platform: "linkedin",
        icon: <FaLinkedin />,
        link: "https://linkedin.com",
      },
      {
        platform: "twitter",
        icon: <FaTwitter />,
        link: "https://twitter.com",
      },
      {
        platform: "instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com",
      },
    ],
  },
];

const AgentCard = ({ name, position, imgSrc, contactIcon, socialMedia }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl hover:text-red-500 dark:bg-slate-900">
    <img
      className="w-52 h-52 mx-auto object-cover rounded-lg"
      src={imgSrc}
      alt={name}
    />
    <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{position}</p>
    {/* <div className="mt-2 text-xl text-gray-600 hover:text-red-500 transition duration-300">
      {contactIcon}
    </div> */}
    {socialMedia && (
      <div className="flex justify-center space-x-4 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition duration-300 text-xl"
          >
            {media.icon}
          </a>
        ))}
      </div>
    )}
  </div>
);

const AgentsSection = () => (
  <div className="py-8 px-4">
    <h3 className="text-sm text-red-600 text-center mb-3">Meet Our Agents</h3>
    <h2 className="text-3xl font-bold text-center mb-8">Our Teams</h2>

    <div className="flex flex-wrap justify-center gap-8">
      {agents.map((agent, index) => (
        <div key={index} className="group">
          <AgentCard {...agent} />
        </div>
      ))}
    </div>
  </div>
);

export default AgentsSection;
