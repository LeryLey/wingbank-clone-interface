import { Link } from "react-router-dom";
import { useState } from "react";
import { headerLink } from "../constants";
import FlagKhmer from "/src/assets/cambodia.jpg";
import FlagEnglish from "/src/assets/Flag_of_the_United_Kingdom.png";
const Header = () => {
  const [search, setSearch] = useState(false);
  const [language, setLanguage] = useState(false);
  return (
    <header className="bg-main flex justify-center items-center px-4 py-3">
      <div className="flex items-center">
        <ul className="flex gap-3">
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
        <div className="flex items-center gap-2">
          {/* search  */}
          <button
            onClick={() => setSearch(!search)}
            className="text-white text-xl hover:text-gray-100 ml-3 flex"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          {/* container search box  */}
          <div
            className={
              !search
                ? "absolute w-full left-0 flex justify-center items-center h-0 top-0 bg-main overflow-hidden opacity-0 duration-500 ease-out z-20"
                : "absolute w-full left-0 flex justify-center items-center h-screen top-0 bg-main overflow-hidden opacity-100 duration-500 ease-out z-20"
            }
          >
            <div>
              <h2 className="text-3xl text-gray-100 mb-5">
                Search more information
              </h2>
              <div className="relative w-96">
                <input
                  type="search"
                  name="search"
                  className="w-full bg-transparent border-b-2 border-gray-200/50 focus:border-gray-200 duration-300 outline-none p-1 pr-10 text-gray-100/60 text-2xl "
                />
                <button
                  onClick={() => setSearch(!search)}
                  className="absolute right-2 top-2 text-gray-300 hover:text-gray-100 text-2xl duration-300"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </div>
            <button
              onClick={() => setSearch(!search)}
              className="absolute right-4 top-4 text-gray-300 hover:text-gray-100 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-500/10  text-4xl duration-300"
            >
              <ion-icon name="close"></ion-icon>
            </button>
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
      </div>
    </header>
  );
};

export default Header;
