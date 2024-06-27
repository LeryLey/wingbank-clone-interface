import { Link } from "react-router-dom";
import { useState } from "react";
import { headerLink } from "../constants";
import FlagKhmer from "/src/assets/cambodia.jpg";
import FlagEnglish from "/src/assets/Flag_of_the_United_Kingdom.png";
import Logo from "/src/assets/wb-logo-foot.png";
import {
  personal,
  business,
  wingBankApp,
  selfServices,
  support,
} from "../constants";
const Header = () => {
  const [search, setSearch] = useState(false);

  const [language, setLanguage] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header className="bg-main flex lg:justify-center justify-between items-center px-4 py-3">
      <div className="flex lg:hidden">
        <img src={Logo} alt="logo" className="w-32" />
      </div>
      <div className="flex items-center">
        <ul className="lg:flex hidden gap-3">
          {headerLink.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              className="text-white text-base font-light hover:text-gray-100 "
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-2 ">
          {/* search  */}
          <button
            onClick={() => setSearch(!search)}
            className="text-white text-xl hover:text-gray-100 ml-3 lg:flex hidden"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          {/* container search box  */}
          <div
            className={
              !search
                ? "absolute w-full left-0 flex justify-center  h-0 top-0 bg-transparent overflow-hidden    duration-700 ease-out z-20"
                : "absolute w-full left-0 flex justify-center  h-full top-0 bg-transparent overflow-hidden   duration-700 ease-out z-20"
            }
          >
            <div className=" flex items-center gap-2 w-96 p-4 h-20 backdrop-blur-md bg-main shadow-md rounded-b-md">
              <div className="relative w-full">
                <input
                  type="search"
                  name="search"
                  placeholder="Search... "
                  className="w-full bg-transparent border-2 border-gray-200/50 focus:border-gray-200 duration-300 outline-none p-1 pr-10 text-gray-100 text-lg rounded-md placeholder:text-gray-300"
                />
                <button
                  onClick={() => setSearch(!search)}
                  className="absolute right-2 top-2  text-gray-300 hover:text-gray-100 text-2xl duration-300"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
              <button
                onClick={() => setSearch(!search)}
                className="  text-gray-300 hover:text-gray-100 text-3xl duration-300"
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
          {/* language */}
          <button
            onClick={() => setLanguage(!language)}
            className="flex items-center bg-gray-200 px-2 py-px rounded-md "
          >
            {!language ? (
              <div className="flex items-center gap-1">
                <img
                  src={FlagKhmer}
                  alt="flag"
                  className="w-5 h-5 object-cover rounded-full  "
                />
                <p className="text-blue">ខ្មែរ</p>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <img
                  src={FlagEnglish}
                  alt="flag"
                  className="w-5 h-5 object-cover rounded-full "
                />
                <p className="text-blue">English</p>
              </div>
            )}
          </button>
          {/* internet bank  */}
          <button className="text-white text-base  hover:text-gray-100 hidden sm:flex items-center gap-1 bg-blue px-2 py-px rounded-md">
            <ion-icon name="globe-outline"></ion-icon>
            <span>Internet Bank</span>
          </button>
        </div>
        {/* menu toggle */}
        <button
          onClick={() => setMenuToggle(!menuToggle)}
          className="text-white text-4xl ml-2 flex lg:hidden"
        >
          {!menuToggle ? (
            <ion-icon name="menu"></ion-icon>
          ) : (
            <ion-icon name="close"></ion-icon>
          )}
        </button>
        {/* responsive menu  */}
        <div
          className={
            !menuToggle
              ? "absolute lg:hidden block top-full w-full h-0 left-0  overflow-hidden bg-blue duration-500 ease-out"
              : "absolute lg:hidden block top-full w-full h-screen left-0  overflow-y-auto bg-blue duration-500 ease-out pb-40"
          }
        >
          <div className="bg-white p-2 w-full flex items-center gap-1">
            <input
              type="text"
              placeholder="Search.."
              className="w-full text-lg bg-gray-200 px-2 py-1 rounded-md border-2 focus:border-blue duration-300 outline-none "
            />
            <button className="w-10 h-10 p-3 flex items-center justify-center bg-blue hover:bg-main duration-300 text-white rounded-full text-xl">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          {/* menu  */}
          <div className="bg-blue p-4">
            <ul className="space-y-2">
              {/* dropdown personal */}
              <li className="group cursor-pointer">
                <a className="text-base font-medium text-white flex justify-between items-center ">
                  Person
                  <button className="rotate-90 duration-300 group-hover:rotate-0">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </button>
                </a>
                <ul className="h-0 overflow-hidden group-hover:h-96 duration-500 ease-out">
                  {personal.map((element, index) => (
                    <Link to={element.path} key={index}>
                      <li className="flex gap-2 mt-3 hover:bg-main py-1 rounded-md hover:px-3 duration-300">
                        <img
                          src={element.icon}
                          alt="icon"
                          className="w-7 h-7"
                        />
                        <div>
                          <h2 className="font-medium text-white ">
                            {element.title}
                          </h2>
                          <p className="text-sm text-white font-light ">
                            {element.txt}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
              {/* dropdown business */}
              <li className="group cursor-pointer">
                <a className="text-base font-medium text-white flex justify-between items-center ">
                  Business
                  <button className="rotate-90 duration-300 group-hover:rotate-0">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </button>
                </a>
                <ul className="h-0 overflow-hidden group-hover:h-[700px] duration-500 ease-out">
                  {business.map((element, index) => (
                    <Link to={element.path} key={index}>
                      <li className="flex gap-2 mt-3 hover:bg-main ca py-1 rounded-md hover:px-3 duration-300">
                        <img
                          src={element.icon}
                          alt="icon"
                          className="w-7 h-7"
                        />
                        <div>
                          <h2 className="font-medium text-white ">
                            {element.title}
                          </h2>
                          <p className="text-sm text-white font-light ">
                            {element.txt}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
              {/* dropdown wing bank app */}
              <li className="group cursor-pointer">
                <a className="text-base font-medium text-white flex justify-between items-center ">
                  Wing Bank App
                  <button className="rotate-90 duration-300 group-hover:rotate-0">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </button>
                </a>
                <ul className="h-0 overflow-hidden group-hover:h-[820px] duration-500 ease-out">
                  {wingBankApp.map((element, index) => (
                    <Link to={element.path} key={index}>
                      <li className="flex gap-2 mt-3 hover:bg-main ca py-1 rounded-md hover:px-3 duration-300">
                        <img
                          src={element.icon}
                          alt="icon"
                          className="w-7 h-7"
                        />
                        <div>
                          <h2 className="font-medium text-white ">
                            {element.title}
                          </h2>
                          <p className="text-sm text-white font-light ">
                            {element.txt}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
              {/* dropdown selfServices*/}
              <li className="group cursor-pointer">
                <a className="text-base font-medium text-white flex justify-between items-center ">
                  Self Services
                  <button className="rotate-90 duration-300 group-hover:rotate-0">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </button>
                </a>
                <ul className="h-0 overflow-hidden group-hover:h-[500px] duration-500 ease-out">
                  {selfServices.map((element, index) => (
                    <Link to={element.path} key={index}>
                      <li className="flex gap-2 mt-3 hover:bg-main ca py-1 rounded-md hover:px-3 duration-300">
                        <img
                          src={element.icon}
                          alt="icon"
                          className="w-7 h-7"
                        />
                        <div>
                          <h2 className="font-medium text-white ">
                            {element.title}
                          </h2>
                          <p className="text-sm text-white font-light ">
                            {element.txt}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
              {/* dropdown support*/}
              <li className="group cursor-pointer">
                <a className="text-base font-medium text-white flex justify-between items-center ">
                  Support
                  <button className="rotate-90 duration-300 group-hover:rotate-0">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </button>
                </a>
                <ul className="h-0 overflow-hidden group-hover:h-[300px] duration-500 ease-out">
                  {support.map((element, index) => (
                    <Link to={element.path} key={index}>
                      <li className="flex gap-2 mt-3 hover:bg-main ca py-1 rounded-md hover:px-3 duration-300">
                        <img
                          src={element.icon}
                          alt="icon"
                          className="w-7 h-7"
                        />
                        <div>
                          <h2 className="font-medium text-white ">
                            {element.title}
                          </h2>
                          <p className="text-sm text-white font-light ">
                            {element.txt}
                          </p>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
              <Link to={"/news"}>
                <li className="text-base font-medium text-white flex justify-between items-center ">
                  News
                </li>
              </Link>
              <Link to={"/promotions"}>
                <li className="text-base font-medium text-white flex justify-between items-center ">
                  Promotions
                </li>
              </Link>
              <Link to={"/careers"}>
                <li className="text-base font-medium text-white flex justify-between items-center ">
                  Careers
                </li>
              </Link>
              <Link to={"about-us"}>
                <li className="text-base font-medium text-white flex justify-between items-center ">
                  About Us
                </li>
              </Link>
              <Link to={"/csr"}>
                <li className="text-base font-medium text-white flex justify-between items-center ">
                  CSR
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
