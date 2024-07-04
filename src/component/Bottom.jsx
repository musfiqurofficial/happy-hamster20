import topLeft from "../assets/hamster image 3.png";
import bottomLeft from "../assets/hamster image 1.png";
import topRight from "../assets/hamster image 4.png";
import bottomRight from "../assets/hamster image 2.png";

const Bottom = () => {
  return (
    <div className="mb-[100px] mt-[100px] mx-auto max-w-[940px] relative">
      <h2 className="text-[60px] text-center leading-[73px] uppercase tracking-[1%]">
        Spreading joy and financial freedom through innovative cryptocurrency
        solutions.
      </h2>
      <img src={topLeft} alt="" className="w-auto h-[130px] absolute -top-[70px] -left-20" />
      <img src={bottomLeft} alt="" className="w-auto h-[100px] absolute -bottom-[10px] left-[100px]" />
      <img src={topRight} alt="" className="w-auto h-[80px] absolute top-[30px] -right-[30px]" />
      <img src={bottomRight} alt="" className="w-auto h-[150px] absolute -bottom-[30px] -right-[30px]" />
    </div>
  );
};

export default Bottom;
