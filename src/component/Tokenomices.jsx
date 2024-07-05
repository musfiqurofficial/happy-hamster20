import rightImg from "../assets/h8 2.png";
import Rectangle from "../assets/Rectangle 13.png";
import Clipboard from "../assets/Clipboard box.png";
import copy from "../assets/Copy.png";
import SlideBanner from "./SlideBanner";
import Ellipse from "../assets/Ellipse 3.png";

const Tokenomices = () => {
  return (
    <div className="mb-[100px] mt-[100px] md:mt-[200px] relative">
      <div className="px-5 md:px-24 lg:px-0 mx-auto w-full max-w-[1300px]">
        <center>
          <button className="inline-flex text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0] mb-[60px] md:mb-[90px]">
            Tokenomics
          </button>
        </center>
        <div className="grid lg:grid-cols-2 lg:items-center items-end">
          <div>
            <div className="grid grid-cols-2 gap-[50px]">
              <div>
                <h5 className="text-[22px] md:text-[30px] md:leading-[23px]">CIRCULATION</h5>
                <p className="Montserrat font-light text-[18px] md:text-[20px] leading-[23px] mt-2">
                  200 Billion HPH
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img data-aos="fade-right"
          data-aos-duration="1000" src={Rectangle} alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
                <div>
                  <h5 className="text-[22px] md:text-[30px] md:leading-[23px]">15%</h5>
                  <p className="Montserrat font-light text-[10px] md:text-[20px] leading-[23px] mt-2">
                    Airdrop Capital
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img data-aos="fade-right"
          data-aos-duration="1000" src={Rectangle} alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
                <div>
                  <h5 className="text-[22px] md:text-[30px] md:leading-[23px]">25%</h5>
                  <p className="Montserrat font-light text-[10px] md:text-[20px] leading-[23px] mt-2">
                    Presale Reserve
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img data-aos="fade-right"
          data-aos-duration="1000" src={Rectangle} alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
                <div>
                  <h5 className="text-[22px] md:text-[30px] md:leading-[23px]">30%</h5>
                  <p className="Montserrat font-light text-[10px] md:text-[20px] leading-[23px] mt-2">
                    Future Treasure
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img data-aos="fade-right"
          data-aos-duration="1000" src={Rectangle} alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
                <div>
                  <h5 className="text-[22px] md:text-[30px] md:leading-[23px]">20%</h5>
                  <p className="Montserrat font-light text-[10px] md:text-[20px] leading-[23px] mt-2">
                    Marketing Reserve
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img data-aos="fade-right"
          data-aos-duration="1000" src={Rectangle} alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
                <div>
                  <h5 className="text-[22px] md:text-[30px] md:leading-[23px]">10%</h5>
                  <p className="Montserrat font-light text-[10px] md:text-[20px] leading-[23px] mt-2">
                    Liquidity
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right"
          data-aos-duration="1000" className="bg-[#FFFFB8] md:mt-[100px] rounded-lg p-1 md:p-2 flex justify-between md:static absolute z-40 bottom-[230px]">
              <button className="relative">
                <img src={Clipboard} alt="" className="w-[50px] md:w-[70px] h-[45px] md:h-[60px]" />
                <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-[25px] ">
                  CA
                </h3>
              </button>
              <input
                type="text"
                className="w-[70%] bg-transparent focus:outline-none outline-0 md:text-[25px] text-[#200800]"
                value="XXXXXXXXXXXXXXX..."
                readOnly
              />
              <button className="relative">
                <img src={Clipboard} alt="" className="w-[50px] md:w-[70px] h-[45px] md:h-[60px]" />
                <img
                  src={copy}
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-[40px] md:h-[40px]"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <img data-aos="fade-up-left"
          data-aos-duration="1000" src={rightImg} alt="" className="relative z-20" />
          </div>
        </div>
      </div>
      <div className="absolute top-[60%] right-0 transform -translate-y-1/2 z-10">
        <img
          src={Ellipse}
          alt=""
          className=" w-auto h-[1200px]"
        />
      </div>
      <SlideBanner />
    </div>
  );
};

export default Tokenomices;
