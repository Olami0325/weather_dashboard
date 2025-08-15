import React from "react";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <img src="#" alt="Logo" className="w-16" />
      <Navbar />
      <ThemeToggle />
    </header>
  );
}

export default Header;
