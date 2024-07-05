import freeedom from "../assets/1djdji 1.png";
import tesla from "../assets/Hamster Tesla 1.png";
import charity from "../assets/CHARITY 1.png";
import EllipseRight from "../assets/Ellipse 10.png";

const Mission = () => {
  const missionCard = [
    {
      id: 1,
      image: freeedom,
      title: "FINANCIAL FREEDOM",
      description:
        "Achieve financial freedom with our monthly rewards! Earn $1,500 every month for 12 months. Be a part of HappyHamster20 and enjoy the peace of mind that comes with consistent financial support.",
    },
    {
      id: 2,
      image: tesla,
      title: "TESLA REWARD",
      description:
        "Invest early and drive away in style! All presale investors are automatically entered to win a Tesla Model S. Don’t miss out on this electrifying opportunity—join our presale now!",
    },
    {
      id: 3,
      image: charity,
      title: "CHARITY PROJECT",
      description:
        "Making a difference together! We’re donating $100,000 to impactful charity projects. Join us in spreading happiness and support to those in need. Your investment in HappyHamster20 helps create a brighter future for everyone.",
    },
  ];
  return (
    <div className="mb-[100px] mt-[100px] md:mt-[200px] relative">
      <div className="px-5 md:px-24 lg:px-0 mx-auto w-full max-w-[1300px]">
        <center>
          <button className="inline-flex text-[12px] md:text-[18px] font-normal button_background px-8 md:px-[50px] py-3 md:py-5 rounded-md md:border-[2px] border-[#FFEBA0] mb-[40px] md:mb-[90px]">
            Mission
          </button>
          <p className="text-[8px] md:text-[20px] font-normal leading-[15px] md:leading-[40px] mdd:px-4">
            Welcome to HappyHamster20, where happiness meets crypto! Our mission
            is simple: to spread joy and positivity through innovative rewards
            and impactful initiatives. Join us on this exciting journey as we
            transform the world of cryptocurrency, one happy moment at a time.
          </p>
        </center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[50px] mt-[40px] md:mt-[50px] px-10 md:px-0">
          {missionCard.map((data) => (
            <div
              key={data.id}
              className="button_background rounded-md border-[2px] border-[#FFEBA0] p-5 md:p-6 text-center"
            >
              <img
                data-aos="flip-up"
                data-aos-duration="1000"
                src={data.image}
                alt={data.title}
                className="rounded-md w-auto md:h-full md:max-h-[250px] mb-4 object-cover"
              />
              <h5 className="text-[14px] md:text-[25px] mb-2">{data.title}</h5>
              <p className="text-[8px] md:text-[12px] Montserrat leading-5 md:leading-[23px] px-3">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[100%] transform -translate-y-1/2 right-0">
        <img
          src={EllipseRight}
          alt=""
          className="w-auto h-[1200px] object-cover"
        />
      </div>
    </div>
  );
};

export default Mission;
