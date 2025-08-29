import { Link } from "react-router-dom";




function Navbar({ isOpen, closeMenu }) {
  
  return (
    <nav>
      {/* Desktop Menu */}
      <div className="hidden md:flex font-normal space-x-10 ">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        <Link to="/about" className="hover:underline">
          About
        </Link>

        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="w-full max-w-xs absolute top-0 left-0 right-0 bg-sky-500 flex flex-col items-center space-y-4 py-4 md:hidden shadow-md">
          <Link to="/" className="hover:underline text-white dark:text-gray-100" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="hover:underline text-white dark:text-gray-100" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="hover:underline text-white dark:text-gray-100" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
