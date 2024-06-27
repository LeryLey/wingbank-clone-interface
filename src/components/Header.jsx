import { Link } from "react-router-dom";
import { useState } from "react";
import { headerLink } from "../constants";
import FlagKhmer from "/src/assets/cambodia.jpg";
import FlagEnglish from "/src/assets/Flag_of_the_United_Kingdom.png";
import Logo from "/src/assets/wb-logo-foot.png";
import { personal, business, wingBankApp, selfServices, support } from "../constants";
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
            <div>
              <div className="relative w-96 p-4 backdrop-blur-md bg-main shadow-md rounded-b-md">
                <input
                  type="search"
                  name="search"
                  placeholder="Search... "
                  className="w-full bg-transparent border-2 border-gray-200/50 focus:border-gray-200 duration-300 outline-none p-1 pr-10 text-gray-100 text-lg rounded-md placeholder:text-gray-300"
                />
                <button
                  onClick={() => setSearch(!search)}
                  className="absolute right-6 top-6  text-gray-300 hover:text-gray-100 text-2xl duration-300"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </div>
      
          </div>
          {/* language */}
          <button
            onClick={() => setLanguage(!language)}
            className="flex items-center bg-white px-2 py-px rounded-md "
          >
            {!language ? (
              <div className="flex items-center gap-1">
                <img
                  src={FlagKhmer}
                  alt="flag"
                  className="w-5 h-5 object-cover rounded-full  "
                />
                <span>ខ្មែរ</span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <img
                  src={FlagEnglish}
                  alt="flag"
                  className="w-5 h-5 object-cover rounded-full "
                />
                <span>English</span>
              </div>
            )}
          </button>
          {/* internet bank  */}
          <button className="text-white text-base  hover:text-gray-100 flex items-center gap-1 bg-blue px-2 py-px rounded-md">
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
              ? "absolute lg:hidden block top-full w-full h-0 left-0  overflow-auto bg-blue duration-500 ease-out"
              : "absolute lg:hidden block top-full w-full h-full left-0  overflow-auto bg-blue duration-500 ease-out"
          }
        >
          <div className="bg-white p-2 w-full flex items-center gap-3">
            <input
              type="text"
              placeholder="Search.."
              className="w-full text-lg bg-gray-200 px-2 py-2 rounded-md border-2 focus:border-blue duration-300 outline-none "
            />
            <button className="w-11 h-11 p-2 flex items-center justify-center bg-blue text-white rounded-full text-xl">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          {/* menu  */}
          <div className="bg-blue">

          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
