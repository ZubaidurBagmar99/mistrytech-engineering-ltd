import WhoAreWe from "../Home/WhoAreWe";
import TeamMemberCard from "../AboutUs/TeamMemberCard";
import NewsCard from "../AboutUs/NewsCard";
import { Outlet } from "react-router-dom";
// import Awards from "./Awards";

const AboutUs = () => {
  return (
    <div>
      <WhoAreWe></WhoAreWe>
      <TeamMemberCard></TeamMemberCard>
      <NewsCard></NewsCard>
      {/* <Awards></Awards> */}
      <Outlet></Outlet>
    </div>
  );
};

export default AboutUs;
