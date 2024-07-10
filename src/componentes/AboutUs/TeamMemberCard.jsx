
import teamMember1 from "../../assets/images/AminulSir.jpg";
import teamMember2 from "../../assets/images/person4.jpg";
import teamMember3 from "../../assets/images/person4.jpg";
import teamMember4 from "../../assets/images/person4.jpg";
import teamMember5 from "../../assets/images/person4.jpg";
import teamMember6 from "../../assets/images/person4.jpg";
import teamMember7 from "../../assets/images/person4.jpg";

const TeamMemberCard = ({ image, name, position, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={image}
      alt={name}
      className="h-auto w-full object-cover rounded-lg mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-600">{position}</p>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const OurFullTeam = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Full Team
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Meet the amazing team behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Left side big image */}
          <div className="">
            <TeamMemberCard
              image={teamMember1}
              name="Aminul Islam Talukder"
              position="MD"
              description="Aminul Islam is the visionary behind our company, leading us with passion and dedication."
            />
          </div>

          {/* Right side 2 images */}
          <div className=" space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TeamMemberCard
                image={teamMember2}
                name="Jane Smith"
                position="CTO"
                description="Jane is the tech genius, driving our innovative solutions and technology strategies."
              />
              <TeamMemberCard
                image={teamMember3}
                name="Mike Johnson"
                position="COO"
                description="Mike ensures our operations run smoothly and efficiently."
              />
              <TeamMemberCard
                image={teamMember3}
                name="Mike Johnson"
                position="COO"
                description="Mike ensures our operations run smoothly and efficiently."
              />
              <TeamMemberCard
                image={teamMember3}
                name="Mike Johnson"
                position="COO"
                description="Mike ensures our operations run smoothly and efficiently."
              />
            </div>
            {/* Bottom 4 images */}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <TeamMemberCard
            image={teamMember4}
            name="Emily Davis"
            position="CMO"
            description="Emily is the creative mind behind our marketing and branding efforts."
          />
          <TeamMemberCard
            image={teamMember5}
            name="Sarah Brown"
            position="CFO"
            description="Sarah oversees all financial aspects of our company, ensuring our fiscal health."
          />
          <TeamMemberCard
            image={teamMember6}
            name="David Wilson"
            position="Lead Developer"
            description="David leads our development team with expertise and dedication."
          />
          <TeamMemberCard
            image={teamMember7}
            name="Linda Taylor"
            position="HR Manager"
            description="Linda manages our human resources with care and professionalism."
          />
        </div>
      </div>
    </section>
  );
};

export default OurFullTeam;
