import Hero from "./Hero";
import Gallery from "./Gallery";
// import Products from "./Products";
import Process from "./Process";
// import WhoAreWe from "./WhoAreWe";
import WhyChooseUs from "./WhyChooseUs";
// import WhenDidWeStart from "./WhenDidWeStart";
// import HowDoWeWork from "./HowDoWeWork";
import WhatAreOurValues from "./WhatAreOurValues";
// import WhoAreOurClients from "./WhoAreOurClients";
import WhereCanYouFindUs from "./WhereCanYouFindUs";
import OurValuableClients from "./OurValuableClients";
import OurBusinessPartners from "./OurBusinessPartners";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Gallery></Gallery>
            {/* <Products></Products> */}
            <Process></Process>
            {/* <WhoAreWe></WhoAreWe> */}
            <WhyChooseUs></WhyChooseUs>
            {/* <WhenDidWeStart></WhenDidWeStart> */}
            {/* <HowDoWeWork></HowDoWeWork> */}
            <WhatAreOurValues></WhatAreOurValues>
            {/* <WhoAreOurClients></WhoAreOurClients> */}
            <OurValuableClients></OurValuableClients>
            <OurBusinessPartners></OurBusinessPartners>
            <WhereCanYouFindUs></WhereCanYouFindUs>
        </div>
    );
};

export default Home;