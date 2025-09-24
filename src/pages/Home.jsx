import Hero from "../components/Hero";
import ServiceInfo from "../components/ServiceInfo";
import TravelNote from "../components/TravelNote";
import Gallery from "../components/Gallery";
import Guestbook from "../components/Guestbook";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
      <ServiceInfo />
      <TravelNote />
    </div>
  );
}

export default Home;
