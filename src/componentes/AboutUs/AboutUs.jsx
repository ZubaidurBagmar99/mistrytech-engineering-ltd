import WhoAreWe from "../Home/WhoAreWe";
import TeamMemberCard from "../AboutUs/TeamMemberCard";
import NewsCard from "../AboutUs/NewsCard";
import Awards from "./Awards";

const AboutUs = () => {
  return (
    <div>
      <TeamMemberCard></TeamMemberCard>
      <WhoAreWe></WhoAreWe>
      <NewsCard></NewsCard>
      <Awards></Awards>
      <ul>
        <li>1.Award</li>
      </ul>
    </div>
  );
};

export default AboutUs;
