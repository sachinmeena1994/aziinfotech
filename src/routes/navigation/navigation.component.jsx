import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { CiShop } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";

// Correct import for using SVG as a component
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import SideNav from "./SideNav";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="mx-auto text-white bg-[#3069B3] px-4 py-6 2xl:px-14  flex justify-between items-center relative">
        {/* Burger Menu */}

        {/* Logo */}
        <div>
          <Link to="/">
            {/* <CrwnLogo className="h-10 object-cover" alt="Satva Homes" /> */}
            <img
              className="h-12 object-cover"
              src="./tally_logo_white.svg"
              alt=""
            />
          </Link>
        </div>

        {/* Links */}
        <div className="w-[30%] hidden lg:flex justify-between items-center text-zinc-800 mx-10 p-3 text-md outline-none border-none rounded-md bg-white">
          <input
            className="w-[85%] outline-none border-none"
            type="text"
            placeholder="Search anything..."
          />
          <IoSearchOutline className="text-zinc-500 w-[15%] text-xl" />
        </div>

        {/* {Buttons} */}
        <div className=" flex items-center gap-8">
          <div className="hidden md:flex md:items-center text-white text-[18x] gap-10 font-medium">
            <Link to="/contact" className={` text-white text-lg  duration-200`}>
              Contact
            </Link>
            <Link to="/faq" className={` text-white text-lg duration-200`}>
              Faq
            </Link>
            <Link to="/cart" className={` text-white duration-200`}>
              <LuShoppingCart className="text-2xl" />
            </Link>
            <Link to="/shop" className={` text-white duration-200`}>
              <CiShop className="text-3xl" />
            </Link>
            <Link to="/login" className={` text-white duration-200`}>
              Login / Register
            </Link>
          </div>

          {/* <Link
            to="/login"
            className="hidden hover:text-zinc-100 hover:bg-blue-100 bg-zinc-200 pl-4 pr-6 py-[10px] rounded text-blue-500 duration-200 md:flex gap-2 lg:items-center"
          >
            <IoArrowForwardCircleOutline className="text-xl" />
            <h1 className="text-sm font-semibold">Login</h1>
          </Link> */}
          <button
            onClick={() => setIsActive(!isActive)}
            className="flex z-40 md:hidden flex-col items-center justify-center w-fit h-fit space-y-[5px]"
          >
            <div
              className={`h-[1.3px] w-5 bg-zinc-100 transition-transform duration-700 ease-in-out ${
                isActive ? "transform rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <div
              className={`h-[1.3px] w-5 bg-zinc-100 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`h-[1.3px] w-5 bg-zinc-100 transition-transform duration-700 ease-in-out ${
                isActive ? "transform -rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
        <AnimatePresence mode="wait">{isActive && <SideNav />}</AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
