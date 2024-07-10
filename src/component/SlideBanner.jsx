import l from "../assets/Logo (1).png";

const SlideBanner = () => {
  return (
    <div className="bg-[#FFFFB8] py-1 overflow-hidden">
      <ul id="slider" className="flex gap-[100px] animate-slide">
        <li className="flex justify-center items-center gap-3">
          <h3 className="text-[3vw] font-[800] text-[#1B0E00] ">
            Presale Starts Soon
          </h3>
          <img src={l} alt="Logo" className="w-auto h-[20px] md:h-14" />
        </li>
        <li className="flex justify-center items-center gap-3">
          <h3 className="text-[3vw] font-[800] text-[#1B0E00] ">
            Presale Starts Soon
          </h3>
          <img src={l} alt="Logo" className="w-auto h-[20px] md:h-14" />
        </li>
        <li className="flex justify-center items-center gap-3">
          <h3 className="text-[3vw] font-[800] text-[#1B0E00] ">
            Presale Starts Soon
          </h3>
          <img src={l} alt="Logo" className="w-auto h-[20px] md:h-14" />
        </li>
      </ul>
    </div>
  );
};

export default SlideBanner;
