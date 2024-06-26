import { Link } from "react-router-dom";
import Logo from "/src/assets/wing-full-logo.jpg";
import { personal, selfServices, support, wingBankApp } from "../constants";
import { business } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex justify-center shadow relative">
      <ul className=" items-center gap-3 md:flex hidden">
        <img src={Logo} alt="logo" className="w-56 mr-40 " />
        <li className="group py-10">
          <a className="list">
            Person
            <span className="flex text-blue text-xl">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </a>
          <div className="flex items-center justify-center h-0 group-hover:h-60 w-full absolute top-full bg-blue left-0  p-30 overflow-hidden duration-500 ease-out opacity-0 group-hover:opacity-100 shadow z-10">
            <ul className="grid grid-cols-3 gap-10 ">
              {personal.map((element, index) => (
                <Link key={index}>
                  <li className="flex  gap-2 hover:bg-white/10 p-2 rounded-md duration-300">
                    <img src={element.icon} className="w-7 h-7 mt-2" />
                    <div className="leading-[12px]">
                      <h2 className="text-white font-medium text-base ">
                        {element.title}
                      </h2>
                      <p className="text-white text-sm font-light w-72">
                        {element.txt}
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </li>
        <li className="group py-10">
          <a className="list">
            Business
            <span className="flex text-blue text-xl">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </a>
          <div className="flex items-center justify-center h-0 group-hover:h-[450px] w-full absolute top-full bg-blue left-0  p-30 overflow-hidden duration-500 ease-out opacity-0 group-hover:opacity-100 z-10">
            <ul className="grid grid-cols-3 gap-10 ">
              {business.map((element, index) => (
                <Link key={index}>
                  <a className="flex  gap-2 hover:bg-white/10 p-2 rounded-md duration-300">
                    <img src={element.icon} className="w-7 h-7 mt-2" />
                    <div className="leading-[12px]">
                      <h2 className="text-white font-medium text-base ">
                        {element.title}
                      </h2>
                      <p className="text-white text-sm font-light w-72">
                        {element.txt}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </li>
        <li className="group py-10">
          <a className="list">
            Wing Bank App
            <span className="flex text-blue text-xl">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </a>
          <div className="flex items-center justify-center h-0 group-hover:h-[500px] w-full absolute top-full bg-blue left-0  p-30 overflow-hidden duration-500 ease-out opacity-0 group-hover:opacity-100 z-10">
            <ul className="grid grid-cols-3 gap-10 ">
              {wingBankApp.map((element, index) => (
                <Link key={index}>
                  <a className="flex  gap-2 hover:bg-white/10 p-2 rounded-md duration-300">
                    <img src={element.icon} className="w-7 h-7 mt-2" />
                    <div className="leading-[12px]">
                      <h2 className="text-white font-medium text-base ">
                        {element.title}
                      </h2>
                      <p className="text-white text-sm font-light w-72">
                        {element.txt}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </li>
        <li className="group py-10">
          <a className="list">
            Self Services
            <span className="flex text-blue text-xl">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </a>
          <div className="flex items-center justify-center h-0 group-hover:h-96 w-full absolute top-full bg-blue left-0  p-30 overflow-hidden duration-500 ease-out opacity-0 group-hover:opacity-100 z-10">
            <ul className="grid grid-cols-3 gap-10 ">
              {selfServices.map((element, index) => (
                <Link key={index}>
                  <a className="flex  gap-2 hover:bg-white/10 p-2 rounded-md duration-300">
                    <img src={element.icon} className="w-7 h-7 mt-2" />
                    <div className="leading-[12px]">
                      <h2 className="text-white font-medium text-base ">
                        {element.title}
                      </h2>
                      <p className="text-white text-sm font-light w-72">
                        {element.txt}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </li>
        <li className="group py-10">
          <a className="list">
            Support
            <span className="flex text-blue text-xl">
              <ion-icon name="chevron-down"></ion-icon>
            </span>
          </a>
          <div className="flex items-center justify-center h-0 group-hover:h-40 w-full absolute top-full bg-blue left-0  p-30 overflow-hidden duration-500 ease-out opacity-0 group-hover:opacity-100 z-10">
            <ul className="grid grid-cols-3 gap-10 ">
              {support.map((element, index) => (
                <Link key={index}>
                  <a className="flex  gap-2 hover:bg-white/10 p-2 rounded-md duration-300">
                    <img src={element.icon} className="w-7 h-7 mt-2" />
                    <div className="leading-[12px]">
                      <h2 className="text-white font-medium text-base ">
                        {element.title}
                      </h2>
                      <p className="text-white text-sm font-light w-72">
                        {element.txt}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
