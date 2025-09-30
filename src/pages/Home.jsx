import Hero from "../components/Hero";
import ServiceInfo from "../components/ServiceInfo";
import TravelNote from "../components/TravelNote";
import Gallery from "../components/Gallery";
import Guestbook from "../components/Guestbook";
import Navbar from "../components/Navbar";
import LivestreamInfo from "../components/LivestremInfo";
import Support from "../components/Support";
import Salvation from "../components/Salvation";

function Home() {
  return (
    <div>
      <Hero />
      <Navbar />
       <Gallery />
      <LivestreamInfo />
      <ServiceInfo />
      <TravelNote />
      <Support />
      <Salvation />
    </div>
  );
}

export default Home;
