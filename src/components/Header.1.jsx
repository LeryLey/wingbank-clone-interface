import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <header className="bg-main flex justify-center items-center px-4 py-3">
      <div className="flex">
        <ul className="flex gap-3">
          <Link>
            <li className="list">News</li>
          </Link>
          <Link>
            <li className="list">Promotions</li>
          </Link>
          <Link>
            <li className="list">Careers</li>
          </Link>
          <Link>
            <li className="list">About</li>
          </Link>
          <Link>
            <li className="list">Csr</li>
          </Link>
        </ul>
        <div className="flex items-center ml-3">
          {/* search  */}
          <button
            onClick={() => setSearch(!search)}
            className="text-white text-xl hover:text-gray-100"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>
          <div
            className={
              !search
                ? "absolute w-full left-0 flex justify-center items-center h-0 top-0 bg-main overflow-hidden opacity-0 duration-500 ease-out"
                : "absolute w-full left-0 flex justify-center items-center h-full top-0 bg-main overflow-hidden opacity-100 duration-500 ease-out"
            }
          >
            <div>
              <h2 className="text-2xl text-gray-100 mb-3">
                Search more information{" "}
              </h2>
              <input
                type="search"
                name="search"
                className="w-96 bg-transparent border-b-2 border-gray-200/50 focus:border-gray-200 duration-300 outline-none px-2 py-1 text-gray-100/60 text-2xl "
              />
            </div>
            <button
              onClick={() => setSearch(!search)}
              className="absolute right-4 top-4 text-white hover:text-red-500 text-2xl duration-300"
            >
              <ion-icon name="close"></ion-icon>
            </button>
          </div>
          {/* language */}
          <select className="outline-none rounded px-2 py-1 ml-3">
            <option value="kh" selected className="bg">
              Khmer
            </option>
            <option value="en">English</option>
          </select>
          internet bank
        </div>
      </div>
    </header>
  );
};
