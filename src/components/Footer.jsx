import FooterLogo from "/src/assets/wb-logo-foot.png";
import { Link } from "react-router-dom";
import Sisa from "/src/assets/certification_sisa.png";
const Footer = () => {
  return (
    <div className="bg-main flex flex-col items-center ">
      <div className="flex md:flex-row flex-col items-center  md:items-start justify-center md:space-y-0 space-y-10 p-4 gap-0 md:gap-20">
        <div>
          <img src={FooterLogo} alt="footer-logo" className="w-52" />
          <div className="flex gap-2">
            <Link>
              <button className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </button>
            </Link>
            <Link>
              <button className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
            </Link>
            <Link>
              <button className="social-link">
                <ion-icon name="paper-plane"></ion-icon>
              </button>
            </Link>
            <Link>
              <button className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </button>
            </Link>
            <Link>
              <button className="social-link">
                <ion-icon name="logo-tiktok"></ion-icon>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center mb-2">
            <Link>
              <button className="border-r-2 mr-2 pr-2 text-white text-base font-medium">
                Disclaimer
              </button>
            </Link>
            <Link>
              <button className="border-r-2 mr-2 pr-2 text-white text-base font-medium">
                Term Of Use
              </button>
            </Link>
            <Link>
              <button className="border-r-2 mr-2 pr-2 text-white text-base font-medium">
                Cookies
              </button>
            </Link>
            <Link>
              <button className="border-r-2 mr-2 pr-2 text-white text-base font-medium">
                Privacy
              </button>
            </Link>
            <Link>
              <button className="border-r-2 mr-2 pr-2 text-white text-base font-medium">
                Gender Terms and Conditions
              </button>
            </Link>
          </div>
          <div className="w-full flex flex-col items-center justify-center ">
            <p className="w-96 sm:w-[500px] text-center text-gray-100">
              Wing Tower, Preah Monivong Blvd. corner Kampuchea Krom Blvd., Phum
              6, Sangkat Monourom, Khan Prampir Meakkakra, Phnom Penh. Swift
              code WIGCKHPP
            </p>
            <div className="flex justify-center my-3">
              <img src={Sisa} alt="sisa" className="w-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 p-4 w-full text-center">
        <p className="text-white">
          © 2023 Wing Bank (Cambodia) Plc
        </p>
      </div>
    </div>
  );
};

export default Footer;
