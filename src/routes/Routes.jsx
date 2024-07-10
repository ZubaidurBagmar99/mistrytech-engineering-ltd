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
      }
      
    ],
  },
]);
export default router;
