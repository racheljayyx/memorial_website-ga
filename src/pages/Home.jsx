import Hero from "../components/Hero";
import About from "../components/About";
import ServiceInfo from "../components/ServiceInfo";
import TravelNote from "../components/TravelNote";
import Gallery from "../components/Gallery";
import Guestbook from "../components/Guestbook";

function Home() {
  return (
    <div>
      <Hero />
      <ServiceInfo />
      <TravelNote />
    </div>
  );
}

export default Home;
