import "react-lazy-load-image-component/src/effects/blur.css";
import SlideBanner from "./SlideBanner";

const HeroAria = () => {
  return (
    <div className="relative my-[20px] md:my-[100px]">
      <div className="px-5 md:px-24 lg:px-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1315px] text-center uppercase">
        <div className="flex flex-col gap-[30px] md:gap-[75px] leading-3">
          <h3
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-[2vw] "
          >
            Welcome to
          </h3>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-[7vw] font-[800] mb-2 md:mb-14"
          >
            Happy
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-[10vw] font-[800] "
          >
            Hamster
          </h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="relative z-30 -mt-[20px] md:-mt-[60px]"
        >
          <img
            src="https://i.ibb.co/99n1rvy/h6-1.png"
            alt="h6-1"
            border="0"
            className="!w-full h-full"
          ></img>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-0 -translate-y-[30%] z-50">
          <img
            src="https://i.ibb.co/px8KnKr/Ellipse-10.png"
            alt=""
            className="w-auto h-auto"
          />
        </div>
        <div className="absolute top-1/2 right-1/2 transform -translate-x-0 -translate-y-[30%] z-50">
          <img
            src="https://i.ibb.co/tbvvRKs/Ellipse-11.png"
            alt=""
            className="w-auto h-auto"
          />
        </div>
      </div>
      <SlideBanner />
    </div>
  );
};

export default HeroAria;
