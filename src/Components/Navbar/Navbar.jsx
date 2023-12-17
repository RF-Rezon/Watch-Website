import React from "react";
import {
    HiMagnifyingGlass,
    HiMiniChevronDown,
    HiShoppingBag,
    HiUser,
} from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <div>
        <div
          id="base-nav"
          className="w-full h-[82.39px] bg-customBlue flex items-center justify-between px-8 fixed"
        >
          <div id="logo" className="h-full cursor-pointer flex items-center">
            <img src="/public/logo_1.png" alt="logo" />
          </div>
          <div
            id="options"
            className=" h-full flex items-center justify-between"
          >
            <ul className="flex items-center justify-between gap-x-7 text-lg font-semibold text-customGray uppercase tracking-widest">
              <li className="hover:text-customGold cursor-pointer">Home</li>
              <li>
                <div className="flex items-center justify-between  gap-x-2">
                  <p className="cursor-pointer hover:text-customGold">Shop</p>
                  <div className="w-3 mt-1">
                    <HiMiniChevronDown fill="#aaaaaa" />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between gap-x-2">
                  <p className="cursor-pointer hover:text-customGold">Pages</p>
                  <div className="w-3 mt-1">
                    <HiMiniChevronDown fill="#aaaaaa" />
                  </div>
                </div>
              </li>
              <li className="cursor-pointer hover:text-customGold">Contact Us</li>
            </ul>
          </div>
          <div id="links" className="flex items-center gap-x-6 h-full">
            <HiUser className="cursor-pointer w-5 h-5"  fill="#aaaaaa"/>
            <HiShoppingBag className="cursor-pointer w-5 h-5" fill="#aaaaaa" />
            <HiMagnifyingGlass className="cursor-pointer w-5 h-5" fill="#aaaaaa" />
            <span className="text-customGray text-lg font-semibold first-letter flex items-center">BD  <span className="w-3 mt-1">
              <HiMiniChevronDown fill="#aaaaaa" />
            </span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
