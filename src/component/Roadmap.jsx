import Ellipse from "../assets/Ellipse 11.png";

const Roadmap = () => {
  const hamstermapData = [
    {
      id: 1,
      title: "PRESALE & MARKETING",
      description:
        "HappyHamster20 launches the presale. Early investors get a preferential price. The team uses part of the proceeds for a professional marketing strategy.",
    },
    {
      id: 2,
      title: "INCENTIVE & INVESTMENT",
      description:
        "Investors have the opportunity to acquire tokens during the presale. After the successful launch, one of the presale investors will receive a Tesla Model S as a prize.",
    },
    {
      id: 3,
      title: "TOKEN CLAIMING",
      description:
        "To ensure a fair start of HappyHamster20, presale investors can claim their tokens on the website simultaneously with the exchange listing.",
    },
    {
      id: 4,
      title: "DEX LAUNCH",
      description:
        "HappyHamster20 will be launched on PancakeSwap, one of the most popular decentralized exchanges. This provides the best trading environment and early liquidity.",
    },
    {
      id: 5,
      title: "PROVIDED LIQUIDITY",
      description:
        "The HappyHamster20 team will provide a substantial liquidity pool on PancakeSwap. To this end, 10% of the total token supply has been set aside.",
    },
    {
      id: 6,
      title: "FUTURE PROSPECTS",
      description:
        "The HappyHamster20 team plans to distribute airdrops to the community irregularly in the future.",
    },
  ];
  return (
    <div className="mb-[100px] mt-[100px] md:mt-[200px] relative">
      <div className="px-5 md:px-24 lg:px-0 mx-auto w-full max-w-[1300px]">
        <center>
          <button className="inline-flex text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0] mb-[60px] md:mb-[90px]">
            Roadmap
          </button>
          <h2 className="text-[32px] md:text-[80px] font-[800]">Hamstermap</h2>
        </center>
        <div className="mt-[40px] md:mt-[80px]">
          {hamstermapData.map((data) => (
            <div
              key={data.id}
              className="grid grid-cols-2 gap-[0px] border-t-2 border-[#FFFFB8] py-[40px]"
            >
              <p className="Montserrat text-[6px] md:text-[16px] lg:text-[24px] font-light leading-5 md:leading-[43px] ">
                {data.description}
              </p>
              <h4 className="text-[22px] md:text-[36px] lg:text-[60px] md:leading-[73px] text-end">
                {data.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[60%] transform -translate-y-1/2 left-0">
        <img src={Ellipse} alt="" className="w-auto h-[1200px] object-cover" />
      </div>
    </div>
  );
};

export default Roadmap;
