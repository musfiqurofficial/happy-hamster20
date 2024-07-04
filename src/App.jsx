import { Header } from "./component/Header";
import Ellipse from "./assets/Ellipse 9.png";
import HeroAria from "./component/HeroAria";
import Footer from "./component/Footer";
import About from "./component/About";
import VideoSection from "./component/VideoSection";
import Mission from "./component/Mission";
import Roadmap from "./component/Roadmap";
import Tokenomices from "./component/Tokenomices";
import Bottom from "./component/Bottom";

const App = () => {
  return (
    <div className="relative">
      <img src={Ellipse} alt="" className="absolute top-0" />
      <Header />
      <HeroAria />
      <div id="about">
        <About />
      </div>
      <VideoSection />
      <div id="mission">
        <Mission />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="tokenomics">
        <Tokenomices />
      </div>
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
