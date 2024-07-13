import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../componentes/Home/Home";
import Interior from "../componentes/Interior/Interior";
import SteelBuilding from "../componentes/SteelBuilding/SteelBuilding";
import Constraction from "../componentes/Constraction/Constraction";
import RealEstate from "../componentes/RealEstate/RealEstate";
import Contact from "../componentes/Contact/Contact";
import Furniture from "../componentes/Furniture/Furniture";
import AboutUs from "../componentes/AboutUs/AboutUs";
import Awards from "../componentes/AboutUs/Awards";
import Careers from "../componentes/Careers/Careers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about-us",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/interior",
        element:<Interior></Interior>
      },
      {
        path: "/steel-building",
        element:<SteelBuilding></SteelBuilding>
      },
      {
        path:"/construction",
        element:<Constraction></Constraction>
      },
      {
        path:"/real-estate",
        element:<RealEstate></RealEstate>
      },
      {
        path: "/furniture",
        element: <Furniture></Furniture>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/awards",
        elements:<Awards></Awards>
      },
      {
        path:"/careers",
        elements:<Careers></Careers>
      }
      
    ],
  },
]);
export default router;
