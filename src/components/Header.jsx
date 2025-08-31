import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.png";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" w-full  bg-sky-400 dark:bg-gray-800 text-white dark:text-gray-100 shadow-md relative">
      <div className="max-w-[540px] mx-auto px-4 py-3 flex justify-between items-center lg:max-w-full lg:px-8">
         <h1 className="text-xl font-bold  ">
          Weather Dashboard
        </h1>
         {/* Desktop Navbar and ThemeToggle */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6 lg:ml-auto">
        <Navbar />
        <ThemeToggle />
      </div>

      {/* Mobile ThemeToggle and Hamburger*/}
      <div className="flex md:hidden items-center space-x-2">
        <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
        <ThemeToggle />
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="w-full top-full max-w-xs absolute left-0 flex flex-col items-center space-y-4 py-4 md:hidden z-50 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-b-lg shadow-lg  ">
          <Navbar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
        </div>
      )}
      </div> 
    </header>
  );
}

export default Header;

