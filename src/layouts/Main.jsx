import Avatar from "../assets/images/mistrytechlogo.jpeg";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import UpButton from "../componentes/UpButton/UpButton";
const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingWhatsApp
        accountName="Mistrytech Engineering Ltd."
        phoneNumber="+8801999099000"
        avatar={Avatar}
        allowEsc={true}
        allowClickAway={true}
        notificationDelay={5}
        statusMessage="Typically replies within 1 hour"
      />
      <UpButton></UpButton>
      <Footer />
    </div>
  );
};

export default Main;
