import aboutImg from "../assets/Frame 1.png";
import Ellipse from "../assets/Ellipse 3.png";

const About = () => {
  return (
    <div className="mb-[100px] mt-[100px] md:mt-[200px] relative">
      <div className="px-5 md:px-24 lg:px-0 mx-auto w-full max-w-[1230px]">
        <center>
          <button className="inline-flex text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0] mb-[60px] md:mb-[90px]">
            About
          </button>
        </center>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-14">
          <div className="flex flex-col justify-between items-start gap-5 md:gap-[30px] md:w-[65%]">
            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              className="text-[24px] md:text-[52px] font-[800]"
            >
              HAPPYHAMSTER20?
            </h3>
            <p data-aos="fade-right"
              data-aos-duration="2000" className="text-[12px] md:text-[20px] Montserrat font-light text-justify">
              In the wild world of the internet, a certain phenomenon has made
              waves: the sad hamster meme.
            </p>
            <p data-aos="fade-right"
              data-aos-duration="3000" className="text-[12px] md:text-[20px] Montserrat font-light text-justify">
              HappyHamster was repeatedly confronted with this
              &ldquo;gloomy&ldquo; image. But instead of complaining, he decided
              to take matters into his own hands. Thus, the HappyHamster20 team
              was formed, full of energy and good vibes, ready to shake up the
              world with a dose of humor and a big splash of hope.
            </p>
            <p data-aos="fade-right"
              data-aos-duration="4000" className="text-[12px] md:text-[20px] Montserrat font-light text-justify">
              Combining crypto know-how with a hefty dose of inspiration, they
              aim to show how to make the most of the digital age.
            </p>
            <button data-aos="fade-right"
              data-aos-duration="4000" className="text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0] mx-auto md:mx-0">
              Get the Whitepaper
            </button>
          </div>
          <div className="relative">
            <img
              data-aos="fade-left"
              data-aos-duration="1000"
              src={aboutImg}
              alt=""
              className="relative !w-full max-w-[450px] h-[320px] md:h-full md:max-h-[550px] z-30"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[60%] right-0 transform -translate-y-1/2 z-20">
        <img src={Ellipse} alt="" className=" w-auto h-[1200px]" />
      </div>
    </div>
  );
};

export default About;
