import aboutImg from "../assets/Frame 1.png";
import Ellipse from "../assets/Ellipse 3.png";

const About = () => {
  return (
    <div className="mb-[100px] mt-[100px] md:mt-[200px] relative">
      <div className="px-5 mx-auto w-full max-w-[1230px]">
        <center>
          <button className="inline-flex text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0] mb-[60px] md:mb-[90px]">About</button>
        </center>
        <div className="flex flex-col md:flex-row justify-between items-center gap-14">
          <div className="flex flex-col justify-between items-start gap-5 md:gap-[30px]">
            <h3 className="text-[24px] md:text-[52px] font-[800]">HAPPYHAMSTER20?</h3>
            <p className="text-[12px] md:text-[20px] Montserrat font-light">
              In the wild world of the internet, a certain phenomenon has made
              waves: the sad hamster meme.
            </p>
            <p className="text-[12px] md:text-[20px] Montserrat font-light">
              HappyHamster was repeatedly confronted with this
              &ldquo;gloomy&ldquo; image. But instead of complaining, he decided
              to take matters into his own hands. Thus, the HappyHamster20 team
              was formed, full of energy and good vibes, ready to shake up the
              world with a dose of humor and a big splash of hope.
            </p>
            <p className="text-[12px] md:text-[20px] Montserrat font-light">
              Combining crypto know-how with a hefty dose of inspiration, they
              aim to show how to make the most of the digital age.
            </p>
            <button className="text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0]">
              Get the Whitepaper
            </button>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="" className="relative h-[320px] md:h-auto z-30" />
            
          </div>
        </div>
      </div>
      <div className="absolute top-[60%] right-0 transform -translate-y-1/2 z-20">
        <img
          src={Ellipse}
          alt=""
          className=" w-auto h-[1200px]"
        />
      </div>
    </div>
  );
};

export default About;
