import logo from "../assets/Branding.png";
import twitter from "../assets/twitter Button.png";
import telegram from "../assets/telegram Button.png";

const Footer = () => {
  return (
    <div className="bg-[#361C00]">
      <div className="px-5 py-[26px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1315px] ">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo} alt="" className="w-auto h-[60px]" />
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase"
              >
                About us
              </a>
            </li>

            <li>
              <a
                href="/"
                aria-label="Mission"
                title="Mission"
                className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase"
              >
                Mission
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Roadmap"
                title="Roadmap"
                className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Tokenomics"
                title="Tokenomics"
                className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase"
              >
                Tokenomics
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-6 lg:flex">
            <li>
              <a href="/" className="" aria-label="twitter" title="twitter">
                <img src={twitter} alt="" className="w-auto h-[60px]" />
              </a>
            </li>
            <li>
              <a href="/" className="" aria-label="telegram" title="telegram">
                <img src={telegram} alt="" className="w-auto h-[60px]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mx-auto max-w-[1045px] pt-[30px] pb-[60px]">
        <p className="text-center text-[18px] Montserrat font-light leading-10 text-[#fffffff3] font-sans ">
          The information on the HappyHamster20 website is for informational
          purposes only and does not constitute financial, investment, or legal
          advice. Cryptocurrency investments involve a high degree of risk,
          including the potential loss of your entire investment. Always conduct
          your own research and consult with a qualified financial advisor
          before making any investment decisions.
        </p>
      </div>
      <div className="bg-[#200800]">
        <div className="px-5 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1315px]  flex justify-between items-center">
          <p className="text-[15px] font-normal">2024 by HappyHamster</p>
          <p className="text-[15px] Montserrat font-normal">
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
