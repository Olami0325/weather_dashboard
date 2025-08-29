import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import Logo from "../assets/Logo.png";
import Navbar from "./Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full justify-between items-center p-4 bg-sky-400 dark:bg-gray-800 text-white dark:text-gray-100 relative">
      <img src={Logo} alt="Logo" className="w-8" />

      {/* Desktop Navbar and ThemeToggle */}
      <div className="hidden md:flex items-center space-x-4">
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
    </header>
  );
}

export default Header;

// import { useState } from "react";
// import ThemeToggle from "./ThemeToggle";
// import { HiMenu, HiX } from "react-icons/hi";
// import { IoMdSunny } from "react-icons/io";
// import { IoMdMoon } from "react-icons/io";
// import Logo from "../assets/Logo.png";
// import Navbar from "./Navbar";

// function Header({ theme, toggleTheme }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className={`flex w-full justify-between items-center p-4 ${
//         theme === "dark"
//           ? "bg-gray-800 text-white"
//           : "bg-blue-500 text-white"
//       } relative`}
//     >
//       <img src={Logo} alt="Logo" className="w-8" />

//       {/* Desktop Navbar and ThemeToggle */}
//       <div className="hidden md:flex items-center space-x-4">
//         <Navbar />
//         <button onClick={toggleTheme} className="p-2 text-xl">
//           {theme === "light" ? (
//             <IoMdSunny className="text-yellow-300"/>
//           ) : (
//             <IoMdMoon className="text-gray-300" />
//           )}
//         </button>
//       </div>

//       {/* Mobile ThemeToggle and Hamburger*/}
//       <div className="flex md:hidden items-center space-x-2">
//         <button onClick={toggleTheme} className="p-2 text-xl">
//           {theme === "light" ? (
//             <IoMdSunny className="text-yellow-300"/>
//           ) : (
//             <IoMdMoon className="text-gray-800" />
//           )}
//         </button>
//         <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="w-full top-full max-w-xs absolute left-0 flex flex-col items-center space-y-4 py-4 md:hidden z-50  ">
//           <Navbar isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
