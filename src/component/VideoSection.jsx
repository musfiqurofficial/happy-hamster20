import poster from "../assets/thum.png";
import Ellipse from "../assets/Ellipse 11.png";
import EllipseRight from "../assets/Ellipse 10.png";
import video from "../assets/happy hamester.mp4";

const VideoSection = () => {
  return (
    <div className="mb-[100px] mt-[100px] md:mt-[200px] relative">
      <div className="px-5 md:px-24 lg:px-0 mx-auto w-full max-w-[1150px] text-center">
        <h3
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-[2.6vw] font-[800]"
        >
          WATCH THE VIDEO BELOW
        </h3>
        <p className="text-[1vw] Montserrat font-light mt-3 md:mt-2 md:mb-[70px]">
          Check out this video to understand more about HappyHamster20
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          className="button_background w-full h-auto rounded-md border-[2px] border-[#FFEBA0] relative z-30 mt-10 md:mt-0"
        >
          <div>
            <video
              controls
              poster={poster}
              muted
              className="rounded-md"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="absolute top-[60%] transform -translate-y-1/2 left-0">
        <img src={Ellipse} alt="" className="w-auto h-[1200px] object-cover" />
      </div>
      <div className="absolute top-[120%] transform -translate-y-1/2 right-0">
        <img
          src={EllipseRight}
          alt=""
          className="w-auto h-[1200px] object-cover"
        />
      </div>
    </div>
  );
};

export default VideoSection;
