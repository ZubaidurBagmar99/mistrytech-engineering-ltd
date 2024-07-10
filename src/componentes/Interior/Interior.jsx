import Banner from "./Banner";
import BlogUpdated from "./BlogUpdated";
import ElevatingInterriors from "./ElevatingInterriors";
import OurClients from "./OurClients";
import ShowProject from "./ShowProject";
import States from "./States";
import WhatWeDo from "./WhatWeDo";


const Interior = () => {
    return (
        <div>
            <Banner></Banner>
            <ElevatingInterriors></ElevatingInterriors>
            <States></States>
            <ShowProject></ShowProject>
            <OurClients></OurClients>
            <BlogUpdated></BlogUpdated>
            <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default Interior;