import BestSelling from "./BestSelling";
import FurnitureBanner from "./FurnitureBanner";
import NewArrivals from "./NewArrivals";

const Furniture = ()=>{
    return(
        <div>
            <FurnitureBanner></FurnitureBanner>
            <NewArrivals></NewArrivals>
            <BestSelling></BestSelling>
        </div>
    );
};
export default Furniture;