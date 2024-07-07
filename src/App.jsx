import { Header } from "./component/Header";
import HeroAria from "./component/HeroAria";
import Footer from "./component/Footer";
import About from "./component/About";
import VideoSection from "./component/VideoSection";
import Mission from "./component/Mission";
import Roadmap from "./component/Roadmap";
import Tokenomices from "./component/Tokenomices";
import Bottom from "./component/Bottom";
import { Element } from "react-scroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative">
      <img src="https://i.ibb.co/Qp4S46K/Ellipse-9.png" alt="" className="absolute top-0" />
      <Header />
      <HeroAria />
      <Element name="about">
        <About />
      </Element>
      <VideoSection />
      <Element name="mission">
        <Mission />
      </Element>
      <Element name="roadmap">
        <Roadmap />
      </Element>
      <Element name="tokenomics">
        <Tokenomices />
      </Element>
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
