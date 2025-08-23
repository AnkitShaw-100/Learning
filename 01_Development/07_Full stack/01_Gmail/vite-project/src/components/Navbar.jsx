import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Avatar from 'react-avatar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between mx-3 h-16 relative">
      {/* Left: Logo & Hamburger */}
      <div className="flex items-center gap-2 p-10">
        <button
          className="p-3 rounded-full hover:bg-gray-100 cursor-pointer md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <RxHamburgerMenu size={'20px'} />
        </button>
        <img className="w-8" src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"} alt="Gmail Logo" />
        <h1 className={`text-2xl text-gray-500 font-medium hidden md:block transition-opacity duration-200 ${mobileSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>Gmail</h1>
      </div>

      {/* Center: Search (desktop) */}
      <div className="hidden md:block flex-1 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-4">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size="24px" className="text-gray-700" />
          <input
            type="text"
            value=""
            readOnly
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>

      {/* Right: Icons (desktop) */}
      <div className="hidden md:block p-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="relative cursor-pointer">
            <Avatar size="40" round={true} />
          </div>
        </div>
      </div>

      {/* Mobile: Search & Icons */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          onClick={() => setMobileSearchOpen((prev) => !prev)}
          aria-label="Open search"
        >
          <IoIosSearch size="22px" className="text-gray-700" />
        </button>
        <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
          <Avatar size="32" round={true} />
        </div>
      </div>

      {/* Mobile: Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 flex flex-col md:hidden animate-fade-in">
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-left">
            <FaRegQuestionCircle size={"20px"} />
            <span>Help</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-left">
            <IoSettingsOutline size={"20px"} />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-left">
            <PiDotsNineBold size={"20px"} />
            <span>More</span>
          </button>
        </div>
      )}

      {/* Mobile: Search Bar Overlay */}
      {mobileSearchOpen && (
        <div className="fixed left-0 top-16 w-full bg-white shadow-lg z-[60] flex items-center px-4 py-3 md:hidden animate-fade-in border-b border-gray-200">
          <IoIosSearch size="22px" className="text-gray-700 mr-2" />
          <input
            type="text"
            value=""
            readOnly
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar
