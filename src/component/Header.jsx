import { useState } from "react";
import logo from "../assets/Branding.png";
import twitter from "../assets/twitter Button.png";
import telegram from "../assets/telegram Button.png";
import menu from "../assets/twitter Button (1).png";
import { Link } from "react-scroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-5 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1315px] ">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src={logo} alt="" className="w-auto h-[38px] md:h-[60px]" />
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              to="mission"
              smooth={true}
              duration={500}
              className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              to="roadmap"
              smooth={true}
              duration={500}
              className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              to="tokenomics"
              smooth={true}
              duration={500}
              className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
            >
              Tokenomics
            </Link>
          </li>
        </ul>
        <ul className="flex items-center hidden space-x-6 lg:flex">
          <li>
            <a
              href="https://x.com/HHamster20?s=09"
              className=""
              aria-label="twitter"
              title="twitter"
            >
              <img src={twitter} alt="" className="w-auto h-[60px]" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/happyhamster20"
              className=""
              aria-label="telegram"
              title="telegram"
            >
              <img src={telegram} alt="" className="w-auto h-[60px]" />
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={menu} alt="" className="w-auto h-[30px]" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-[#FFFFB8] text-[#1B0E00] border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div></div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
                      >
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="mission"
                        smooth={true}
                        duration={500}
                        className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
                      >
                        Mission
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="roadmap"
                        smooth={true}
                        duration={500}
                        className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
                      >
                        Roadmap
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="tokenomics"
                        smooth={true}
                        duration={500}
                        className="text-[17.7px] tracking-wide transition-colors duration-200 hover:underline uppercase cursor-pointer"
                      >
                        Tokenomics
                      </Link>
                    </li>
                    <div className="flex justify-start items-center gap-4">
                      <li className="">
                        <a
                          href="https://x.com/HHamster20?s=09"
                          className=""
                          aria-label="twitter"
                          title="twitter"
                        >
                          <img
                            src={twitter}
                            alt=""
                            className="w-auto h-[50px]"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://t.me/happyhamster20"
                          className=""
                          aria-label="telegram"
                          title="telegram"
                        >
                          <img
                            src={telegram}
                            alt=""
                            className="w-auto h-[50px]"
                          />
                        </a>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
