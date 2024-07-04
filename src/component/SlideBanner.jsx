import logo1 from "../assets/Logo (1).png";

const SlideBanner = () => {
  return (
    <div className="bg-[#FFFFB8] py-1">
      {/* Horizontal Scrollable loop scroll this li */}
      <ul className="">
        <li className="flex justify-center items-center gap-3">
          <h3 className="text-[23px] md:text-[60px] font-[800] text-[#1B0E00] ">
            Presale Starts Soon
          </h3>
          <img src={logo1} alt="" className="w-auto h-[20px] md:h-14" />
        </li>
      </ul>
    </div>
  );
};

export default SlideBanner;
