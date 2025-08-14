import React from "react";
import ThemeToggle from "./ThemeToggle";


function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <img src="#" alt="Logo" className="w-16"/>
      <ul className="flex space-x-10 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <ThemeToggle />
      
    </header>
  );
}

export default Header;
