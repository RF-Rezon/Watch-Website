import React, { useState } from "react";
import {
  HiMagnifyingGlass,
  HiMiniChevronDown,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true); // Initially hidden
  const [isSmallHidden, setSmallIsHidden] = useState(true); // Initially hidden

  const handleMouseEnter = () => setIsHidden(false); // Show on hover
  const handleMouseLeave = () => setIsHidden(true); // Hide on un-hover

  const handleMouseEnterSmall = () => setSmallIsHidden(false); // Show on hover
  const handleMouseLeaveSmall = () => setSmallIsHidden(true); // Hide on un-hover
  return (
    <>
      <div className="z-50">
        <div
          id="base-nav"
          className="w-full h-[82.39px] bg-customBlue flex items-center justify-between px-8 relative"
        >
          <div id="logo" className="h-full cursor-pointer flex items-center">
            <img src="/logo_1.png" alt="logo" />
          </div>
          <div
            id="options"
            className=" h-full flex items-center justify-between"
          >
            <ul className="flex items-center justify-between space-x-10 text-lg font-medium text-customGray uppercase tracking-widest">
              <li className="hover:text-customGold cursor-pointer"><a href="/">Home</a></li>
              <li
                onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave}
                className="py-[26px]"
              >
                <div className="flex items-center justify-between  gap-x-2">
                  <p className="cursor-pointer hover:text-customGold">Shop</p>

                  <div className="w-3 mt-1">
                    <HiMiniChevronDown fill="#aaaaaa" />
                  </div>
                </div>
              </li>
              <li
                onMouseOver={handleMouseEnterSmall}
                onMouseOut={handleMouseLeaveSmall}
                className="py-[26px]"
              >
                <div className="flex items-center justify-between gap-x-2">
                  <p className="cursor-pointer hover:text-customGold">Pages</p>
                  <div className="w-3 mt-1">
                    <HiMiniChevronDown fill="#aaaaaa" />
                  </div>
                </div>
              </li>
              <li className="cursor-pointer hover:text-customGold">
              <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div id="links" className="flex items-center gap-x-6 h-full">
            <HiUser className="cursor-pointer w-5 h-5" fill="#aaaaaa" />
            <HiShoppingBag className="cursor-pointer w-5 h-5" fill="#aaaaaa" />
            <HiMagnifyingGlass
              className="cursor-pointer w-5 h-5"
              fill="#aaaaaa"
            />
            <span className="text-customGray text-lg font-bold first-letter flex items-center">
              BD
              <span className="w-3 mt-1">
                <HiMiniChevronDown fill="#aaaaaa" />
              </span>
            </span>
          </div>
        </div>

        {!isHidden && (
          <div
            className="flex items-center justify-center z-50 absolute top-14 w-full"
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          >
            <div className="grid place-items-start grid-cols-4 w-11/12 bg-customBlue border-2 border-white text-customGray mt-4 p-6">
              <div>
                <p className="pb-4 cursor-pointer text-lg hover:text-customGold">
                  Analog Watches
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">BigOwl</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Tipan</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Maxima</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Invicta</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Citizen</Link>
                </p>
              </div>
              <div>
                <p className="pb-4 cursor-pointer hover:text-customGold text-lg">
                  Automatic Watches
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Forsining</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Game Time</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Orent</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Hiles</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Seiko</Link>
                </p>
              </div>
              <div>
                <p className="pb-4 cursor-pointer hover:text-customGold text-lg">
                  Dress Watches
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Vestal</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Round Dial</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Hadley</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Roma</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Armitron</Link>
                </p>
              </div>
              <div>
                <p className="pb-4 cursor-pointer hover:text-customGold text-lg">
                  Mechanical Watches
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Gold Dial</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Faomis</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Classic</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Traditional</Link>
                </p>
                <p className="py-1 hover:text-customGold">
                  <Link to="#">Modern</Link>
                </p>
              </div>
            </div>
          </div>
        )}
        {!isSmallHidden && (
          <div
            className="z-50 uppercase absolute top-14 bg-customBlue border-2 border-white text-customGray p-2 w-48 left-1/2 mt-4"
            onMouseOver={handleMouseEnterSmall}
            onMouseOut={handleMouseLeaveSmall}
          >
            <p className="hover:text-customGold border-b text-sm p-3 border-blue-50">
              <Link to="#">About Us</Link>
            </p>
            <p className="hover:text-customGold border-b text-sm p-3 border-blue-50">
              <Link to="#">Blog</Link>
            </p>
            <p className="hover:text-customGold text-sm p-3 border-blue-50">
              <Link to="#">Faq</Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
