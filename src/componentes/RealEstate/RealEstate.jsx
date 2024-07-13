import AgentsSection from "./AgentsSection";
import BannerImg from "./BannerImg";
import HelpfulGuides from "./HelpfulGuides";
// import OurService from "./OurService";
import PerfectionCarousel from "./PerfectionCarousel";
import PropertiesByLocation from "./PropertiesByLocation";
import WhyChooseUs from "./WhyChooseUs";


const RealEstate = () => {
    return (
      <div>
        <BannerImg></BannerImg>
        <PerfectionCarousel></PerfectionCarousel>
        {/* <OurService></OurService> */}
        <WhyChooseUs></WhyChooseUs>
        <PropertiesByLocation></PropertiesByLocation>
        <AgentsSection></AgentsSection>
        <HelpfulGuides></HelpfulGuides>
      </div>
    );
};

export default RealEstate;